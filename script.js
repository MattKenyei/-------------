function read(){
    var a =  new SpeechSynthesisUtterance('Lorem ipsum dolor sit amet consectetur adipisicing.');
    a.lang = "en-US";
    speechSynthesis.speak(a);       
}
function stop(){
    speechSynthesis.pause();
}