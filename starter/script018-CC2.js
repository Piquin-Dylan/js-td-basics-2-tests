/*****************************
 * CODING CHALLENGE 2
 */

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, l'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe.
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
   et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
   N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).
4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
   Comme avant, imprimez le gagnant en moyenne dans la console.
   INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
5. Changez là aussi les scores pour générer différents gagnants,
   en gardant toujours en tête qu'il pourrait y avoir des ex æquos.



BONNE CHANCE 😀
*/

// sans bonus

// 1. Calculez le score moyen de chaque équipe.
// 2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
//    et imprimez l'équipe gagnante dans la console avec son score moyen.
// 3. Changez ensuite les scores pour montrer différents gagnants.
//    N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).

//const teamJohn = 89+120+103
//const teamMike = 116+94+123
//
//if (teamJohn > teamMike){
//    console.log(`L'équipe de john gagne voici le score ${teamJohn}-${teamMike}`)
//}else if (teamJohn < teamMike) {
//    console.log(`L'équipe de mike gagne  ${teamJohn}-${teamMike}`)
//}else {
//    console.log("Les 2 équipent sont a ex æquos ")
//}
// avec bonus

// 4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
//    Comme avant, imprimez le gagnant en moyenne dans la console.
//    INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
// 5. Changez là aussi les scores pour générer différents gagnants,
//    en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

const teamJohn = (89+120+100) / 3;
const teamMike = (116+94+123) / 3;
const teamMary = (97 + 134 + 105) / 3;

if (teamJohn > teamMike && teamJohn > teamMary){
    console.log(`L'équipe de john gagne voici le score ${teamJohn}-${teamMike}-${teamMary}`)
}else if (teamMike > teamJohn  && teamMike > teamMary ) {
    console.log(`L'équipe de mike gagne ${teamJohn}-${teamMike}-${teamMary}`)
}else if (teamMary > teamMike && teamMary > teamJohn ){
    console.log(`L'équipe de Mary gagne  ${teamJohn}-${teamMike}-${teamMary}`)
} else {

    console.log("Les 3 équipent sont a ex æquos ")
}