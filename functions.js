const body = document.body;
const animationContainer = document.querySelector('.animation-container');
const holloweenTitleDiv = document.querySelector('.holloweenTitle.animation-container');
const currentDate = new Date();
const isChristmas = currentDate.getMonth() === 11 && currentDate.getDate() >= 24 && currentDate.getDate() <= 26;
const isHalloween = currentDate.getMonth() === 9 && currentDate.getDate() === 31;
const buttonG = document.getElementById('buttonG');
buttonG.addEventListener('click', () => {
  const audioG = new Audio('click_sound.mp3');
  audioG.play();
});
const buttonM = document.getElementById('buttonG');
buttonM.addEventListener('click', () => {
  const audioM = new Audio('click_sound.mp3');
  audioM.play();
});
if (isChristmas) {
  body.classList.add('christmas');
  body.classList.remove('halloween', 'default');
  holloweenTitleDiv.style.display = 'none';
} else if (isHalloween) {
  body.classList.add('halloween');
  body.classList.remove('christmas', 'default');
  holloweenTitleDiv.style.display = 'block';
} else {
  body.classList.add('default');
  body.classList.remove('christmas', 'halloween');
  holloweenTitleDiv.style.display = 'block';
}