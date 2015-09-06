console.log("storage");
var name = localStorage.username;
name = localStorage["username"];
if (!name) {
    name = prompt("What is your name?");
    localStorage.username = name;
}

for(var name in localStorage){
    var value = localStorage[name];
    console.log(name+"----"+value);
}