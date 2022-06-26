const copyColorCode = document.getElementById('copy');
const popup = document.getElementById("displayTooltipText");

// copy any color code 
copyColorCode.addEventListener('click', () => {
    if(popup.classList.contains("displayTooltip")){
        popup.classList.remove("displayTooltip");
        popup.textContent = "";
    } else {
        popup.classList.add("displayTooltip");
        popup.textContent = "copied"
        const content = document.getElementById('copy-code').innerHTML;
        navigator.clipboard.writeText(content);
        // console.log(navigator.clipboard);
        console.log(content);
    }
})
