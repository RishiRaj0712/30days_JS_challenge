document.querySelector('body').style.backgroundColor='grey';

let id1 = document.getElementById('id1');
id1.textContent = "30 Days JS Challenge!";

document.querySelector('.class1').style.backgroundColor = 'lightblue';

let newdiv = document.createElement('div');
newdiv.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quisquam consectetur consequuntur, ratione autem id magnam tempora, dolores omnis saepe provident voluptatum dolore.';
document.body.appendChild(newdiv);

let newli = document.createElement('li');
newli.textContent = 'four';
document.getElementById('id3').append(newli);

document.getElementById('toremove').remove()

let element1 = document.getElementById('id3');
if(element1.lastChild){
    element1.removeChild(element1.lastChild);
}

let img1 = document.getElementById('id4');
img1.setAttribute('src' , 'image2.jpg');
img1.setAttribute('alt' , 'Second Image');

let div2 = document.getElementById('id2');
function addClass(){
    div2.classList.add('highlight');
}
function removeClass(){
    div2.classList.remove('highlight');
}

let btn1 = document.getElementById('btn1');
let para2 = document.getElementById('id5');
btn1.addEventListener('click',()=>{
    para2.textContent = "Tham Ja Bhai! Itna jaldi kya h?"
})

let para1 = document.getElementById('id1');
para1.addEventListener('mouseover',()=>{
    para1.style.backgroundColor = 'yellow';
})

para1.addEventListener('mouseout',()=>{
    para1.style.backgroundColor = 'lightblue'
})