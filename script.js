// Kun sivu on latautunut, tämä koodi käynnistyy
$(document).ready(function () {

// Kuunnellaan lomakkeen lähetystä jQueryllä
  $("#todoForm").submit(function (e) {
   e.preventDefault()
    
    
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
    }

  
else if (tehtava.length < 3) {
$("#task").css("border", "2px solid red");
$("#errorviesti").text("Tehtävän pitää olla vähintään 3 merkkiä!");
valid = false;
    }

// Jos tarkistus epäonnistuu, tehtävää ei lisätä listaan
if (!valid) {
    return;
  }

// Luodaan uusi listaelementti jQueryllä
let uusiTehtava = $("<li></li>");
uusiTehtava.addClass("list-group-item d-flex justify-content-between align-items-center");

// Luodaan tehtävän teksti
let tehtavaTeksti = $("<span></span>");
tehtavaTeksti.text(tehtava);

// Luodaan nappien alue
let nappiAlue = $("<div></div>");

  let tehtyNappi = document.createElement("button");
  tehtyNappi.innerText = "Tehty";
  tehtyNappi.type = "button";
  tehtyNappi.className = "btn btn-success btn-sm ms-2";


  tehtyNappi.onclick = function () {
    tehtavaTeksti.style.textDecoration = "line-through";
  };

  //Luodaan poista nappi 
  let poistaNappi = document.createElement("button");
  poistaNappi.innerText = "Poista";
  poistaNappi.type = "button";
  poistaNappi.className = "btn btn-danger btn-sm ms-2";

  poistaNappi.onclick = function () {
    uusiTehtava.remove();
  };

  uusiTehtava.appendChild(tehtavaTeksti);
  uusiTehtava.appendChild(tehtyNappi);
  uusiTehtava.appendChild(poistaNappi);

    // Lisätään uusi tehtävä listaan
  document.getElementById("list").appendChild(uusiTehtava);


  // Tyhjentää syöttökentän uuden lisäyksen jälkeen

  document.getElementById("task").value = "";
}
