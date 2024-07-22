# project5
repository for Project 5 on canvas


LAB 9.18:

In this lab, you will use regular expressions with JavaScript to validate a user registration form. Error messages will be displayed at the bottom of the form, as shown below. Step 1: Inspect the project
The project contains HTML, CSS, and JavaScript files. The register.js file registers a click event handler for the Register button that prevents the form from submitting. The event handler calls checkForm() to perform data validation.

Step 2: Implement checkForm()
Complete checkForm() in register.js to verify that the user-provided information is valid.

If form validation errors exist:

Display the formErrors <div> by removing the hide class.
Display each of the associated error messages in the formErrors <div> using an unordered list. The error message must be displayed in the order the validation is performed, following the order specified below.
Add the error class to each <input> element with invalid input.

If no form validation errors exist:

Hide the formErrors <div> by adding the hide class.
Remove the error class from all test, email, and password <input> elements.

Perform the following form validations in the order provided and display all error messages that apply:

Ensure a full name with a length greater than or equal to 1 was provided.
Otherwise, display "Missing full name."
Ensure that an email address was provided and that the email address matches the regular expression:
/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/
Otherwise, display "Invalid or missing email address."
Ensure the password has 10 to 20 characters.
Otherwise, display "Password must be between 10 and 20 characters."
Ensure the password contains at least one lowercase character (use a regular expression).
Otherwise, display "Password must contain at least one lowercase character."
Ensure the password contains at least one uppercase character (use a regular expression).
Otherwise, display "Password must contain at least one uppercase character."
Ensure the password contains at least one digit (use a regular expression).
Otherwise, display "Password must contain at least one digit."
Ensure the password and confirmation password match.
Otherwise, display "Password and confirmation password don't match."
Test your solution by typing invalid data in each input and pressing the Register button. Verify a red border surrounds the input with invalid data and the correct error message displays.

LAB 9.19:

 this lab, you will create three JavaScript classes for a webpage that allows a super hero and villain to battle, as shown below. Step 1: Inspect the project
The project contains HTML, CSS, and two JavaScript files. The index.html file contains two drop-down widgets listing the names of super heroes and super villains. A paragraph with ID winner is empty but will display the winner of a battle between the selected hero and villain.

The index.js file contains the following:

Two constants, heroes and villains, that contain a list of SuperHero and SuperVillain objects.

A registerHandlers() function registers change event handlers for the two drop-down widgets.

A selectionChanged() function that is called when a hero or villain is selected. The function calls the selected hero's battle() method with the selected villain and displays the winner's alias in the winner paragraph.

The hero.js file is empty.

Step 2: Create three classes
Add the following to hero.js:

Create a SuperHuman class with properties name and powerLevel and a constructor that has name and powerLevel parameters.

Create SuperHero and SuperVillain classes that extend the SuperHuman class. Both classes should have a constructor that has name, alias, and powerLevel parameters, and the constructor should call the parent class's constructor with the given name and powerLevel.

Add a battle() method to the SuperHero class that has a SuperVillain parameter. battle() should return true if the hero's powerLevel is >= the villain's powerLevel, false otherwise.

Add a getEvilChuckle() method to the SuperVillain class that returns the string "Ha ha ha!".

When the modifications are complete, the webpage will show the winner between the selected hero and villain.


LAB 9.20:

The given a webpage allows the user to add items to a grocery list. A Clear button clears the list. The list is also cleared if the page is reloaded. In this lab, you will store the list using localStorage so reloading the page does not clear the list. Step 1: Inspect the project
The project contains HTML, CSS, and JavaScript files. The groceries.js file contains several completed functions:

The DOMContentLoaded event handler registers click handlers for the Add and Clear buttons, calls loadList() to load items from localStorage into the groceryList array, and calls showItem() to display the items in groceryList.

enableClearButton() enables or disables the Clear button.

showItem() displays a single item at the end of an ordered list.

addBtnClick() calls showItem() to display the item, adds the item to the groceryList array, and calls saveItem() to save the item to localStorage.

clearBtnClick() clears the groceryList array and removes all the items from the ordered list.

Step 2: Complete the functions
Complete the JavaScript functions below so the list is restored when the page is reloaded:

loadList() should load a grocery list from localStorage and return an array containing each item. Assume the list is stored as a single comma-delimited string. Ex: The list stored as "orange juice,milk,cereal" is returned as the array ["orange juice", "milk", "cereal"]. An empty array should be returned if localStorage does not contain a grocery list.

