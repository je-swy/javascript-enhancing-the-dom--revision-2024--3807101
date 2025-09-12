// Challenge 1: Select an element by ID and print it to the console
// TODO: Select the element with id 'actionButton' and print it

console.log(document.getElementById('actionButton'));

// Challenge 2: Select all elements with a certain class and print all of them to the console
// TODO: Select all elements with class 'info' and print each one

const infoList = document.getElementsByClassName('info');
for (let i = 0; i < infoList.length; i++) {
    console.log(infoList[i]);
}

// Challenge 3: Select elements by tag and print all of them to the console
// TODO: Select all <p> elements and print each one

const pList = document.getElementsByTagName('p');
for (let i = 0; i < pList.length; i++) {
    console.log(pList[i]);
}

// Challenge 4: Select elements with a combination of tag name and class name, and print them
// TODO: Select all elements that are <span> with class 'highlight' and print each one

const highlightList = document.querySelectorAll('span.highlight')
highlightList.forEach(el => console.log(el));