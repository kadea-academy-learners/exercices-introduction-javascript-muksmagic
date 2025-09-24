// Exercice 9
// feat: implement inheritance distribution for Jean Mukuna's estate (calculate shares for children, spouse, siblings, and representatives)

let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;

// Total heritage
let heritageTotal = 120000000;

// Première catégorie (enfants)
let partEnfants = heritageTotal * 0.75;
let nbPartsEnfants = 3; // Paul, Marie, Alain (represented by Éric & Claire)
let partParEnfant = partEnfants / nbPartsEnfants;

let paul = partParEnfant;
let marie = partParEnfant;
let eric = partParEnfant / 2;
let clair = partParEnfant / 2;

// Deuxième catégorie (conjoint + frères)
let partConjointEtFreres = heritageTotal * 0.25;
let nbPartsDeuxiemeCat = 3; // Madame MUKUNA, Joseph, Sarah

let madameMukuna = partConjointEtFreres / nbPartsDeuxiemeCat;
let joseph = partConjointEtFreres / nbPartsDeuxiemeCat;
let sarah = partConjointEtFreres / nbPartsDeuxiemeCat;

// Display inheritance
console.log("Répartition de l'héritage :");
console.log("Paul :", paul, "CDF");
console.log("Marie :", marie, "CDF");
console.log("Éric :", eric, "CDF");
console.log("Claire :", clair, "CDF");
console.log("Madame MUKUNA :", madameMukuna, "CDF");
console.log("Joseph :", joseph, "CDF");
console.log("Sarah :", sarah, "CDF");

// Export variables for Jest
module.exports = { paul, marie, eric, clair, madameMukuna, joseph, sarah };