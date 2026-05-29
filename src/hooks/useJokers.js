// Administra los jokers activos del jugador y las opciones
 //disponibles para elegir entre rondas.

import { useState, useCallback } from 'react'
import { JOKERS } from '../data/jokers.js'

// Devuelve 2 jokers aleatorios distintos del pool completo
const getRandomJokers = (exclude = []) => {
  const pool = JOKERS.filter((j) => !exclude.includes(j.id))
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 2)
}

export function useJokers() {
  const [active, setActive]   = useState([])   
  const [pending, setPending] = useState([])   

  // 2 opciones nuevas para el jugador 
  const offerJokers = useCallback(() => {
    const currentIds = active.map((j) => j.id)
    const options = getRandomJokers(currentIds)
    setPending(options)
  }, [active])

  // El jugador elige uno de los 2 jokers ofrecidos
  const chooseJoker = useCallback((jokerId) => {
    const chosen = pending.find((j) => j.id === jokerId)
    if (!chosen) return
    setActive((prev) => [...prev, chosen])
    setPending([])
  }, [pending])

  // Limpia todo al reiniciar partida
  const resetJokers = useCallback(() => {
    setActive([])
    setPending([])
  }, [])

  return {
    active,
    pending,
    offerJokers,
    chooseJoker,
    resetJokers,
  }
}

export default useJokers