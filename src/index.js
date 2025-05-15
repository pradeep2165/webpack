import generateJoke from "../generateJoke";
import { v4 as uuidv4 } from "uuid";
import "./styles/main.scss";
import laughing from "./assets/laughing.png";

console.log(generateJoke());
document.getElementById("joke").innerHTML = generateJoke();
document.getElementById("jokeBtn").addEventListener("click", () => {
  document.getElementById("joke").innerHTML = generateJoke();
});
document.getElementById("laughingImage").src = laughing;
document.getElementById("laughingImage").alt = "Laughing emoji";
console.log(uuidv4());