saveList() should save the given groceryList array to localStorage as a single comma-delimited string. Ex: The array ["orange juice", "milk", "cereal"] should be saved as the string "orange juice,milk,cereal".

clearList() should remove the grocery list from localStorage.

All three functions should use the localStorage item called "list".

LAB 9.21:

The given webpage displays a canvas with gray background and brown ground. In this lab, you will write the necessary JavaScript to create the snowman scene shown below. Step 1: Inspect the project
The index.html file contains a single 300 x 300 canvas. 

The snowman.js file contains three completed functions:

The DOMContentLoaded event handler calls drawGround(), drawSnowText(), drawSnowman(), and drawSnowflakes() to create the snowman scene.

drawGround() displays brown ground under a light gray sky.

drawSnowflakes() calls drawSingleFlake() 100 times to display 100 snow flakes in randomly chosen locations.

Step 2: Implement drawSnowText()
The drawSnowText() function should display the string "SNOW" using:

font: 80px Verdana
textAlign: center
textBaseline: top
fillStyle: blue
fillText()to display the text at coordinate (canvas.width / 2, 10)
Step 3: Implement drawSnowman()
The drawSnowman() function should display three white circles:

Bottom circle: arc() centered at (150, 200) with radius 50 that begins at 0 and ends at Math.PI * 2
Middle circle: arc() centered at (150, 120) with radius 40 that begins at 0 and ends at Math.PI * 2
Top circle: arc() centered at (150, 60) with radius 25 that begins at 0 and ends at Math.PI * 2
All three circles should use fillStyle white and be displayed with the fill() function
Step 4: Implement drawSingleFlake()
The drawSingleFlake() function should display a single white snowflake in the shape of a diamond using the constant flakeSize:

Start a new path
Move to the coordinate (x, y)
Draw a line to (x + flakeSize / 2, y + flakeSize / 2), then to (x, y + flakeSize), and then to (x - flakeSize / 2, y + flakeSize / 2)
Use the fillStyle #eee
Use fill() to display the diamond
Submit your solution when the JavaScript functions successfully render the snowman scene. For the automated testing to work correctly, the context properties and functions above must be set or called in the order specified.

LAB 9.22:

The current webpage displays a canvas with four frog images all pointing up. In this lab, you will write the necessary JavaScript that shows the frogs pointing up, down, left, and right as shown below. Step 1: Inspect the project
The project contains HTML, image, and JavaScript files. The index.html file contains a 600 x 600 canvas. An <img> element uses inline CSS to hide the frog.png image.

The frog.js file contains two functions:

The load event handler calls drawFrog() four times with different canvas coordinates and directions.

drawFrog() is only partially implemented and currently displays a frog facing up on the canvas at the given (x, y) coordinate.

Step 2: Implement drawFrog()
Complete the drawFrog() function to draw the frog facing down, left, or right, depending on the direction parameter. Use the canvas context methods translate(), rotate(), and drawImage() to perform the following:

Translate the canvas origin from (0, 0) to the center of the frog image, which is (x + frogImg.width / 2, y + frogImg.height / 2)
Rotate 90 degrees clockwise to draw the frog facing right, 90 degrees counterclockwise to face left, and 180 degrees to face down
Translate the origin back to (0, 0)
Draw the frog image
Note: Incorrect translation may cause the frog to be drawn off the canvas where the frog can't be seen.

LAB 9.23: 

The webpage displays a growing orange circle when the Show Circle button is clicked. In this lab, you will create callbacks for a Promise object that shows a text message inside the circle, as show below. Step 1: Inspect the project
The project contains HTML, CSS, and JavaScript files:

index.html contains a single button for starting the circle animation.

styles.css file defines a CSS transition that animates the circle's size increase over 2 seconds.

circle.js file contains a click event handler showCircleClick() for the Show Circle button that calls showCircle() to display the orange circle. The showCircle() function returns a Promise object that may be fulfilled or rejected.

The promise is fulfilled in one second if showCircle() is not called a second time before the second elapses.
The promise is rejected if showCircle() is called a second time before the second elapses.
Step 2: Implement showCircleClick()
Modify the showCircleClick() to call showCircle() and handle the fulfilled or rejected callbacks using the returned Promise's then() method.

