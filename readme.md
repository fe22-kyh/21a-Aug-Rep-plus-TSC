# 21 Augusti

## Live-kod

[Live coding examples](live-coding/)


## Material
Undersök dokumentationen invrigt! Vid nästa tillfälle kommer vi att fokusera på det som heter "interfaces" och "types".

Länk till dokumentation https://www.typescriptlang.org/docs/

Samtliga youtube videos från följande lista https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI kan användas som kompletterande material. Vi går igenom allt fram till (inkluderat) avsnitt 18 med generics.

## Övning
Detta är endast en av många tänkbara övningar. Det viktiga är att du provar på att skapa typescript kod med objekt och interfaces. Ett återskapande av memoryspelet eller dylikt fungerar precis lika bra som övning, men med högre nivå på baskoden.

### Skapa en telefonbok med typescript!
Detta är beskrivningen, efter att du har läst igenom de 4 stegen börja då enligt instruktionerna under "utvecklingssteg".

Telefonlistan ska ha en GUI, och användaren ska kunna
1. Lägga till kontakter med förnamn, efternamn och telefonnummer.
2. Se tillagda kontakter på samma sida där formuläret finns.
3. En kontakt ska kunna markeras som hemlig och då visa xxx på telefonnumret vid utskrift.
4. Kontakten ska kunnas tas bort.

#### Utvecklingssteg 1
1. Skapa **ett** textfält
2. Skapa en knapp
3. Sätt ett clickevent på knappen
4. När clickeventet triggas, pusha innehållet i textfältet som en kontakt
5. Läga kontaktens innehåll i en array av textsträngar

#### Utvecklingssteg 2
1. Printa ut innehållet i arrayen av kontakter till en DOM lista


#### Utvecklingssteg 3
Dags för lite OOP.

Då kontakter kan visas i olika format så är det inte praktiskt att lagra allt direkt som en textsträng.
Dessutom så kan kontaktuppgifter skickas i olika format, exempelvis:
1. <firstname>, <lastname>, <phonenumber>
2. <lastname>, <firstname>, <phonenumber> 
3. <phonenumber

*Stegen*
1. Skapa därför 3 textfält som representerar varje egenskap.
2. Skapa därefter en klass som representerar en "kontakt", klassen bör innehålla egenskaperna "firstname", "lastname" och "phonenumber".

Du bör nu kunna skapa en ny kontakt med ex.
```ts
const contacts = new Array<Contact>(); // Mer om < > syntaxen senare

//senare i koden
const fName: string = "Gertrude" // från fname fältet
const lName: string = "Bengtsson" // från fname fältet
const pNumber: number = 123123123 // från fname fältet

const contact = new Contact(fName, lName, pNumber);

contacts.add(contact);
```

**Var noga med att sätta ut typerna för varje datatyp som i fName, lName, pNumber ovan**. Om du har gjort rätt så ska följande typescriptkod fungera

```ts
function findValue(fieldRef: string): string | number { // allows multiple types to be returned
  let field = document.querySelector(fieldRef) as HTMLInputElement; // casts the value to HTML input element
  return field.value; // type is decided by the return type above (string | number)
}

contacts.push({
  fName: findValue('fName'),
  lName: findValue('lName'),
  pNumber: findValue('pNumber'),
} as Contact);
```



