
//maso de cartas 
const SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];

const VALUES = [
    { label: 'A', numericValue: 11 },
    { label: '2', numericValue: 2 },
    { label: '3', numericValue: 3 },
    { label: '4', numericValue: 4 },
    { label: '5', numericValue: 5 },
    { label: '6', numericValue: 6 },
    { label: '7', numericValue: 7 },
    { label: '8', numericValue: 8 },
    { label: '9', numericValue: 9 },
    { label: '10', numericValue: 10 },
    { label: 'J', numericValue: 10 },
    { label: 'Q', numericValue: 10 },
    { label: 'K', numericValue: 10 }
]


export const createDeck = () => {
    const deck = [];
    for (const suit of SUITS) {
        for (const value of VALUES) {
            deck.push({
                id: `${value.label} of ${suit}`,
                suit: suit,
                value: value.label,
                numericValue: value.numericValue,
            });
        }
    }
    return deck;
}