// falso banco de dados de clientesm, em memória RAM
var clientes = []

function adicionar() {
    mostrarModal()
}

function salvar() {
    let nome = document.getElementById("nome").value
    let cpf = document.getElementById("cpf").value
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let dataNascimento = document.getElementById("dataNascimento").value


    let novoBodyBuilder = {
        nome: nome,
        cpf: cpf,
        peso: peso,
        altura: altura,
        dataNascimento: dataNascimento,
    }

    clientes.push(novoBodyBuilder)


    if (nome == "" || peso == "" || altura == "" || dataNascimento == "" || cpf == "") {
        alert("Preencha todos os campos!")
        return false
    }


    mostrarLoading()
    setTimeout(function () {
        ocultarLoading()
        ocultarModal()
        alert("Bodybuilder adicionado com sucesso!")
        document.getElementById("form").reset()
        atualizarLista()
    }, 1500)




    return false
}
function atualizarLista() {

    let tbody = document.getElementsByTagName("tbody")[0]
    tbody.innerHTML = ""

    for (let i = 0; i < clientes.length; i++) {
        let cliente = clientes[i]
        let linhaTabela = document.createElement("tr")
        linhaTabela.innerHTML = `
                <td>${cliente.cpf}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.peso}Kg</td>
                <td>${cliente.altura}m</td>
                <td>${cliente.dataNascimento}</td>
                <td>
                    <button class="alterar" onclick="mostrarModal()">Alterar</button>
                    <button class="excluir" onclick="excluir()">Excluir</button>
                </td>
        `

        tbody.appendChild(linhaTabela)
    }
}

function mostrarLoading() {
    document.getElementById("loading").style.display = "block";
}
function ocultarLoading() {
    document.getElementById("loading").style.display = "none";
}
function mostrarModal() {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("form").reset()
}
function ocultarModal() {
    document.getElementById("modal").style.display = "none";
}
function excluir() {
    if (confirm("Tem certeza que deseja excluir?")) {
        alert("Excluído com sucesso!")
    }
}