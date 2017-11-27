
var logo = true;
function switchLogo() {
   if (logo) {
      logo = false;
      var div = document.getElementById("logoDiv");
      div.innerHTML = "Irene"
   } else {
      logo = true;
      var div = document.getElementById("logoDiv");
      div.innerHTML = "facebook"
   }
}
