// Estetää lomakkeen "normaali" lähetys, tarkistetaan tiedot itse JavaScriptillä
function validateForm(e) {
  e.preventDefault();


  // Nollataan aikaisemmat virheet: errorviesti ja punaiset reunat 
  document.getElementById("errorviesti").innerText = "";
  document.getElementById("task").style.border = "";

  let tehtava = document.getElementById("task").value.trim();
  let valid = true;

    // Tarkistetaan, että kenttä ei ole tyhjä tai liian lyhyt

  if (tehtava === "") {
    document.getElementById("task").style.border = "2px solid red";
    document.getElementById("errorviesti").innerText =
      "Kenttä ei saa olla tyhjä!";
    valid = false;
  } else if (tehtava.length < 3) {
    document.getElementById("task").style.border = "2px solid red";
    document.getElementById("errorviesti").innerText =
      "Tehtävän pitää olla vähintään 3 merkkiä!";
    valid = false;
    // Jos tarkistus epäonnistuu, tehtävää ei lisätä listaan
  }
  if (!valid) {
    return;
  }

  let uusiTehtava = document.createElement("li");

  // Luodaan tehtävän teksti ja lisätään siihen käyttäjän kirjoittama sisältö
  let tehtavaTeksti = document.createElement("span");
  tehtavaTeksti.innerText = tehtava;

  //Luodaan tehty nappi

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
