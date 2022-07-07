const cards = document.querySelectorAll('.card');

for(let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => {
    removeActive();
    cards[i].classList.add('active');
  } );
}



function removeActive() {
  for(let i = 0; i < cards.length; i++) {
    cards[i].classList.remove('active');
  }
}

