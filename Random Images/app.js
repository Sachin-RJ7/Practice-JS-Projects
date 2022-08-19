const imageE = document.querySelector(".image-container");
const btnE = document.querySelector(".btn");

let imagNum = 10;

btnE.addEventListener("click", () => {
    addNewImages();
    
});

function addNewImages () {

    for (let index = 0; index < imagNum; index++) {
        const newImage = document.createElement("img");
    newImage.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    imageE.appendChild(newImage);
    }
    

}
