export default function postScore() {
  const form = document.querySelector('#form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const score = document.querySelector('#score').value;

    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/{GAME_ID}/scores/';

    fetch(url.replace('{GAME_ID}', 'Zl4d7IVkemOTTVg2fUdz'), {
      method: 'POST',
      body: JSON.stringify({ user: name, score: score }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
}