console.log('I am focusing on my carrer rather than anything else')
const names = 'Manish';
const greeting = 'Good night';
console.log(greeting + ' ' + name)

let html;
html = '<h1> this is heading</h1>' +
    '<p> this is paragraph</p>';
html=html.concat('this',' str2');
// console.log(html)
// console.log(html.length)
// // console.log(html.toLowerCase());
// // console.log(html.toUpperCase());
// //console.log(html[0])
// console.log(html.indexOf('<'))
// console.log(html.lastIndexOf('<'))
// console.log(html.charAt(8))
// console.log(html.endsWith('str2'))
// console.log(html.includes('set'))
// console.log(html.substring(1,6))
// console.log(html.slice(0,4))
// console.log(html.split('<'))
console.log(html.replace('this','it'));

//Template literals
let fruit1 = 'Orange';
let fruit2 = 'Mango';
let myhtml = `Hello ${names}
           <h1> This is heading </h1>
           <p> You like ${fruit1} and ${fruit2}
             `;
document.body.innerHTML = myhtml;