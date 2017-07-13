function condenseWords(left, right) { // helper function to check if parts of words match
  for (let i = 0; i < left.length; i++) {
    let leftSubstring = left.substring(i);
    if (right.startsWith(leftSubstring)) {
      return left + right.replace(leftSubstring, '');
    }
  }
  return null;
}

function condenseSentence(string) {
  const words = string.split(' ');
  for (let i = 0; i < words.length - 1; i++) {
    const condensed = condenceWords(words[i], words[i + 1]);
    if (condensed) {
      words[i] = condensed;
      words.splice(i + 1, 1);
      i--;
    }
  }
  return words.join(' ');
}
