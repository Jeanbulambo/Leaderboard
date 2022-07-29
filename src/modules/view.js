const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3hT6s3p983cdy7Rfoa9E/scores/';

const arrangeData = async () => {
  const response = await fetch(URL);
  const scores = await response.json();
  return scores;
};

const showData = async (player, scores) => {
  const answer = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: player, score: scores }),
  });
  const score = answer.json();
  return score;
};

export { arrangeData, showData };