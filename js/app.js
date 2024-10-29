// falso banco de dados de clientes, em memória RAM
var clientes = []
var clienteAlterado = null

function adicionar() {
    clienteAlterado = null
    mostrarModal()
    limparFormulario()
}

function salvar() {
    let nome = document.getElementById("nome").value
    let cpf = document.getElementById("cpf").value
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let dataNascimento = document.getElementById("dataNascimento").value
    let sapato = document.getElementById("sapato").value
    let celular = document.getElementById("celular").value
    let whatsapp = document.getElementById("whatsapp").value
    let imc = document.getElementById("imc").value


    let novoBodyBuilder = {
        nome: nome,
        cpf: cpf,
        peso: peso,
        altura: altura,
        dataNascimento: dataNascimento,
        sapato: sapato,
        celular: celular,
        whatsapp: whatsapp,
        imc: imc
    }




    if (nome == "" || peso == "" || altura == "" || dataNascimento == "" || cpf == "" || sapato == "" || celular == "" || whatsapp == "" || imc == "") {
        alert("Preencha todos os campos!")
        return false
    }

    //se clienteAlterado == null, então está adicionando um novo cliente
    if (clienteAlterado == null) {

        //adiciona o bodyBuilder na lista de clientes
        clientes.push(novoBodyBuilder)


        mostrarLoading()
        setTimeout(function () {
            ocultarLoading()
            ocultarModal()
            alert("Bodybuilder adicionado com sucesso!")
            limparFormulario()
            atualizarLista()
        }, 1500)
    } else {//se não, está alterando um cliente
        clienteAlterado.nome = nome
        clienteAlterado.peso = peso
        clienteAlterado.altura = altura
        clienteAlterado.dataNascimento = dataNascimento
        clienteAlterado.sapato = sapato
        clienteAlterado.celular = celular
        clienteAlterado.whatsapp = whatsapp
        clienteAlterado.imc = imc



        mostrarLoading()
        setTimeout(function () {
            ocultarLoading()
            ocultarModal()
            alert("Bodybuilder alterado com sucesso!")
            limparFormulario()
            atualizarLista()
        }, 1500)
    }


    return false
}

function limparFormulario() {
    document.getElementById("form").reset()
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
                <td>${cliente.sapato}</td>
                <td>${cliente.celular}</td>
                <td>${cliente.whatsapp}</td>
                <td>${cliente.imc}</td>
                <td>
                    <button class="alterar" onclick="alterar('${cliente.cpf}')">Alterar</button>
                    <button class="excluir" onclick="excluir('${cliente.cpf}')">Excluir</button>
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
}
function ocultarModal() {
    document.getElementById("modal").style.display = "none";
}
function excluir(cpf) {
    if (confirm("Tem certeza que deseja excluir?")) {
        for (let i = 0; i < clientes.length; i++) {
            let cliente = clientes[i]

            if (cliente.cpf == cpf) {
                clientes.splice(i, 1)
                alert("Excluído com sucesso!")
                atualizarLista()
            }
        }

    }
}
function alterar(cpf) {
    //busca o cliente a ser alterado
    for (let i = 0; i < clientes.length; i++) {
        let cliente = clientes[i]
        if (cliente.cpf == cpf) {
            document.getElementById("nome").value = cliente.nome
            document.getElementById("cpf").value = cliente.cpf
            document.getElementById("peso").value = cliente.peso
            document.getElementById("altura").value = cliente.altura
            document.getElementById("dataNascimento").value = cliente.dataNascimento
            document.getElementById("sapato").value = cliente.sapato
            document.getElementById("celular").value = cliente.celular
            document.getElementById("whatsapp").value = cliente.whatsapp
            clienteAlterado = cliente
            mostrarModal()
        }
    }
}


