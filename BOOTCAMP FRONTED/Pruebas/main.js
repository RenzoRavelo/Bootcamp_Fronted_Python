let numero1 = 20.5 ;
let numero2 = 30.5 ;

let suma = numero1.toString() + numero2.toString() ;

console.log("la suma es", typeof suma, suma)



let edad = 20;
if (edad >= 18) {
    console.log("puede pasar");
} else {
    console.log("no puede pasar");
}

console.log ("bab" < "bed");
console.log ("a" > "b")



let num=8;

if (num > 10){
    console.log("eres un 10");
    if (num < 20){
    console.log("eres un chucha");
    }
}




let time=2;

if (time > 10) {
    console.log("sorry babe 10");
} else if (time <1){
    console.log("good baby 30");
}else{
    console.log("gretta");
}


let choice=5;

switch(choice){
    case 1:
        console.log("spot 1");
        break;
    case 2:
        console.log("break 2");
        break;
    case 3:
        console.log("punch 3");
        break;
    default:
        console.log("ttte")
} 



let age = 40;

let myAge = (age < 20)? "you win" : "you lose";
console.log(myAge);


for (let i=1; i<=5; i++){
    console.log(i);
}


{
    let x=2;
    for (let i=0; i<=5; i++){
        x+=i;//suma las respuestas
    }
        console.log(x);
} //17


{
    for(let i=5; i>=1; i-=1) {
        console.log(`bullets: ${i}`);
    }
}


{
    let i = 5;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}

{
    let i = 1;
    do {
        console.log(i);
        i++;
    }
    while (i <= 5);
}

{
    for( let i= 0; i<=10; i++) {
        if(i==3) {
            break;
        }
        console.log(i);
    }
}


{
    for (let i= 5; i<20; i++) {
        if (i == 15 ) {
        continue;
    }
    console.log(i)
    }
}



{
    for( let i=0; i<5; i++) {
        if (i==3){
            continue;
        }
        console.log(i);
    }
}


{
    function login() {
        console.log("Hi!");
    }

    login();
    login();
}

{
    function login(user) {
        console.log("Hi, "+user);
    }

    login ("renzo");
    login("karen");
}


{
    function login(user) {
        console.log("Hi " + user);
    }
        let myUser = "REN";
        login (myUser);
}

{
    function discount(purchase){
        if (purchase <=1500){
            purchase *=0.85;
        }
        console.log(purchase);
    }
    discount(1900);
    discount(1200);

}

{
    function add(x,y){
        return x + y;
    }
    let result = add(5,6);
    console.log(result);
}
