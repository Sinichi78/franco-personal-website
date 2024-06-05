let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal
var images = document.querySelectorAll(".box img");
var modalImg = document.getElementById("fullImage");

// Loop through each image and add a click event listener
images.forEach(function(image) {
    image.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// Close the modal when the close button is clicked
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    modal.style.display = "none";
};


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
    document.body.classList.toggle('active');
}

window.onscroll = () =>{
    if(window.innerWidth < 991){
        menu.classList.remove('fa-times');
        header.classList.remove('active');
        document.body.classList.remove('active');
    }

    document.querySelectorAll('section').forEach(sec =>{

        let top = window.scrollY;
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            document.querySelectorAll('.header .navbar a').forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.header .navbar a[href*='+ id +']').classList.add('active')
            });
        };
    });

}

