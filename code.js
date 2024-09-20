function calculateSum() {
  let limit = document.getElementById("limit").value;
  limit = Number(limit); 
  let result = ''; 
 
  for (let i = 1; i <= limit; i++) {
      for (let l = 1; l <= i; l++) {
          result += "*"; 
      }
      result += "<br>";  
  }

 
  document.getElementById("result").innerHTML = result;
}
   


   

  


    
   
  


  