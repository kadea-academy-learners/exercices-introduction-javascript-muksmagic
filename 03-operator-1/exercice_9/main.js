// Exercice 9
// feat: implement inheritance distribution for Jean Mukuna's estate (calculate shares for children, spouse, siblings, and representatives)

let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;

let heritageTotal = 120000000;

let partEnfants = heritageTotal * 0.75;
let nbPartsEnfants = 3;
let partParEnfant = partEnfants / nbPartsEnfants;

let paul = partParEnfant;
let marie = partParEnfant;
let eric = partParEnfant / 2;
let claire = partParEnfant / 2;

let partConjointEtFreres = heritageTotal * 0.25;
let nbPartsDeuxiemeCat = 3;

let madameMukuna = partConjointEtFreres / nbPartsDeuxiemeCat;
let joseph = partConjointEtFreres / nbPartsDeuxiemeCat;
let sarah = partConjointEtFreres / nbPartsDeuxiemeCat;

console.log("Répartition de l'héritage :");
console.log("Paul :", paul.toLocaleString("fr-CD"), "CDF");
console.log("Marie :", marie.toLocaleString("fr-CD"), "CDF");
console.log("Éric :", eric.toLocaleString("fr-CD"), "CDF");
console.log("Claire :", claire.toLocaleString("fr-CD"), "CDF");
console.log("Madame MUKUNA :", madameMukuna.toLocaleString("fr-CD"), "CDF");
console.log("Joseph :", joseph.toLocaleString("fr-CD"), "CDF");
console.log("Sarah :", sarah.toLocaleString("fr-CD"), "CDF");

module.exports = { paul, marie, eric, claire, madameMukuna, joseph, sarah };