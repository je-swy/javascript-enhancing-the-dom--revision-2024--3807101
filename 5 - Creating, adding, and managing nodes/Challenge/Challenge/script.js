// Challenge Instructions:
// 1. Craft and add a new button element with the text “Add” to the content area.
//    Hint: Use createElement and appendChild.

let btn = document.createElement('button');
btn.textContent = "Add";

let contentArea = document.getElementById('contentArea');
contentArea.appendChild(btn)

// 2. Summon a new list item and add it to the existing list 'taskList'.
//    Hint: Create an 'li' element and use appendChild.

let taskList = document.getElementById('taskList');
let liItem = document.createElement('li');
liItem.textContent = "New li item";
taskList.appendChild(liItem);

// 3. Clone an element and add its twin to the page.
//    Hint: Use cloneNode on an existing element.

let twinLi = liItem.cloneNode();
twinLi.textContent = "Clone li item"
taskList.appendChild(twinLi);

// 4. Replace the old paragraph at the top of the page with a new one.
//    Hint: Create a new 'p' element and use replaceChild.

let oldParagraph = contentArea.querySelector('p');
let newParagraph = document.createElement('p');
newParagraph.textContent = 'New paragraph';
contentArea.replaceChild(newParagraph, oldParagraph);

// 5. Make the image of the puppy vanish from the page. (I know, terrible!)
//    Hint: Use removeChild on the parent of the 'puppyImage'.

let puppyImage = document.getElementById('puppyImage');
contentArea.removeChild(puppyImage);