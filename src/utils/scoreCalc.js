import { evaluateHand } from './handEvaluator.js'

// Calcula el puntaje final: combinación + valores de cartas + jokers
export const calculateScore = (selectedCards, activeJokers = []) => {
  const handResult = evaluateHand(selectedCards)
  if (!handResult) return { total: 0, handName: null, baseScore: 0, multiplier: 1 }

  const { handName, baseScore, multiplier } = handResult

  // Suma los valores numéricos de las cartas seleccionadas
  const cardSum = selectedCards.reduce((sum, card) => sum + card.numericValue, 0)

  // Puntaje base antes de jokers
  let total = (baseScore + cardSum) * multiplier

  // Aplica cada joker activo en orden
  for (const joker of activeJokers) {
    if (typeof joker.apply === 'function') {
      total = joker.apply(total, selectedCards)
    }
  }

  return {
    total: Math.floor(total),
    handName,
    baseScore,
    multiplier,
  }
}