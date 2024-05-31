const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    menu.classList.toggle("active");
    if(menu.classList.contains("active")){
        document.querySelector("header .material-icons").innerHTML = "close"
    }
        else{
            document.querySelector("header .material-icons").innerHTML = "menu"
    }

}

function copyToClipboard() {
    // Le nom d'utilisateur Discord et le tag
    var discordTag = "bacchus0582#1234";
    // Créer un élément temporaire pour copier le texte
    var tempInput = document.createElement("input");
    tempInput.style.position = "absolute";
    tempInput.style.left = "-1000px";
    tempInput.style.top = "-1000px";
    tempInput.value = discordTag;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Le nom d'utilisateur Discord a été copié dans le presse-papiers. Veuillez le coller dans Discord pour ajouter en ami.");
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute ('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a [href*='  + id +  ']').classList.add('active');
            })
        }
    });
};