// funcao que foi aidcionada no diretorio /api
// assim esta debaixo do /api/v1/status para ser chamada.
function status(request, response) {
    response.status(200).json({"chave": "valor"})
}

// dizer para o next que queremos usar essa funcao
export default status