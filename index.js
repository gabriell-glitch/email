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
  let usuario;
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email === entrada) {
      usuario = usuarios[i];
    }
  }
  if (usuario) {
    console.log('usuario encontrado')
    console.log(usuario);
    console.log('insira um novo email para buscar usuario ou digite "sair"');
  } else if (entrada === "sair") {
    process.exit();
  } else {
    console.log('usuario nao encontrado, tente novamente ou digite "sair"');
  }
});
