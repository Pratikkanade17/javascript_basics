const coding = ["python", "ruby", "cpp", "java", "php"]

coding.forEach(function(val){
    console.log(val);
    
}) 


const result = coding.map(function(val) {
    return val;
});

console.log(result);