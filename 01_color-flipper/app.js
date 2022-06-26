// colorArray
const colors = ["green", "red", "blue", "yellow", "AliceBlue", "GreenYellow", "Indigo", "LightCoral", "LightCyan", "LightSalmon", "Maroon", "MediumSlateBlue", "OrangeRed", "PaleTurquoise", "RoyalBlue", "SpringGreen", "Snow", "Tomato", "Wheat", "SteelBlue", "SlateGrey", "SkyBlue", "SaddleBrown", "SandyBrown", "Sienna", "PowderBlue", "Purple", "Peru", "PeachPuff", "PaleGoldenRod", "PaleGreen", "Moccasin", "OrangeRed", "Orange", "OldLace", "Linen", "LightYellow", "Lavender", "Khaki", "HoneyDew", "GhostWhite", ];


const btnClick = document.getElementById("btn");
const colorCode = document.querySelector(".color");
const runColorCode = document.getElementById("btn-2");
const home = document.querySelector(".link-home");
const copyButtonContainer = document.getElementById("copy-container");



// running event on click to change color manually
btnClick.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    colorCode.textContent = colors[randomNumber];
    copyButtonContainer.classList.remove("removed");
})

// getting random index number 
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}


// calling function loopColorCode infinitely
runColorCode.addEventListener('click', function () {

    let getInnerText = runColorCode.textContent;

    if (getInnerText === 'run') {
        setTimeout(infiniteRandomColor.infiniteColor.bind(infiniteRandomColor), 0);

        runColorCode.textContent = "stop";
        copyButtonContainer.classList.remove("removed");
        btn.classList.add('removed'); // hide/remove click me button
        
    } else if(getInnerText === 'stop'){
        setTimeout(infiniteRandomColor.stopInfiniteRandomColor.bind(infiniteRandomColor), 0);  

        runColorCode.classList.add("removed");
        const link = document.createElement('a');
        link.innerText = "home";
        link.classList.add("btn-hero");
        link.setAttribute('href', 'index.html');
        link.classList.add('btn-hero');
        home.appendChild(link);
    }  
});

function infiniteRandomColorGenerator() {
    this.Enabled = true;
    this.condition = true;
    this.maxIteration = 100000000;
    this.iteration = 0;
    this.getRandomNumber = function () {
        return Math.floor(Math.random() * colors.length);
    };
    this.infiniteColor = function () {
        if (this.condition && this.Enabled && this.iteration++ < this.maxIteration) {
            const randomNumber = this.getRandomNumber();
            document.body.style.backgroundColor = colors[randomNumber];
            colorCode.textContent = colors[randomNumber];
            setTimeout(this.infiniteColor.bind(this, 5000));
        }
    };
    this.stopInfiniteRandomColor = function () {
        this.Enabled = false;
    }
}

let infiniteRandomColor = new infiniteRandomColorGenerator();
// setTimeout(infiniteRandomColor.infiniteColor.bind(infiniteRandomColor), 500);
// setTimeout(infiniteRandomColor.stopInfiniteRandomColor.bind(infiniteRandomColor), 1000);

