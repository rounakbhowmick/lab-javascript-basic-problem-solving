// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
let driver = "ProGrad-1";
// 1.2 Print `"The driver's name is XXXX"`.
console.log(driver);
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
let navigator = "ProGrad-2";
// 1.4 Print `"The navigator's name is YYYY"`.
console.log(navigator);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (driver.length > navigator.length) {
    console.log(`Driver has longest name,it has ${driver.length} character`);
} else if (navigator.length > driver.length) {
    console.log(`It seems that the navigator has the longest name, it has ${Navigator.length} character`);
} else {
    console.log(`Wow, you both have equally long names, ${driver.length} characters!.`)
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
let newstr = " ";
let count = " ";
let concat = "no vowels";
splitstring.forEach((c, index) => {
    if (c == 'a' || c == 'e' || c == 'i' ||
        c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' ||
        c == 'O' || c == 'U') {
        newstr += c + " ";
        count += index + " ";
        concat = str + newstr + count;
    } else {
        return;
    }
});
console.log(concat);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
let str = "Prograd";
let splitstring = str.split("");
let upper = 0;
let lower = 0;

splitstring.forEach(c => {
    if (c >= 'A' && c <= 'Z')
        upper++;
    else if (c >= 'a' && c <= 'z')
        lower++;
});
console.log(`Upper case: ${upper}, Lower case: ${lower}`);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
let driver = "ProGrad";
let newstr = "";
driver = driver.toUpperCase();
driver = driver.split("")
driver.forEach(i => {
    newstr += i + " ";
})
console.log(newstr);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
let navigator = "ProGrad";
console.log(navigator.split("").reverse().join(""));
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
let first = "ProGrad";
let second = "Face Prep"
let value = first.concat(" " + second);
console.log(value);
console.log(second + " " + first);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
let paragraph1 = "Lorem ipsumdolor sit amet consectetur axime dolorem natus ";
let paragraph2 = "Lorem ipsumdolor sit amet consec elit";
let paragraph3 = "Lorem ipsum dolor sit amet consectetur adipisicing elitObcaecati illo perferendis porro non nobis";
let total = paragraph1 + paragraph2 + paragraph3;
let word = 0;
total = total.split(" ");
total.forEach(i => {
    word++;
});
console.log(word + 1);
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 