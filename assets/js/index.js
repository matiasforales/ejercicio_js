import {respuestaPositiva} from "./respuestaPositiva.js"
import {respuestaNula} from "./respuestaNula.js"
import {respuestaNegativa} from "./respuestaNegativa.js"
import {user} from "../key/users_passwords.js"
import {pwdUser} from "../key/users_passwords.js"

let usuario = prompt ("ingrese su usuario")
let validacion = prompt ("ingrese su password")

if (usuario === user && validacion === pwdUser) {
    document.body.innerHTML =respuestaPositiva
} else if (!usuario || usuario === "" || !validacion || validacion === "") {
    document.body.innerHTML =respuestaNula
} else {
    document.body.innerHTML =respuestaNegativa
}