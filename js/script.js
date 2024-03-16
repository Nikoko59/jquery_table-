// $(document).ready(function(){

// 	//$('tr:even').css('background', 'grey');
// 	//$('tr:eq(2)').css('background', 'grey');
// 	//$('tr:first').css('background', 'grey');
// 	//$('tr:gt(2)').css('background', 'grey');
// 	//$(':header').css('color', '#f55');
// 	//$('tr:last').css('background','grey');
// 	$('tr:lt(2)').css('background','grey');
// });

$(function () {
  //   $("tr:even").css({
  //     background: "orange",
  //     color: "#070142",
  //   });

  let tit = $("h1");

  $("tr:first").css({
    background: "orange",
  });

  let btn = $("#btn").css({
    background: "red",
    color: "black",
    fontSize: " 1.5rem",
  });

  $(btn).click(function () {
    $("tr:first").css({
      background: "#55b6e4",
      color: "white",
      transition: "0.5s ease-in",
    });
    $("tr:gt(2)").css({
      background: "orange",
      color: "green",
    });

    $(tit).css({
      color: "blue",
      textAlign: "center",
    });
    $(tit).text("Tableau sous Jquery");
  });
  $(btn).css({
    background: "orange",
    color: "#070142",
  });

  let nav = $(".navbar-brand");
  $("nav").text("Les tableaux en Jquery");
  $("nav").css({
    color: "white",
    background: "orange",
    padding: "10px",
    textAlign: "center",
    "font-size": "1.7rem",
  });

  let magic = $("#btn2");
  $(magic).css({
    background: "red",
    color: "black",
  });
  $(magic).click(function () {
    $(btn).css({
      background: "#070142",
      color: "orange",
    });
    $("tr:even").css({
      background: "#070142",
      color: "orange",
    });
    $("tr:odd").css({
      background: "orange",
      color: "#070142",
    });
    $(tit).text("Modifier les couleurs avec Jquery");
    $(tit).css({
      textAlign: "center",
      color: "orange",
      background: "#070142",
      padding: "10px",
      borderRadius: "20px",
    });
  });
});

//  even nonmbre pair
//  odd equal impair number
