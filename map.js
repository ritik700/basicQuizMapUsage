// basic quiz just to brush up maps concept

const ques = new Map();

ques.set('question', 'what is my name??'); //just to set the map we give key value pair

ques.set(1, 'Rit');

ques.set(2, 'Ritz');

ques.set('correct', 1);


ques.set(true, 'Correct Answer');
ques.set(false, 'Please try again');

// console.log(ques);

console.log(ques.get('question')); //just to get the value of the key use get

ques.size; //just to get the length of the maps


if (ques.has('key')) { // to check if key exist

    ques.delete('key'); // jus to delete from the map use delete

}

// ques.clear(); //to delete all the key value from the map

//iterate over maps with the help of forEach
// ques.forEach((value, key) => console.log(`value = ${value}, --------key = ${key}`));

//also with the help of for of loop

// console.log(ques.entries());// gives maps entries like array
// Map.entries() Method in JavaScript
// The Map.entries() method in JavaScript is used for returning an iterator object which contains all the [key, value] pairs of each element of the map. It returns the [key, value] pairs of all the elements of a map in the order of their insertion.
for (let [key, value] of ques) {
    // console.log(`value = ${value}, --------key = ${key}`);

    if (typeof(key) === 'number') {
        console.log(`Answer ${key} : ${value}`)
    }
}

const ans = parseInt(prompt('Enter the correct answer from the console'));

// console.log(ans === ques.get('correct') ? ques.get(true) : ques.get(false)); 

// or

console.log(ques.get(ans === ques.get('correct')));