const isValidEmail = require("./emailvalidator");

test (isValidEmail,() =>{
    expect(isValidEmail("mangaramuor@gmail.com")).toBe(true)
}


);