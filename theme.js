const THEME = {
  primary_color: "red"
}

$(document).ready(function () {
  $(".container1 > div, .container2 > div, .container3 > div").css("background-color", THEME["primary_color"]);
  $(".sidenav > li.active > a").css("background-color", THEME["primary_color"]);
});