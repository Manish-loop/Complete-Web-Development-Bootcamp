console.log('Welcome to js class')
let element = document.getElementById('myfirst')
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
 element.innerText = 'Manish is a boy';
element.innerHTML = '<b>Manish is a boy</b>';
console.log(element.innerText)

let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child')
sel = document.querySelector('div')
sel.style.color = 'green';
// console.log(sel)

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
 elems = document.getElementsByTagName('div');
 console.log(elems)

 Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = 'purple';
 });
// console.log(elems[0].getElementsByClassName('child'));