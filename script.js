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

// function validation(){
//     var name = document.getElementById("name").value;
//     var comment = document.getElementById("comment").value;

//     if (document.myform.name.value == "") {
//         document.getElementById('errors').innerHTML="*Please enter a username*";
//         return false;
//    }
// }

const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4];
const selectedIndex = null;

imageIndexes.forEach(i => {
    const image = document.createElement('img');
    image.src = `/images/panel-${i}.png`;
    image.alt = `Space Battle Panel ${i}`;
    image.classList.add('galleryImg');

    iamge.addEventListener('click', () => {
        //popup
    })

    gallery.appendChild(image);
})

// image.addEventListener('click', () => {
//     selectedImage.src = "galleryImg';
// });
