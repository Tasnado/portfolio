const toggleMode = () => {
    const modeCheckbox = document.getElementById('toggle');
    const bodyElement = document.querySelector("body");

    if (modeCheckbox.checked) {
        bodyElement.classList.add("darkMode");
    }
    
    console.log(modeCheckbox.value);
    modeCheckbox.addEventListener('click', () => {
        if (modeCheckbox.checked) {
            bodyElement.classList.add("darkMode");
            console.log("checked");
        } else {
            bodyElement.classList.remove("darkMode");
            console.log("unchecked");
        }
    });
}

const addListeners = () => {
    const burgerMenu = document.querySelector("#burgerMenu");
    const projects = document.querySelectorAll(".projects");

    burgerMenu.addEventListener('click', () => {
        const navigation = document.querySelector("#navigation");
        navigation.classList.toggle("show");
    });

    projects.forEach((project) => {
        const projectImage = project.querySelector(".projectImage");
        const textContent = project.querySelector(".projectTextContent");
        projectImage.addEventListener('click', () => {
            textContent.classList.toggle("showText");
        });

        textContent.addEventListener('click', function () {
            textContent.classList.toggle("showText");
        })
    });
}

const init = () => {
    addListeners();
    toggleMode();
}

AOS.init();
init();
