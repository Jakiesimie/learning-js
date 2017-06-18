// takes string with number in base 2
function bin2dec(num) {
    // Turning string into a list, then reversing for 'for in' looping
    num = num.split('').reverse();

    var result = 0;
    for (n in num) {
        result += num[n] == 1 ? Math.pow(2, n) : 0;
    }
    return result;
}

console.log(bin2dec('1101'));
