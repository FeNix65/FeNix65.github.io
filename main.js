let container = document.querySelector('.container');
console.log(container);

let boxAll = document.querySelectorAll('.box');
container.addEventListener('click', e =>{
console.log('ggg');
console.log(e.target);
e.target.innerHTML ='X';
for(let i = 0; i < boxAll.length; i++){
console.log(boxAll[i]);
boxAll[i].innerHTML ='0';
boxAll[i].classList.add('box2');
}
});