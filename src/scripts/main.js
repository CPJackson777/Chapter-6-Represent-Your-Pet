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
    }
}

    myPet.bark('strangers')
    myPet.whine('hungry')
    myPet.sniffs('other dogs')


console.log(myPet)