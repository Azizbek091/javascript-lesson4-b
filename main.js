let maxAttepmt = +prompt('Введите количество примеров')

function randNum() {
    return Math.floor(Math.random() * 21);
}

for(let i = 0; i < maxAttepmt; i++) {
    let a = randNum();
    let b = randNum();
    let sign = Math.floor(Math.random() * 4 + 1 );
    let primer
    let answer
    switch(sign) {
        case 1:
            primer = a + ' - ' + b;
            break
            case 2:
                primer = a + ' + ' + b;
                break
                case 3:
                    primer = a + ' / ' + b;
                    break
                    case 4:
                        primer = a + ' * ' + b;  
    }
    switch(sign) {
        case 1:
            answer = a - b;
            break
            case 2:
                answer = a + b;
                break
                case 3:
                    answer = a / b;
                    break
                    case 4:
                        answer = a * b;
                        break
    }
    let userAnswer = +prompt(primer);
    let result = userAnswer == answer ? `Ваш ответ верный - ${userAnswer} `: `Ваш ответ не верный - ${userAnswer}. Правильный ответ - ${answer}!`
    alert(result) 
}


























