var listona = [];

for (var i = 0; i <= 100; i++) {
    if (i >= 1 && i % 3 == 0 && i % 5 == 0) {
        listona.push(i + " FizzBuzz");
    } else if (i >= 1 && i % 3 == 0) {
        listona.push(i + " Fizz");
    } else if (i >= 1 && i % 5 == 0) {
        listona.push(i + " Buzz");
    } else {
        listona.push(i);
    };
}

document.getElementById("printer").innerHTML = listona;