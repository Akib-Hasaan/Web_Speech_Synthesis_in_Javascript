//  WEB SPEECH SYNTHESIS (Starting)

var manushjon = ["John", "Bob", "Mike", "Jack"];

function greetings(manush) {
let utterance = new SpeechSynthesisUtterance(`Welcome ${manush}`);
speechSynthesis.speak(utterance);
}

for ( let i = 0; i < manushjon.length; i++){
   greetings(manushjon[i])
}

//  WEB SPEECH SYNTHESIS (Ending)