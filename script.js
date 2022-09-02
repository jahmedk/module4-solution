(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (let index in names) {
    var firstLetter = names[index].charAt(0);

    if (firstLetter.toLowerCase() === 'j') {
      byeSpeaker.speak(names[index]);
    } else {
      helloSpeaker.speak(names[index]);
    }
  }
})();