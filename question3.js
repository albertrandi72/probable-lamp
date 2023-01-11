function checkReverseText(normalText, reverseText) {
  let j = 0;
  for (let i = reverseText.length - 1; i >= 0; i--) {
    if (reverseText.charAt(i) != normalText.charAt(j++)) return false;
  }
  return true;
}
module.exports = {
  checkReverseText,
};
