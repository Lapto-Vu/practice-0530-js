
//문자열 s를 n 번 복사해 돌려줌
function repeatString (n, s) {
    return s = s.repeat(n);    
}

let song = repeatString(6, "numer0");

console.log(song);

//정수 n이 짝수이면 Even을, 홀수이면 Odd을 돌려줌
function evenOrOdd (n) {
    if (n%2 === 0) {
        return "Even";
    }
    return "Odd";
}

let by = evenOrOdd(2351248);

console.log(by);