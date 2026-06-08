// Kun sivu on latautunut, tämä koodi käynnistyy
$(document).ready(function () {
  // Kuunnellaan lomakkeen lähetystä jQueryllä
  $("#todoForm").submit(function (e) {
    e.preventDefault();

    // Nollataan aikaisemmat virheet
    $("#errorviesti").text("");
    $("#task").css("border", "");

    // Haetaan käyttäjän kirjoittama tehtävä
    let tehtava = $("#task").val().trim();
    let valid = true;

    // Tarkistetaan, että kenttä ei ole tyhjä tai liian lyhyt
    if (tehtava === "") {
      $("#task").css("border", "2px solid red");
      $("#errorviesti").text("Kenttä ei saa olla tyhjä!");
      valid = false;
    } else if (tehtava.length < 3) {
      $("#task").css("border", "2px solid red");
      $("#errorviesti").text("Tehtävän pitää olla vähintään 3 merkkiä!");
      valid = false;
    }

    // Jos tarkistus epäonnistuu, tehtävää ei lisätä listaan
    if (!valid) {
      return;
    }

    //uusi listaelementti jQueryllä
    let uusiTehtava = $("<li></li>");
    uusiTehtava.addClass(
      "list-group-item d-flex justify-content-between align-items-center",
    );

    //tehtävän teksti
    let tehtavaTeksti = $("<span></span>");
    tehtavaTeksti.text(tehtava);

    //Napin alue
    let nappiAlue = $("<div></div>");

    //Tehty-nappi
    let tehtyNappi = $("<button></button>");
    tehtyNappi.text("Tehty");
    tehtyNappi.addClass("btn btn-success btn-sm ms-2");

    // Poista-nappi
    let poistaNappi = $("<button></button>");
    poistaNappi.text("Poista");
    poistaNappi.addClass("btn btn-danger btn-sm ms-2");

    //Tehvän yliviivaus
    tehtyNappi.click(function () {
      tehtavaTeksti.css("text-decoration", "line-through");
    });

    // Kun Poista-nappia painetaan, tehtävä poistetaan
    poistaNappi.click(function () {
      uusiTehtava.fadeOut(300, function () {
        uusiTehtava.remove();
      });
    });

    // Lisää napit nappialueeseen
    nappiAlue.append(tehtyNappi);
    nappiAlue.append(poistaNappi);

    // Lisää tekstin ja napit listaelementtiin
    uusiTehtava.append(tehtavaTeksti);
    uusiTehtava.append(nappiAlue);

    // uusi tehtävä listaan
    $("#list").append(uusiTehtava);

    // Näytetään uusi tehtävä pienellä efektillä
    uusiTehtava.hide().fadeIn(300);

    // Tyhjentää input-kentän
    $("#task").val("");
  });
});
