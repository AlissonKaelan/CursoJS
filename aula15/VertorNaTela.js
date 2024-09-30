
let num = [0,8,7,6,54,3]
num.sort()
/*
for (let pos = 0; pos<num.length;pos++){
    console.log(`A posiçã ${pos} tem o valor ${num[pos]}`)

}
*/

//Forma masi simples 

for(let pos in num){
    console.log(`A posiçã ${pos} tem o valor ${num[pos]}`)
}