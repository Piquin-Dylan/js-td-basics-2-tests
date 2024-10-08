// Seconde suivante

// Stockez dans trois variables l'heure actuelle, les minutes actuelles et les secondes actuelles.
// Incrémentez les secondes actuelles de 1 pour obtenir la seconde suivante.
// Vérifiez si les secondes actuelles étaient égales à 59 (la dernière seconde de la minute).
// Si les secondes actuelles étaient égales à 59, réinitialisez les secondes à 0.
// Vérifiez si les minutes actuelles étaient égales à 59 (la dernière minute de l'heure).
// Si les minutes actuelles étaient égales à 59, réinitialisez les minutes à 0.
// Vérifiez si l'heure actuelle était égale à 23 (la dernière heure de la journée).
// Si l'heure actuelle était égale à 23, réinitialisez l'heure à 0 (minuit).
// Sinon, incrémentez l'heure actuelle.
// Affichez la nouvelle heure, les minutes et les secondes dans la console.


//const hours = Number(prompt("Entrez une heure "))
//const minute = Number(prompt("Entrez une minute"))
//let secondes = Number(prompt("Entrez une seconde "))
//
//            if (secondes === 59){
//                console.log(`${hours} ${minute+1} ${secondes-59}`)
//                }
//            if (minute === 59){
//                console.log(`${hours+1} ${minute+-59} ${secondes}`)
//            }
//            if (hours === 23){
//                console.log(`${hours-23} ${minute-59} ${secondes-59}` )
//            }else {
//                console.log(`${hours} ${minute} ${secondes}`)
//            }



            let nombre = Number(prompt('entre votre nombre'))
            while (nombre <= 10){
                console.log(nombre)
                nombre++;

            }