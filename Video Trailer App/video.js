const btnE = document.querySelector(".btn");
const closeIconE = document.querySelector(".close-icon");
const trailerContainerE = document.querySelector(".trailer-container");
const videoE = document.querySelector("video");

btnE.addEventListener("click", () => {
    trailerContainerE.classList.remove("active");

});


closeIconE.addEventListener("click", () => {
    trailerContainerE.classList.add("active");
    videoE.pause();
    videoE.currentTime = 0;
});