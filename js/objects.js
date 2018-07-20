let imageArray = [];
let builtArray= [];

class AnimalImage {
  constructor(name, imageLocation) {
    this.name = name;
    this.imageLocation = imageLocation;
    this.clickCount = 0;
    imageArray.push(this);
  };
  buildImage () {
    let animal = this;
    animal.countSpan = document.createElement("span");
    animal.ownDiv = document.createElement("div");
    animal.nameText = document.createTextNode(`${animal.name}`);
    animal.image = document.createElement("img");
    animal.image.src=`${animal.imageLocation}`;
    animal.ownDiv.appendChild(animal.nameText);
    animal.ownDiv.appendChild(animal.countSpan);
    animal.ownDiv.appendChild(animal.image);
    mainContainer.appendChild(animal.ownDiv);
    animal.ownDiv.classList.add('animal-card');
    builtArray.push(animal.ownDiv);
    animal.image.addEventListener('click', function (){
    animal.clickCount++;
    animal.countSpan.innerHTML = (`${animal.clickCount}`);
  });

  }
};

const mainContainer = document.getElementById("mainContent");
const larry = new AnimalImage("Larry Shonsleberry", "images/IMG_1278.png");
const chewie = new AnimalImage("Chewbacca", "images/chewie.png");
const twoKitties = new AnimalImage("Cuddling Kittens", "images/twoKitties.png");

// function buildImage (animal) {
//   let countSpan = document.createElement("span");
//   let newDiv = document.createElement("div");
//   let newText = document.createTextNode(`${animal.name}`);
//   let newImage = document.createElement("img");
//   newImage.src=`${animal.imageLocation}`;
//   newDiv.appendChild(newText);
//   newDiv.appendChild(countSpan);
//   newDiv.appendChild(newImage);
//   mainContainer.appendChild(newDiv);
//   newDiv.classList.add('animal-card');
//   builtArray.push(newDiv);
//   newImage.addEventListener('click', function (){
//     animal.clickCount++;
//     countSpan.innerHTML = (`${animal.clickCount}`);
//   });
// };

imageArray.forEach(function (element){
  element.buildImage();
});
