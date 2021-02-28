$(document).ready(function () {
  $("#development-image").click(function () {
    $("#development-image").slideDown('1500').hide('1000');
    $("#development").show('1500');
  });
  $("#development").click(function () {
    $("#development").slideUp('1500');
    $("#development-image").slideDown('1500');
  });
  $("#design-image").click(function () {
    $("#design-image").slideDown('1500').hide('1000');
    $("#design").show('1500');
  });
  $("#design").click(function () {
    $("#design").slideUp('1500');
    $("#design-image").slideDown('1500');
  });
  $("#product-image").click(function () {
    $("#product-image").slideDown('1500').hide('1000');
    $("#product").show('1500');
  });
  $("#product").click(function () {
    $("#product").slideUp('1500');
    $("#product-image").slideDown('1500');
  });

  $("#work2").hover(function(){
    $(".overlay2",this).toggle();
  });
  $("#work1").hover(function () {
    $(".overlay1", this).toggle();
  });
  $("#work3").hover(function () {
    $(".overlay3", this).toggle();
  });
  $("#work4").hover(function () {
    $(".overlay4", this).toggle();
  });
  $("#work5").hover(function () {
    $(".overlay5", this).toggle();
  });
  $("#work6").hover(function () {
    $(".overlay6", this).toggle();
  });
  $("#work7").hover(function () {
    $(".overlay7", this).toggle();
  });
  $("#work8").hover(function () {
    $(".overlay8", this).toggle();
  });


  $("form#mc-embedded-subscribe-form").submit(function (event) {
    var name = $("input#mce-NAME").val();
    var email = $("input#mce-EMAIL").val();
    var message = $("input#mc-embedded-subscribe").val();
    if ($("input#mce-NAME").val() && $("input#mce-EMAIL").val()) {
      alert(name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }

  });
});
