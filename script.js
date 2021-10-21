
const init = () => {
    const burgerMenu = document.querySelector("#burgerMenu");
    const projects = document.querySelectorAll(".projects");
    
    burgerMenu.addEventListener('click', () => {
        const navigation = document.querySelector("#navigation");
        navigation.classList.toggle("show");
    });

    projects.forEach((project) => {
        const projectImage = project.querySelector(".projectImage");
        const textContent = project.querySelector("#projectTextContent");
        projectImage.addEventListener('click', () => {
            textContent.classList.toggle("showText");
        });

        textContent.addEventListener('click', function() {
            textContent.classList.toggle("showText");
        })
    });
}

init();