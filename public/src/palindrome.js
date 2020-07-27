
/* Palindrome Checker */
$(document).ready(function() {

     $('#submit').click(function(e){
        e.preventDefault();

word =  $("#palin").val()


function palindrom(str) {
  
 //reverse string to lower case
 sm_str = str.toLowerCase()
 //remove all special characters
 nochar_str = sm_str.replace(/[^a-zA-Z ]/g, "")   
 //reverse string
  split_str = nochar_str.split("");
  revers_str = split_str.reverse();
  reversed = revers_str.join("") 
  console.log(word,"|",reversed)
 //Check if string is equal to reversed string
 if (sm_str == reversed)
 {
    message = "This is a pallendrom!"

 }
    
else{
    message = "This is not a pallendrom!" 
}

//console.log(reversed)
return message
}

palindrom(word)

//console.log(message)

//$('#test').html(message);
document.getElementById("test").innerHTML = message
});
     
});


