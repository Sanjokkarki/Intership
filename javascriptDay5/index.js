// const math=80;
// if(math>79){
//     console.log("grade A");
// }else{
//     console.log("grade A-");
// }


// let number= 11;
// if (number %2 == 0){
//     console.log("Even")

// }else{
//     console.log("odd");
// }




// var a=10;
// var b=23;

// var c=a;
// a=b;
// b=c;
// console.log(a,b);

// var text="";
// for(let i=0; i<5; i++){
//     text="The number is " + i + "\n";
// console.log(text);
// }


// var text1="";
// for(let i=0; i<5; i++){
//     for(let j=0; j<5; j++){
//     text+="*";
// console.log(text1);
//     }
// }




const myfunction=(a,b,c)=>{
    var sum= a+b+c;
    console .log(sum);

}

myfunction( 2,3,5);


var number=(num)=>{
    if(num %2==0){
        console.log("Even");
    }
    else{
        console.log("odd");
    }
}
 number(6);




 const errorhandler=()=>{
    try{
        dadalert("welcome felloegeeks");

    }catch(err){
        console.log("404error");
    }
 }
 errorhandler();






const findmygrade=(percentage)=>{
    if(percentage>=90){
        console.log("A");

    }

    else if(percentage>=80) {
        console.log("B");
    }
    else if(percentage>=70) {
        console.log("B-");

    }
};
findmygrade(89);



const license=(age)=>{
    if(age>=18){
        console.log("eligible");

    }else {
        console.log("illigible");
    }
    
} 
license(30);



const intro={
    name:"sanjok karki",
    age: 18,
    weight:"55 kg",
    height:"5.5 feet"
}
const newintro={...intro, age:22,weight:"72kg", height:"5.7feet"};
console.log(intro);
console.log(newintro);