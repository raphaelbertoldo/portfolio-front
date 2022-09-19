export const rules = {
  required: (value) => !!value || "Este campo é obrigatório",
  requiredCheck: (value) => !!value || "",
  email: (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "E-mail inválido.";
  },

  password: [
    (v) => v.length >= 8 || "Sua senha precisa ter 8 catacteres ou mais",
    (v) => v.match(/[0-9]/) || "Sua senha precisa ter no minimo um numero",
    (v) =>
      v.match(/[A-Z]/) || "Sua senha precisa ter no minimo uma letra maiúscula",
  ],
  name: (v) => v.split(" ").length >= 2 || "Informe o nome corretamente",



  

  validURL: (value) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(value) || "URL inválido.";
  },
};