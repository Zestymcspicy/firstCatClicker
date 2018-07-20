class AnimalImage {
  constructor(name, imageLocation) {
    this.name = name;
    this.imageLocation = imageLocation;
  };
};

const littleContainer = document.getElementById("mainContent");
const larry = new AnimalImage("Larry Shonsleberry", "images/IMG_1278.png");
const chewie = new AnimalImage("Chewbacca", "images/chewie.png");

let imageArray = [larry, chewie];

function buildImage (animal) {
  let thisDiv = document.createElement("div");
  let newText = document.createTextNode(`${animal.name}`);
  let newImage = document.createElement("img");
  newImage.src=`${animal.imageLocation}`;
  thisDiv.appendChild(newText);
  thisDiv.appendChild(newImage);
  littleContainer.appendChild(thisDiv);
  thisDiv.classList.add('animal-card')
};

imageArray.forEach(function (element){
  buildImage(element);
});
