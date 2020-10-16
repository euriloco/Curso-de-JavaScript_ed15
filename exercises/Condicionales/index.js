
/*
function testElseIf(val) {
    if(val<5){
        return"Smaller than 5";
    }else if(val>10){
        return"Greater than 10";
    }else{
        return "Between 5 and 10";
    }
}

console.log(testElseIf(7));

*/
/*
function orderMyLogic(val) {
    if(val<5){
        return"Smaller than 5";
    }else if(val>=5&&val<=10){
        return "Between 5 and 10";
    }else{
        return"Greater than 10";
    }
}

console.log(orderMyLogic(7));
console.log(orderMyLogic(3));
console.log(orderMyLogic(10));

*/
/*
function orderMyLogic(val) {
    if(val<5){
        return"Tiny";
    }else if(val<10){
        return "Small";
    }else if(val<15){
        return"Medium";
    }else if(val<20){
        return"Large";
    }else{
        return "Huge";
    }
}

console.log(orderMyLogic(3));
console.log(orderMyLogic(7));
console.log(orderMyLogic(11));
console.log(orderMyLogic(19));
console.log(orderMyLogic(21));
*/
/*
const names = [
    "Hole-in-one",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!"
];
function golfScore(par, strokes) {
    if(strokes===1 && par ===1){
        return"Tiny";
    }else if(strokes<=(par-2)){
       return names[1];
    }else if(strokes === (par-1)){
        return names[2];
    }else if(strokes === par){
        return names[3];
    }else if(strokes === (par+1)){
        return names[4];
    }else if(strokes === (par+2)){
        return names[5];
    }else if(strokes >= (par+3)){
        return names[6];
    }else{
        return "Change Me";
    }
}

golfScore(5,4);
*/

const option = confirm("Vas andando por el bosque y encuentras una cabaña\n¿Quieres entrar?");
if(option){
    alert("Has entrado en la cabaña y ves tres tazones de avena.\nUno está muy frío, otro muy caliente y otro a la temperatura correcta");
    const taza = confirm('Si eliges el tazón caliente escribe "caliente"\nSi eliges el tazón frío escribe "frío"\nSi eliges el tazón a la temperatura correcta escribe "correcta"');
    switch(taza){
        case "frío":
            alert("El tazón está lleno de avena fría, no te gusta y lo dejas");
            break;
        case "caliente":
                alert("El tazón está lleno de avena caliente, te quemas y lo dejas");
                break;
        case "normal":
                alert("El tazón de avena está delicioso y te lo acabas todo\nSigues a una sala donde encuentras 3 sillas");
                const silla = 
                break;
        default:
            alert("Has elegido mal el tazón");
    }
    

}else{
    alert("Has decidido no entrar en la cabaña.\nTal vez quieras jugar más tarde.");
}