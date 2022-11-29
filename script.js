document.querySelector('#pressione').onclick = function(){
    if(document.querySelector('#novatarefa input').value.length == 0){
        alert("Por favor escreva uma nova tarefa")
    }
    else{
        document.querySelector('#tarefas').innerHTML += `
            <div class="tarefa">
                <span id="nometarefa">
                    ${document.querySelector('#novatarefa input').value}
                </span>
                <button class="deletar">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var segtarefas = document.querySelectorAll(".deletar");
        for(var i=0; i<segtarefas.length; i++){
            segtarefas[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tarefas = document.querySelectorAll(".tarefa");
        for(var i=0; i<tarefas.length; i++){
            tarefas[i].onclick = function(){
                this.classList.toggle('completo');
            }
        }

        document.querySelector("#novatarefa input").value = "";
    }
    function cadastrar(){
      
        document.getElementById('tudo').style.display="block";
  
      }
        function exibir(){
        
          document.getElementById('tudo').style.display="none";
          
  
        }

        function envia(){
            var ad = document.getElementById("ad");
            var login = document.getElementById("login").value;
            var nome = document.getElementById("name").value;
            var senha = document.getElementById("senha").value;
            var verify = document.getElementById("confirmarsenha").value;
            var email = document.getElementById("email").value;
            var testa =0;
            console.log("foi");
            if (email.includes('@')){
              var testa = 1;
            }else{
              testa=2
            }
      
             if (login.length < 10){  
               
               ad.innerHTML+="login tem menos de 10 letras!!"+"<br>";    
             }
             if(nome.length > 10){
              
               ad.innerHTML+="Nome tem mais de 10 letras!!"+"<br>";        
             }
             if  (senha!==verify ){
              ad.innerHTML+="Senhas não coincidem!"+"<br>";
             }
             if (testa==2) {
              ad.innerHTML+="Email não tem @!!";
             }
            if((login.length >= 10) && (nome.length <= 10) && (senha ==verify) && (testa!==2)) {
              document.getElementById("to-do").style.display="block";
              document.getElementById("register").style.display="none";
      
            }
             
          }
          
  



        function user(){

            var ad = document.getElementById("ad");
            var login = document.getElementById("login").value;
            var nome = document.getElementById("nome").value;
            var senha = document.getElementById("senha").value;
            var verificar = document.getElementById("confirmarsenha").value;
            var email = document.getElementById("email").value;

            user.innerHTML= "Nome: "+ nome +'<br>'+ '<hr>'+
            "Login: "+ login +'<br>'+ '<hr>'+
            "Senha: "+ senha +'<br>'+'<hr>'+
           "Email: "+ email ;
        
        }
}
