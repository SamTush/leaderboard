const yourName = document.querySelector('#yourName');
const yourScore = document.querySelector('#yourScore');
const submitBtn = document.querySelector('#submit');
const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';

async function getISS() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
});

export {
  yourName,
  yourScore,
  getISS,
};
