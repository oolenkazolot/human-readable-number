const a = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};

module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }
    if (number <= 20) {
        return a[number];
    } else if (number > 20 && number <= 99) {
        //char1 = '40'
        const char1 = getChar(number, 0) + 0;
        //char2 = '0'
        const char2 = getChar(number, 1);
        return a[+char1] + (char2 != 0 ? " " + a[+char2] : "");
    } else if (number > 99) {
        //char0 = '5'
        const char0 = getChar(number, 0);
        //char1 = '1'
        let char1 = getChar(number, 1);
        // //char2 = '1'
        const char2 = getChar(number, 2);
        let g = TransformsDecimalNumber(+char1, +char2);
        char1 += 0;
        const res =
            g > 20
                ? a[+char0] +
                  " " +
                  "hundred" +
                  " " +
                  a[+char1] +
                  " " +
                  a[+char2]
                : a[+char0] + " " + "hundred" + " " + a[g];

        return res.trim();
    }
    return null;
};
/* функция которая  делает нужный нам символ числом */

function getChar(number, u) {
    const numberString = String(number);
    const char = numberString[u];
    return char;
}
/* функция которая  делает 2 числа одним числом*/

function TransformsDecimalNumber(number1, number2) {
    const string1 = String(number1);
    const string2 = String(number2);
    const string3 = string1 + string2;
    const decimalNumber = Number(string3);
    return decimalNumber;
}
