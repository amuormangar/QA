const fizzBuzz = require("./fizzbuzz");

test (fizzBuzz, () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz")

}
)
test(fizzBuzz,()=>{
    expect(fizzBuzz(9)).toBe("Fizz")
}

);
test(fizzBuzz,()=>{
    expect(fizzBuzz(25)).toBe("Buzz")
}

);




