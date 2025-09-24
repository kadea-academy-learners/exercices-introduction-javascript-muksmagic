// Exercice 7
// Add variables for family ages and calculate relationships (child, father, mother, grandfather, uncle)

let ageEnfant = 10;

let agePere = ageEnfant * 2;

let ageMere = agePere - 5;

let ageGrandPere = (ageMere * 2) + (ageEnfant / 2);

let ageOncle = agePere + 10;

console.log("Âge de l'enfant :", ageEnfant);
console.log("Âge du père :", agePere);
console.log("Âge de la mère :", ageMere);
console.log("Âge du grand-père :", ageGrandPere);
console.log("Âge de l'oncle :", ageOncle);