document.addEventListener('DOMContentLoaded', () => {
    // Task: React to a button click by changing text in the paragraph with id 'para1'.
    // Add event listener to 'changeTextButton' and modify text of 'para1' when clicked.
    let par1 = document.getElementById('para1');
    let btn = document.getElementById('changeTextButton');

    btn.addEventListener('click', () => {
        par1.textContent = "New text"
    })

    // Task: Change the style of 'para1' on mouseover and mouseout.
    // Add mouseover and mouseout event listeners to 'para1' and change its style.

    par1.addEventListener('mouseover', () => {
        par1.style.color = "yellow"
    })

    par1.addEventListener('mouseout', () => {
        par1.style.color = "blue"
    })

    // Task: Use event delegation on 'itemList' to display which item was clicked.
    // Add click event listener to 'itemList' and identify the clicked list item.

    let itemList = document.getElementById('itemList')

    itemList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI'){
            console.log(e.target.textContent);
        }
    })

    // Task: Prevent navigating to the link URL with preventDefault and show text in 'para2'.
    // Add click event listener to 'preventLink' and prevent default action.

    let preventLink = document.getElementById('preventLink');
    let par2 = document.getElementById('para2');
    preventLink.addEventListener('click', (e) => {
        e.preventDefault();
        par2.textContent = 'Text in paragraph 2'
    })
});