document.getElementById('project1').addEventListener('click', function() {
const project1 = new Popup({
        title: 'Portfolio website',
        content: `This is my portfolio website. 
        It is a simple website that I created to showcase my projects. 
        It is based on HTML CSS and JS. You are currently on this website. 
        You can check the source code on my GitHub. 
        custom-space-out big-margin§{btn-link}[GitHub]`,
        titleColor:'#9534eb',
        sideMargin: "1.5em",
        fontSizeMultiplier: "1.2",
        loadCallback: () => {
            const button = document.querySelector(".link");
            button.addEventListener("click", () => {
                window.location.href = 'https://github.com/665foset';
            });
        },
        css: `
        .popup-body p {
            margin-top: 2%;
            margin-bottom: 2%;
            text-transform: none;
        }
        .popup.popup{
        font-family: "Poppins", sans-serif!important;
        }
    .popup.override .custom-space-out {
        display: flex
        flex-wrap: wrap;
    }`
    
    });
    project1.show();
});

document.getElementById('project2').addEventListener('click', function() {
const project2 = new Popup({
        title: 'CS2 Stats',
        content: `This project is yet to be developed. 
        It is a project based in C# with an idea of API usage to create a website,
        that would display statistics of the game Counter Strike 2 for each player after he enters his SteamID. 
        You can check the source code on my GitHub. 
        custom-space-out big-margin§{btn-link}[GitHub]`,
        titleColor:'#9534eb',
        sideMargin: "1.5em",
        fontSizeMultiplier: "1.2",
        loadCallback: () => {
            const button = document.querySelector(".link");
            button.addEventListener("click", () => {
                window.location.href = 'https://github.com/665foset';
            });
        },
        css: `
        .popup-body p {
            margin-top: 2%;
            margin-bottom: 2%;
            text-transform: none;
        }
        .popup.popup{
            font-family: "Poppins", sans-serif!important;
            }
    .popup.override .custom-space-out {
        display: flex
        flex-wrap: wrap;
    }`
    
    });
    project2.show();
});

document.getElementById('project3').addEventListener('click', function() {
const project3 = new Popup({
        title: 'Interactive Quiz Game',
        content: `This project is yet to be developed. 
        It is based in C# with an idea to create a website that you can play a quiz-like game on.
        You can check the source code on my GitHub. 
        custom-space-out big-margin§{btn-link}[GitHub]`,
        titleColor:'#9534eb',
        sideMargin: "1.5em",
        fontSizeMultiplier: "1.2",
        loadCallback: () => {
            const button = document.querySelector(".link");
            button.addEventListener("click", () => {
                window.location.href = 'https://github.com/665foset';
            });
        },
        css: `
        .popup-body p {
            margin-top: 2%;
            margin-bottom: 2%;
            text-transform: none;
        }
        .popup.popup{
            font-family: "Poppins", sans-serif!important;
            }
    .popup.override .custom-space-out {
        display: flex
        flex-wrap: wrap;
    }`
    
    });
    project3.show();
});

document.getElementById('project4').addEventListener('click', function() {
const project4 = new Popup({
        title: 'Recipe Book',
        content: `This project is yet to be developed. 
        It is a project based in C# with an idea of creating a website that would allow you to share your recipes with others.
        So everybody could see your recipe and try it out. 
        You can check the source code on my GitHub. 
        custom-space-out big-margin§{btn-link}[GitHub]`,
        titleColor:'#9534eb',
        sideMargin: "1.5em",
        fontSizeMultiplier: "1.2",
        loadCallback: () => {
            const button = document.querySelector(".link");
            button.addEventListener("click", () => {
                window.location.href = 'https://github.com/665foset';
            });
        },
        css: `
        .popup-body p {
            margin-top: 2%;
            margin-bottom: 2%;
            text-transform: none;
        }
        .popup.popup{
            font-family: "Poppins", sans-serif!important;
            }
    .popup.override .custom-space-out {
        display: flex
        flex-wrap: wrap;
    }`
    
    });
    project4.show();
});

