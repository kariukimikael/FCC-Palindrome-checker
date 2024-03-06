const userInput = document.querySelector('#text-input');
const checkButton = document.querySelector('#check-btn');
const result = document.querySelector('#result');

checkButton.addEventListener('click', () => {
    if (userInput.value.length === 0) {
        alert('Please input a value');
    } else {
        if (palindrome(userInput.value) === true) {
            // result.textContent = `${userInput.value} is a palindrome`
            const newHTML = `
              <p><span class="bold-text">${userInput.value}</span> is a palindrome</p>`;
            result.innerHTML = newHTML;
        } else {
            const newHTML = `
                  <p><span class="bold-text">${userInput.value}</span> is not a palindrome</p>`;
            result.innerHTML = newHTML;
        }
    }
});

const palindrome = (str) => {
    // Lowercase the input use .toLoweCase() method;
    const newString = str
        .toLowerCase()
        // Remove non-alphanumeric characters (punctuations and spaces)
        .match(/[a-z0-9]/g);
    // Compare String to it's reverse return string === reversedString
    return newString.join('') === newString.reverse().join('');
};
