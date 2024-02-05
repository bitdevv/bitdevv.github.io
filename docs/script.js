function toggleCardClass(clickedLi) {
    // Get the index of the clicked li
    var index = Array.from(clickedLi.parentNode.children).indexOf(clickedLi);
  
    // Get all cards
    var cards = document.querySelectorAll('.card');
  
    // Remove 'selected' class from all cards
    cards.forEach(function(card) {
      card.classList.remove('selected');
    });
  
    // Add 'selected' class to the clicked card
    cards[index].classList.add('selected');
      // Scroll the selected card into view
  cards[index].scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
  }
  
  function goToInfo(clickedLi){
    var index = Array.from(clickedLi.parentNode.children).indexOf(clickedLi);
    var infos = document.querySelectorAll('.info');
    infos[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
