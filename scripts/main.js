console.log("Welcome to the main module")


// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, punctuationMark, numberOfPunctuationMarks) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // console.log("this is i", i)
        // console.log("this is the remainder of i/3", i%3)
        console.log(i+1)
        if((i+1)%3 === 0 && i !== 0){
            buildMeUp += `${theWordArray[i]}${punctuationMark.repeat(numberOfPunctuationMarks)} `
        } else {
            buildMeUp += `${theWordArray[i]} `
        }
        // Squish the new word onto buildMeUp

        console.log(buildMeUp)
        // Print buildMeUp to the console
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, ".", 7)

// let tacoSentence = ["I", "love", "tacos", "and", "i", "want", "to", "tell", "you"]

// addExcitement(tacoSentence)

// addExcitement(["I", "had", "lunch"])