const buttons = document.querySelectorAll('.toggle-button');
const answer = document.querySelector('.q1-answer');
const icon = document.querySelector('.toggle-button img');
const plusIcon = 'assets/images/icon-plus.svg';
const minusIcon = 'assets/images/icon-minus.svg';


buttons.forEach(function(button) {

    const questionContainer = button.closest('.question-wrapper');
    const answer = questionContainer.querySelector('.answer'); 
    const icon = button.querySelector('img');

    let isOpen = false; // Track the state of the answer

    button.addEventListener('click', function() {

        isOpen = !isOpen; // Toggle the state
    
        if (isOpen) {
            answer.classList.add('open');
            icon.src = minusIcon;
        }
        else {
            answer.classList.remove('open');
            icon.src = plusIcon;
        }

        
    });
});




