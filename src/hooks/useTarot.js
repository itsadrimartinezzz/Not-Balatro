import { useState, useCallback } from 'react'
import { TAROT_CARDS } from '../data/tarotCards.js'

// Probabilidad de que aparezca una tarot card al avanzar de ronda
const TAROT_CHANCE = 0.3  

export function useTarot() {
  const [active, setActive] = useState(null)  // tarot card activa

  // Decide si aparece una tarot card
  const rollTarot = useCallback(() => {
    if (Math.random() > TAROT_CHANCE) return
    const random = Math.floor(Math.random() * TAROT_CARDS.length)
    setActive(TAROT_CARDS[random])
  }, [])

  // Aplica el efecto de la tarot card al estado del juego y la descarta
  const applyTarot = useCallback((gameState) => {
    if (!active) return gameState
    const newState = active.apply(gameState)
    setActive(null)
    return newState
  }, [active])

  // Descarta la tarot card sin aplicar efecto
  const dismissTarot = useCallback(() => {
    setActive(null)
  }, [])

  // Limpia al reiniciar partida
  const resetTarot = useCallback(() => {
    setActive(null)
  }, [])

  return {
    active,
    rollTarot,
    applyTarot,
    dismissTarot,
    resetTarot,
  }
}

export default useTarot