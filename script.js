
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const modalFinish = document.querySelector('.modal-finish');
  const modalPrize = document.querySelector('.modal-prize');
  const closeBtn = document.querySelector('.modal-close');
  let prize = document.querySelector('.prize');
  const prizes = ['Apple', 'Banana', 'Coffee', 'Nuts', 'Elephant', 
                  'Ginger', 'Melon', 'Million', 'Car', 'Dog', 'Computer',
                  'Plate', 'TV', 'IPhone', 'Shampoo', 'Chair'];
  let deg = 0;
  let counter = 0;

  startButton.addEventListener('click', () => {
    
    if (counter <= 2) {
      
      counter++;
      startButton.style.pointerEvents = 'none';
    
      deg = Math.floor(5000 + Math.random() * 5000);
      
      wheel.style.transition = 'all 10s ease-out';
      
      wheel.style.transform = `rotate(${deg}deg)`;
      
      wheel.classList.add('blur');
    }
    else {
      modalFinish.classList.remove('visually-hidden');
    }
  });

  wheel.addEventListener('transitionend', () => {
    prize.textContent = 'Вы выйграли - ' + prizes[Math.floor(Math.random()*prizes.length)];
    modalPrize.classList.remove('visually-hidden');
    wheel.classList.remove('blur');
    
    startButton.style.pointerEvents = 'auto';
    
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });

  closeBtn.addEventListener('click', () => {
    modalPrize.classList.add('visually-hidden');
  })
})();
