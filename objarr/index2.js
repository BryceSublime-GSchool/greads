
var exclude = document.getElementById("exclude")


$("#buttoni").click(function(){
   getStuff();
  //  $("#redditResults").append("<tr><td"+title+"</tr></td")
});
$("#buttonii").click(function(){
$("#redditResults").empty();
location.reload();
$("tr").remove(":contains('exclude')");
// )
});

$("#delete").click(function(){
 var dlt = document.getElementById('exclude').value;
 $("tr").remove(':contains('+dlt+')');
});

function getStuff(){
  var input = $("#search").val();
  var api_call = input.replace(" ", "%20");

$.ajax({
    url: "https://www.reddit.com/search.json?q="+api_call,
    method: "GET",
    dataType: "json"
  }).done(function(data){
    var children = data["data"]["children"];
    for (var i = 0; i < children.length; i++) {
var title = children[i]["data"]["title"];
var pic = children[i]["data"]["thumbnail"];
var author = children[i]["data"]["author"];
$("#redditResults").append('<tr><td>'+title+'</td>'+'<td><img src="'+pic+'"</td>'+'<td>'+author+'</td></tr>')
}
// console.log(title[i]["data"]["title"]);

var author = data["data"]["children"];
for (var i = 0; i < author.length; i++) {
// console.log(author[i]["data"]["author"]);
}
  });

  getter.fail(function(){
  console.log("We do not have the cookie");

  });
};

// title, image, author
// $("#redditResults").append("<tr><td>"+title+"</td></tr>")
