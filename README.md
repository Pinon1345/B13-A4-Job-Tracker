1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   
**Ans:** getElementById is use when we select only one element through it's ID, getElementsByClassName is use when select all elements with the same class, querySelector is use when want to select the first element from index.html file and last one querySelectorAll is use when we want to select all elements in the html file.

2. How do you create and insert a new element into the DOM?
   
**Ans:** const div = document.createElement ("div");
div innterText = "Hello Everyone";
document.appendChild(div);

3. What is Event Bubbling?
   
**Ans:** Event Bubbling means an event start from the target element and then moving like bubble to reach the parent element.
Such as: Button - div - img - h1- p - document

4. What is Event Delegation? Why useful?
   
**Ans:** Event Delegation means adding an event listener to a parent element instead of many child elements.
**Useful:**
* Better Performance,
* Less codes
* Works for dynamically added elements etc.

5. What is the difference between preventDefault() and stopPropagation() methods?
   
**Ans:** There are many difference between them. Some are given:-
~preventDefault() is work for stops the default browser action.
~stopPropagation() is work for stops event bubbling to parent elements.    
