// Puntajes objetivo iniciales por dificultad
const DIFFICULTY_SETTINGS = {
  easy:   { baseTarget: 100, increment: 50  },
  normal: { baseTarget: 200, increment: 100 },
  hard:   { baseTarget: 350, increment: 175 },
}

// Devuelve el puntaje objetivo para la ronda actual según dificultad
// ronda empieza en 1
export const getTargetScore = (round, difficulty = 'normal') => {
  const { baseTarget, increment } = DIFFICULTY_SETTINGS[difficulty]
  return baseTarget + (round - 1) * increment
}

// Devuelve la configuración completa de una dificultad
export const getDifficultySettings = (difficulty = 'normal') => {
  return DIFFICULTY_SETTINGS[difficulty]
}

// Lista de dificultades disponibles para el menú
export const DIFFICULTIES = ['easy', 'normal', 'hard']