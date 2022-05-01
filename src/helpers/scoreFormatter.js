export function scoreFormatter(score) {
  let scoreColor;
  if (score < 7) {
    scoreColor = 'text-danger';
  } else if (score >= 7 && score < 7.5) {
    scoreColor = 'text-info';
  } else {
    scoreColor = 'text-success';
  }

  return scoreColor;
}
