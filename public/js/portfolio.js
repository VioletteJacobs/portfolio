let projet = document.getElementsByClassName("projet")
console.log(projet);
let image= document.getElementsByTagName("img")
console.log(image);
for (let i = 0; i < image.length; i++) {
    image[i].addEventListener("mouseover", function(){
        image[i].style.width= "120%"
        image[i].style.height= "120%"
    })
    
}
