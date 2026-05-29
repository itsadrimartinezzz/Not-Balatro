# Not-Balatro 🃏

Versión simplificada de Balatro desarrollada con React y Vite.

## Descripción

Juego de cartas estilo póker roguelike donde el jugador debe alcanzar 
un puntaje objetivo por ronda usando combinaciones de cartas. 
Al finalizar cada ronda puede elegir jokers que potencian su puntaje.

## Tecnologías

- React
- Vite
- JavaScript

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

## Estructura del proyecto

```
src/
├── data/
│   ├── deck.js            # 52 cartas de la baraja
│   ├── jokers.js          # 6 jokers con efectos de puntaje
│   └── tarotCards.js      # 6 cartas de tarot con efectos especiales
├── utils/
│   ├── deckUtils.js       # shuffle, deal y replace de cartas
│   ├── handEvaluator.js   # detección de combinaciones de póker
│   ├── scoreCalc.js       # cálculo de puntaje final
│   └── difficultyUtils.js # escalado de puntaje por dificultad
├── hooks/
│   ├── useGameState.js    # estado global del juego
│   ├── useJokers.js       # manejo de jokers activos
│   └── useTarot.js        # manejo de cartas de tarot
└── components/
    ├── Menu/              # pantalla de inicio
    ├── Game/              # pantalla de juego
    ├── Tarot/             # modal de tarot
    └── GameOver/          # pantalla de game over
```

## Reglas del juego

- Se reparten 8 cartas por ronda
- El jugador selecciona cartas para formar combinaciones de póker
- Cada combinación tiene un puntaje base y un multiplicador
- Si no se alcanza el puntaje objetivo se pierde una vida
- Con 0 vidas es game over
- Al avanzar de ronda el jugador elige un joker nuevo

## Combinaciones y puntajes

| Combinación   | Puntaje base | Multiplicador |
|---------------|-------------|---------------|
| Escalera Real | 100         | x8            |
| Póker         | 60          | x7            |
| Full House    | 40          | x4            |
| Flush         | 35          | x4            |
| Escalera      | 30          | x4            |
| Trío          | 30          | x3            |
| Doble Par     | 20          | x2            |
| Par           | 10          | x2            |
| Carta Alta    | 5           | x1            |

## Dificultades

| Dificultad | Puntaje inicial | Incremento por ronda |
|------------|----------------|----------------------|
| Fácil      | 100            | +50                  |
| Normal     | 200            | +100                 |
| Difícil    | 350            | +175                 |

## Jokers disponibles

| Joker | Efecto |
|-------|--------|
| Multiplicador Loco | x2 al puntaje total |
| Bonus Fijo | +50 puntos |
| Rey de Corazones | x1.5 si hay hearts en la mano |
| La Corte | +15 por cada figura (J, Q, K) |
| As Supremo | x3 si hay un As en la mano |
| Coleccionista | +30 por cada par en la mano |

## UI y Diseño


## Créditos

- **Mishell Ciprian 231169** — lógica, datos y estado
- **Adriana** — UI y experiencia visual

## Universidad del Valle de Guatemala
Sistemas y Tecnologías Web — Semestre 1, 2026
