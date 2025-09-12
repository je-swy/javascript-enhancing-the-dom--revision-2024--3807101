// Your tasks:
// 1. Find the parent element of a cat and log it to the console.

const catElement = document.querySelector('#animalFamilyTree li:nth-child(2)')
console.log(catElement.parentNode)

// 2. List all the children of the cat’s parent and log them.

const parentOfCatChildren = catElement.parentElement.children

for (let i = 0; i < parentOfCatChildren.length; i++){
    console.log(parentOfCatChildren[i].textContent)
}

// 3. Identify the cat’s parent's next sibling in the tree and log it.

const catsParentSibling = catElement.nextElementSibling
console.log(catsParentSibling ? catsParentSibling.textContent : 'No next sibling');
