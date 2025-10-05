// 1.

console.log(`1.\n`);

function printFrom1ToN(n) {
    if (n === 0) return;
    printFrom1ToN(n - 1);
    console.log(n);
};

printFrom1ToN(5);

// 2.

console.log(`\n2.\n`);

function printFromAtoB(a, b) {
    console.log(a);

    if (a === b) return;

    if (a < b) {
        printFromAtoB(a + 1, b);
    } else {
        printFromAtoB(a - 1, b);
    };
};

printFromAtoB(3, 7);

// 3.

console.log(`\n3.\n`);

function printYesOrNo(n) {
    if (n === 1) {
        console.log("YES");
        return;
    } else if (n % 2 !== 0 || n === 0) {
        console.log("NO");
        return;
    } else {
        printYesOrNo(n / 2);
    };
};

printYesOrNo(0);
printYesOrNo(1);
printYesOrNo(2);
printYesOrNo(14);
printYesOrNo(32);

// 4.

console.log(`\n4.\n`);

function sumOfDigits(n) {
    if (n === 0) return 0;
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
};

console.log(sumOfDigits(542));

// 5.

console.log(`\n5.\n`);

function printDigitsReversed(n) {
    console.log(n % 10);

    if (n < 10) return;

    printDigitsReversed(Math.floor(n / 10));
};

printDigitsReversed(542);

// 6.

console.log(`\n6.\n`);

function printDigitsNormal(n) {
    if (n < 10) {
        console.log(n);
        return;
    };

    printDigitsNormal(Math.floor(n / 10));
    console.log(n % 10);
};

printDigitsNormal(542);
