export default function postScore() {
  const form = document.querySelector('#form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const score = document.querySelector('#score').value;

    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/{GAME_ID}/scores/';

    async function postScore(name, score) {
      try {
        const response = await fetch(url.replace('{GAME_ID}', 'WmudvVPIDvaXv4wz9i48'), {
          method: 'POST',
          body: JSON.stringify({ user: name, score }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    postScore(name, score);
  });
}