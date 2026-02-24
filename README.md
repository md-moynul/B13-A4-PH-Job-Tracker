1. What is the difference between getElementById, getElementsByClassName, and querySelector / 		querySelectorAll?
Ans: Below is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
	 ** getElementById :getElementById is used to select a specific element. It returns only one element.
		example--> document.getElementById("idName")

	** getElementByClassName :Multiple elements are selected using getElementById. It allows you to get multiple elements and return an HTMLCollection.
		example--> document.getElementByClassName("className")

	** querySelector : It uses a CSS selector to select an element (e.g., #idName for an id, .class for a class and tagName) and returns only the first matching element.
		example--> document.querySelector("#idName") / document.querySelector(".className") / document.querySelector('div')

	** querySelectorAll : It uses a CSS selector to select an element (e.g. #idName for id, .class for class and tagName) and returns all matching elements as a NodeList.
	for example--> document.querySelectorAll("#idName") / document.querySelectorAll(".className") / document.querySelector('div')
2. How do you create and insert a new element into the DOM?
Ans: To create an element in DOM, first, where should I place this element? I will select the parent of its location. Then I will create the element using createElement("tagName"). Finally, I will place the element in the parent using appendChild.
	example
		** Adding an element to a specific "div" in the body is shown - which has <div id="parent"></div> in the html.
		const parent = document.getElementById("parent");

		** create new Element
		const newElement = document.createElement("p");

		** content add new element
		newElement.innerText = "it's new Element , create by dom "

		** add to Dom
		parent.appendChild(newElement); 
3. What is Event Bubbling? And how does it work?
Ans : Event Bubbling means that the event starts rising from the bottom to the top parent, it is called Event Bubbling.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans : Event Delegation means placing an event listener on the parent element, not on the child. It takes up less memory, works on dynamic elements, and keeps the code clean.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans : Below is the difference between preventDefault() and stopPropagation() methods

	** preventDefault() --> This disables the browser's default behavior. 

	** stopPropagation()-->Stop Event Bubbling. That is, the event will not go to the parent Element. 
