function adicionar(){
    mostrarModal()
}

function salvar(){
    mostrarLoading()
    setTimeout (function () {
        ocultarLoading()
        ocultarModal()
    }, 1500)
    return false
    }

    function mostrarLoading() {
        document.getElementById("loading").style.display = "block";
    }
    function ocultarLoading() {
        document.getElementById("loading").style.display = "none";
    }
    function mostrarModal(){
        document.getElementById("modal").style.display = "flex";
    }
    function ocultarModal(){
        document.getElementById("modal").style.display = "none";
    }   
    function excluir(){
        if(confirm("Tem certeza que deseja excluir?")){
            alert("Excluído com sucesso!")
    }
    }