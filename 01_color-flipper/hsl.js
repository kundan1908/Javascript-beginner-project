const btnClick = document.getElementById("btn");
const color = document.querySelector(".color");
const runColorCode = document.getElementById("btn-2");
const home = document.querySelector(".link-home");
const copyButtonContainer = document.getElementById("copy-container");



// calling function manually to get random color code 
function randomColorGenerator(){
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 100);
    const lightness = Math.floor(Math.random() * 100);
    const randomColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    return randomColor;
}

// running event on click to change color manually
btnClick.addEventListener("click", () => {
    const randomColor = randomColorGenerator();

    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
    copyButtonContainer.classList.remove("removed");
})


// running addEventListener event to get color automatically infinite times
runColorCode.addEventListener('click', function(){

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
        link.setAttribute('href', 'hsl.html');
        link.classList.add('btn-hero');
        home.appendChild(link);
    }  
});


function infiniteRandomColorGenerator() {
    this.Enabled = true;
    this.condition = true;
    this.maxIteration = 100000000;
    this.iteration = 0;
    this.infiniteColor = function () {
        if (this.condition && this.Enabled && this.iteration++ < this.maxIteration) {
           
            const hue = Math.floor(Math.random() * 360);
            const saturation = Math.floor(Math.random() * 100);
            const lightness = Math.floor(Math.random() * 100);
            const randomColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`; 

            document.body.style.backgroundColor = randomColor;
            color.textContent = randomColor;

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

