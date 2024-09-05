//let maVariable = "hello";
//console.log("hello");
//alert("bonjour");

/*Utilisation de la condition if
Comme vous le savez, des opérateurs de comparaison peuvent renvoyer un booléen : true ou false. On peut les utiliser pour vérifier si une valeur est égale, inégale, supérieure, etc., à une autre.*/

let a = 1;
let b = 1;
console.log(a == b);

/*L’expression a == b renverra un booléen, ici true, puisque les deux variables sont égales. Si ce n’était pas le cas, elle renverrait false. Mais quel rapport avec la condition if ?*/


const nombre = 11;
if (nombre > 10){
    console.log("le nombre " + nombre + " est supérieur à 10");
}

/*On peut voir que l’on spécifie comme condition l’expression nombre > 10. Comme la constante nombre a pour valeur 11, et que 11 est plus grand que 10, alors l’instruction console.log("Le nombre" + nombre + " est plus grand que 10"); est exécutée. Donc la console affiche : le nombre 11 est plus grand que 10.*/

/* test
const chiffre = 10;
if (chiffre < 11){
    console.log("le chiffre " + chiffre + " est inferieur à 9");
} else (chiffre > 9)
    console.log("le chiffre " + chiffre + " est superieur à 9");*/

  /*  const marque = "Peugeot";
const cv = 120;
const portes = 5;
let prix;

if (marque == "Peugeot" || marque == "BMW") {
  prix = (cv * 100 + portes * 30);
  console.log ("Prix = " + prix);
}*/

/*Dans ce cas, l’expression marque == "Peugeot" || marque == "BMW" va renvoyer true puisque la variable marque est définie sur la chaîne de caractères "Peugeot". Les deux lignes dans le corps du if (c’est-à-dire les lignes présentes dans les accolades du if) sont donc exécutées, le prix est calculé et affiché dans une chaîne, via la console.*/

/*
const marque = "Renault";
const cv = 120;
const portes = 5;
let prix;

if (marque == "Peugeot" || marque == "BMW") {
  prix = (cv * 100 + portes * 30);
  console.log ("Prix = " + prix);
}
else {
  console.log("La marque " + marque + " n'est pas valide");
}
*/


/*Dans ce cas, comme l’expression de la condition renvoie false, c’est l’instruction du else qui est exécutée. Donc la console affiche : La marque Renault n'est pas valide */

/*Utilisation de else if
Maintenant, nous pouvons parler de l’instruction else if, littéralement « sinon si ». La structure else if va nous permettre de rajouter une condition si l’expression de la condition précédente renvoie false.*/

/*« Si (if) la marque est "Peugeot" ou "BMW" et si le nombre de cv est inférieur ou égal à 150, calculer le prix et afficher le prix, sinon si (else if) la marque est "Peugeot" ou "BMW", calculer le prix en ajoutant une taxe de 2 000 € , et afficher le prix taxé, sinon (else), afficher que la marque n’est pas valide. » Cette condition est cohérente, nous pouvons donc réaliser notre script :*/

const marque = "Peugeot";
const cv = 180;
const portes = 5;
let prix;

if ((marque == "Peugeot" || marque == "BMW") && cv <= 150) {
  prix = (cv * 100 + portes * 30);
  console.log ("Prix = " + prix);
}
else if (marque == "Peugeot" || marque == "BMW") {
  prix = ((cv * 100 + portes * 30) + 2000);
  console.log ("Prix taxé = " + prix);
}
else {
  console.log("La marque " + marque + " n'est pas valide");
}

/*Introduction à switch
En programmation, la structure de contrôle switch existe dans de nombreuses technologies. Mais qu’est-ce que c’est au juste ? La dernière console de Nintendo ? Non évidemment, le terme switch peut se traduire littéralement par « interrupteur » ou le verbe « changer ». En programmation, la structure switch, aussi souvent appelée switch/case, permet de facilement répertorier plusieurs valeurs possibles renvoyées par une expression et de définir les instructions pour chaque cas. */


const telephone = "Apple";

switch (telephone) {
  case "Apple":
    console.log ("Smarhphone haut de gamme avec système IOS");    
    break;
  case "Samsung":
    console.log ("Smartphone haut de gamme avec système Android");  
    break;
  case "Xiaomi":
    console.log ("Smartphone bon marché avec système Android"); 
    break;
  case "Huawei":
    console.log ("Smartphone bon marché avec système Android");
    break;
}

/*Le break permet de terminer le switch en cours pour passer aux instructions suivantes du script dans le cas où les instructions d’un case sont exécutées. Finalement, une fois qu’un case correspond à la valeur renvoyée par la variable marque, les instructions du case sont exécutées et le break permet de sortir du switch pour ne pas traiter les case qui peuvent être présents après.*/


const voiture = "Mercedes";
switch (voiture){
    case "Mercedes":
        console.log("Très belle voiture allemande");
        break;
    case "Bmw":
        console.log("Les Bmw sont puissantes");
        break;
    case "Audi":
        console.log("Pour ma part je prefere les audis");
        break;
}

/*La clause default
La clause default permet d’indiquer les instructions qui seront exécutées « par défaut », c’est-à-dire dans le cas où aucun cas spécifié ne correspond à la valeur renvoyée par l’expression de référence. Bien qu’elle soit facultative, il est fortement préconisé de l’utiliser dans un switch. Pour bien comprendre, appliquons cette notion à notre exemple :*/

const Tel = "Motorola";

switch (Tel) {
  case "Apple":
    console.log("Smartphone haut de gamme avec système IOS");
    break;
  case "Samsung":
    console.log("Smartphone haut de gamme avec système Android");
    break;
  case "Xiaomi":
    console.log("Smartphone bon marché avec système Android");
    break;
  case "Huawei":
    console.log("Smartphone bon marché avec système Android");
    break;
  default:
    console.log("Marque non référencée");
    break;
}

/*Appliquer une même suite d’instructions pour plusieurs cas
Pour appliquer une même suite d’instructions pour plusieurs cas, il nous faut simplement préciser chaque case concerné avant d’écrire la suite d’instructions, en respectant la syntaxe. Pour bien comprendre, appliquons cette notion à notre exemple : */

const Tel2 = "Huawei";

switch (Tel2) {
  case "Apple":
    console.log("Smartphone haut de gamme avec système IOS");
    break;
  case "Samsung":
    console.log("Smartphone haut de gamme avec système Android");
    break;
  case "Xiaomi":
  case "Huawei":
    console.log("Smartphone bon marché avec système Android");
    break;
  default:
    console.log("Marque non référencée");
    break;
}

