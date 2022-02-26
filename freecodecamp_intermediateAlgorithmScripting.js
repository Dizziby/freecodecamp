// 1---Sum All Numbers in a Range

function sumAll(arr) {
    let sum = 0;
    if(arr[0] < arr[1]) {
        for(let i = arr[0]; i <= arr[1]; i++) {
            sum += i;
        }
    } else if (arr[0] > arr[1]) {
        for(let i = arr[1]; i <= arr[0]; i++) {
            sum += i;
        }
    } else {
        sum = arr[0];
    }
    return sum;
}

sumAll([1, 4]);


// 2---Diff Two Arrays



// 3---Seek and Destroy



// 4---Wherefore art thou



// 5---Spinal Tap Case



// 6---Pig Latin



// 7---Search and Replace



// 8---DNA Pairing



// 9---Missing letters



// 10---Sorted Union



// 11---Convert HTML Entities



// 12---Sum All Odd Fibonacci Numbers



// 13---Sum All Primes



// 14---Smallest Common Multiple



// 15---Drop it



// 16---Steamroller



// 17---Binary Agents



// 18---Everything Be True



// 19---Arguments Optional



// 20---Make a Person



// 21---Map the Debris