If the promise is fulfilled, the <div> containing the circle is passed to the callback function. The message "Ta da!" should be added to the <div>'s inner HTML.
If the promise is rejected, an error message is passed to the callback function. The error message should be displayed using alert().
If your modifications are written correctly, you should see the "Ta da!" message appear one second after the Show Circle button is clicked. If you click Show Circle twice quickly, you should see the error message appear in the alert dialog box, as shown below.

LAB 9.24:

In this lab, you will use a web API to fetch and display quotes on a selected topic, as shown below. A quote web API returns a collection of randomly selected quotes related to a given topic. The API supports two query string parameters:

topic - Specifies the requested topic. Valid topics are love, motivational, wisdom, and humor.
count - Specifies the number of quotes requested and must be a number from 1 to 5. The fetchQuotes() function in quote.js is called with the selected topic and count when the Fetch Quotes button is clicked. Currently, fetchQuotes() calls showAnonymousQuotes() to display example quotes in an ordered list.

Modify fetchQuotes() to use the Fetch API to request quotes from the quote web API. Call fetch() with an appropriate URL based on the topic and count parameters. Then display the quotes in an ordered list. Each quote should be followed by a space, a dash, a space, and the source. You may find it helpful to repurpose the code in showAnonymousQuotes() to create the quote list.

Ex: If the user chooses "love" and "3" and presses Fetch Quotes, fetchQuotes() should place the returned quotes in an ordered list inside the <div>

LAB 10.10: 

In this lab, you will use jQuery to implement a currency conversion calculator that parses a JSON-formatted string containing exchange rates from US dollars (USD) to several other currencies. The exchange data is provided by OpenExchangeRates.org. Step 1: Implement ready event handler
Create a jQuery ready event handler that updates the options within the <select> element with ID toCurrency such that:

The first <option> element is: <option value="" disabled selected>Select currency</option>
Only the currencies listed in the rates property of the exchangeRates object should appear in the dropdown
The <option> element for each currency should show the full currency name followed by the currency's abbreviation in parentheses
Ex: Canadian Dollar (CAD)
The value for each <option> element should be the currency abbreviation
The allCurrencies object in the provided JavaScript template provides a mapping from all possible abbreviations to full currency name
Once this step is completed, the "Select currency" dropdown should display six options. Step 2: Implement change event handler
Create a jQuery change event handler for the select dropdown that:

Converts the user-entered US dollars to the selected currency using the rates listed in the exchangeRatesobject. Display the converted currency with two decimal digits.
Ex: If the user-entered US dollars is 100.00, Canadian Dollar (CAN) is elected, and the exchange rate is "CAD": 1.316853, the resulting converted currency is 131.69
Displays the resulting converted currency by updating the read-only <input> element with ID resultCurrency
Updates the associated label for resultCurrency to the selected currency's full currency name, currency abbreviation in parentheses, and colon
Ex: Canadian Dollar (CAN):
Once this step is completed, the conversion from US dollars to the selected currency will happen as soon as the currency is selected from the dropdown menu.

Step 3: Implement click event handler
Create a jQuery click handler for the Update Rates button that:

Updates the exchangeRates object by calling JSON.parse() with the JSON string provided in the <textarea> element with ID exchangeRates
Updates the select dropdown such that only the currencies listed in the rates property of the updated exchangeRates object appear in the dropdown
Resets the read-only <input> element with ID resultCurrency to display "---.--"
Resets the associated label for resultCurrency to display "To Currency ():"
Once this step is completed, clicking the Update Rates button should load the JSON from the textbox. Then the dropdown menu will show some new currency options.

LAB 10.11:


In this lab, you will use jQuery and a web API to fetch and display quotes on a selected topic, as shown below. A quote web API returns a collection of randomly selected quotes related to a given topic. The API supports two query string parameters:

topic - Specifies the requested topic. Valid topics are love, motivational, wisdom, and humor.
count - Specifies the number of quotes requested and must be a number from 1 to 5. The fetchQuotes() function in quote.js is called with the selected topic when the Fetch Topic button is clicked. Currently, fetchQuotes() displays example quotes in an ordered list inside the <div> with ID quotes.

Modify fetchQuotes() to use $.get() or $.ajax() to request quotes from the quote web API. Indicate that the request is expecting a JSON response. Display the returned quote in the ordered list. Each quote should be followed by a space, a dash, a space, and the source.

Ex: If the user chooses "love" and "3" and presses Fetch Quotes, the returned quotes and sources should be displayed in an ordered list inside the <div>:

