const express = require('express');
const app = express();

const sites = [];
app.use(express.json());

app.get('/', (req, res) => {
  res.send(JSON.stringify(sites));
});

app.post('/', (requisicao, resposta) => {
  try {
    if (!requisicao.body.URL || !requisicao.body.dataDeAcesso) {
      throw new Error('Campos invalidos');
    }
    const site = {
      URL: requisicao.body.URL,
      dataDeAcesso: requisicao.body.dataDeAcesso,
    };
    sites.push(site);
    resposta.status(201);
    resposta.send(JSON.stringify(site));
  } catch (erro) {
    resposta.status(400);
    resposta.send(JSON.stringify({ Error: erro.message }));
  }
});

app.delete('/:URL', (req, res) => {
  const URL = req.params.URL;
  const checkItem = sites.find((site) => site.URL === URL);
  console.log(checkItem);
  console.log(URL);
  if (!checkItem) {
    res.status(404);
    res.send('Not found!');
  } else {
    const urlFiltrado = sites.filter((site) => site.URL === URL);
    // sites.splice()
    res.JSON(urlFiltrado);
  }
});

app.listen(3000, () => console.log('funcionando'));

// roteador.get('/:idFornecedor', async (requisicao, resposta) => {
//     try{
//         const id = requisicao.params.idFornecedor
//     const fornecedor = new Fornecedor({id: id})
//     await fornecedor. carregar()
//     resposta.status(200)
//     resposta.JSON(
//         JSON.stringify(fornecedor)
