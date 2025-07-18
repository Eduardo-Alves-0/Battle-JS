let nomePersonagemAtacante = prompt("Qual é o nome do seu personagem?");
let poderDeAtaque = Number(prompt("Qual o poder de ataque de seu personagem?"));

let nomePersonagemDefensor = prompt("Qual é o nome do personagem defensor?");
let poderDeVida = Number(prompt("Qual o poder de vida do seu personagem?"));
let poderDeDefesa = Number(prompt("Qual o poder de defesa do seu personagem?"));

let escudo = prompt("O seu personagem possui escudo? SIM/NÃO").toLowerCase();

let dano = 0;

if (poderDeAtaque > poderDeDefesa) {
    if (escudo === "não") {
        dano = poderDeAtaque - poderDeDefesa;
    } else if (escudo === "sim") {
        dano = (poderDeAtaque - poderDeDefesa) / 2;
    }
} else {
    dano = 0;
}

poderDeVida = poderDeVida - dano;

console.log(nomePersonagemAtacante + " atacou " + nomePersonagemDefensor + " e causou " + dano + " de dano.");
console.log(nomePersonagemDefensor + " agora possui " + poderDeVida + " de vida.");

if (poderDeVida <= 0) {
    console.log(nomePersonagemDefensor + " foi derrotado!");
}