LAB 10.12:

In this lab, you will implement a "to-do" list in jQuery. The user will be able to add new items to the to-do list, click the up (↑) and down (↓) buttons to move items up and down the list, and click the done (✓) button to remove list items. Step 1: Examine the JavaScript
The given todo.js file implements three functions:

ready event handler - Registers addBtnClick() as the click callback function for the Add button and calls addBtnClick() if the user hits Enter while typing a new item.

addBtnClick() - Extracts the text typed into the text box and calls addItem() to add the new item.

addItem() - Creates a list item for the newly entered item that contains the item text, and creates up, down, and done buttons. Clicking the up and down buttons calls moveItem(), and clicking the done button calls removeItem(). The function is incomplete.

Step 2: Modify addItem()
Modify addItem() to use the jQuery append() method. First, append $upButton, $downButton, $doneButton to $newItem to create a single <li> element containing the item text and three buttons. Then append $newItem to the item list (<ol> element). 

After the modifications are complete, the user should be able to add new items to the end of the list.

Step 3: Implement moveItem()
Modify moveItem() to move the <li> at the given fromIndex to the given toIndex. Ex: moveItem(0, 1) should move the first <li> (at index 0) to the second <li> (at index 1). Use the jQuery methods detach(), insertBefore(), and insertAfter() where appropriate. moveItem() should ignore nonsensical movements, like moving the first item up or the last item down.

After the modifications are complete, the user should be able to click the up button (↑) to move the item up one spot and the down button (↓) to move the item down one spot.

Step 4: Implement removeItem()
Modify removeItem() to remove the <li> at the given index. Ex: removeItem(2) should remove the third <li> (at index 2). Use the jQuery remove() method to remove the appropriate <li>.

After the modifications are complete, the user should be able to click the done button (✓) to remove the item from the list.

LAB 10.13:

In this lab, you will add animations to a Memory game using jQuery. The user must click two cards to see what is underneath. If the selected cards match, the cards are left face-up. The goal is to find all matching cards. The New Game button starts a new game. Step 1: Inspect the JavaScript
The given memory.js file implements several functions:

ready event handler - Adds <div> elements to the card grid and adds click event handlers to each card that calls clickCard() with an index that indicates which card is clicked. The global $cardDivs array is initialized with all the div elements.

clickCard() - Calls showCard() to display the first and second cards selected and calls hideCard() if the two selected cards do not match.

showCard() - Shows a card by setting the card's inner HTML and color and adding the card-visible class.

hideCard() - Hides a card by removing the card's inner HTML and removing the card-visible class.

showMatch() - Currently does nothing.

newGame() - Starts a new game by randomizing and hiding all the cards.

Step 2: Animate showing a card
Make the following modifications to animate the card flipping over:

In the ready event handler, call the jQuery method hide() to hide the $game before the for loop.

Modify showCard() so the card appears to flip over and display face-up:

Call slideUp() to slide up the back side of the card in 200 ms.

Then set the card's inner HTML and color, and add the card-visible class.

Finally, call slideDown() to have the card slide back down in 200 ms, revealing the card's symbol.

You may find the jQuery method queue() helpful to perform all the operations in the correct order. Step 3: Animate hiding a card
Modify hideCard() so the card appears to flip over and display face-down:

Call the jQuery method slideUp() to slide up the face side of the card in 200 ms.

Then set the card's inner HTML to an empty string and remove the card-visible class.

Finally, call the jQuery method slideDown() to have the blue side of the card slide back down in 200 ms.

You may find the jQuery method queue() helpful to perform all the operations in the correct order.

Step 4: Animate matching cards
Modify showMatch() to animate two matching cards. Use setTimeout() to delay for half a second, then call the jQuery method animate() to make the two matching cards' symbol fonts grow in size from 75px to 100px in 200 milliseconds, then back down to 75px in 200 milliseconds. Step 5: Animate starting a new game
Modify newGame() so clicking the New Game button fades out and in the game board:

Call fadeOut() to fade out the div with ID cardGrid.

Randomize the cards.

Hide the cards.

Call fadeIn() to make the cardGrid div visible again.

Use "normal" speed for both animations. Make sure the cards are not hidden until the fade out operation is completed.

After all modifications are complete, the cards will animate when being flipped, and two matching cards' symbols will grow and shrink in size when first matched. All the cards will fade in and out when a new game is started.






