// Dohvati promenljivu ime i f-ju zdravo iz modula zdravo.js
// nije bitan redosled importa
import{ime, zdravo} from "./modules/zdravo.js";

let prezime = 'Stanimirovic';

console.log(ime + ' ' + prezime);

zdravo('pera');
zdravo(ime);