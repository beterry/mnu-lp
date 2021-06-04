const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
const submitButton = document.getElementById("submit-button");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();

    xhr.open("POST", form.action, true);

    xhr.onload = function(e) {
        if (xhr.status === 200) {
            renderFormMessage(`Success! We'll be in touch soon. &#128516;`);
            clearFormFields();
        } else {
            renderFormMessage(`This is awkward...the form failed. Would you mind contacting us a different way? Our phone number is 717-419-0478.`);
        }
    };

    xhr.send(formData);
})

const renderFormMessage = (message) => {
    formMessage.innerHTML = message;
    formMessage.classList.remove('hidden');

    submitButton.classList.add('hidden');
}

const clearFormFields = () => {
    const inputs = document.getElementsByClassName("contact-input");
    
    for (let i = 0; i < inputs.length; i++){
        inputs[i].value = "";
    }
}