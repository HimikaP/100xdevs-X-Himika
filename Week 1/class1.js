// console.log("it is working")

// const personArray = ["himika", "ikki", "jyots"]
// const gender = ["nonbinary", "alien", "girl"]

// const user1 = [{
//     firstName: "himika",
//     gender: "male"
// }, {
//     firstName: "ikki",
//     gender: "alien"
// }, {
//     firstName: "jyots",
//     gender: "fimale"
// }
// ]

// for(let i=0;i< user1.length;i++){
//     if(user1[i]["gender"] == 'alien')
//     console.log("Ikki")
// }


// function sum(a,b){
//     return a+b;
// }

// code 1:
// let a=1;
// console.log(a)

// for(let i=0;i<100;i++){
//     console.log(i);
// }


//program to reverse a number
arr = [1,2,3,4,5]
n = arr.length

for(let i=0;i<(n/2)+1;i++,n--){
    temp = arr[i]
    arr[i] = arr[n-1]
    arr[n-1] = temp
}

console.log(arr)
