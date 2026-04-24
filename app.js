(() => {
  "use strict";

  const STORAGE_KEY = "ritualParejaOffline.v1";

  const INTENSITIES = {
    soft: { es: "Suave", en: "Soft" },
    medium: { es: "Medio", en: "Medium" },
    intense: { es: "Intenso", en: "Intense" }
  };

  const TAGS = [
    { id: "romance", es: "Romance", en: "Romance" },
    { id: "conversation", es: "Conversación", en: "Conversation" },
    { id: "kisses", es: "Besos", en: "Kisses" },
    { id: "touch", es: "Contacto", en: "Touch" },
    { id: "massage", es: "Masaje", en: "Massage" },
    { id: "fantasy", es: "Fantasía", en: "Fantasy" },
    { id: "dance", es: "Baile", en: "Dance" },
    { id: "timer", es: "Temporizador", en: "Timer" },
    { id: "play", es: "Juego", en: "Play" },
    { id: "aftercare", es: "Cuidado", en: "Aftercare" }
  ];

  const SAFE_WORDS = ["PAUSA", "ROJO", "LUNA", "CALMA", "PÉTALO", "ALTO", "NUBE", "ÁMBAR"];

  const STRINGS = {
    es: {
      subtitle: "Juego offline para adultos",
      navHome: "Inicio",
      navRoulette: "Ruleta",
      navCards: "Cartas",
      navDice: "Dados",
      navLevels: "Niveles",
      scoreTitle: "Puntos",
      completedLabel: "completados",
      skippedLabel: "saltados",
      safeWordLabel: "Palabra de pausa sugerida",
      changeSafeWord: "Cambiar",
      activeLimits: "Intensidades activas",
      randomMode: "Modo aleatorio",
      history: "Historial",
      resetGame: "Reiniciar partida",
      homeTitle: "Juegos sensuales para una noche privada",
      homeText: "Elige una dinámica, define límites y disfruta retos diseñados para conversación, conexión y deseo consentido.",
      startRoulette: "Girar ruleta",
      drawCard: "Tomar carta",
      configureLimits: "Configurar límites",
      modeRouletteTitle: "Ruleta de retos",
      modeRouletteText: "Gira, recibe un reto filtrado por intensidad y decide completar, saltar o repetir.",
      modeCardsTitle: "Cartas de preguntas",
      modeCardsText: "Preguntas íntimas para explorar gustos, límites, fantasías y cariño.",
      modeDiceTitle: "Dados eróticos",
      modeDiceText: "Combina acción y estilo para crear una dinámica breve y consensuada.",
      modeLevelsTitle: "Retos por niveles",
      modeLevelsText: "Avanza desde conexión romántica hasta dinámicas más intensas.",
      consentTitle: "Consentimiento primero",
      consentText: "Cualquier reto puede detenerse, modificarse o saltarse. Hablen antes, durante y después. Ningún punto vale más que la comodidad de ambos.",
      rouletteEyebrow: "Dinámica",
      rouletteTitle: "Ruleta de retos",
      rouletteText: "La ruleta respeta las intensidades y categorías excluidas en configuración.",
      spin: "Girar",
      emptyRouletteTitle: "Gira la ruleta",
      emptyRouletteText: "Aparecerá un reto con opciones para completar, saltar o repetir.",
      cardsEyebrow: "Conversación",
      cardsTitle: "Cartas de preguntas",
      cardsText: "Tomen turnos para responder, sin presión y con total libertad para pasar.",
      deckFront: "Carta privada",
      deckBack: "Lista para descubrir",
      drawCardAction: "Tomar carta",
      emptyCardsTitle: "Toma una carta",
      emptyCardsText: "La pregunta aparecerá aquí con sus controles.",
      diceEyebrow: "Azar",
      diceTitle: "Dados eróticos",
      diceText: "Un dado elige la acción y otro define el estilo, duración o regla.",
      rollDice: "Lanzar dados",
      emptyDiceTitle: "Lanza los dados",
      emptyDiceText: "La combinación se convertirá en una dinámica consensuada.",
      levelsEyebrow: "Progresión",
      levelsTitle: "Retos por niveles",
      levelsText: "Completa retos para avanzar. Puedes saltar cualquier reto sin penalización.",
      nextLevelChallenge: "Siguiente reto",
      emptyLevelsTitle: "Empieza el nivel",
      emptyLevelsText: "El primer reto se adaptará al nivel activo y a tus límites.",
      randomEyebrow: "Libre",
      randomTitle: "Modo aleatorio y categorías",
      randomText: "Elige una categoría o deja que el sistema seleccione cualquier reto permitido.",
      randomChallenge: "Reto aleatorio",
      emptyRandomTitle: "Elige o sortea",
      emptyRandomText: "Aquí se mostrará el reto filtrado por límites.",
      historyEyebrow: "Local",
      historyTitle: "Historial",
      historyText: "Registro guardado solo en este navegador. Puedes borrarlo en cualquier momento.",
      clearHistory: "Borrar historial",
      settingsEyebrow: "Control",
      settingsTitle: "Configuración y límites",
      settingsText: "Ajusta idioma, tema, intensidad y categorías excluidas antes de jugar.",
      playersLegend: "Nombres",
      playerA: "Persona A",
      playerB: "Persona B",
      experienceLegend: "Experiencia",
      languageLabel: "Idioma",
      themeLabel: "Tema",
      soundLabel: "Sonidos locales",
      intensityLegend: "Intensidad permitida",
      soft: "Suave",
      medium: "Medio",
      intense: "Intenso",
      intensityHelp: "Debe quedar al menos una intensidad activa.",
      limitsLegend: "Excluir categorías",
      localDataLegend: "Datos locales",
      localDataText: "La app usa localStorage para guardar configuración, puntos e historial en este navegador.",
      saveSettings: "Guardar configuración",
      clearLocalData: "Borrar datos locales",
      allCategories: "Todas",
      consentReminder: "Antes de iniciar: confirmen que ambos desean hacerlo. Pueden adaptar, pausar o saltar el reto en cualquier momento.",
      complete: "Completado",
      skip: "Saltar / cambiar",
      repeat: "Repetir",
      points: "puntos",
      startTimer: "Iniciar",
      resetTimer: "Reiniciar temporizador",
      noResultsTitle: "No hay retos disponibles",
      noResultsText: "Activa otra intensidad o quita alguna categoría excluida en configuración.",
      settingsSaved: "Configuración guardada.",
      gameReset: "Partida reiniciada.",
      historyCleared: "Historial borrado.",
      localDataCleared: "Datos locales borrados.",
      challengeCompleted: "Reto completado.",
      challengeSkipped: "Reto saltado.",
      timerDone: "Temporizador finalizado.",
      confirmReset: "¿Reiniciar puntos, niveles e historial de la partida?",
      confirmHistory: "¿Borrar el historial guardado?",
      confirmLocal: "¿Borrar todos los datos locales y volver a la pantalla inicial?",
      completedStatus: "Completado",
      skippedStatus: "Saltado",
      modeLabel: "Modo",
      intensityLabel: "Intensidad"
    },
    en: {
      subtitle: "Offline game for adults",
      navHome: "Home",
      navRoulette: "Wheel",
      navCards: "Cards",
      navDice: "Dice",
      navLevels: "Levels",
      scoreTitle: "Points",
      completedLabel: "completed",
      skippedLabel: "skipped",
      safeWordLabel: "Suggested pause word",
      changeSafeWord: "Change",
      activeLimits: "Active intensities",
      randomMode: "Random mode",
      history: "History",
      resetGame: "Reset game",
      homeTitle: "Sensual games for a private night",
      homeText: "Choose a dynamic, set limits, and enjoy challenges designed for conversation, connection, and consensual desire.",
      startRoulette: "Spin wheel",
      drawCard: "Draw card",
      configureLimits: "Set limits",
      modeRouletteTitle: "Challenge wheel",
      modeRouletteText: "Spin, receive a filtered challenge, then complete, skip, or repeat.",
      modeCardsTitle: "Question cards",
      modeCardsText: "Intimate questions to explore tastes, limits, fantasies, and affection.",
      modeDiceTitle: "Erotic dice",
      modeDiceText: "Combine an action and a style to create a brief consensual dynamic.",
      modeLevelsTitle: "Level challenges",
      modeLevelsText: "Progress from romantic connection to more intense dynamics.",
      consentTitle: "Consent first",
      consentText: "Any challenge can be stopped, modified, or skipped. Talk before, during, and after. No point is worth more than mutual comfort.",
      rouletteEyebrow: "Dynamic",
      rouletteTitle: "Challenge wheel",
      rouletteText: "The wheel respects the intensities and excluded categories configured by you.",
      spin: "Spin",
      emptyRouletteTitle: "Spin the wheel",
      emptyRouletteText: "A challenge will appear with options to complete, skip, or repeat.",
      cardsEyebrow: "Conversation",
      cardsTitle: "Question cards",
      cardsText: "Take turns answering, with no pressure and full freedom to pass.",
      deckFront: "Private card",
      deckBack: "Ready to reveal",
      drawCardAction: "Draw card",
      emptyCardsTitle: "Draw a card",
      emptyCardsText: "The question will appear here with controls.",
      diceEyebrow: "Chance",
      diceTitle: "Erotic dice",
      diceText: "One die chooses the action and the other defines the style, duration, or rule.",
      rollDice: "Roll dice",
      emptyDiceTitle: "Roll the dice",
      emptyDiceText: "The combination will become a consensual dynamic.",
      levelsEyebrow: "Progression",
      levelsTitle: "Level challenges",
      levelsText: "Complete challenges to advance. You can skip any challenge without penalty.",
      nextLevelChallenge: "Next challenge",
      emptyLevelsTitle: "Start the level",
      emptyLevelsText: "The first challenge will adapt to the active level and your limits.",
      randomEyebrow: "Free",
      randomTitle: "Random mode and categories",
      randomText: "Choose a category or let the system select any allowed challenge.",
      randomChallenge: "Random challenge",
      emptyRandomTitle: "Choose or draw",
      emptyRandomText: "The filtered challenge will appear here.",
      historyEyebrow: "Local",
      historyTitle: "History",
      historyText: "Saved only in this browser. You can delete it at any time.",
      clearHistory: "Clear history",
      settingsEyebrow: "Control",
      settingsTitle: "Settings and limits",
      settingsText: "Adjust language, theme, intensity, and excluded categories before playing.",
      playersLegend: "Names",
      playerA: "Person A",
      playerB: "Person B",
      experienceLegend: "Experience",
      languageLabel: "Language",
      themeLabel: "Theme",
      soundLabel: "Local sounds",
      intensityLegend: "Allowed intensity",
      soft: "Soft",
      medium: "Medium",
      intense: "Intense",
      intensityHelp: "At least one intensity must remain active.",
      limitsLegend: "Exclude categories",
      localDataLegend: "Local data",
      localDataText: "The app uses localStorage to save settings, points, and history in this browser.",
      saveSettings: "Save settings",
      clearLocalData: "Clear local data",
      allCategories: "All",
      consentReminder: "Before starting: confirm that both of you want it. You can adapt, pause, or skip the challenge at any time.",
      complete: "Completed",
      skip: "Skip / change",
      repeat: "Repeat",
      points: "points",
      startTimer: "Start",
      resetTimer: "Reset timer",
      noResultsTitle: "No challenges available",
      noResultsText: "Enable another intensity or remove an excluded category in settings.",
      settingsSaved: "Settings saved.",
      gameReset: "Game reset.",
      historyCleared: "History cleared.",
      localDataCleared: "Local data cleared.",
      challengeCompleted: "Challenge completed.",
      challengeSkipped: "Challenge skipped.",
      timerDone: "Timer finished.",
      confirmReset: "Reset points, levels, and game history?",
      confirmHistory: "Clear saved history?",
      confirmLocal: "Clear all local data and return to the opening screen?",
      completedStatus: "Completed",
      skippedStatus: "Skipped",
      modeLabel: "Mode",
      intensityLabel: "Intensity"
    }
  };

  const LEVELS = [
    {
      id: 0,
      intensity: "soft",
      target: 3,
      title: { es: "Conexión", en: "Connection" },
      description: { es: "Miradas, conversación y ternura.", en: "Eye contact, conversation, and tenderness." }
    },
    {
      id: 1,
      intensity: "medium",
      target: 3,
      title: { es: "Cercanía", en: "Closeness" },
      description: { es: "Ritmo lento, juego y contacto acordado.", en: "Slow rhythm, play, and agreed touch." }
    },
    {
      id: 2,
      intensity: "intense",
      target: 3,
      title: { es: "Deseo", en: "Desire" },
      description: { es: "Dinámicas más atrevidas dentro de límites claros.", en: "Bolder dynamics within clear boundaries." }
    },
    {
      id: 3,
      intensity: "soft",
      target: 2,
      title: { es: "Cierre", en: "Aftercare" },
      description: { es: "Cuidado, conversación y recompensa final.", en: "Care, conversation, and final reward." }
    }
  ];

  const CHALLENGES = [
    {
      id: "soft-001",
      modes: ["roulette", "random", "levels"],
      intensity: "soft",
      level: 0,
      tags: ["romance", "conversation", "timer"],
      points: 10,
      duration: 45,
      title: { es: "Mirada lenta", en: "Slow gaze" },
      text: {
        es: "Durante 45 segundos, mírense a los ojos y digan una frase de cariño o deseo suave. Si alguien se ríe o se incomoda, pausen y vuelvan a empezar solo si ambos quieren.",
        en: "For 45 seconds, look into each other's eyes and say one affectionate or softly desirous phrase. If anyone laughs or feels uncomfortable, pause and restart only if both want to."
      }
    },
    {
      id: "soft-002",
      modes: ["cards", "random"],
      intensity: "soft",
      tags: ["conversation", "romance"],
      points: 8,
      duration: 0,
      title: { es: "Gesto favorito", en: "Favorite gesture" },
      text: {
        es: "¿Qué gesto romántico o detalle cotidiano te hace sentir especialmente deseado/a y cuidado/a?",
        en: "What romantic gesture or everyday detail makes you feel especially desired and cared for?"
      }
    },
    {
      id: "soft-003",
      modes: ["roulette", "random", "levels"],
      intensity: "soft",
      level: 0,
      tags: ["romance", "kisses"],
      points: 10,
      duration: 0,
      title: { es: "Beso pedido", en: "Requested kiss" },
      text: {
        es: "Pide permiso para dar un beso lento. La otra persona elige dónde es cómodo recibirlo o puede cambiar el reto.",
        en: "Ask permission to give a slow kiss. The other person chooses where it feels comfortable to receive it or may change the challenge."
      }
    },
    {
      id: "soft-004",
      modes: ["roulette", "random", "levels"],
      intensity: "soft",
      level: 0,
      tags: ["dance", "romance", "timer"],
      points: 12,
      duration: 60,
      title: { es: "Baile cercano", en: "Close dance" },
      text: {
        es: "Pongan una canción local o imaginen un ritmo. Bailen cerca durante 1 minuto, respetando el espacio y el ritmo de ambos.",
        en: "Play a local song or imagine a rhythm. Dance close for 1 minute, respecting each other's space and pace."
      }
    },
    {
      id: "soft-005",
      modes: ["cards", "random"],
      intensity: "soft",
      tags: ["conversation", "aftercare"],
      points: 8,
      duration: 0,
      title: { es: "Límite cómodo", en: "Comfortable limit" },
      text: {
        es: "Nombra un límite que quieras que se respete hoy y una señal que indique que necesitas bajar la intensidad.",
        en: "Name one limit you want respected tonight and one signal that means you need to lower the intensity."
      }
    },
    {
      id: "soft-006",
      modes: ["roulette", "random", "levels"],
      intensity: "soft",
      level: 0,
      tags: ["massage", "touch", "timer"],
      points: 12,
      duration: 90,
      title: { es: "Masaje de calma", en: "Calming massage" },
      text: {
        es: "Una persona da un masaje breve en una zona acordada durante 90 segundos. La otra guía presión, ritmo y pausa.",
        en: "One person gives a brief massage on an agreed area for 90 seconds. The other guides pressure, rhythm, and pause."
      }
    },
    {
      id: "soft-007",
      modes: ["cards", "random"],
      intensity: "soft",
      tags: ["conversation", "fantasy"],
      points: 8,
      duration: 0,
      title: { es: "Escena ideal", en: "Ideal scene" },
      text: {
        es: "Describe una escena romántica que te gustaría vivir, sin obligación de realizarla. La otra persona solo escucha y pregunta con respeto.",
        en: "Describe a romantic scene you would like to experience, without any obligation to act it out. The other person only listens and asks respectfully."
      }
    },
    {
      id: "soft-008",
      modes: ["roulette", "random", "levels"],
      intensity: "soft",
      level: 3,
      tags: ["aftercare", "romance"],
      points: 10,
      duration: 0,
      title: { es: "Recompensa tierna", en: "Tender reward" },
      text: {
        es: "Cada persona elige una recompensa tierna: abrazo, halago, bebida, canción o descanso. Háganla sin prisa.",
        en: "Each person chooses a tender reward: hug, compliment, drink, song, or rest. Do it without rushing."
      }
    },
    {
      id: "soft-009",
      modes: ["cards", "random", "levels"],
      intensity: "soft",
      level: 3,
      tags: ["aftercare", "conversation"],
      points: 10,
      duration: 0,
      title: { es: "Lo que me gustó", en: "What I liked" },
      text: {
        es: "Digan una cosa que disfrutaron y una cosa que podrían ajustar para que la próxima dinámica sea más cómoda.",
        en: "Share one thing you enjoyed and one thing you could adjust to make the next dynamic more comfortable."
      }
    },
    {
      id: "soft-010",
      modes: ["roulette", "random"],
      intensity: "soft",
      tags: ["play", "conversation"],
      points: 10,
      duration: 0,
      title: { es: "Tres halagos", en: "Three compliments" },
      text: {
        es: "Cada persona dice tres halagos: uno físico no invasivo, uno emocional y uno sobre algo que admira de la otra persona.",
        en: "Each person says three compliments: one non-invasive physical compliment, one emotional compliment, and one thing they admire about the other person."
      }
    },

    {
      id: "medium-001",
      modes: ["roulette", "random", "levels"],
      intensity: "medium",
      level: 1,
      tags: ["kisses", "timer"],
      points: 18,
      duration: 60,
      title: { es: "Beso con pausa", en: "Kiss with pause" },
      text: {
        es: "Durante 1 minuto, alternen besos lentos y pausas para respirar y preguntar: “¿seguimos así o cambiamos?”.",
        en: "For 1 minute, alternate slow kisses and pauses to breathe and ask: “continue like this or change?”"
      }
    },
    {
      id: "medium-002",
      modes: ["cards", "random"],
      intensity: "medium",
      tags: ["conversation", "fantasy"],
      points: 14,
      duration: 0,
      title: { es: "Deseo negociable", en: "Negotiable desire" },
      text: {
        es: "Menciona un deseo que podría gustarte explorar. La otra persona responde con: sí, tal vez con límites, o no por ahora.",
        en: "Mention one desire you might like to explore. The other person answers: yes, maybe with limits, or not for now."
      }
    },
    {
      id: "medium-003",
      modes: ["roulette", "random", "levels"],
      intensity: "medium",
      level: 1,
      tags: ["touch", "timer"],
      points: 18,
      duration: 75,
      title: { es: "Guía de caricia", en: "Guided caress" },
      text: {
        es: "Una persona guía la mano de la otra hacia una caricia permitida durante 75 segundos. La guía puede detener o cambiar el movimiento cuando quiera.",
        en: "One person guides the other's hand toward an allowed caress for 75 seconds. The guide can stop or change the movement at any time."
      }
    },
    {
      id: "medium-004",
      modes: ["roulette", "random", "levels"],
      intensity: "medium",
      level: 1,
      tags: ["play", "kisses"],
      points: 16,
      duration: 0,
      title: { es: "Mapa de besos", en: "Kiss map" },
      text: {
        es: "Dibuja con palabras un mapa de lugares permitidos para besos. La otra persona elige uno o cambia el reto.",
        en: "Describe a map of places where kisses are allowed. The other person chooses one or changes the challenge."
      }
    },
    {
      id: "medium-005",
      modes: ["cards", "random"],
      intensity: "medium",
      tags: ["conversation", "touch"],
      points: 14,
      duration: 0,
      title: { es: "Semáforo", en: "Traffic light" },
      text: {
        es: "Cada persona dice tres acciones o dinámicas: una verde, una amarilla y una roja. No se discuten las rojas; se respetan.",
        en: "Each person names three actions or dynamics: one green, one yellow, and one red. Reds are not debated; they are respected."
      }
    },
    {
      id: "medium-006",
      modes: ["roulette", "random", "levels"],
      intensity: "medium",
      level: 1,
      tags: ["massage", "timer"],
      points: 18,
      duration: 120,
      title: { es: "Masaje a ciegas", en: "Blindfold-style massage" },
      text: {
        es: "Con ojos cerrados, una persona recibe un masaje en zona acordada durante 2 minutos. Puede abrir los ojos o terminar cuando quiera.",
        en: "With eyes closed, one person receives a massage on an agreed area for 2 minutes. They can open their eyes or stop whenever they want."
      }
    },
    {
      id: "medium-007",
      modes: ["roulette", "random"],
      intensity: "medium",
      tags: ["fantasy", "conversation"],
      points: 16,
      duration: 0,
      title: { es: "Susurro de fantasía", en: "Fantasy whisper" },
      text: {
        es: "Susurra una fantasía romántica o sensual en términos generales. La otra persona puede hacer una pregunta respetuosa o pedir cambiar de tema.",
        en: "Whisper a romantic or sensual fantasy in general terms. The other person may ask a respectful question or ask to change topic."
      }
    },
    {
      id: "medium-008",
      modes: ["roulette", "random", "levels"],
      intensity: "medium",
      level: 1,
      tags: ["dance", "touch", "timer"],
      points: 18,
      duration: 90,
      title: { es: "Baile guiado", en: "Guided dance" },
      text: {
        es: "Una persona guía el ritmo de un baile cercano durante 90 segundos. La otra puede cambiar distancia, velocidad o detenerse.",
        en: "One person guides the rhythm of a close dance for 90 seconds. The other can change distance, speed, or stop."
      }
    },
    {
      id: "medium-009",
      modes: ["cards", "random"],
      intensity: "medium",
      tags: ["conversation", "play"],
      points: 14,
      duration: 0,
      title: { es: "Premio elegido", en: "Chosen prize" },
      text: {
        es: "¿Qué recompensa consentida te gustaría recibir si completas tres retos seguidos? Defínela de forma clara y cómoda.",
        en: "What consensual reward would you like to receive after completing three challenges in a row? Define it clearly and comfortably."
      }
    },
    {
      id: "medium-010",
      modes: ["roulette", "random"],
      intensity: "medium",
      tags: ["play", "timer"],
      points: 16,
      duration: 60,
      title: { es: "Prohibido apresurarse", en: "No rushing" },
      text: {
        es: "Durante 1 minuto, hagan cualquier gesto romántico permitido en cámara lenta. El objetivo es atención, no intensidad.",
        en: "For 1 minute, do any allowed romantic gesture in slow motion. The goal is attention, not intensity."
      }
    },

    {
      id: "intense-001",
      modes: ["roulette", "random", "levels"],
      intensity: "intense",
      level: 2,
      tags: ["fantasy", "conversation"],
      points: 25,
      duration: 0,
      title: { es: "Guion atrevido", en: "Bold script" },
      text: {
        es: "Inventen juntos un guion sensual de 3 pasos. Antes de actuarlo, marquen qué partes son verdes, amarillas o rojas.",
        en: "Create a sensual 3-step script together. Before acting it out, mark which parts are green, yellow, or red."
      }
    },
    {
      id: "intense-002",
      modes: ["roulette", "random", "levels"],
      intensity: "intense",
      level: 2,
      tags: ["touch", "timer"],
      points: 28,
      duration: 120,
      title: { es: "Control consensuado", en: "Consensual control" },
      text: {
        es: "Definan palabra de pausa. Durante 2 minutos, una persona guía una dinámica sensual dentro de límites claros; la otra puede ajustar o terminar al instante.",
        en: "Define a pause word. For 2 minutes, one person guides a sensual dynamic within clear limits; the other can adjust or stop instantly."
      }
    },
    {
      id: "intense-003",
      modes: ["cards", "random"],
      intensity: "intense",
      tags: ["fantasy", "conversation"],
      points: 22,
      duration: 0,
      title: { es: "Tal vez sí", en: "Maybe yes" },
      text: {
        es: "Di una idea que no quieras hacer hoy, pero que tal vez te gustaría conversar en otro momento. No hay obligación de avanzar.",
        en: "Name one idea you do not want to do today, but might like to discuss another time. There is no obligation to move forward."
      }
    },
    {
      id: "intense-004",
      modes: ["roulette", "random", "levels"],
      intensity: "intense",
      level: 2,
      tags: ["kisses", "touch", "timer"],
      points: 28,
      duration: 90,
      title: { es: "Ritmo marcado", en: "Marked rhythm" },
      text: {
        es: "Una persona marca el ritmo de besos o caricias permitidas durante 90 segundos. Cada 30 segundos debe preguntar si se mantiene, baja o cambia.",
        en: "One person sets the rhythm of allowed kisses or caresses for 90 seconds. Every 30 seconds they must ask whether to keep, lower, or change it."
      }
    },
    {
      id: "intense-005",
      modes: ["roulette", "random", "levels"],
      intensity: "intense",
      level: 2,
      tags: ["play", "fantasy"],
      points: 25,
      duration: 0,
      title: { es: "Reto negociado", en: "Negotiated challenge" },
      text: {
        es: "Cada persona propone un reto atrevido pero seguro. Elijan uno, simplifíquenlo si hace falta y acuerden una forma clara de detenerlo.",
        en: "Each person proposes a bold but safe challenge. Choose one, simplify if needed, and agree on a clear way to stop it."
      }
    },
    {
      id: "intense-006",
      modes: ["roulette", "random"],
      intensity: "intense",
      tags: ["timer", "play"],
      points: 25,
      duration: 150,
      title: { es: "Solo señales", en: "Signals only" },
      text: {
        es: "Durante 2 minutos y medio, usen solo señales acordadas para subir, bajar, mantener o pausar una dinámica sensual permitida.",
        en: "For two and a half minutes, use only agreed signals to increase, lower, maintain, or pause an allowed sensual dynamic."
      }
    },
    {
      id: "intense-007",
      modes: ["cards", "random"],
      intensity: "intense",
      tags: ["aftercare", "conversation"],
      points: 20,
      duration: 0,
      title: { es: "Cuidado posterior", en: "Aftercare" },
      text: {
        es: "¿Qué necesitas después de una dinámica intensa: agua, abrazo, espacio, conversación, música o silencio? Sean específicos.",
        en: "What do you need after an intense dynamic: water, hug, space, conversation, music, or silence? Be specific."
      }
    },
    {
      id: "intense-008",
      modes: ["roulette", "random", "levels"],
      intensity: "intense",
      level: 2,
      tags: ["fantasy", "timer"],
      points: 28,
      duration: 90,
      title: { es: "Escena narrada", en: "Narrated scene" },
      text: {
        es: "Una persona narra una escena sensual consensuada durante 90 segundos. La otra puede decir “más suave”, “cambia” o “pausa”.",
        en: "One person narrates a consensual sensual scene for 90 seconds. The other may say “softer”, “change”, or “pause”."
      }
    },
    {
      id: "intense-009",
      modes: ["roulette", "random"],
      intensity: "intense",
      tags: ["play", "touch"],
      points: 26,
      duration: 0,
      title: { es: "Carta de permiso", en: "Permission card" },
      text: {
        es: "Una persona pide permiso para una acción sensual específica y segura. La respuesta puede ser sí, no o sí con una condición.",
        en: "One person asks permission for a specific, safe sensual action. The answer may be yes, no, or yes with one condition."
      }
    },
    {
      id: "intense-010",
      modes: ["roulette", "random", "levels"],
      intensity: "intense",
      level: 3,
      tags: ["aftercare", "romance"],
      points: 22,
      duration: 0,
      title: { es: "Cierre intenso", en: "Intense closing" },
      text: {
        es: "Terminen con una conversación breve: qué fue excitante, qué fue cómodo y qué prefieren no repetir. Cierren con un gesto de cuidado.",
        en: "End with a brief talk: what was exciting, what was comfortable, and what you prefer not to repeat. Close with a caring gesture."
      }
    }
  ];

  const DICE_ACTIONS = [
    { icon: "♡", intensity: "soft", tags: ["romance"], es: "halago íntimo", en: "intimate compliment" },
    { icon: "◌", intensity: "soft", tags: ["kisses"], es: "beso pedido", en: "requested kiss" },
    { icon: "✧", intensity: "soft", tags: ["massage"], es: "masaje suave", en: "soft massage" },
    { icon: "◇", intensity: "medium", tags: ["conversation"], es: "pregunta atrevida", en: "bold question" },
    { icon: "☾", intensity: "medium", tags: ["touch"], es: "caricia guiada", en: "guided caress" },
    { icon: "✦", intensity: "intense", tags: ["fantasy"], es: "fantasía negociada", en: "negotiated fantasy" }
  ];

  const DICE_STYLES = [
    { icon: "30", intensity: "soft", tags: ["timer"], seconds: 30, es: "durante 30 segundos", en: "for 30 seconds" },
    { icon: "60", intensity: "medium", tags: ["timer"], seconds: 60, es: "durante 1 minuto", en: "for 1 minute" },
    { icon: "90", intensity: "intense", tags: ["timer"], seconds: 90, es: "durante 90 segundos", en: "for 90 seconds" },
    { icon: "?", intensity: "soft", tags: ["conversation"], seconds: 0, es: "haciendo una pregunta antes", en: "asking a question first" },
    { icon: "↺", intensity: "medium", tags: ["play"], seconds: 0, es: "cambiando roles después", en: "switching roles afterward" },
    { icon: "!", intensity: "intense", tags: ["play"], seconds: 0, es: "con palabra de pausa activa", en: "with the pause word active" }
  ];

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));

  let state = loadState();
  let wheelRotation = 0;
  let timer = { intervalId: null, remaining: 0, display: null, sourceDuration: 0 };

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    bindEvents();
    renderLimitCheckboxes();
    renderCategoryChips();
    hydrateSettingsForm();
    applyTheme();
    applyLanguage();
    renderSidebar();
    renderLevels();
    renderHistory();
    hydrateAgeGate();
    registerServiceWorker();
  }

  function defaultState() {
    return {
      acceptedAge: false,
      settings: {
        language: "es",
        theme: "night",
        sound: true,
        players: { a: "Persona A", b: "Persona B" },
        allowedIntensities: ["soft", "medium", "intense"],
        excludedTags: []
      },
      score: { points: 0, completed: 0, skipped: 0 },
      history: [],
      level: { index: 0, progress: 0 },
      safeWord: "PAUSA",
      selectedCategory: "all",
      currentMode: null,
      currentChallenge: null,
      lastTargetId: null
    };
  }

  function loadState() {
    const fallback = defaultState();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return fallback;
      const saved = JSON.parse(raw);
      const merged = {
        ...fallback,
        ...saved,
        settings: {
          ...fallback.settings,
          ...(saved.settings || {}),
          players: {
            ...fallback.settings.players,
            ...((saved.settings && saved.settings.players) || {})
          },
          allowedIntensities: Array.isArray(saved.settings?.allowedIntensities)
            ? saved.settings.allowedIntensities.filter((item) => INTENSITIES[item])
            : fallback.settings.allowedIntensities,
          excludedTags: Array.isArray(saved.settings?.excludedTags)
            ? saved.settings.excludedTags.filter((item) => TAGS.some((tag) => tag.id === item))
            : fallback.settings.excludedTags
        },
        score: { ...fallback.score, ...(saved.score || {}) },
        level: { ...fallback.level, ...(saved.level || {}) },
        history: Array.isArray(saved.history) ? saved.history.slice(0, 80) : []
      };

      if (merged.settings.allowedIntensities.length === 0) {
        merged.settings.allowedIntensities = ["soft"];
      }
      if (!LEVELS[merged.level.index]) {
        merged.level = { index: 0, progress: 0 };
      }
      return merged;
    } catch (error) {
      console.warn("No se pudo leer localStorage:", error);
      return fallback;
    }
  }

  function saveState() {
    try {
      const cleanState = {
        acceptedAge: state.acceptedAge,
        settings: state.settings,
        score: state.score,
        history: state.history.slice(0, 80),
        level: state.level,
        safeWord: state.safeWord,
        selectedCategory: state.selectedCategory
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanState));
    } catch (error) {
      console.warn("No se pudo guardar localStorage:", error);
      showToast("No se pudo guardar localmente. Revisa permisos del navegador.");
    }
  }

  function bindEvents() {
    document.addEventListener("click", (event) => {
      const viewTrigger = event.target.closest("[data-view]");
      if (viewTrigger) {
        event.preventDefault();
        showView(viewTrigger.dataset.view);
        return;
      }

      const action = event.target.closest("[data-action]");
      if (action) {
        handleChallengeAction(action.dataset.action, action);
      }
    });

    $$(".mode-card").forEach((card) => {
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          showView(card.dataset.view);
        }
      });
    });

    ["ageCheck", "consentCheck", "privacyCheck"].forEach((id) => {
      $("#" + id).addEventListener("change", validateAgeGate);
    });

    $("#enterApp").addEventListener("click", () => {
      state.acceptedAge = true;
      saveState();
      $("#ageGate").classList.add("hidden");
      showToast("Entrada confirmada. Recuerden jugar con consentimiento.");
    });

    $("#leaveApp").addEventListener("click", () => {
      $("#ageGate .age-card").innerHTML = `
        <h1>Sesión cerrada</h1>
        <p>Vuelve a abrir la aplicación cuando quieras confirmar la mayoría de edad y el consentimiento.</p>
      `;
    });

    $("#privacyBtn").addEventListener("click", () => togglePrivacy(true));
    $("#unlockPrivacy").addEventListener("click", () => togglePrivacy(false));
    $("#settingsBtn").addEventListener("click", () => showView("settingsView"));
    $("#randomSafeWord").addEventListener("click", randomizeSafeWord);
    $("#resetGameBtn").addEventListener("click", resetGame);
    $("#clearHistoryBtn").addEventListener("click", clearHistory);
    $("#clearLocalDataBtn").addEventListener("click", clearLocalData);

    $("#spinBtn").addEventListener("click", spinWheel);
    $("#drawCardBtn").addEventListener("click", drawCard);
    $("#rollDiceBtn").addEventListener("click", rollDice);
    $("#levelChallengeBtn").addEventListener("click", drawLevelChallenge);
    $("#randomChallengeBtn").addEventListener("click", drawRandomChallenge);

    $("#settingsForm").addEventListener("submit", (event) => {
      event.preventDefault();
      saveSettingsFromForm();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key.toLowerCase() === "p" && !event.ctrlKey && !event.metaKey) {
        togglePrivacy(true);
      }
      if (event.key === "Escape" && !$("#privacyCover").classList.contains("hidden")) {
        togglePrivacy(false);
      }
    });
  }

  function hydrateAgeGate() {
    if (state.acceptedAge) {
      $("#ageGate").classList.add("hidden");
    } else {
      $("#ageGate").classList.remove("hidden");
      validateAgeGate();
    }
  }

  function validateAgeGate() {
    const canEnter = $("#ageCheck").checked && $("#consentCheck").checked && $("#privacyCheck").checked;
    $("#enterApp").disabled = !canEnter;
  }

  function showView(viewId) {
    if (!$("#" + viewId)) return;
    clearTimer();
    $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
    $$(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.view === viewId));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function applyTheme() {
    document.body.classList.toggle("theme-night", state.settings.theme === "night");
    document.body.classList.toggle("theme-rose", state.settings.theme === "rose");
  }

  function t(key) {
    const lang = state.settings.language || "es";
    return STRINGS[lang]?.[key] || STRINGS.es[key] || key;
  }

  function translate(value) {
    const lang = state.settings.language || "es";
    if (typeof value === "string") return value;
    return value?.[lang] || value?.es || value?.en || "";
  }

  function applyLanguage() {
    document.documentElement.lang = state.settings.language;
    $$(`[data-i18n]`).forEach((element) => {
      const key = element.dataset.i18n;
      element.textContent = t(key);
    });
    hydrateSettingsForm();
    renderCategoryChips();
    renderLimitCheckboxes();
    renderSidebar();
    renderLevels();
    renderHistory();
  }

  function renderSidebar() {
    $("#scoreValue").textContent = String(state.score.points);
    $("#completedValue").textContent = String(state.score.completed);
    $("#skippedValue").textContent = String(state.score.skipped);
    $("#safeWordDisplay").textContent = state.safeWord;

    const intensityList = $("#activeIntensityList");
    intensityList.innerHTML = "";
    state.settings.allowedIntensities.forEach((key) => {
      const pill = document.createElement("span");
      pill.className = "pill";
      pill.textContent = INTENSITIES[key]?.[state.settings.language] || key;
      intensityList.appendChild(pill);
    });
  }

  function renderLimitCheckboxes() {
    const container = $("#limitCheckboxes");
    if (!container) return;
    container.innerHTML = "";
    TAGS.forEach((tag) => {
      const label = document.createElement("label");
      label.className = "toggle-line";
      label.innerHTML = `
        <input type="checkbox" name="excludedTag" value="${escapeHtml(tag.id)}" />
        <span>${escapeHtml(tag[state.settings.language] || tag.es)}</span>
      `;
      container.appendChild(label);
    });
    hydrateSettingsForm();
  }

  function renderCategoryChips() {
    const container = $("#categoryChips");
    if (!container) return;
    const categories = [{ id: "all", es: t("allCategories"), en: t("allCategories") }, ...TAGS];
    container.innerHTML = "";
    categories.forEach((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chip";
      button.dataset.category = category.id;
      button.textContent = category[state.settings.language] || category.es;
      button.classList.toggle("active", state.selectedCategory === category.id);
      button.addEventListener("click", () => {
        state.selectedCategory = category.id;
        saveState();
        renderCategoryChips();
        drawRandomChallenge();
      });
      container.appendChild(button);
    });
  }

  function hydrateSettingsForm() {
    const form = $("#settingsForm");
    if (!form) return;
    $("#playerA").value = state.settings.players.a || "";
    $("#playerB").value = state.settings.players.b || "";
    $("#languageSelect").value = state.settings.language;
    $("#themeSelect").value = state.settings.theme;
    $("#soundToggle").checked = Boolean(state.settings.sound);

    $$('input[name="intensity"]').forEach((input) => {
      input.checked = state.settings.allowedIntensities.includes(input.value);
    });
    $$('input[name="excludedTag"]').forEach((input) => {
      input.checked = state.settings.excludedTags.includes(input.value);
    });
  }

  function saveSettingsFromForm() {
    const selectedIntensities = $$('input[name="intensity"]')
      .filter((input) => input.checked)
      .map((input) => input.value);

    if (selectedIntensities.length === 0) {
      showToast(t("intensityHelp"));
      return;
    }

    state.settings.players.a = $("#playerA").value.trim() || "Persona A";
    state.settings.players.b = $("#playerB").value.trim() || "Persona B";
    state.settings.language = $("#languageSelect").value;
    state.settings.theme = $("#themeSelect").value;
    state.settings.sound = $("#soundToggle").checked;
    state.settings.allowedIntensities = selectedIntensities;
    state.settings.excludedTags = $$('input[name="excludedTag"]')
      .filter((input) => input.checked)
      .map((input) => input.value);

    saveState();
    applyTheme();
    applyLanguage();
    showToast(t("settingsSaved"));
  }

  function getAvailableChallenges({ mode, category = "all", levelIndex = null, avoidId = null } = {}) {
    return CHALLENGES.filter((challenge) => {
      const modeOk = !mode || challenge.modes.includes(mode);
      const categoryOk = !category || category === "all" || challenge.tags.includes(category);
      const intensityOk = state.settings.allowedIntensities.includes(challenge.intensity);
      const excludedOk = !challenge.tags.some((tag) => state.settings.excludedTags.includes(tag));
      const levelOk = levelIndex === null || challenge.level === levelIndex || (levelIndex === 3 && challenge.tags.includes("aftercare"));
      const avoidOk = !avoidId || challenge.id !== avoidId;
      return modeOk && categoryOk && intensityOk && excludedOk && levelOk && avoidOk;
    });
  }

  function pickRandom(items) {
    if (!items.length) return null;
    return items[Math.floor(Math.random() * items.length)];
  }

  function spinWheel() {
    const spinBtn = $("#spinBtn");
    const wheel = $("#wheel");
    spinBtn.disabled = true;
    playSound("fxSpin");

    wheelRotation += 1080 + Math.floor(Math.random() * 720);
    wheel.style.transform = `rotate(${wheelRotation}deg)`;

    window.setTimeout(() => {
      const challenge = pickRandom(getAvailableChallenges({ mode: "roulette", avoidId: state.currentChallenge?.id }));
      renderChallenge("rouletteResult", challenge, "roulette");
      spinBtn.disabled = false;
    }, 850);
  }

  function drawCard() {
    const card = $("#questionCard");
    card.classList.remove("is-flipped");
    window.setTimeout(() => card.classList.add("is-flipped"), 40);
    const challenge = pickRandom(getAvailableChallenges({ mode: "cards", avoidId: state.currentChallenge?.id }));
    renderChallenge("cardResult", challenge, "cards");
  }

  function rollDice() {
    const actionDie = $("#actionDie");
    const styleDie = $("#styleDie");
    actionDie.classList.add("rolling");
    styleDie.classList.add("rolling");
    playSound("fxSpin");

    const allowedActions = DICE_ACTIONS.filter((item) => diceItemAllowed(item));
    const allowedStyles = DICE_STYLES.filter((item) => diceItemAllowed(item));
    const action = pickRandom(allowedActions);
    const style = pickRandom(allowedStyles);

    window.setTimeout(() => {
      actionDie.classList.remove("rolling");
      styleDie.classList.remove("rolling");

      if (!action || !style) {
        renderNoResults("diceResult");
        actionDie.textContent = "?";
        styleDie.textContent = "?";
        return;
      }

      actionDie.textContent = action.icon;
      styleDie.textContent = style.icon;

      const lang = state.settings.language;
      const intensity = highestIntensity(action.intensity, style.intensity);
      const challenge = {
        id: `dice-${Date.now()}`,
        modes: ["dice"],
        intensity,
        tags: unique([...(action.tags || []), ...(style.tags || []), "play"]),
        points: intensity === "intense" ? 25 : intensity === "medium" ? 17 : 10,
        duration: style.seconds || 0,
        title: {
          es: "Combinación de dados",
          en: "Dice combination"
        },
        text: {
          es: `Creen una dinámica con “${action.es}” y la regla “${style.es}”. Antes de empezar, confirmen límites, palabra de pausa y comodidad de ambos.`,
          en: `Create a dynamic with “${action.en}” and the rule “${style.en}”. Before starting, confirm limits, pause word, and mutual comfort.`
        }
      };
      renderChallenge("diceResult", challenge, "dice");
    }, 520);
  }

  function diceItemAllowed(item) {
    const intensityOk = state.settings.allowedIntensities.includes(item.intensity);
    const tagsOk = !(item.tags || []).some((tag) => state.settings.excludedTags.includes(tag));
    return intensityOk && tagsOk;
  }

  function highestIntensity(a, b) {
    const rank = { soft: 1, medium: 2, intense: 3 };
    return rank[a] >= rank[b] ? a : b;
  }

  function drawLevelChallenge() {
    const level = LEVELS[state.level.index] || LEVELS[0];
    let candidates = getAvailableChallenges({ mode: "levels", levelIndex: level.id, avoidId: state.currentChallenge?.id });

    if (!state.settings.allowedIntensities.includes(level.intensity)) {
      candidates = getAvailableChallenges({ mode: "levels", avoidId: state.currentChallenge?.id });
    }

    const challenge = pickRandom(candidates);
    renderChallenge("levelResult", challenge, "levels");
  }

  function drawRandomChallenge() {
    const category = state.selectedCategory || "all";
    const challenge = pickRandom(getAvailableChallenges({ mode: "random", category, avoidId: state.currentChallenge?.id }));
    renderChallenge("randomResult", challenge, "random");
  }

  function renderChallenge(targetId, challenge, mode) {
    clearTimer();
    const target = $("#" + targetId);
    if (!target) return;

    state.currentMode = mode;
    state.currentChallenge = challenge;
    state.lastTargetId = targetId;

    if (!challenge) {
      renderNoResults(targetId);
      return;
    }

    const intensityClass = challenge.intensity === "medium" ? "medium" : challenge.intensity === "intense" ? "intense" : "soft";
    const title = translate(challenge.title);
    const text = replacePlayers(translate(challenge.text));
    const tags = challenge.tags.map((tagId) => getTagLabel(tagId));
    const points = challenge.points || 0;
    const duration = Number(challenge.duration || 0);

    target.className = "challenge-card glass-card";
    target.innerHTML = `
      <div class="challenge-meta">
        <span class="badge ${intensityClass}">${escapeHtml(INTENSITIES[challenge.intensity][state.settings.language])}</span>
        <span class="badge">+${points} ${escapeHtml(t("points"))}</span>
      </div>
      <h2 class="challenge-title">${escapeHtml(title)}</h2>
      <p class="challenge-text">${escapeHtml(text)}</p>
      <div class="tag-row">${tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
      <div class="consent-note">${escapeHtml(t("consentReminder"))}</div>
      ${duration > 0 ? renderTimer(duration) : ""}
      <div class="challenge-actions">
        <button class="btn primary" data-action="complete">${escapeHtml(t("complete"))} · +${points}</button>
        <button class="btn ghost" data-action="skip">${escapeHtml(t("skip"))}</button>
        <button class="btn secondary" data-action="repeat">${escapeHtml(t("repeat"))}</button>
      </div>
    `;
  }

  function renderTimer(duration) {
    return `
      <div class="timer-box" data-duration="${duration}">
        <span class="timer-display">${formatTime(duration)}</span>
        <div class="timer-actions">
          <button class="btn secondary" data-action="start-timer">${escapeHtml(t("startTimer"))}</button>
          <button class="btn ghost" data-action="reset-timer">${escapeHtml(t("resetTimer"))}</button>
        </div>
      </div>
    `;
  }

  function renderNoResults(targetId) {
    const target = $("#" + targetId);
    if (!target) return;
    target.className = "challenge-card glass-card empty";
    target.innerHTML = `
      <div class="no-results">
        <h2>${escapeHtml(t("noResultsTitle"))}</h2>
        <p>${escapeHtml(t("noResultsText"))}</p>
        <button class="btn primary" data-view="settingsView">${escapeHtml(t("configureLimits"))}</button>
      </div>
    `;
  }

  function handleChallengeAction(action, source) {
    if (action === "complete") completeChallenge();
    if (action === "skip") skipChallenge();
    if (action === "repeat") repeatChallenge();
    if (action === "start-timer") startTimer(source.closest(".timer-box"));
    if (action === "reset-timer") resetTimer(source.closest(".timer-box"));
  }

  function completeChallenge() {
    if (!state.currentChallenge) return;
    state.score.points += Number(state.currentChallenge.points || 0);
    state.score.completed += 1;
    addHistory("completed", state.currentChallenge, state.currentMode);

    if (state.currentMode === "levels") {
      advanceLevel();
    }

    saveState();
    renderSidebar();
    renderHistory();
    renderLevels();
    playSound("fxSuccess");
    showToast(t("challengeCompleted"));
  }

  function skipChallenge() {
    if (!state.currentChallenge) return;
    const skippedMode = state.currentMode;
    const skippedTarget = state.lastTargetId;
    const skippedId = state.currentChallenge.id;
    state.score.skipped += 1;
    addHistory("skipped", state.currentChallenge, state.currentMode);
    saveState();
    renderSidebar();
    renderHistory();
    showToast(t("challengeSkipped"));

    if (skippedMode === "roulette") {
      const challenge = pickRandom(getAvailableChallenges({ mode: "roulette", avoidId: skippedId }));
      renderChallenge(skippedTarget, challenge, "roulette");
    } else if (skippedMode === "cards") {
      const challenge = pickRandom(getAvailableChallenges({ mode: "cards", avoidId: skippedId }));
      renderChallenge(skippedTarget, challenge, "cards");
    } else if (skippedMode === "levels") {
      drawLevelChallenge();
    } else if (skippedMode === "random") {
      drawRandomChallenge();
    } else if (skippedMode === "dice") {
      rollDice();
    }
  }

  function repeatChallenge() {
    if (!state.currentChallenge || !state.lastTargetId) return;
    renderChallenge(state.lastTargetId, state.currentChallenge, state.currentMode || "random");
  }

  function addHistory(status, challenge, mode) {
    const record = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      status,
      mode,
      title: translate(challenge.title),
      intensity: challenge.intensity,
      points: status === "completed" ? Number(challenge.points || 0) : 0,
      date: new Date().toISOString()
    };
    state.history.unshift(record);
    state.history = state.history.slice(0, 80);
  }

  function advanceLevel() {
    const current = LEVELS[state.level.index];
    if (!current) {
      state.level = { index: 0, progress: 0 };
      return;
    }

    state.level.progress += 1;
    if (state.level.progress >= current.target) {
      state.level.index = Math.min(state.level.index + 1, LEVELS.length - 1);
      state.level.progress = 0;
    }
  }

  function renderLevels() {
    const track = $("#levelTrack");
    if (!track) return;
    track.innerHTML = "";

    LEVELS.forEach((level, index) => {
      const li = document.createElement("li");
      const isActive = index === state.level.index;
      const isDone = index < state.level.index;
      const progress = isDone ? 100 : isActive ? Math.min(100, (state.level.progress / level.target) * 100) : 0;
      li.className = `${isActive ? "active" : ""} ${isDone ? "done" : ""}`.trim();
      li.innerHTML = `
        <span class="level-index">${index + 1}</span>
        <span>
          <strong>${escapeHtml(translate(level.title))}</strong>
          <small>${escapeHtml(translate(level.description))}</small>
        </span>
        <span class="progress-line" aria-label="${Math.round(progress)}%"><span style="width:${progress}%"></span></span>
      `;
      track.appendChild(li);
    });
  }

  function renderHistory() {
    const list = $("#historyList");
    if (!list) return;

    if (!state.history.length) {
      list.innerHTML = `<p>${state.settings.language === "en" ? "No saved challenges yet." : "Aún no hay retos guardados."}</p>`;
      return;
    }

    list.innerHTML = state.history.map((item) => {
      const statusLabel = item.status === "completed" ? t("completedStatus") : t("skippedStatus");
      const statusClass = item.status === "completed" ? "badge" : "badge medium";
      return `
        <article class="history-item">
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(t("modeLabel"))}: ${escapeHtml(modeName(item.mode))} · ${escapeHtml(t("intensityLabel"))}: ${escapeHtml(INTENSITIES[item.intensity]?.[state.settings.language] || item.intensity)} · +${Number(item.points || 0)}</p>
          </div>
          <div>
            <span class="${statusClass}">${escapeHtml(statusLabel)}</span>
            <div class="history-date">${escapeHtml(formatDate(item.date))}</div>
          </div>
        </article>
      `;
    }).join("");
  }

  function modeName(mode) {
    const names = {
      roulette: { es: "Ruleta", en: "Wheel" },
      cards: { es: "Cartas", en: "Cards" },
      dice: { es: "Dados", en: "Dice" },
      levels: { es: "Niveles", en: "Levels" },
      random: { es: "Aleatorio", en: "Random" }
    };
    return names[mode]?.[state.settings.language] || mode || "—";
  }

  function startTimer(box) {
    if (!box) return;
    clearTimer();
    const duration = Number(box.dataset.duration || 0);
    timer.remaining = duration;
    timer.sourceDuration = duration;
    timer.display = box.querySelector(".timer-display");
    timer.display.textContent = formatTime(timer.remaining);

    timer.intervalId = window.setInterval(() => {
      timer.remaining -= 1;
      if (timer.display) timer.display.textContent = formatTime(Math.max(0, timer.remaining));

      if (timer.remaining <= 0) {
        clearTimer(false);
        playSound("fxTimer");
        showToast(t("timerDone"));
      }
    }, 1000);
  }

  function resetTimer(box) {
    clearTimer();
    if (!box) return;
    const duration = Number(box.dataset.duration || 0);
    const display = box.querySelector(".timer-display");
    if (display) display.textContent = formatTime(duration);
  }

  function clearTimer(resetDisplay = true) {
    if (timer.intervalId) window.clearInterval(timer.intervalId);
    if (resetDisplay && timer.display && timer.sourceDuration) {
      timer.display.textContent = formatTime(timer.sourceDuration);
    }
    timer = { intervalId: null, remaining: 0, display: null, sourceDuration: 0 };
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  function formatDate(value) {
    try {
      return new Intl.DateTimeFormat(state.settings.language === "en" ? "en" : "es", {
        dateStyle: "short",
        timeStyle: "short"
      }).format(new Date(value));
    } catch {
      return value;
    }
  }

  function randomizeSafeWord() {
    const current = state.safeWord;
    const options = SAFE_WORDS.filter((word) => word !== current);
    state.safeWord = pickRandom(options) || "PAUSA";
    saveState();
    renderSidebar();
  }

  function resetGame() {
    if (!window.confirm(t("confirmReset"))) return;
    state.score = { points: 0, completed: 0, skipped: 0 };
    state.history = [];
    state.level = { index: 0, progress: 0 };
    state.currentChallenge = null;
    saveState();
    renderSidebar();
    renderLevels();
    renderHistory();
    showToast(t("gameReset"));
  }

  function clearHistory() {
    if (!window.confirm(t("confirmHistory"))) return;
    state.history = [];
    saveState();
    renderHistory();
    showToast(t("historyCleared"));
  }

  function clearLocalData() {
    if (!window.confirm(t("confirmLocal"))) return;
    localStorage.removeItem(STORAGE_KEY);
    state = defaultState();
    applyTheme();
    applyLanguage();
    renderSidebar();
    renderLevels();
    renderHistory();
    hydrateSettingsForm();
    hydrateAgeGate();
    showView("homeView");
    showToast(t("localDataCleared"));
  }

  function togglePrivacy(show) {
    const cover = $("#privacyCover");
    cover.classList.toggle("hidden", !show);
    if (show) {
      clearTimer();
      cover.focus();
    }
  }

  function playSound(id) {
    if (!state.settings.sound) return;
    const audio = $("#" + id);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timeoutId);
    showToast.timeoutId = window.setTimeout(() => toast.classList.remove("show"), 2400);
  }

  function getTagLabel(tagId) {
    const tag = TAGS.find((item) => item.id === tagId);
    if (!tag) return tagId;
    return tag[state.settings.language] || tag.es;
  }

  function replacePlayers(text) {
    return text
      .replaceAll("{A}", state.settings.players.a || "Persona A")
      .replaceAll("{B}", state.settings.players.b || "Persona B");
  }

  function unique(items) {
    return [...new Set(items)];
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    if (window.location.protocol === "file:") return;
    navigator.serviceWorker.register("service-worker.js").catch((error) => {
      console.warn("Service worker no registrado:", error);
    });
  }
})();
