let number1 = +prompt(`Write the first number`);
let number2 = +prompt(`Write second number`)

let sign = prompt(`Please write sign`);


switch (sign) {
    case `+`:
        console.log(number1 + number2);
        break;
    case `-`:
        console.log(number1 - number2);
        break;
    case `*`:
        console.log(number1 * number2);
        break;
    case `/`:
        console.log(number1 / number2);
        break;
    default :
        console.log(`Wrong symbol`)
}

alert(`${number1} ${sign} ${number2} = `)