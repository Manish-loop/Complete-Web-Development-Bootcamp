
let cont = document.querySelector('.no');
cont = document.querySelector('.container')
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
console.log(nodeName)
console.log(nodeType)
// console.log(cont.childNodes)
// console.log(cont.children)

let container = document.querySelector('div.container');

 console.log(container.children[1].children[0].children)

console.log(container.firstChild)
// console.log(container.firstElementChild)
// console.log(container.childNodes)
// console.log(container.lastElementChild)
// console.log(container.children)
// console.log(container.childElementCount)  // count of child elements

// console.log(container.firstElementChild.parentNode)
// console.log(container.firstElementChild.nextSibling)
// console.log(container.firstElementChild.nextElementSibling)
// console.log(container.firstElementChild.nextElementSibling.nextElementSibling)