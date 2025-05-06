
const dateUtilis = require('./dateUtilis');
function generateWelcomeMessage(username,date){
    const formattedDate = dateUtilis.getFormattedDate(date);
    return `Hello ${username},today is ${formattedDate}}`
}
module.exports = {generateWelcomeMessage};