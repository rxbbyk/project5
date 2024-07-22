$(function () {
   $("#fetchQuotesBtn").click(function () {
      // Get selected topic and count from drop-down lists
      const selectedTopic = $("#topicSelection option:selected").val();
      const selectedCount = $("#countSelection option:selected").val();
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use $.get() or $.ajax()
   if (!topic || !count || isNaN(count) || count < 1 || count > 5) {
      $("#quotes").html("Invalid topic or count");
      return;
   }
   const apiURL = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;
   
   $.get(apiURL, function (data) {
      if (Array.isArray(data)) {
         let html = "<ol>";
         data.forEach(quote => {
            html += `<li>${quote.quote} - ${quote.source}</li>`;
         });
         html += "</ol>";
         $("#quotes").html(html);
      } else if (data.error) {
         $("#quotes").html(data.error);
      }
   }, "json")
      .fail(function () {
         $("#quotes").html("Failed to fetch quotes. Please try again.");
      });
}