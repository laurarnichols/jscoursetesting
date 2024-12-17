function submitFeedback() {
    // Retrieve input values
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Update user-submitted section to confirm submission
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // Make the userInfo div visible and thank user in alert
    document.getElementById('userInfo').style.display = 'block';
    alert('Thank you for your valuable feedback')
}

const submitButton = document.getElementById('submitBtn');
// Submit feedback if submit button is pressed
submitButton.onclick = submitFeedback;

// Submit feedback if enter key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });