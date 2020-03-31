function som(...numbers){

    return numbers.reduce(function(prev, current){
        return prev + current;
    });
    
}

console.log(som(1,2,3));