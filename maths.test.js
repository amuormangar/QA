const { add, subtract, multiply, divide } = require("./maths");


test ('add 5+5 to equal 10' ,()=>{
    expect(add(5,5)).toBe(10);
});

test('add 8 + 4 to equal 12' ,()=>{
    expect(add(8,4)).toBe(12)
})

// subtract//

test('subtract 9-2 to equal 7' ,()=>{

    expect(subtract(9,2)).toBe(7)

}
);

test ('subtract 12 - 2 to equal 10',()=>{
    expect(subtract(12,2)).toBe(10);
})



//mutiply
test('mutiply 8*8 equal to 64',() =>{
    expect(multiply(8,8)).toBe(64)
}


);


//divide//
test ('divide 20/2 equal to 10',()=>{
    expect(divide(20,2)).toBe(10);
}

);


test('add 5 + 5 to equal 10', ()=>{
    expect(add(5,5)).toBe(10)
})