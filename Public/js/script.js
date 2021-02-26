function balikString(word) {
  var str = word.split("");
  var kata = "";
  for (var i = str.length - 1; i >= 0; i--) {
    kata += str[i];
  }
  return kata;
}

// Driver Code, jangan diganggu!
var formBalikString = document.getElementById("balikString");
formBalikString.addEventListener("submit", function (e) {
  e.preventDefault();
  var word = document.getElementById("word").value;
  var reverseWord = balikString(word);
  var hasil;
  if (word.toLowerCase() == reverseWord.toLowerCase()) {
    hasil = "<b>Palindrom</b> <br> <br> (Karena Saat Dibalik Katanya Sama)";
  } else {
    hasil =
      "<b>Bukan Palindrom</b><br> <br>(Karena Saat Dibalik Katanya Berbeda)";
  }

  document.getElementById("demo").innerHTML = hasil;
});
