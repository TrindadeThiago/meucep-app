export default class Endereco {
  rua: String;
  cep: String;
  numero: String;
  bairro: String;
  cidade: String;
  estado: String;

  salvar() {
    localStorage.setItem((Math.random()* 100).toString(), JSON.stringify(this))
  }

  listar() {
    const lista = []
    const tamanhoBD = localStorage.length

    for(let i = 0; i < tamanhoBD; i++) {
      const idEndereco = localStorage.key(i)
      const endereco = localStorage.getItem(idEndereco)
      lista.push(JSON.parse(endereco))
    }

    return lista
  }
}
