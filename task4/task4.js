// 4) Implement these functions

// 1. // isPrime - Returns true or false, indicating whether the given number is prime.
// isPrime(0)                          // false
// isPrime(1)                          // false
// isPrime(17)                         // true
// isPrime(10000000000000)             // false

function isPrime(num) {

    let prime = true;

    if (num == 0 || num == 1) {
        prime = false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }

    return prime;
}

isPrime(0);
isPrime(1);
isPrime(17);
isPrime(10000000000000);

// 2. // factorial - Returns a number that is the factorial of the given number.
// factorial(0)                        // 1
// factorial(1)                        // 1
// factorial(6)                        // 720

function factorial(num) {
    if (num === 0) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}

factorial(0);
factorial(1);
factorial(6);

// 3. // fib - Returns the nth Fibonacci number.
// fib(0)                              // 0
// fib(1)                              // 1
// fib(10)                             // 55
// fib(20)                             // 6765

function fib(num) {

    if (num == 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    else {
        let a = 1;
        let b = 1;

        for (let i = 3; i <= num; i++) {
            let c = a + b;
            a = b;
            b = c;
        }

        return b;
    }
}

fib(0);
fib(1);
fib(10);
fib(20);

// 4. // isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
// isSorted([])                        // true
// isSorted([-Infinity, -5, 0, 3, 9])  // true
// isSorted([3, 9, -3, 10])            // false

function isSorted(arr) {

    let sortNeg = true;
    let sortPos = true;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            sortPos = false;
            break;
        }
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            sortNeg = false;
            break;
        }
    }

    if (sortNeg && !sortPos || !sortNeg && sortPos) {
        return true;
    }
    if (arr.length <= 1) {
        return true;
    }
    else {
        return false;
    }

}

isSorted([]);
isSorted([-Infinity, -5, 0, 3, 9]);
isSorted([3, 9, -3, 10]);

// 5. // reverse - Reverses the given string (yes, using the built in reverse function is cheating).
// reverse('')                         // ''
// reverse('abcdef')                   // 'fedcba'

function reverse(str) {
    let ans = "";

    for (let i = str.length - 1; i >= 0; i--) {
        ans = ans + str[i];
    }

    return ans;
}

reverse('');
reverse('abcdef');

// 6. //indexOf - Implement the indexOf function for arrays.
// indexOf([1, 2, 3], 1)               // 0
// indexOf([1, 2, 3], 4)               // -1

function indexOf(arr, num) {
    let ans = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            ans = i;
        }
    }

    return ans;
}

indexOf([1, 2, 3], 1);
indexOf([1, 2, 3], 4);

// 7. // isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
// isPalindrome('')                                // true
// isPalindrome('abcdcba')                         // true
// isPalindrome('abcd')                            // false
// isPalindrome('A man a plan a canal Panama')     // true

function isPalindrome(str) {
    let ans = true;
    let str2 = reverse(str);

    for (let i = 0; i < str.length; i++) {
        if (str[i] != str2[i]) {
            ans = false;
            break;
        }
    }

    return ans;
}

function reverse(s) {
    return s.split("").reverse().join("");
}

isPalindrome('');
isPalindrome('abcdcba');
isPalindrome('abcd');
isPalindrome('A man a plan a canal Panama');

// 8. // missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

function missing(arr) {

    if (isSorted(arr)) {

        return undefined;

    }
    else {

        let total = 1;

        for (let i = 2; i <= arr.length + 1; i++) {
            total += i;
            total -= arr[i - 2];
        }

        return total;
    }
}

missing([]);
missing([1, 4, 3]);
missing([2, 3, 4]);
missing([5, 1, 4, 2]);
missing([1, 2, 3, 4]);

// 9. // isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
// isBalanced('}{')                      // false
// isBalanced('{{}')                     // false
// isBalanced('{}{}')                    // false
// isBalanced('foo { bar { baz } boo }') // true
// isBalanced('foo { bar { baz }')       // false
// isBalanced('foo { bar } }')           // false

function isBalanced(str) {
    let stack = [];

    let open = {
        '{': '}'
    };

    let closed = {
        '}': true
    }

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
}

isBalanced('}{');
isBalanced('{{}');
isBalanced('{}{}');
isBalanced('foo { bar { baz } boo }');
isBalanced('foo { bar { baz }');
isBalanced('foo { bar } }');   