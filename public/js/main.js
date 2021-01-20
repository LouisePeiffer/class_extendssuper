// Consignes : 
// Faire une class parent "persons" qui prendra comme propriétés : nom, prénom ,âge. Créer une class extends de "persons". Rajoutez lui une propriété :email. 
// Faites une instance de "persons"

class Persons {
    constructor(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
}

class Users extends Persons {
    constructor (nom, prenom, age, email) {
        super(nom, prenom, age);
        this.email = email;
    }
}

let louise = new Users ("Peiffer", "Louise", 22, "louisepeiffer@hotmaiL.com")
console.log(louise);