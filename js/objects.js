let imageArray = [];
let builtArray= [];

class AnimalImage {
  constructor(name, imageLocation) {
    this.name = name;
    this.imageLocation = imageLocation;
    this.clickCount = 0;
    imageArray.push(this);
  };
};

const mainContainer = document.getElementById("mainContent");
const larry = new AnimalImage("Larry Shonsleberry", "images/IMG_1278.png");
const chewie = new AnimalImage("Chewbacca", "images/chewie.png");
const twoKitties = new AnimalImage("Cuddling Kittens", "images/twoKitties.png");

function buildImage (animal) {
  let countSpan = document.createElement("span");
  let newDiv = document.createElement("div");
  let newText = document.createTextNode(`${animal.name}`);
  let newImage = document.createElement("img");
  newImage.src=`${animal.imageLocation}`;
  newDiv.appendChild(newText);
  newDiv.appendChild(countSpan);
  newDiv.appendChild(newImage);
  mainContainer.appendChild(newDiv);
  newDiv.classList.add('animal-card');
  builtArray.push(newDiv);
  newImage.addEventListener('click', function (){
    animal.clickCount++;
    countSpan.innerHTML = (`${animal.clickCount}`);
  });
};

imageArray.forEach(function (element){
  buildImage(element);
});
