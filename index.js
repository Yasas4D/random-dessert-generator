const utils = require('./helpers/utils');

const desserts = ['ais kacang', 'akok', 'apple crumble', 'brownies', 'buchty', 'cake', 'cekodok', 'cempedak creme', 'cempedak fritters', 'cendol', 'chocolate', 'cupcake', 'eclair', 'frgál', 'kek lapis', 'krapfen', 'kremrole', 'muffin', 'tart', 'větrník']
const adjectives = ['bbq', 'berrylicious', 'butterscotch', 'caramel', 'cheesy', 'chocolate', 'salted egg', 'salty', 'smoked', 'strawberry', 'sugar', 'sweet']

function generateDessert() {
    const dessertIndex = utils.getRandomIndex(desserts);
    return desserts[dessertIndex];
}

function generateYummyDessert() {
    const dessertIndex = utils.getRandomIndex(desserts);
    const adjectiveIndex = utils.getRandomIndex(adjectives);
    return `${adjectives[adjectiveIndex]} ${desserts[dessertIndex]}`;
}

exports.generateDessert = generateDessert;
exports.generateYummyDessert = generateYummyDessert;
