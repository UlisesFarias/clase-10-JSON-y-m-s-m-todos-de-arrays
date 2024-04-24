const fs = require("fs");
const path = "/bicicletas.json";

function leerDatos(){
    const json = fs.readFileSync(__dirname + "/bicicletas.json","utf-8");
    const array = JSON.parse(json);
    return array
}
let arrayBicicletas = leerDatos()

module.exports = arrayBicicletas
