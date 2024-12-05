document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Gather form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        recipeName: document.getElementById('recipe-name').value.trim(),
        description: document.getElementById('description').value.trim(),
    };

    // Validation
    if (!formData.name || !formData.email || !formData.recipeName || !formData.description) {
        alert('All fields are required.');
        return;
    }

    // Log the form data to the console (for testing purposes)
    console.log('Submitted Form Data:', formData);

    // Simulate server interaction
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'response.json', true); // Adjust to match your actual server setup
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.querySelector('main').innerHTML = `<p>${response.message}</p>`;
            document.querySelector('form').reset(); // Clear the form
        } else if (xhr.readyState === 4) {
            alert('Error submitting the recipe.');
        }
    };
    xhr.send(JSON.stringify(formData)); // Send the JSON data
});
