let variavel = 0;
let usuarios = [
  {
    nome: "pedro",
    email: "pedro@hotmail.com",
    idade: "27",
  },
  {
    nome: "carlos",
    email: "carlos@gmail.com",
    idade: "31",
  },
  {
    nome: "leonardo",
    email: "leonardo@outlook.com",
    idade: "38",
  },
];
console.log(
  "digite o email do usuario para verificar se ele está no banco de dados"
);
process.stdin.on("data", function (data) {
  let entrada = data.toString().trim().toLowerCase();
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email === entrada) {
      console.log(
        "usuario encontrado: " +
          " nome: " +
          usuarios[i].nome +
          " idade: " +
          usuarios[i].idade +
          " email: " +
          usuarios[i].email
      );
      variavel = 1;
      console.log('insira um novo email para buscar usuario ou digite "sair"');
    } else {
        variavel = 0
    }
  }
});
