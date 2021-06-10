//  Count max example
let arrNum =[5,5,5,2,2,1];
let counts ={};
let maxNum = arrNum[0]
for (let i = 0; i < arrNum.length; i++) {
    let num = arrNum[i];

    if (counts[num]) {
        counts[num] +=1;
    } else {
        counts[num] = 1;
    }

    if (counts[num] > counts[maxNum]) {
        maxNum = num;
    }
}

console.log(maxNum);