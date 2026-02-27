// funcao que foi aidcionada no diretorio /api
// assim esta debaixo do /api/v1/status para ser chamada.
import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 AS sum;");
  console.log(result.rows)
  response.status(200).json({"chave": "valor"})
}

// dizer para o next que queremos usar essa funcao
export default status;