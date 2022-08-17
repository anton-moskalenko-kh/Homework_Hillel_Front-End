// Задание 1
function getNumber() {
    let num;
    for (let i = 0; i < 10; i++) {
        num = prompt('Введите число больше 100:');
        if (num > 100) {
            return console.log(num);
        } else if (num < 100) {
            if (i === 9) {
                console.log(num)
            } else {
                continue;
            }
        } else {
            return console.log(num);
        }
    }
}


// Задание 2
function checkAge(age) {
    return (age >=18 && age <=100) ? "Ура" : false;
}
console.log(checkAge(42));
