export default function getScore() {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/')
    .then((response) => response.json())
    .then((data) => {
      const leaderboard = document.getElementById('leaderboard');

      data.result.forEach((score) => {
        const li = document.createElement('li');
        li.textContent = `${score.user}: ${score.score}`;
        leaderboard.appendChild(li);
      });
    })
    .catch((error) => console.error(error));
}