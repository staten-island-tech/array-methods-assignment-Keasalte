/* const date = new Date();
const year = date.getFullYear();
const object = {
    firstName: "A", 
    lastName: "Cool",
    graduated: false,
    DOB: 2008, 
    siblings: ["Ok"],
    age: function(){
        return year-this.DOB;
    }
}; 

 console.log(object.age());
*/

 const array1 = ['1', '2', '3', '4', '5', ];
 array1.forEach((element) => console.log(element));
 
 const ages = [32, 33, 16, 40];
 
 function checkAdult(ages) {
   if (ages >= 18){
    console.log(ages);
   }
 }

checkAdult();
