window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function showAnonymousQuotes(count) {
   let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      html += `<li>Quote ${c} - Anonymous</li>`;
   }
   html += "</ol>";

   document.querySelector("#quotes").innerHTML = html
}

function fetchQuotes(topic, count) {   
   // TODO: Modify to use Fetch API
   const url = `https://wp.zybooks.com/quotes.php?topic=${encodeURIComponent(topic)}&count=${encodeURIComponent(count)}`;

   fetch(url)
   .then(response => {
      if (!response.ok) {
         throw new error("Network response was not ok.");
      }
      return response.json();
   })
   // TODO: Remove the call to showAnonymousQuotes()
   .then(data => {
      if (data.error) {
         document.querySelector("#quotes").innerHTML = data.error;
      } else {
         let html = "<ol>";
         data.forEach(quote => {
            html += `<li>${quote.quote} - ${quote.source}</li>`;
         });
         html += "</ol>";
         document.querySelector("#quotes").innerHTML = html;
      }
   })
   .catch(error => {
      document.querySelector("#quotes").innerHTML = error.message;
   });
}
