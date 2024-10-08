function adicionar(){
    mostrarModal()
}

function salvar(){
    let nome = document.getElementById("nome").value
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let dataNascimento = document.getElementById("dataNascimento").value
    let cpf = document.getElementById("cpf").value

    if (nome == "" || peso == "" || altura == "" || dataNascimento == "" || cpf == ""){
        alert("Preencha todos os campos!")
        return false
    }
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