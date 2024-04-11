function number(){

   var v= document.getElementById("abc").value
   if(v%2==0){
    document.getElementById("result").innerHTML="The number is Even"
   }
   else{
      document.getElementById("result").innerHTML="The number is Odd"
   }
}