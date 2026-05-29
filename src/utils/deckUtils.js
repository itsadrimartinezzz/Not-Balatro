// Utilidades para crear, mezclar, repartir y reemplazar cartas del mazo durante la partida.

// Mezcla el mazo utilizando el algoritmo Fisher-Yates.
import { createDeck } from '../data/deck.js'

export const shuffleDeck = (deck) => {
  const shuffled = [...deck]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Reparte n cartas del tope del mazo

export const dealHand = (deck, n = 8) => {
  const hand          = deck.slice(0, n)
  const remainingDeck = deck.slice(n)
  return { hand, remainingDeck }
}

// Reemplaza las cartas seleccionadas por nuevas del mazo

export const replaceCards = (hand, selectedIds, deck) => {
  const kept        = hand.filter(card => !selectedIds.includes(card.id))
  const needed      = selectedIds.length
  const newCards    = deck.slice(0, needed)
  const remaining   = deck.slice(needed)
  return {
    newHand:       [...kept, ...newCards],
    remainingDeck: remaining,
  }
}

// Crea y mezcla un mazo nuevo desde cero
export const createShuffledDeck = () => shuffleDeck(createDeck())