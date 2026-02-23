1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans:

getElementById:--

The method to find a specific element in an HTML page by its ID is called getElementById. It always returns only one unique element.

getElementsByClassName:--

The method to find one or more elements in an HTML page by their Class Name is called getElementsByClassName. It displays all elements of the same class as a list.

querySelector:--

The method of finding the first element on a page that matches a condition using a CSS Selector ( .class, #id or tag) is called querySelector.

querySelectorAll:--

The method of finding all the elements on the page that match the conditions in a list (NodeList) using CSS Selector is called querySelectorAll.




2. How do you create and insert a new element into the DOM?

ans:

i. Create: let item = document.createElement("div"); (A 'div' is created)

ii. Arrange: item.innerText = "New text"; (Text is placed inside)

iii. Append: document.body.appendChild(item); (Insert inside the body)




3. What is Event Bubbling? And how does it work?

ans:

Event bubbling is a JavaScript process where when an event (such as a click) occurs on an element, that event gradually spreads from that element to all parent elements above it.

i. Target element: The event first fires on the specific button or div you clicked on.

ii. Upward travel: The event then goes to the parent element immediately above it.

iii. Continuation: This continues until it reaches the topmost html and document object.




4. What is Event Delegation in JavaScript? Why is it useful?

ans:

Event Delegation is a JavaScript technique where, instead of adding event listeners to each individual child element, a single event listener is added to their common parent element.

useful:

i. Memory Efficiency

ii. Dynamic Elements

iii. Code Management 

etc




5. What is the difference between preventDefault() and stopPropagation() methods?

ans:

preventDefault() is a JavaScript method used to disable the normal or default behavior of an HTML element.

stopPropagation() is a JavaScript method that stops the event bubbling process.
