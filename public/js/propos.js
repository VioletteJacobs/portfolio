let buttons= document.querySelectorAll(".buttonCv")
buttons.forEach(btn =>{
    btn.addEventListener("click", function(e){
        e.preventDefault()
        let x= e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop
        let effet = document.createElement("span")
        effet.setAttribute("class", "spanButton")
        effet.style.left = x + "px"
        effet.style.top = y + "px"
        this.appendChild(effet)
        console.log(effet);
    })
})