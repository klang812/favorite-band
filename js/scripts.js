$(document).ready(function() {
  $("button.btn-light").click(function() {
    $("body").removeClass("dark-background");
    $("body").addClass("light-background");
  });
  $("button.btn-dark").click(function() {
    $("body").removeClass("light-background");
    $("body").addClass("dark-background");
  });
});