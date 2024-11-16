document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const firstName = document.getElementById('firstNameInput').value.trim();
    const lastName = document.getElementById('lastNameInput').value.trim();
    const age = document.getElementById('ageInput').value;
    const password = document.getElementById('password').value;
    const state = document.getElementById('state').value;

    
    if (!firstName || !lastName) {
        alert('First Name and Last Name are required.');
        return;
    }

    if (age < 18) {
        alert('YOU must be 18 years or older to submit this form.');
        return;
    }

    
    const formData = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        password: password,
        state: state,
    };

    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myform').innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };
    xhr.send(JSON.stringify(formData));

    
    console.log(formData);
});
