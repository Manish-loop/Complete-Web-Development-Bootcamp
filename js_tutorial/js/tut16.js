let element = document.createElement('li')
let text = document.createTextNode('I am writing a text')
element.appendChild(text)

element.className = 'childul';
element.id = 'createdLi'
element.setAttribute('title', 'mytitle')
// element.innerHTML = '<b>Hello,I am Manish</b>';


let ul = document.querySelector('ul.this')
ul.appendChild(element);
//  console.log(ul)
// console.log(element)

let elem2 = document.createElement('h3');
elem2.id = 'elem2'
elem2.className = 'elem2'
let tnode = document.createTextNode('This is created node for elem2')
elem2.appendChild(tnode);

element.replaceWith(elem2)
let myul = document.getElementById('myul')
myul.replaceChild(element, document.getElementById('fui'))
myul.replaceChild(element, document.getElementById('lui'))
let pr = elem2.hasAttribute('class')
elem2.removeAttribute('id')
elem2.setAttribute('title','myelem2title')
console.log(elem2,pr)