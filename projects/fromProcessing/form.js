document.getElementById('myform').addEventListener('submit', function (event) {
    event.preventDefault();

    
    const formData = {
        firstName: document.getElementById('firstNameInput').value.trim(),
        lastName: document.getElementById('lastNameInput').value.trim(),
        email: document.getElementById('emailInput').value.trim(),
        age: parseInt(document.getElementById('ageInput').value, 10),
        password: document.getElementById('password').value,
        state: document.getElementById('state').value
    };

    
    if (!formData.firstName || !formData.lastName || !formData.email) {
        alert('First Name, Last Name, and Email are required.');
        return;
    }
    if (isNaN(formData.age) || formData.age < 18) {
        alert('Age must be 18 or above.');
        return;
    }
    
    if (formData.password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    
    console.log(formData);

    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'response.json', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerHTML = `<p>${response.message}</p>`;
            document.getElementById('myform').reset(); 
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
});
