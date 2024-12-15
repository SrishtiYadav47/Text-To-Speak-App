//window.alert("hii");
var text=document.getElementById("txt");
function speak(){
   // window.alert();
   var t=text.value.trim();
   //window.alert(t);
   if(t!==''){
var speech= new SpeechSynthesisUtterance(t);
speech.lang="HI-in";
 window.speechSynthesis.speak(speech);
   }
   else{
    alert("Please enter somthing ");
   }
}