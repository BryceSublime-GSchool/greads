//
// profiles = [{name: "John", age: "22", city: "Denver"},
// {name: "Scott", age: "55", city: "Boulder"},
// {name: "Amanda", age: "30", city: "Austin"}
// ]
//
// for (var i = 0; i < profiles.length; i++) {
//  var local_obj = profiles[i];
//  for (p in local_obj){
//    document.writeln(local_obj[p]);
//  }
//  document.writeln("<br>");
// }


var profiles = [{firstName: "Bryce", lastName:"Leonard", age:30, State:"CO"},
{firstName: "Jeff", lastName:"Lebowski", age:68, State:"CA"}]

for (var i = 0; i < profiles.length; i++) {
 var local_obj = profiles[i];
 for (p in local_obj){
   document.writeln(local_obj[p]);
 }
 document.writeln("<br>");
}


var fruits = {citris: ["lemon", "orange", "lime"], sweet: ["blueberry", "strawberry", "watermelon"], exotic:["star", "mango", "guava"]};
 document.writeln("<br>");
 document.writeln("<br>");

 for (fruit in fruits){
   document.writeln(fruit+":");
   for (var i = 0; i < fruits[fruit].length; i++) {
     var inside = fruits[fruit];
     document.writeln("<li>"+inside[i]+"</li>")
   }
 };
