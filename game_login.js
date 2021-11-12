var player1=document.getElementById("player1").value
var player2=document.getElementById("player2").value
function adduser(){
var player1=document.getElementById("player1").value
var player2=document.getElementById("player2").value
localStorage.setItem("myplayer1",player1)
localStorage.setItem("myplayer2",player2)
window.location = "game_page.html";
}