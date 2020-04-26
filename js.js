const btns = document.querySelectorAll('.tt');
const tabs = document.querySelectorAll('.tab');
btns.forEach(a => {
    a.addEventListener('click', (e) => {
        /* remove red border */
        removeActive();
        /* remove all tabs */
        removeTabs();
        /* add red border */
        e.target.classList.add('active');
        /* add all tabs */
        document.querySelector(`.${e.target.id}`).classList.add('on');
    });
})
function removeActive() {
    btns.forEach(a => {
        a.classList.remove("active");
    })
}
function removeTabs() {
    tabs.forEach(a => {
        a.classList.remove("on");
    })
}
// QNA
const ques = document.querySelectorAll('.qna li');
ques.forEach(a => {
    a.addEventListener('click', () => {
        a.classList.toggle('ans');
    })
});
//form 
const input = document.querySelector(".form input");
const warn = document.getElementById('warning');
const div = document.querySelector(".form div");
document.querySelector(".form").addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value === "") {
        div.classList.add('wrong');
        warn.innerHTML = "email cannot be empty";
    } else if (!validateinput(input.value)) {
        div.classList.add('wrong');
        warn.innerHTML = "please provide a valid email";
    }
    else {
        div.classList.remove('wrong');
    }
    input.value = '';
})
function validateinput(email) {
    var actual = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return actual.test(String(email).toLowerCase());
}
const nav = document.querySelector('.navbar');
document.querySelector('.hamburger').addEventListener('click', () => {
    nav.classList.add('clicked')
});
document.getElementById('close').addEventListener('click', () => {
    nav.classList.remove('clicked');
});
