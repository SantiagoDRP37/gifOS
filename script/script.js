new Promise((_, reject) => reject(new Error("Fallo")))

  .then(value => console.log("Handler 1"))

  .catch(reason => {

  console.log("Ocurrió un error:" + reason);

  return "nada";

})

  .then(value => console.log("Handler 2", value));