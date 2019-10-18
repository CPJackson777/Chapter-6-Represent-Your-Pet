console.log('Focus on YOUR progress compared to YOU...not other people.')


// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value


const myPet = {
    name: "Jagger",
    species: "Doberman Pinscher",
    nickname: "Kong",
    Age: 2,
    bark: function (something) {
        window.alert(`Jagger barks 'WOOF!' at ${something}.`)
    },
    whine: function (when) {
        window.alert(`Jagger whines when he is ${when}.`)
    },
    sniffs: function (at) {
        window.alert(`Jagger always sniffs ${at}.`)
    },
    favoriteToys: [],
    play: function (toy) {
        if (`'squeaky' += ${ toy}`) {
           this.favoriteToys.push(toy); 
        } 
    }
}

myPet.play('bone')
console.log(myPet)

//     myPet.bark('strangers')
//     myPet.whine('hungry')
//     myPet.sniffs('other dogs')


// console.log(myPet)


// Give your pet a new key named favoriteToys whose value is an empty array.
// Now define another new key named play whose value is a function with a single parameter named toy.
// The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).
// Here's an example. If your pet is a cat, then he likely only likes furry toys, so you could put an if..then condition in the play() method that checks if the word "fuzzy" is in the argument value. If it is, it gets added to the array.