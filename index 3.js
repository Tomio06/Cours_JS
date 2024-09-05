// Les boucles

//alert ("Bienvenue au cours sur les boucles")

/*Dans les paramètres du for, nous allons spécifier :

Initialisation : nous allons initialiser une variable qui servira de compteur à notre boucle.

Condition : nous allons définir la condition qui déterminera le nombre d’itérations.

Incrémentation : nous allons définir l’incrémentation de notre compteur.
*/

/*
for (let i = 1; i <= 10; i ++){
    console.log(i);
}

let tableau = ["valeur 1", "valeur 2"]
console.log(tableau [1]);

/*--------------------------__-------------------*/

/*
const nombre = 10;

let table = [];

for (let i = 1; i <= 10; i ++) {
  let resultat = nombre * i;
  table.push(resultat);
  console.log(table [4]);
}
*/

/*
let tableau = ["Apple", "Acer", "HP"];
for (let i in tableau) {
    console.log(tableau[i]);
}
*/


/*Effectivement, cela fonctionne, la console affiche chaque valeur du tableau. Cependant, il n’est pas préconisé de procéder ainsi pour récupérer les valeurs d’un tableau. Pourquoi ? Tout bonnement parce que le in permet de parcourir les propriétés du tableau. Si l’on ajoute des propriétés à notre tableau (qui ne sont pas nécessairement des éléments du tableau), alors la boucle for les parcourra aussi, ce qui posera un problème (puisqu’on aura les éléments du tableau et les autres propriétés). En ce sens, quand on veut parcourir un tableau, il est important d’utiliser le système for/of.*/

/*----------------------------------------------*/

/*La boucle for/of permet de parcourir un objet itérable et de récupérer ses valeurs. C’est le cas par exemple des tableaux. Si l’on reprend notre exemple précédent et que l’on cherche à afficher dans la console chaque élément du tableau, on peut faire simplement :*/


let tableau = ["Apple", "Acer", "HP"];
for (let i of tableau) {
    console.log(i);
}

/*Cela fonctionne, car à chaque tour de boucle, i prend la valeur d’un élément de tableau, et la boucle parcourt tous les éléments du tableau. Avec la boucle for/of, on peut donc rapidement récupérer les valeurs d’un tableau.*/


