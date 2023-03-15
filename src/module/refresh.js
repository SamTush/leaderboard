export default function getScore() {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WmudvVPIDvaXv4wz9i48/scores/')
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // prints the leaderboard data
      const leaderboard = document.getElementById('leaderboard');

      data.result.forEach((score) => {
        const li = document.createElement('li');
        li.textContent = `${score.user}: ${score.score}`;
        leaderboard.appendChild(li);
      });
    })
    .catch((error) => console.error(error));
}
