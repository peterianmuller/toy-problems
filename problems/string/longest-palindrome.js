const longestPalindrome = str => {
  if (str.length <= 1) {
    return str;
  }
  let longest = str.slice(0, 1);
  for (let i = 0; i < str.length; i++) {
    let temp = expand(str, i, i);
    if (temp.length > longest.length) {
      longest = temp;
    }
    // need to check if current center is two characters
    temp = expand(str, i, i + 1);
    if (temp.length > longest.length) {
      longest = temp;
    }
  }
  return longest;
};

const expand = (string, start, end) => {
  while (start >= 0 && end <= string.length - 1 && string[start] === string[end]) {
    start--;
    end++;
  }
  return string.slice(start + 1, end);
};
module.exports = { expand: expand, longestPalindrome: longestPalindrome };
