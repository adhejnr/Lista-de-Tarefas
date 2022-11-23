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
    function Cadastrar(){
 
        document.getElementById('tudo').style.display="block";
 
      }
        function Exibir(){
 
          document.getElementById('tudo').style.display="none";
 
 
        }
}
