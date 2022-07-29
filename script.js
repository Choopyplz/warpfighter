// --------------Hamburger Menu-------------

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// -----------------Gallery-----------------

const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,5];
const selectedIndex = null;

imageIndexes.forEach(i => {
    const image = document.createElement('img');
    image.src = `images/panel-${i}.png`;
    image.alt = `Space Battle Panel ${i}`;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `/images/panel-${i}.png`;
    })

    gallery.appendChild(image);
})

popup.addEventListener('click', () => {
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
    popup.alt = '';
})


// -----------------Comment form-----------------

const submit = document.getElementById('submit');
const out1 = document.getElementById('output1')

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validate = () => {
    const $result = $('#result');
    const email = $('#email').val();
    $result.text('');
  
    if (validateEmail(email)) {
        $result.text(email + ' CHECKS OUT :)');
        $result.css('color', 'green');
        document.querySelector('form').addEventListener('submit', event => {
        event.preventDefault();
        out1.innerHTML = ("THANKS FOR YOUR FEEDBACK, " + email + "!");
        setTimeout ( out1.innerhtml == "", 200);
      })
      
    } else {
        $result.text(email + ' IS NOT VALID :(');
        $result.css('color', 'red');
        document.querySelector('form').addEventListener('submit', event => {
        event.preventDefault();
    });
    return false;
}}

function empty() {
    var x;
    x = document.getElementById("email").value;
    if (x == "") {
        out1.innerHTML = ("PLEASE ENTER AN EMAIL");
        return false;
    };
}
  
$('#email').on('input', validate);
