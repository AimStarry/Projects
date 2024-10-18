function myFunction() {
    var input, filter, cards, cardContainer, title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("recipe-cards");
    cards = cardContainer.getElementsByClassName("recipe-card");

    for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector("#recipe-name");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } 
      else {
        cards[i].style.display = "none";
      }
    }
  }
  

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  
  hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  });
  
  document.querySelectorAll(".nav-link").forEach(n => 
      n.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
      })
  );
  