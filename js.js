prime numbers:- 

num =+prompt("Enter the number: ")
count = 0;
if(num>1){
    for(i=2;i<num;i++){
        // console.log(i)
        if(num%i==0){
            console.log("It is not a Prime number")
            count++
            break
        }
    }
    if(count==0){
        console.log("It is a Prime number")
    }
}else{
    console.log("It is a composite number")
}


Sum of prime numbers:- 

number=prompt("Enter the number: ")
primesum=0
for(num of number){
    count = 0;
if(num>1){
    for(i=2;i<num;i++){
        // console.log(i)
        if(num%i==0){
            // console.log("It is not a Prime number")
            count++
            break
        }
    }
    if(count==0){
        // console.log("It is a Prime number")
        primesum+=Number(num)  //primesum=primesum+Number(num)
        
    }
    
}else{
    console.log("It is a composite number")
}
}
console.log("The sum of prime numbers is ", primesum)


Sum of non-prime numbers:- 


number=prompt("Enter the number: ")
primesum=0
nonprimesum=0
for(num of number){
    count = 0;
if(num>1){
    for(i=2;i<num;i++){
        // console.log(i)
        if(num%i==0){
                    nonprimesum+=Number(num)
            count++
            break
        }
    }
    if(count==0){
        primesum+=Number(num)
        
    }
    
}else{
    console.log("It is a composite number")
}
}
console.log("The sum of Non-prime numbers is ", nonprimesum)


Checking prime or not a prime using functions

function prime(num){
    count=0;
    if(num>1){
        for(i=2;i<num;i++){
            // console.log(i)
            if(num%2==0){
                console.log("It is not a prime")
                count++
                break
            }
        }
        if(count==0){
            console.log("It is a prime")
        }
    }else{
        console.log("It is a composite number")
    }
}
a=+prompt("enter the number: ")
prime(a)


Checking wheter primesum is bigger or non-primesum is bigger:-


number=prompt("Enter the num: ")
primesum=0;
nonprimesum=0;
for(num of number){
    count=0;
    if(num>1){
        for(i=2;i<num;i++){
            if(num%i==0){
                nonprimesum+=Number(num)
                count++
                break
            }
        }
    if(count==0){
        primesum+=Number(num)
    }
}
}
// console.log(primesum)
// console.log(nonprimesum)

if(primesum>nonprimesum){
    console.log("Primesum is bigger")
}else{
    console.log("Non-primesum is bigger")
}

