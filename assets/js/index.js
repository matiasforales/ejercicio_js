import {respuestaPositiva} from "./respuestaPositiva.js"
import {respuestaContraseñaIncorrecta} from "./respuestaContraseñaIncorrecta.js"
import {respuestaMailIncorrecto} from "./respuestaMailIncorrecto.js"
import {respuestaNula} from "./respuestaNula.js"
import {correo} from "../key/users_passwords.js"
import {pwdMail} from "../key/users_passwords.js"

let mail = prompt ("ingrese su e-mail")
let validacion = prompt ("ingrese su password")

if (mail === correo && validacion === pwdMail) {
    document.body.innerHTML =respuestaPositiva
} else if (mail === correo && validacion !== pwdMail) {
    alert(respuestaContraseñaIncorrecta)
} else if (mail !== correo && validacion === pwdMail) {
    alert(respuestaMailIncorrecto)
} else {
    alert(respuestaNula)
}
