// 4й урок
// 1е задание

function numberToObject(n){
    var mas = numberToMas(n);
    this.units = mas[2];
    this.decades = mas[1];
    this.hundreds = mas[0];
    this.show = function() {
        console.log("единицы: " + this.units + "; десятки: " + this.decades + "; сотни: " + this.hundreds);
    }

}

function numberToMas(m){
    var mas = m.split('');
    switch(mas.length){
        case 1:
            mas.splice(0,0,'0');
        case 2:
            mas.splice(0,0,'0');
        case 3:
            return mas;
            break;
        default:
            console.log("Введено некорректное значение");
            mas = ['','',''];
            return mas;
        
    }

}
var numb;
while(isNaN(numb)||numb == ""||numb<0){
numb = prompt("Введите целое число от 0 до 999");}



var obj = new numberToObject(numb);
obj.show();

