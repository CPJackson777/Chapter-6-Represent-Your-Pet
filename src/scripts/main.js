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
        if (toy.includes('squeaky')) {
        this.favoriteToys.push(toy);
    }
}
}
    // Regarding lines 27-29: I created a function that uses an if statement to determine a true or false conditional. Therefore, and else statement was not needed. By using the .includes() method, I was able to check for the word squeaky.

    myPet.play ('bone')

    console.log(myPet)


//     myPet.bark('strangers')
//     myPet.whine('hungry')
//     myPet.sniffs('other dogs')




// Give your pet a new key named favoriteToys whose value is an empty array.
// Now define another new key named play whose value is a function with a single parameter named toy.
// The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword