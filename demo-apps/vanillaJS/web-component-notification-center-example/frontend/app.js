

// extracting send button
const btn = document.querySelector('#btn');
const input = document.querySelector('.input')




input.addEventListener('input', () => {
    console.log(input.value.length);
    if (input.value.length > 0) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
});

const form = document.querySelector('#form')
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log('button clicked');
    await fetch('https://notificationsgeneratorbackend.onrender.com/home', {
        method: 'POST',
        body: JSON.stringify({
            description: input.value,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    input.value = ""

})

// extracting input value on button click

// here you can attach any callbacks, interact with the web component API
let nc = document.getElementsByTagName('notification-center-component')[0];
nc.onLoad = () => console.log('hello world!');
