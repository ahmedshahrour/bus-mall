'use strict';

let imgArray = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png',
  'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg', 'wireframe.png'
];

// Constructor
// New obj
// prototype render
// Random function
// get by id
// Event Handler

let imageSection = document.getElementById('imageSection');
let leftImage = document.getElementById('leftImage');
let rightImage = document.getElementById('rightImage');
let centerImage = document.getElementById('centerImage');
let proceed = document.getElementById('proceed');
let report = document.getElementById('report');

// let listCont = document.getElementById('listCont');

let counter = 0;
// let round = 25;

let leftIndex;
let rightIndex;
let centerIndex;

function Images(name, src) {
  this.name = name;
  this.src = `./img/${src}`;
  this.views = 0;
  this.click = 0;
  Images.all.push(this);
}

Images.all = [];

for (let i = 0; i < imgArray.length; i++) {
  // console.log(imgArray[i].split( '.' ));
  let imagename = imgArray[i].split('.')[0];
  new Images(imagename, imgArray[i]);
}

function render() {
  leftIndex = randomNumber(0, imgArray.length - 1);

  do {
    rightIndex = randomNumber(0, imgArray.length - 1);
    centerIndex = randomNumber(0, imgArray.length - 1);
  } while (leftIndex === rightIndex || centerIndex === leftIndex || rightIndex === centerIndex);



  rightImage.src = Images.all[rightIndex].src;
  leftImage.src = Images.all[leftIndex].src;
  centerImage.src = Images.all[centerIndex].src;

  Images.all[rightIndex].views++;
  Images.all[leftIndex].views++;
  Images.all[centerIndex].views++;

  console.log(Images.all);
}

function eventHandler(e) {
  // console.log(e.target.id);
  if ((e.target.id === 'rightImage' || e.target.id === 'leftImage' || e.target.id === 'centerImage') && counter < 25) {

    console.log(counter);

    if (e.target.id === 'rightImage') {
      Images.all[rightIndex].click++;
    }
    if (e.target.id === 'centerImage') {
      Images.all[centerIndex].click++;
    }
    if (e.target.id === 'leftImage') {
      Images.all[leftIndex].click++;
    }
    console.log(Images.all);
    render();
    counter++;
  }

}

function printresult(event){
for (let i= 0 ; i < Images.all.length ; i++){
  let li = document.createElement('li');
  report.appendChild(li);
  li.textContent = `${Images.all[i].name} had ${Images.all[i].click} votes, and was seen ${Images.all[i].views} times.`
}

proceed.removeEventListener('click' , printresult);
}

imageSection.addEventListener('click', eventHandler);
proceed.addEventListener('click', printresult);

render();

// console.log(Images.all);
// leftImage.setAttribute('src', Images.all[0].src)
// let index = randomNumber(0, imgArray.length - 1);
// rightImage.src = Images.all[index].src;
// console.log( leftImage, rightImage );

// Helper function
function randomNumber(min, max) {
  // min = Math.ceil( min );
  // max = Math.floor( max );
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}