console.log('This is tutorial 8')
const age = 18;
const doesDrive = true;
// const vari = 46;
// if (age!=19)
// {
//     console.log('Age is not 19')
// }
//  if(age!==48){
//     console.log('Age is 48')
// }
// else{
//     console.log('Age is not 19')
// }

// // if (vari){
// //     console.log("vari is defined.")
// // }

// if (typeof vari !== 'undefined') {
//     console.log('Vari is defined')
// }

// else{
//     console.log('Vari is not defined')
// }


// if(doesDrive || age>18){
//     console.log("You can drive");
// }

// else{
//     console.log("You cannot drive");
// }

// console.log(age ==40? 'Age is 40': 'Age is not 40')


switch(age){
    case 18:
        console.log("You are 18")
    break;
    case 28:
        console.log("You are 28")
    break;

    default:
        console.log("You have invalid age")
        break;
}