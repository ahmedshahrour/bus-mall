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
let viewreport = document.getElementById('viewreport');
let buttonpress = false;
let imgpress = false;

let counter = 0;





function Images(name, src) {
    this.name = name;
    this.src = `./img/${src}`;
    this.views = 0;
    Images.all.push(this);
}

Images.all = [];

for (let i = 0; i < imgArray.length; i++) {
    // console.log(imgArray[i].split( '.' ));
    new Images(imgArray[i].split('.')[0], imgArray[i]);
}

function render() {
    let leftIndex = randomNumber(0, imgArray.length - 1);
    let rightIndex;
    let centerIndex;

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
        imgpress = true;
        if (e.target.id === 'leftImg') {
            Img.arr[leftIndex].fav++;
        }
        else if (e.target.id === 'middleImg') {
            Img.arr[middleIndex].fav++;
        }
        else if (e.target.id === 'rightImg') {
            Img.arr[rightIndex].fav++;

        }


        render();
        console.log(counter);
        counter++;
        if (buttonpress) {
            proceed()
        }
    }
    else if (count >= entry) {
        imgCont.removeEventListener('press', eventHandler);
    }
}
function proceed() {
    buttonpress = true;
    viewreport.innerHTML = ''
    let list = document.createElement('ul');
    viewreport.appendChild(list);
    let listItem;
    for (let i = 0; i < Img.arr.length; i++) {
        listItem = document.createElement('li');
        listItem.innerHTML = `${Img.arr[i].name} had ${Img.arr[i].fav} votes, and was seen ${Img.arr[i].view} times.`
        list.appendChild(listItem);
    }
}
imageSection.addEventListener('press', eventHandler);

render();

// console.log(Images.all);
// leftImage.setAttribute('src', Images.all[0].src)
// let index = randomNumber(0, imgArray.length - 1);
// rightImage.src = Images.all[index].src;
// console.log( leftImage, rightImage );

// Helper function
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

