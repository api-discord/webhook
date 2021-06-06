var create = function() {
var url = "var img = "hmens850839687336951889/850840835196321802/26f6aaba773.jg"
var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(xhr.status);
    console.log(xhr.responseText);
  }
};

var data = '{"content": "go", "username": "discord api", "avatar_url": "https://cdn.discordapp.com/attachments/850839687336951889/850840835196321802/926f6aaba773.jpg" }';

xhr.send(data);

}
