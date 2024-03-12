function shout(string) {
    return string;
  }
  "Hello!".toUpperCase(); // 'HELLO!'
  function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string;
  }
  "whisper!".toLowerCase(); // 'whisper!'
  function whisper(string) {
    return string.toLowerCase();
  }
 function logShout(string){
    console.log(string.toUpperCase())

 }
 function logWhisper(string){
    console.log(string.toLowerCase())
 }
  function sayHiToHeadphonedRoommate(string) {
    if (typeof string === 'string'){
        if (string === string.toLowerCase()) {
            console.log("I can't hear you!");
            return "I can't hear you!";
        }
    
    else if (string === string.toUpperCase()) {
        console.log('YES INDEED!');
        return 'YES INDEED!';
    }
    else {console.log("I would love to!");
        return "I would love to!";
    }
  }
}