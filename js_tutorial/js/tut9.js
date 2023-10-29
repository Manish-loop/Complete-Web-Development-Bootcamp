console.log('We are learning.')

// General loop for,while, do-while

// for(let i=0;i<10;i++)
// {
//     console.log(i)
// }


// let  j=0;
// while(j<20){
//     console.log(j+1);
//     j++;
// }

// let k=0
// do{

//   if(k==6)
//  {
//     k++;
//     continue;
//  }
//   console.log(k);
//  k++;
// }while(k<20)

// let arr = [2,5,6,8,7];
// arr.forEach(function(element){
//    console.log(element)
// })

let obj = {
    name: 'Mohit',
    age:34,
    skill: 'Js developer'
}

for(let key in obj)
{
    console.log(`${key} or object is ${obj[key]}`)
}