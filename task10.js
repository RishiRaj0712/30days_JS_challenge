let para1 = document.getElementById('id1');
let btn1 = document.getElementById('id2');

btn1.addEventListener('click',()=>{
    para1.textContent = "Tham Ja Bhai, Kidhar bhagna h!";
})

document.addEventListener('DOMContentLoaded',()=>{
    const img1 = document.getElementById('id3');

    img1.addEventListener('dblclick',()=>{
        if(img1.style.display=='none'){
            img1.style.display = 'block';
        }else{
            img1.style.display = 'none';
        }
    })
})

let para2 = document.getElementById('id4');
para2.addEventListener('mouseover',()=>{
    para2.style.backgroundColor = 'lightblue';
})
para2.addEventListener('mouseout',()=>{
    para2.style.backgroundColor = 'white';
})

let input1 = document.getElementById('id5');
input1.addEventListener('keydown',(event)=>{
    console.log(`Key pressed : ${event.key}`)
})
let para3 = document.getElementById('id6');
input1.addEventListener('keyup',()=>{
    para3.textContent = `Current Value : ${input1.value}`;
})

let form1 = document.getElementById('id7');
form1.addEventListener('submit',(event)=>{
    event.preventDefault();

    const formdata = new FormData(form1);
    const formDataObject = Object.fromEntries(formdata.entries());

    console.log(`Form Data :`, formDataObject);
})

const select = document.getElementById('id8');
const para4 = document.getElementById('id9');

select.addEventListener('change',()=>{
    para4.textContent = `Selected Value : ${select.value}`;
})

const list = document.getElementById('id10');
list.addEventListener('click',(event)=>{
    if(event.target && event.target.nodeName ==='LI'){
        console.log(`List item text: ${event.target.textContent}`);
    }
})

const list2 = document.getElementById('id11');
const btn2 = document.getElementById('id12');
let itemcnt =0;

list2.addEventListener('click',(event)=>{
    if(event.target && event.target.nodeName =='LI'){
        console.log(`List item text : ${event.target.textContent}`);
    }
})

btn2.addEventListener('click',()=>{
    itemcnt++;
    const newItem = document.createElement('li');
    newItem.textContent = `Item : ${itemcnt}`;
    list2.appendChild(newItem);
})