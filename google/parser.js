var input = "https://www.myawesomething.com/index.html?full_name=Therese+Blogoyavich&age=44&location=San+Francisco"

function queryParser(query) {
  query = query.substr(query.lastIndexOf("?")+1);
  query = query.split("&");
  var results = {};
  query.forEach(function(pairs){
    pairs=pairs.split("=");
    var key =pairs[0];
    var value= pairs[1].replace("+", " ");
    results[key] = value;

  console.log(key);
  console.log(value);
  })
  return  results;

}

console.log(queryParser(input));
