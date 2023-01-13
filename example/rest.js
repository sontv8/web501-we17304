function total(...numbers){
    let result = 0;
    for(let i = 0; i<numbers.length; i++){
        result += numbers[i]
    }
    console.log(result);
}
total(1,2,3,4,5,6);

