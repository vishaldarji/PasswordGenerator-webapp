var btn= document.getElementsByClassName("generate")[0]
var pass=document.getElementById("psbox")
var str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
var length= 10
var copybtn= document.getElementById("button")

var rangeInput = document.getElementById("myRange");
var lengthValueElement = document.getElementById("lengthvalue");


rangeInput.addEventListener("input", updateLengthValue);

function updateLengthValue() {
  var newValue = rangeInput.value;
  lengthValueElement.textContent = newValue;

}

btn.addEventListener("click",clicked)

function clicked() {
    length=parseInt(rangeInput.value);
    var password= generatePassword(str,length)
    pass.innerHTML=password;
}
function generatePassword(str,length) {
    var password="";
   
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
   
   
    var uppercase = document.getElementById("upper").checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    var numbercase = document.getElementById("number").checked ? "0123456789" : "";
    var symbolcase = document.getElementById("symbols").checked ? "!@#$%^&*()" : "";
    
    var combinedcase = uppercase + lowercase + numbercase + symbolcase;
    if (combinedcase==="") {
      combinedcase=lowercase; 
    }
    
    for (let i = 0; i <length; i++) {
        var dom= Math.floor(Math.random()*combinedcase.length);
        password += combinedcase.charAt(dom); 
    }
    return password; 
       
}
// console.log("copy button",copybtn)
copybtn.addEventListener("click",onclicked)
function onclicked(){
  var generatedPassword = pass.innerText.trim();
    
    if (generatedPassword==="Password") {
        alert("Generate a password first!");
        return ;
    }
    navigator.clipboard.writeText(pass.innerText).then(function() {
        // alert('Async: Copying to clipboard was successful!');
        copybtn.innerHTML="COPIED!"
        setTimeout(function(){
        copybtn.innerHTML="COPY"   
        },2000);
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
   
}

