var bannedName = "Vader";


function processNames(names, banned){
  var newarray = names.filter(function(yyy){
return name !== banned;

  });
  return newarray ;
}



var names = ["scott", "mike", "stuart", "bannana", "Vader", "Jake"];

console.log(processNames(names, bannedName));
