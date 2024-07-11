// Function to check the user's answer
function checkAnswer() {
    // Correct answer for the quiz
    const correctAnswer = "4";

    // Get the selected radio button
    const selectedRadioButton = document.querySelector('input[name="quiz"]:checked');

    // Check if a radio button is selected
    if (selectedRadioButton) {
        // Get the user's answer
        const userAnswer = selectedRadioButton.value;

        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // Handle case where no answer is selected
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
