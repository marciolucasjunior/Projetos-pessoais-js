let vermelho = document.getElementsByClassName('vermelho')[0];
let amarelo = document.getElementsByClassName('amarelo')[0];
let verde = document.getElementsByClassName('verde')[0];

var soma = 0;











 function carregar() {

 
setInterval(function() {





        verde.style.background = 'black';
        amarelo.style.background = 'black';
        vermelho.style.background = 'black';
        
        
        
        
},1000);

  setInterval(function() {
    
    var cronometro = document.getElementById('cronometro');
    soma += + 1  ;
    cronometro.innerHTML = soma

    if (soma == 15) {
          
        vermelho.style.background = 'red';
  
        soma = 0
    } else if (soma >= 0 && soma < 5) {
         
        vermelho.style.background = 'red';
  


    } else if (soma >= 5 && soma < 10) {

        verde.style.background = 'green';

    } else if (soma >= 10 && soma < 15) {
        
        
        amarelo.style.background = 'yellow';
     

    }


     
    
   
    



  },1000);


}



