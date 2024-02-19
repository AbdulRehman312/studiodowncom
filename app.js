let fixedImage = document.querySelector(".fixed-box");
let element = document.querySelector(".element");

element.addEventListener("mouseenter", () => {
    fixedImage.style.display = "block";
});

element.addEventListener("mouseleave", () => {
    fixedImage.style.display = "none";
});

let elems = document.querySelectorAll(".elems");
let a = document.querySelector(".elems a")

console.log(a)



elems.forEach(function (elems) {
    elems.addEventListener("mouseenter", () => {
        let image = a.getAttribute("img-data");
        fixedImage.style.backgroundImage = `url(${image})`;

    });
});



let anchor1 = document.querySelector(".firsta")
let anchor2 = document.querySelector(".seca")
let anchor3 = document.querySelector(".thirda")
let photos = document.querySelector(".bannerimage img")

anchor1.addEventListener("click", () => {

    photos.setAttribute("src", "photos/img 0.webp")
    anchor1.style.color = "#fff"
    anchor2.style.color = "grey"
    anchor3.style.color = "grey"
})

anchor2.addEventListener("click", () => {

    photos.setAttribute("src", "photos/img 1.jpg")
    anchor2.style.color = "#fff"
    anchor1.style.color = "grey"
    anchor3.style.color = "grey"

})

anchor3.addEventListener("click", () => {

    photos.setAttribute("src", "photos/img 2.jpg")
    anchor3.style.color = "#fff"
    anchor2.style.color = "grey"
    anchor1.style.color = "grey"
})

//***********Custom Cursor */ 


let pointer = document.querySelector(".cursor")
let CustBoxRow = document.querySelector(".custmors")


CustBoxRow.addEventListener("mousemove", (dets) => {
    pointer.style.left = dets.x + "px"
    pointer.style.top = dets.y + "-200px" + "px"
    pointer.style.top = dets.y + "px"
    pointer.style.visibility = "visible"
    pointer.style.transform.scale = "2"
})

CustBoxRow.addEventListener("mouseleave", (dets) => {

    pointer.style.visibility = "hidden"
    pointer.style.transform.scale = "2"
})


// Loader Animation

let Loader = document.querySelector(".loader ")


setTimeout(() => {
    Loader.style.top = "-100%"

}, 4000);


// ******Hamburger menu

let menuBtn = document.querySelector("header nav h3")
let container = document.querySelector(".mobile")
let logo = document.querySelector(".logo img")

let CheckVAlue = 0


menuBtn.addEventListener("click", () => {
    if (CheckVAlue == 0) {
        container.style.top = "55px"
        logo.style.opacity = "0"

        menuBtn.style.backgroundColor = "red"
        CheckVAlue = 1
    } else {

        container.style.top = "-1000%"
        logo.style.opacity = "1"
        menuBtn.style.backgroundColor = "transparent"
        CheckVAlue = 0
    }

}) 
