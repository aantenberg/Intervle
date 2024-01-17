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