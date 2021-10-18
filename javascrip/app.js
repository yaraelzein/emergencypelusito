let buttonElement = document.getElementsByClassName("button")[0];
let gifElement = document.getElementsByClassName("image")[0];
let audioElement = document.getElementsByClassName("music")[0];

buttonElement.addEventListener("click", () => {
    buttonElement.parentNode.removeChild(buttonElement)
    audioElement.play()
    gifElement.style.visibility = "visible"
})

