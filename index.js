var create = function(url, username, content) {
var url = url
var img = ""
var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(xhr.status);
    console.log(xhr.responseText);
  }
};

var data = '{"content": content, "username": username}';

xhr.send(data);

}
module.export = {
create: create
}
