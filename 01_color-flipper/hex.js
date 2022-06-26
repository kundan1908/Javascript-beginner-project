const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnClick = document.getElementById("btn");
const colorCode = document.querySelector(".color");
const runColorCode = document.getElementById("btn-2");
const home = document.querySelector(".link-home");
const copyButtonContainer = document.getElementById("copy-container");

// running event on click to change color manually
btnClick.addEventListener('click', () => {
    let hexColor = "#";

    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }

    document.body.style.backgroundColor = hexColor;
    colorCode.textContent = hexColor;
    copyButtonContainer.classList.remove("removed");
})


// getting random index number 
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}


// getting color code when function loopColorCode called infinitely or limited times. Drawback: can not pause this function
function getColorLoop(){
    let hexColor = "#";

    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }

    document.body.style.backgroundColor = hexColor;
    colorCode.textContent = hexColor;
}

// calling function loopColorCode infinitely
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
        link.setAttribute('href', 'hex.html');
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
           
            let hexColor = "#";

            for(let i = 0; i < 6; i++){
                hexColor += hex[getRandomNumber()];
            }

            document.body.style.backgroundColor = hexColor;
            colorCode.textContent = hexColor;

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




// =================== Fix this issue later ===============

// this will be called infinitely
function loopColorCode(delay, callback){
    var loop = function(){
        callback();
        setTimeout(loop, delay);
    }; loop();
};


// this will called for limited times ( here 25 times! ). after every 500 milliseconds loopColorCode will be called till 20000 milliseconds.
function loopColorCode2(callback){
    var loop = setInterval(callback, 100);
    setTimeout(function(){
        clearInterval(loop);
    }, 200000);
}

// trying to stop function (loopColorCode) called infinitely. but failed to do so... in future fix this issue and add pause-play button, now we have run-stop button and then refresh page to start from begining

function stopLoopColorCode(callback){
    callback();

}
