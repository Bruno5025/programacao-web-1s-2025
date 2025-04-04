const itens = [];

function adicionar(item){

    if(item_cadastrar(item)){
        itens.push(item);
        return true;
    }
    return false;
}

function listar(){
    return itens;
}

function editar(id, qtd){
    return editar_item(id, qtd);
}

module.exports = {
    adicionar,
    listar,
    editar
}

function numero(n){
    if(isNaN(n) || n == null){
        return false;
    }
    return true;
}

function id_cadastrado(id){
    for(let indice in itens) {
        let item_cadastrado = itens[indice];
        if(item_cadastrado.id == id){
            return true;
        }
    }
    return false;
}

function item_cadastrar(item){
    let item_valido = true;
    
    if(!numero(item.id) || item.id <= 0){
        item_valido = false;
    }

    if(id_cadastrado(item.id)){
        item_valido = false;
    }

    if(!numero(item.qtd) || item.qtd < 0){
        item_valido = false;
    }

    if(item.nome.length < 1){
        item_valido = false;    
    }

    return item_valido;
}

function editar_item(id, qtd){
    console.log(`${id} - ${qtd}`);
    if(!numero(id) || id == 0){
        console.log('id invalido');
        return false;
    }
    if(!id_cadastrado(id)){
        console.log('id n cadastrado');
        return false;
    }
    if(!numero(qtd) || qtd < 0){
        console.log('qtd invalido');
        return false;
    }

    for(let indice in itens){
        let item_cadastrado = itens[indice];
        if(item_cadastrado.id == id){
            item_cadastrado.qtd = qtd;
        }
    }
    return true;
}
