let count = 0;
let catImage = document.querySelector('img');
let clickCounter = document.getElementById('counter');
clickCounter.innerHTML = `${count}`;

catImage.addEventListener('click', function () {
   count++;
   clickCounter.innerHTML = `${count}`;
 });
