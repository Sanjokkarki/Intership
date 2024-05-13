// var age = 40
// console .log(age);



// var name =" sanjok karki" ;
// var address = "chitwan";
// var age = 22 ;
//  console.log( `My name is ${name}  i live in ${address} i am ${ age}year old`);


const intro={
    firstName: " Sanjok",
    lastName:"karki",
    Age: 22,
    description:"Brown complex boy with black eyes ",
    address: "Bharatpur-10,chitwan",
    fullName:function(){
        return this.firstName+ "  "+this.lastName;
    },

}

 console.log(intro.fullName());