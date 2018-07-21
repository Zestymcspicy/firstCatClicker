let imageArray = [];

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
    animal.listEntry = document.createElement("li");
    animal.listEntry.innerHTML = animal.name;
    animal.listEntry.id=animal.name;
    animal.image.src=animal.imageLocation;
    animal.ownDiv.appendChild(animal.nameText);
    animal.ownDiv.appendChild(animal.countSpan);
    animal.ownDiv.appendChild(animal.image);
    animal.ownDiv.classList.add('animal-card');
  };
};

const catList = document.createElement("ul");
const mainContainer = document.getElementById("mainContent");
const larry = new AnimalImage("Larry Shonsleberry", "images/IMG_1278.png");
const chewie = new AnimalImage("Chewbacca", "images/chewie.png");
const twoKitties = new AnimalImage("Cuddling Kittens", "images/twoKitties.png");

mainContainer.appendChild(catList);
// animal.image.addEventListener('click', function (){
//   animal.clickCount++;
//   animal.countSpan.innerHTML = (`${animal.clickCount}`);

imageArray.forEach(function (element){
  element.buildImage();
  catList.appendChild(element.listEntry);
});

catList.addEventListener("click", function (e){
  let target =  imageArray.forEach(function(obj) {
    if (e.id === obj.name){
      return obj;
    }
  });
  mainContainer.appendChild(target.ownDiv);
});
