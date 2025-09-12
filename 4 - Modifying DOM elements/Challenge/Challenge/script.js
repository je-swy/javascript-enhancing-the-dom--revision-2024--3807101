function changeStyle() {
    // Challenge Instructions:
    // 1. When the button is clicked, change the background color of 'dynamicText' to 'lightblue'.
    // 2. Change the font size of 'dynamicText' to '18px'.
    // 3. Toggle the font weight of 'dynamicText' between 'normal' and 'bold' on each button click.
    // 4. Change the text color of 'dynamicText' to 'green'.

    let dynamicText = document.getElementById('dynamicText');
    dynamicText.style.backgroundColor = 'lightblue';
    dynamicText.style.fontSize = '18px';
    dynamicText.style.fontWeight = dynamicText.style.fontWeight === "bold" ? "normal" : "bold";
    dynamicText.style.color = 'green';
}

