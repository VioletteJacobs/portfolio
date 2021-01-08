let body= document.body 
// texte animé
let textAnimed = document.getElementById('jeSuis');

let jeSuis= new Typewriter(textAnimed)
.typeString("Je suis développeuse ")
.changeDelay(40)
.pauseFor(300)
.typeString(" Full-stack")
.pause(1000)
.deleteChars(10)
.typeString(" JavaScript")
.pauseFor(1000)
.deleteChars(10)
.typeString(" Php")
.pauseFor(1000)
.deleteChars(3)
.start()
