jest.mock(`./dateUtilis`);
console.log("1.dateUtilis is being mocked above");
const dateUtilis = require('./dateUtilis');
console.log('2.Imported mocked dateUtilis module',dateUtilis);
const {generateWelcomeMessage} = require(`./messageService`);
console.log('3.imported the generate welcome message from message ServiceWorker.');

test ('should generate welcome message with mocked date',()=>{
    dateUtilis.getFormattedDate.mockReturnValue('April 8, 2025');
    console.log('mocked getFormatted to return 2th April 2025')
    const result = generateWelcomeMessage('Jane',new Date('2025-04-08'));
    console.log("called generate welcomemessage result",result)
    // const dateUtilis = require(`./dateUtilis`);
    
    expect(dateUtilis.getFormattedDate).toHaveBeenCalled();
    expect(result).toBe(`Hello Jane,today is April 8, 2025}`);
});