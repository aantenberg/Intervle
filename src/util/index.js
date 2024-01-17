export const MAX_GUESSES = 6;

const hashCode = (s) => {
  var h = 0, l = s.length, i = 0;
  if ( l > 0 )
    while (i < l)    
      h = (h << 5) - h + s.charCodeAt(i++) | 0;
  return h;
}

export const getAnswerForDate = (formattedDate) => {
  const stringToHash = formattedDate + "noise" + formattedDate;
  return 1 + Math.abs(hashCode(stringToHash) % 100) / 10;
}

const thresholds = [0.51, 2.01]

// Returns a rating of the guess. A rating of 0 means you are within the 0th threshold of the answer.
// A rating of 1 means your guess is above the answer, within the 1st threshold.
// A rating of -1 means your guess is below the answer, within the 1st threshold. etc.
export const getGuessScore = (guess, answer) => {
  const difference = guess - answer;
  const absDifference = Math.abs(difference);
  const sign = difference / absDifference;
  let score = 0;
  for (const threshold of thresholds) {
    if (absDifference < threshold) {
      return score * sign;
    }
    score++;
  }
  return score * sign;
}