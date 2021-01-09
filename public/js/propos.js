// boutons
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

        setTimeout(()=>{
            effet.remove()
        },1200)
    })
})
// cube
let faces= document.querySelectorAll(".face")
console.log(faces);
let loisirTitre= document.querySelector(".titreLoisirs")
let paragrapheLoisir= document.querySelector(".pLoisirs")

console.log(faces);
for (let i = 0; i < faces.length; i++) {
    faces[i].addEventListener("click", function(){
        switch (i) {
            case 0:
                loisirTitre.innerHTML= "Le féminisme"
                paragrapheLoisir.innerHTML= "Militante et portée par des valeurs fortes, je milite pour l'égalité des genres depuis de nombreuses années. Je suis impliquée de diverses manières dans des associations féministes. Mon précédant emploi m'a également permis de développer des actions en ce sens."
            case 1:
                loisirTitre.innerHTML= "L'improvisation"
                paragrapheLoisir.innerHTML= "Il y a deux ans, je me suis lançée dans la folle aventure de faire partie d'un groupe d'improvisation amateur. d'un défi et une manière de rencontrer des nouvelles personnes, c'est rapidement devenue une vraie addiction pour moi"
            case 2:
                loisirTitre.innerHTML= "La natation"
                paragrapheLoisir.innerHTML= "Grande active, il est nécéssaire d'avoir des activités plus sportives pour rythmer ma semaine et me permettre de me défouler. La natation est donc une case bien-être que je coche une à deux fois par semaine pour me défouler."
            case 3:
                loisirTitre.innerHTML= "Les voyages"
                paragrapheLoisir.innerHTML= "Grande curieuse, j'adore sortir de ma zone de confort et découvrir de nouvelles choses, de nouveaux paysages et de nouvelles manières de vivre. J'ai d'ailleurs vécut 2 mois près de Grenoble. puis 11 mois près de Napoli dans le cadre du projet Erasmus+ (volontariat européen poste bachelor)."
            case 4:
                loisirTitre.innerHTML= "Les loisirs créatifs"
                paragrapheLoisir.innerHTML= "Grande créative, j'adore pouvoir créer des choses que ce soit dans le domaine de la couture, dans mon bullet journal ou dans la cuisine et même dans la programmation web.Touche à tout, je ne me lasse pas d'apprendre de nouvelles techniques comme la céramique récemment."
            case 5:
                loisirTitre.innerHTML= "L'écologie"
                paragrapheLoisir.innerHTML= "L'écologie est une de mes préocupations quotidiennes centrales malgré les nombreuses contradictions qu'elle soulève dans mes comportements."
                
                break;
        
            default:
                break;
        }
    })
    
}