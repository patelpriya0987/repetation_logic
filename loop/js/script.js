    
    //1  multiplication table
    let table = document.getElementById('table');
    let i=1
    while(i<=10){
        table.innerHTML += (`5 * ${i} = ${5 * i} </br>`);
        i++ ;
    }


    //2 factorial number
    let factN = document.getElementById('fact');
    let fact_number = 5;
    let j = 1;
    let fact = 1;
    while( j <=fact_number){ //  1 <= 3 , 2 <=3 , 3<=3 , 6<=3
        fact = fact * j ;  // 1 = 1 * 1 ;  1 = 1 * 2; //2 = 2* 3 ->6
        j++ ; // 1++ ; 2++ 6++
    }
    factN.innerHTML = (`fact of ${fact_number} is ${fact} `) ;

    //9 total
    let total = document.getElementById('total');
    let n = 3 ;
    let sum = 0;
    do{
        sum +=i ;
        i++;
    }while(i <= n);
    total.innerHTML = (`total of ${n} is ${sum} `) ;


    //10 fizzBuzz
    // let fizzBuzz = document.getElementById('fizzBuzz');
    // let f = 1;
    // let content = ' ';
    // do{
    //     if(i == 3){
    //         content = "fizz";
    //     }
    //     else if(i == 5){
    //         content = "buzz";
    //     }
    //     else if()
    // }while(i <=100)




    //11. 1 to 10 number 
    let numbers = document.getElementById('oneToTan');
    let store = ' ';
    for(let i=1; i<=10 ; i++){
        store +=i;
        if ( i < 10 ){
            store += " - "
        }
    }
    numbers.innerHTML = store ;
    
    //12 display number
    let plus = 0;

    for (let i=1; i<=10; i++) {   

        plus += i * i; 
    }
    document.getElementById("display").innerHTML = "sum is =" + plus;

    //13.  ptr1 //1 23 456 789 1112131415
    let ptr1 = document.getElementById('ptr1');
    let str = ' ';
    let number = 1;
    for(let i=1 ; i<=5 ; i++){    
        for(let j=1 ; j<=i ; j++){
            str += number;
            number++;
        }
        str += innerHTML = (' </br>')    }
    ptr1.innerHTML = str;

    //14.  ptr2 //5 54 543 5432 54321
    let ptr2 = document.getElementById('ptr2');
    let str2 = ' ';
    let number2 = 1;
    for(let l=5 ; l>=1 ; l--){    
        for(let m=5 ; m>=l ; m--){
            str2 += m;
        }
        str2 += innerHTML = (' </br>')
    }
    ptr2.innerHTML = str2;

    //10.fizzbuzz
    let num = 1;
    do {
        if (num % 3 === 0 && num % 5 === 0) {
        document.getElementById('fizzBuzz').innerHTML = " fizzbuzz";
        } else if (num % 3 === 0) {
        document.getElementById('fizzBuzz').innerHTML = "fizz ";
        } else if (num % 5 === 0) {
        document.getElementById('fizzBuzz').innerHTML = " buzz";
        } else {
        document.getElementById('fizzBuzz').innerHTML = " "+ num;
        }

        num++;
    } while (num <= 100);

    //3. armstrong
    let sums = 0 ;
    let no = 276;
    let temp;
    let number1 ;

    temp = no;
    while (temp > 0) {

        number1 = temp % 10;
        sums += number1 * number1 * number1;
    
        temp = parseInt(temp / 10); 
    }

    if (sums == no) {
        document.getElementById("armstrong").innerHTML = no +' is armstrong number.';
    }
    else {
        document.getElementById("armstrong").innerHTML = no +' is not armstrong number.';
    }

    //4.Palindrome 




    //5.fibonacci
    // let p = 1; j = 1 ; k = '';

    // while(i <= 100)
    // {
    //     k = p + j;
    //     p = j;
    //     j = k;

    //     document.getElementById("fibonacci").innerHTML = p + "<br/>";
    // }


    //6.prime
    let v = 2;
    let m = 1;
    let num3 = 0;

    while(m <= v){

    if(v % m == 0){

        num3++;
    }
    m++;

    }
    if(num3 == 2){
        document.getElementById("prime").innerHTML = v + " is a prime number";
    }
    else{
        document.getElementById("prime").innerHTML = v + " is not a prime number";
    }


    //7.magic
    let h = 189;
    let tmp = h;
    let l = 0;
    let sumDigits = 0;


    while (tmp > 0) {
        sumDigits = sumDigits + tmp % 10;
        tmp = tmp 
        tmp = (tmp / 10) | 0; 
    }

    tmp = sumDigits; 

    while (tmp > 0) {
        l = l * 10 + tmp % 10;
        tmp = tmp 
        tmp = (tmp / 10) | 0; 
    }

    if (l * sumDigits === h) {
        document.getElementById("magic").innerHTML = h + " is a Magic Number.";
    } else {
        document.getElementById("magic").innerHTML = h + " is not a Magic Number.";
    }

    //8.dirasium
    let e = 100;

    for (let current = 1; current <= e; current++) {
        let Digits = 0;
        let tempnum = current;
        let temp = current;
        let sum = 0;

        while (tempnum > 0) {
            tempnum = (tempnum - (tempnum % 10)) / 10;
            Digits++;
        }

        while (temp > 0) {
            let digit = temp % 10;
            let product = 1;

            for (let i = 0; i < Digits; i++) {
                product *= digit;
            }

            sum += product;
            temp = (temp - digit) / 10;
        }

        if (sum == current) {
        document.getElementById('disarium').innerHTML = " "+ current;
        }
    }
