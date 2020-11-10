var answer;
var answers = [];

while(isNaN(answer)||answer == ""||answer<-1||answer>works.a0||answer==0) {
    answer = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
}

switch(answer) {
case 1:
    answers.push (
        {qwest: works.a00 ,
        ans: works.a1}
    );
    answer=0;

    while(isNaN(answer)||answer == ""||answer<-1||answer>works.b0||answer==0) {
        answer = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
    }
switch(answer){
    case 1:
        answers.push (
            {qwest: works.b00 ,
            ans: works.b1}
        );
        answer=0;
        forAnswer(answers);
        break;
    case 2: 
        answers.push (
            {qwest: works.b00 ,
            ans: works.b2}
        );  
        answer=0;
        forAnswer(answers);
        break;
    case -1: 
    breakPush(answers);
    break;}

    break;


case 2:
    answers.push (
        {qwest: works.a00 ,
        ans: works.a2}
    );
    answer = 0;
    while(isNaN(answer)||answer == ""||answer<-1||answer>works.c0||answer==0) {
        answer = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
    }
    switch(answer){
    case 1:
        answers.push (
            {qwest: works.c00 ,
            ans: works.c1}
        );
        answer=0;
        forAnswer(answers);
        break;
    case 2: 
    answers.push (
        {qwest: works.c00 ,
        ans: works.c2}
    );  
    answer=0;
    forAnswer(answers);
    break;}
    break;

    case -1: 
    breakPush(answers);
    break;


case -1:
    breakPush(answers);
    break;

}


function breakPush(arr) {
    arr.push (
        {qwest: 'Игра прервана',
        ans:'-1 - Выход из игры'}
    );
    return arr;
}

function forAnswer(){
    while(isNaN(answer)||answer == ""||answer<-1||answer>works.d0||answer==0) {
        answer = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
    }
switch(answer) {
    case 1:
        answers.push (
            {qwest: works.d00 ,
            ans: works.d1}
        );
        break;

    case 2:
        answers.push (
            {qwest: works.d00 ,
            ans: works.d2}
        );
        break;
    case -1: 
    breakPush(answers);
    break;
}

return answer;

}

var n = +prompt("Введите номер вопроса:");
switch(n) {
    case 1:
    case 2:
    case 3:
    
   alert("Вы отвечали на вопрос "+answers[(n-1)].qwest + "\nВаш ответ: " + answers[(n-1)].ans ); 
   break;

   default:
    alert("Ошибка! На такой номер вопроса вы не отвечали");
}

console.log(answers);