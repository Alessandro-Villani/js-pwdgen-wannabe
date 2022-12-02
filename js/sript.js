console.log('JS OK');

/*------------------------------------------------------------------------------------

Traccia:

Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21

-------------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------

TODO:

1) Selezionare il target dal DOM
2) Chiedere all'utente il proprio nome attraverso un prompt e salvarlo nella variabile userName
3) Chiedere all'utente il proprio cognome attraverso un prompt e salvarlo nella variabile userName
4) Chiedere all'utente il proprio colore preferito e salvarlo nella variabile userFavoriteColor
5) Concatenare le stringhe precedentemente ottenute nella variabile Password aggiungendo alla fine la stringa '21'
6) Stampare nel target la password.

--------------------------------------------------------------------------------------*/


// 1) Selezionare il target dal DOM

const targetElement = document.getElementById('target');
////console.log(targetElement);

//2) Chiedere all'utente il proprio nome attraverso un prompt e salvarlo nella variabile userName

const userName = prompt('inserisci il tuo nome', 'Alessandro');

////console.log(userName);