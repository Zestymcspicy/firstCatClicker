class AnimalImage {
  constructor(name, imageLocation) {
    this.name = name;
    this.imageLocation = imageLocation;
  };
};

const mainContainer = document.getElementById("mainContent");
const larry = new AnimalImage("Larry Shonsleberry", "images/IMG_1278.png");
const chewie = new AnimalImage("Chewbacca", "images/chewie.png");

let imageArray = [larry, chewie];

function buildImage (animal) {
  let newDiv = document.createElement("div");
  let newText = document.createTextNode(`${animal.name}`);
  let newImage = document.createElement("img");
  newImage.src=`${animal.imageLocation}`;
  newDiv.appendChild(newText);
  newDiv.appendChild(newImage);
  mainContainer.appendChild(newDiv);
  newDiv.classList.add('animal-card')
};

imageArray.forEach(function (element){
  buildImage(element);
});
