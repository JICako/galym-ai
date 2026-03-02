// ╔══════════════════════════════════════════════════════════════╗
// ║         GALYM AI — ФАЙЛ СОДЕРЖИМОГО САЙТА                   ║
// ║                                                              ║
// ║  Здесь хранится ВЕСЬ текст и контент сайта.                  ║
// ║  Вы можете менять текст, ссылки и фото прямо здесь           ║
// ║  без знания программирования.                                ║
// ║                                                              ║
// ║  КАК РЕДАКТИРОВАТЬ:                                          ║
// ║  1. Откройте этот файл в Блокноте или любом текстовом        ║
// ║     редакторе (например Notepad++, VS Code)                  ║
// ║  2. Найдите нужную секцию по названию                        ║
// ║  3. Измените текст между кавычками " "                       ║
// ║  4. НЕ удаляйте запятые, двоеточия и кавычки вокруг текста  ║
// ║  5. Сохраните файл — изменения появятся на сайте             ║
// ╚══════════════════════════════════════════════════════════════╝

const SITE_CONTENT = {

  // ──────────────────────────────────────────────
  // КОНТАКТЫ И ОБЩАЯ ИНФОРМАЦИЯ
  // ──────────────────────────────────────────────
  contacts: {
    phone:    "+7 700 123 45 67",           // ← телефон
    email:    "info@galym-ai.kz",           // ← email
    address:  "г. Актобе, ул. Маресьева, д. 15",  // ← адрес
    address2: "Бизнес-центр «Технопарк», 3-й этаж",
    city:     "г. Актобе, Казахстан",
    hours:    "Пн–Пт: 9:00 – 20:00 | Сб: 10:00 – 17:00 | Вс: выходной",
    whatsapp: "https://wa.me/77001234567",  // ← ссылка WhatsApp
    telegram: "https://t.me/galym_ai",      // ← ссылка Telegram (не обязательно)
    googleForms: "https://forms.google.com/example",  // ← ссылка на форму записи
  },

  // ──────────────────────────────────────────────
  // СТАТИСТИКА (на странице "О нас")
  // ──────────────────────────────────────────────
  stats: {
    students:     "200+",   // ← количество учеников
    courses:      "10+",    // ← количество курсов
    years:        "3+",     // ← лет работы
    satisfaction: "95%",    // ← процент довольных учеников
  },

  // ──────────────────────────────────────────────
  // КУРСЫ  (courses.html)
  // Можно добавить/убрать курс, скопировав блок
  // ──────────────────────────────────────────────
  courses: [
    {
      number:      "01",
      level:       "beginner",           // beginner / intermediate / advanced
      titleRu:     "Scratch для детей",
      titleKz:     "Балаларға арналған Scratch",
      titleEn:     "Scratch for Kids",
      descRu:      "Введение в программирование через визуальный язык Scratch. Идеально для детей 7–11 лет. Создавай игры и анимации с первого урока.",
      descKz:      "Scratch визуалды тілі арқылы бағдарламалауға кіріспе. 7–11 жастағы балаларға өте қолайлы.",
      descEn:      "Introduction to programming through the visual Scratch language. Perfect for children aged 7–11.",
      duration:    "3",     // ← месяцев
      age:         "7–11",
      lessons:     "24",
      formUrl:     "https://forms.google.com/example",   // ← ссылка на запись
    },
    {
      number:      "02",
      level:       "beginner",
      titleRu:     "Python: основы",
      titleKz:     "Python: негіздер",
      titleEn:     "Python: Fundamentals",
      descRu:      "Первый шаг в мир реального программирования. Переменные, условия, циклы, функции — всё через задачи и мини-проекты.",
      descKz:      "Нақты бағдарламалау әлеміне алғашқы қадам. Айнымалылар, шарттар, циклдар.",
      descEn:      "Your first step into real programming. Variables, conditions, loops and functions through tasks and mini-projects.",
      duration:    "4",
      age:         "12–16",
      lessons:     "32",
      formUrl:     "https://forms.google.com/example",
    },
    {
      number:      "03",
      level:       "intermediate",
      titleRu:     "Веб-разработка",
      titleKz:     "Веб-әзірлеу",
      titleEn:     "Web Development",
      descRu:      "HTML, CSS, JavaScript — создавай полноценные сайты с нуля. Научись верстать адаптивные страницы и добавлять интерактивность.",
      descKz:      "HTML, CSS, JavaScript — нөлден толыққанды сайттар жасаңыз.",
      descEn:      "HTML, CSS, JavaScript — build full websites from scratch. Learn responsive layouts.",
      duration:    "5",
      age:         "13–17",
      lessons:     "40",
      formUrl:     "https://forms.google.com/example",
    },
    {
      number:      "04",
      level:       "intermediate",
      titleRu:     "Искусственный интеллект",
      titleKz:     "Жасанды интеллект",
      titleEn:     "Artificial Intelligence",
      descRu:      "Узнай, как работает ИИ изнутри. Нейронные сети, машинное обучение, работа с данными. Реальные проекты с Python.",
      descKz:      "ЖИ-дің ішінен қалай жұмыс істейтінін біліңіз. Нейрондық желілер, машиналық оқыту.",
      descEn:      "Discover how AI works from the inside. Neural networks, machine learning, data projects with Python.",
      duration:    "6",
      age:         "14–18",
      lessons:     "48",
      formUrl:     "https://forms.google.com/example",
    },
    {
      number:      "05",
      level:       "advanced",
      titleRu:     "Робототехника",
      titleKz:     "Робототехника",
      titleEn:     "Robotics",
      descRu:      "Собирай роботов и программируй их на Arduino. От базовых схем до сложных автономных устройств.",
      descKz:      "Arduino-да роботтар жинаңыз және бағдарламалаңыз.",
      descEn:      "Build robots and program them with Arduino. From basic circuits to complex autonomous devices.",
      duration:    "5",
      age:         "11–16",
      lessons:     "36",
      formUrl:     "https://forms.google.com/example",
    },
    {
      number:      "06",
      level:       "advanced",
      titleRu:     "Разработка игр",
      titleKz:     "Ойын әзірлеу",
      titleEn:     "Game Development",
      descRu:      "Создавай собственные игры на Unity и Python. Геймдизайн, физика, анимации — полный цикл от идеи до готовой игры.",
      descKz:      "Unity мен Python-да өз ойындарыңызды жасаңыз.",
      descEn:      "Create your own games with Unity and Python. Game design, physics, animations — full cycle.",
      duration:    "6",
      age:         "13–18",
      lessons:     "48",
      formUrl:     "https://forms.google.com/example",
    },
  ],

  // ──────────────────────────────────────────────
  // ПРЕПОДАВАТЕЛИ (teachers.html)
  // ──────────────────────────────────────────────
  teachers: [
    {
      nameRu:  "Ален Галымов",
      nameKz:  "Ален Ғалымов",
      nameEn:  "Alen Galymov",
      roleRu:  "Основатель & Преподаватель Python / AI",
      roleKz:  "Негізші & Python / AI оқытушысы",
      roleEn:  "Founder & Python / AI Instructor",
      bioRu:   "5+ лет в разработке · Проекты для стартапов · Ментор олимпиадников",
      bioKz:   "5+ жыл әзірлеуде · Стартаптарға арналған жобалар",
      bioEn:   "5+ yrs in development · Startup projects · Olympiad mentor",
      photo:   "https://picsum.photos/seed/teacher1/400/400",  // ← ссылка на фото
    },
    {
      nameRu:  "Дамир Сейтжанов",
      nameKz:  "Дәмір Сейтжанов",
      nameEn:  "Damir Seitzhanov",
      roleRu:  "Преподаватель Веб-разработки",
      roleKz:  "Веб-әзірлеу оқытушысы",
      roleEn:  "Web Development Instructor",
      bioRu:   "Frontend-разработчик · React / Vue · 3 года педагогики",
      bioKz:   "Frontend-әзірлеуші · React / Vue · 3 жыл педагогика",
      bioEn:   "Frontend developer · React / Vue · 3 years teaching",
      photo:   "https://picsum.photos/seed/teacher2/400/400",
    },
    {
      nameRu:  "Айгерим Нурланова",
      nameKz:  "Айгерім Нұрланова",
      nameEn:  "Aigerim Nurlanova",
      roleRu:  "Преподаватель Робототехники",
      roleKz:  "Робототехника оқытушысы",
      roleEn:  "Robotics Instructor",
      bioRu:   "Инженер-механик · Arduino / ROS · Участник олимпиад",
      bioKz:   "Механик-инженер · Arduino / ROS",
      bioEn:   "Mechanical engineer · Arduino / ROS · Olympiad participant",
      photo:   "https://picsum.photos/seed/teacher3/400/400",
    },
    {
      nameRu:  "Тимур Байтасов",
      nameKz:  "Тимур Байтасов",
      nameEn:  "Timur Baitasov",
      roleRu:  "Преподаватель Gamedev / Scratch",
      roleKz:  "Gamedev / Scratch оқытушысы",
      roleEn:  "Gamedev / Scratch Instructor",
      bioRu:   "Разработчик инди-игр · Unity · Работа с детьми 4+ лет",
      bioKz:   "Инди-ойын әзірлеушісі · Unity",
      bioEn:   "Indie game developer · Unity · 4+ years with kids",
      photo:   "https://picsum.photos/seed/teacher4/400/400",
    },
  ],

  // ──────────────────────────────────────────────
  // НОВОСТИ И ГАЛЕРЕЯ МЕРОПРИЯТИЙ (news.html)
  //
  // Каждая новость — это карточка, при нажатии
  // открывается галерея с фотографиями мероприятия.
  //
  // photos: [ "ссылка1", "ссылка2", ... ]
  // Можно добавить до 20 фотографий на мероприятие
  // ──────────────────────────────────────────────
  news: [
    {
      emoji:   "🏆",
      dateRu:  "15 ноября 2024",
      dateKz:  "2024 жылғы 15 қараша",
      dateEn:  "November 15, 2024",
      titleRu: "Городская олимпиада по программированию — 3 призовых места!",
      titleKz: "Қалалық бағдарламалау олимпиадасы — 3 жүлделі орын!",
      titleEn: "City Programming Olympiad — 3 Prize Places!",
      textRu:  "Три ученика GALYM AI заняли призовые места на городской олимпиаде по информатике среди школьников. Особенно отличился Арман Сейтов — первое место в категории 14–16 лет. Это результат месяцев упорной работы и тренировок!",
      textKz:  "GALYM AI оқушылары мектеп оқушылары арасындағы информатика олимпиадасында жүлделі орындарды иеленді. Арман Сейтов 14–16 жас санатында бірінші орынды алды.",
      textEn:  "Three GALYM AI students took prize places at the city informatics olympiad. Arman Seitov claimed first place in the 14–16 age category — the result of months of hard training!",
      // ← Фотографии мероприятия. Замените ссылки на свои фото (или загрузите в папку проекта)
      photos: [
        "https://picsum.photos/seed/event1a/800/600",
        "https://picsum.photos/seed/event1b/800/600",
        "https://picsum.photos/seed/event1c/800/600",
        "https://picsum.photos/seed/event1d/800/600",
        "https://picsum.photos/seed/event1e/800/600",
        "https://picsum.photos/seed/event1f/800/600",
      ],
    },
    {
      emoji:   "🚀",
      dateRu:  "1 октября 2024",
      dateKz:  "2024 жылғы 1 қазан",
      dateEn:  "October 1, 2024",
      titleRu: "Открытие нового курса по Искусственному интеллекту",
      titleKz: "Жасанды интеллект бойынша жаңа курстың ашылуы",
      titleEn: "New Artificial Intelligence Course Launch",
      textRu:  "Торжественное открытие курса «Искусственный интеллект» прошло при полном зале. 20 учеников приступили к изучению нейронных сетей и машинного обучения. Мероприятие открыл основатель клуба Ален Галымов.",
      textKz:  "«Жасанды интеллект» курсының салтанатты ашылуы толы залда өтті. 20 оқушы нейрондық желілерді зерделеуге кірісті.",
      textEn:  "The grand opening of the AI course was held to a full house. 20 students began studying neural networks and machine learning.",
      photos: [
        "https://picsum.photos/seed/event2a/800/600",
        "https://picsum.photos/seed/event2b/800/600",
        "https://picsum.photos/seed/event2c/800/600",
        "https://picsum.photos/seed/event2d/800/600",
      ],
    },
    {
      emoji:   "🎓",
      dateRu:  "20 сентября 2024",
      dateKz:  "2024 жылғы 20 қыркүйек",
      dateEn:  "September 20, 2024",
      titleRu: "Выпускной осеннего потока: 32 новых специалиста!",
      titleKz: "Күзгі шығарылым: 32 жаңа маман!",
      titleEn: "Autumn Graduation: 32 New Specialists!",
      textRu:  "Торжественная церемония вручения сертификатов осеннего потока. 32 выпускника защитили свои проекты: игры, сайты, роботы и нейросети. Каждый ушёл с портфолио и уверенностью в своих силах.",
      textKz:  "Күзгі ағымының сертификаттарын табыстаудың салтанатты рәсімі. 32 түлек өз жобаларын қорғады.",
      textEn:  "Certificate ceremony for the autumn cohort. 32 graduates defended projects: games, websites, robots and neural networks.",
      photos: [
        "https://picsum.photos/seed/event3a/800/600",
        "https://picsum.photos/seed/event3b/800/600",
        "https://picsum.photos/seed/event3c/800/600",
        "https://picsum.photos/seed/event3d/800/600",
        "https://picsum.photos/seed/event3e/800/600",
      ],
    },
  ],

  // ──────────────────────────────────────────────
  // ФОНОВЫЕ ИЗОБРАЖЕНИЯ
  // Замените ссылки на собственные изображения
  // Рекомендуемый размер: 1920×1080 пикселей
  // ──────────────────────────────────────────────
  backgrounds: {
    // Главное фоновое изображение (одно на весь сайт)
    // Тема: AI / нейросеть / схемы
    main: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=90&auto=format&fit=crop",
    // Запасное изображение (если первое не загрузится)
    fallback: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80&auto=format&fit=crop",
  },

  // ──────────────────────────────────────────────
  // СОЦИАЛЬНЫЕ СЕТИ
  // Оставьте "" если не нужно показывать
  // ──────────────────────────────────────────────
  social: {
    instagram: "",   // ← например: "https://instagram.com/galym_ai"
    facebook:  "",
    youtube:   "",
    tiktok:    "",
  },

};
// ═══════════════════════════════════════════════════
// НЕ МЕНЯЙТЕ СТРОКИ НИЖЕ ЭТОЙ ЛИНИИ
// ═══════════════════════════════════════════════════

// ══════════════════════════════════════════════════════
// ДОБАВЛЕНО: мероприятия для страницы "Программа"
// Структура такая же, как в новостях:
// photos — список фото, videos — список YouTube ссылок
// ══════════════════════════════════════════════════════

SITE_CONTENT.events = [
  {
    emoji:   "🤖",
    dateRu:  "10 февраля 2025",
    dateKz:  "2025 жылғы 10 ақпан",
    dateEn:  "February 10, 2025",
    titleRu: "Хакатон «Роботы будущего»",
    titleKz: "«Болашақтың роботтары» хакатоны",
    titleEn: "Hackathon: Robots of the Future",
    textRu:  "Двухдневный хакатон, в котором 6 команд соревновались в создании автономных роботов на Arduino. Команда «Circuit Breakers» заняла первое место с роботом-уборщиком, управляемым нейросетью.",
    textKz:  "Екі күндік хакатонда 6 команда Arduino-да автономды роботтар жасауда жарысты. «Circuit Breakers» командасы нейрондық желімен басқарылатын тазалаушы роботпен бірінші орынды алды.",
    textEn:  "A two-day hackathon where 6 teams competed to build autonomous Arduino robots. Team 'Circuit Breakers' won first place with a neural-controlled cleaning robot.",
    photos: [
      "https://picsum.photos/seed/ev1a/800/600",
      "https://picsum.photos/seed/ev1b/800/600",
      "https://picsum.photos/seed/ev1c/800/600",
      "https://picsum.photos/seed/ev1d/800/600",
      "https://picsum.photos/seed/ev1e/800/600",
    ],
    // ← Ссылки на YouTube видео мероприятия (оставьте [] если нет видео)
    videos: [
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    ],
  },
  {
    emoji:   "💻",
    dateRu:  "5 декабря 2024",
    dateKz:  "2024 жылғы 5 желтоқсан",
    dateEn:  "December 5, 2024",
    titleRu: "Demo Day: защита проектов осеннего потока",
    titleKz: "Demo Day: күзгі ағым жобаларын қорғау",
    titleEn: "Demo Day: Autumn Cohort Project Showcase",
    textRu:  "Финальное мероприятие осеннего сезона. 32 ученика представили свои проекты: сайты, игры, чат-боты и первые нейросети. На показе присутствовали родители, местные IT-специалисты и представители компаний.",
    textKz:  "Күзгі маусымның қорытынды іс-шарасы. 32 оқушы өз жобаларын ұсынды: сайттар, ойындар, чат-боттар. Ата-аналар мен жергілікті IT-мамандары қатысты.",
    textEn:  "The final event of the autumn season. 32 students presented projects: websites, games, chatbots and first neural networks. Parents and local IT professionals attended.",
    photos: [
      "https://picsum.photos/seed/ev2a/800/600",
      "https://picsum.photos/seed/ev2b/800/600",
      "https://picsum.photos/seed/ev2c/800/600",
      "https://picsum.photos/seed/ev2d/800/600",
    ],
    videos: [
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    ],
  },
  {
    emoji:   "🌐",
    dateRu:  "18 ноября 2024",
    dateKz:  "2024 жылғы 18 қараша",
    dateEn:  "November 18, 2024",
    titleRu: "Мастер-класс: «Веб-разработка за 4 часа»",
    titleKz: "Мастер-класс: «4 сағатта веб-әзірлеу»",
    titleEn: "Workshop: Web Development in 4 Hours",
    textRu:  "Открытый мастер-класс для начинающих. За 4 часа участники с нуля создали собственный сайт-визитку с HTML, CSS и JavaScript. Пришли 45 участников от 12 до 25 лет.",
    textKz:  "Жаңадан бастаушыларға арналған ашық шебер-сынып. 4 сағатта қатысушылар HTML, CSS және JavaScript арқылы өз сайттарын жасады. 12-25 жас аралығындағы 45 қатысушы келді.",
    textEn:  "Open workshop for beginners. In 4 hours participants built their own business card site with HTML, CSS and JavaScript. 45 participants aged 12–25 attended.",
    photos: [
      "https://picsum.photos/seed/ev3a/800/600",
      "https://picsum.photos/seed/ev3b/800/600",
      "https://picsum.photos/seed/ev3c/800/600",
    ],
    videos: [],
  },
  {
    emoji:   "🧠",
    dateRu:  "3 октября 2024",
    dateKz:  "2024 жылғы 3 қазан",
    dateEn:  "October 3, 2024",
    titleRu: "Открытый урок: «Как работает ChatGPT?»",
    titleKz: "Ашық сабақ: «ChatGPT қалай жұмыс істейді?»",
    titleEn: "Open Lesson: How Does ChatGPT Work?",
    textRu:  "Публичная лекция основателя клуба Алена Галымова о принципах работы больших языковых моделей. Разобрали трансформеры, токенизацию и RLHF на доступных примерах. Посетили 80+ человек.",
    textKz:  "Клуб негізшісі Ален Ғалымовтың үлкен тіл модельдерінің жұмыс принциптері туралы ашық дәрісі. 80+ адам келді.",
    textEn:  "Public lecture by club founder Alen Galymov on how large language models work. Transformers, tokenization and RLHF explained with accessible examples. 80+ attendees.",
    photos: [
      "https://picsum.photos/seed/ev4a/800/600",
      "https://picsum.photos/seed/ev4b/800/600",
      "https://picsum.photos/seed/ev4c/800/600",
      "https://picsum.photos/seed/ev4d/800/600",
      "https://picsum.photos/seed/ev4e/800/600",
      "https://picsum.photos/seed/ev4f/800/600",
    ],
    videos: [
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    ],
  },
];

// ══════════════════════════════════════════════════════
// ДОБАВЛЕНО: полезные ИИ-инструменты (страница "Дополнительное")
// ══════════════════════════════════════════════════════

SITE_CONTENT.aiTools = [
  {
    name:    "ChatGPT",
    company: "OpenAI",
    emoji:   "💬",
    color:   "#10A37F",
    descRu:  "Самый популярный ИИ-чат. Помогает писать тексты, объяснять код, отвечать на вопросы, генерировать идеи и многое другое.",
    descKz:  "Ең танымал ЖИ-чат. Мәтін жазуға, кодты түсіндіруге, сұрақтарға жауап беруге және идеялар генерациялауға көмектеседі.",
    descEn:  "The most popular AI chat. Helps write texts, explain code, answer questions, generate ideas and much more.",
    url:     "https://chat.openai.com",
    tagRu:   "Текст · Код · Анализ",
    tagEn:   "Text · Code · Analysis",
    tagKz:   "Мәтін · Код · Талдау",
    free:    true,
  },
  {
    name:    "Claude",
    company: "Anthropic",
    emoji:   "🧠",
    color:   "#CC785C",
    descRu:  "Умный и безопасный ИИ-ассистент. Отлично справляется с длинными документами, анализом и написанием текстов. Известен вдумчивыми ответами.",
    descKz:  "Ақылды және қауіпсіз ЖИ-көмекші. Ұзын құжаттармен, талдаумен және мәтін жазумен өте жақсы жұмыс істейді.",
    descEn:  "Smart and safe AI assistant. Excellent with long documents, analysis and writing. Known for thoughtful responses.",
    url:     "https://claude.ai",
    tagRu:   "Текст · Документы · Код",
    tagEn:   "Text · Documents · Code",
    tagKz:   "Мәтін · Құжаттар · Код",
    free:    true,
  },
  {
    name:    "Gemini",
    company: "Google",
    emoji:   "✨",
    color:   "#4285F4",
    descRu:  "ИИ от Google с доступом к поиску и актуальным данным. Интегрирован с Google Docs, Sheets и Gmail. Понимает изображения.",
    descKz:  "Google-дің іздеу мен өзекті деректерге қол жеткізуі бар ЖИ. Google Docs, Sheets және Gmail-мен біріктірілген.",
    descEn:  "Google's AI with access to search and real-time data. Integrated with Google Docs, Sheets and Gmail. Understands images.",
    url:     "https://gemini.google.com",
    tagRu:   "Поиск · Документы · Изображения",
    tagEn:   "Search · Documents · Images",
    tagKz:   "Іздеу · Құжаттар · Суреттер",
    free:    true,
  },
  {
    name:    "DeepSeek",
    company: "DeepSeek AI",
    emoji:   "🔬",
    color:   "#5B6BF5",
    descRu:  "Мощный китайский ИИ с открытым кодом. Отлично справляется с математикой, программированием и логическим мышлением.",
    descKz:  "Ашық кодты қуатты қытайлық ЖИ. Математика, бағдарламалау және логикалық ойлаумен өте жақсы жұмыс істейді.",
    descEn:  "Powerful open-source Chinese AI. Excels at mathematics, programming and logical reasoning.",
    url:     "https://chat.deepseek.com",
    tagRu:   "Код · Математика · Логика",
    tagEn:   "Code · Math · Logic",
    tagKz:   "Код · Математика · Логика",
    free:    true,
  },
  {
    name:    "Grok",
    company: "xAI",
    emoji:   "🚀",
    color:   "#1DA1F2",
    descRu:  "ИИ от Илона Маска. Имеет доступ к X (Twitter) в реальном времени. Отвечает с юмором и без цензуры на острые темы.",
    descKz:  "Илон Масктың ЖИ-і. X (Twitter)-ке нақты уақыт режимінде қол жеткізеді. Өткір тақырыптарда юмормен жауап береді.",
    descEn:  "Elon Musk's AI. Has real-time access to X (Twitter). Responds with humor and frankness on sharp topics.",
    url:     "https://grok.com",
    tagRu:   "Новости · Текст · Юмор",
    tagEn:   "News · Text · Humor",
    tagKz:   "Жаңалықтар · Мәтін · Юмор",
    free:    true,
  },
  {
    name:    "NotebookLM",
    company: "Google",
    emoji:   "📓",
    color:   "#34A853",
    descRu:  "Инструмент для работы с документами. Загрузите PDF, лекции или книги — ИИ ответит на вопросы только по вашим материалам.",
    descKz:  "Құжаттармен жұмыс жасауға арналған құрал. PDF, дәрістер немесе кітаптарды жүктеңіз — ЖИ тек сіздің материалдарыңыз бойынша жауап береді.",
    descEn:  "Tool for working with documents. Upload PDFs, lectures or books — AI answers questions based only on your materials.",
    url:     "https://notebooklm.google.com",
    tagRu:   "Документы · Обучение · PDF",
    tagEn:   "Documents · Learning · PDF",
    tagKz:   "Құжаттар · Оқыту · PDF",
    free:    true,
  },
  {
    name:    "Perplexity",
    company: "Perplexity AI",
    emoji:   "🔍",
    color:   "#20B2AA",
    descRu:  "ИИ-поисковик нового поколения. Ищет в интернете и даёт ответы со ссылками на источники. Отлично для исследований.",
    descKz:  "Жаңа буын ЖИ-іздеуші. Интернетте іздейді және дереккөздерге сілтемелер беред. Зерттеулер үшін өте жақсы.",
    descEn:  "Next-gen AI search engine. Searches the web and provides answers with source citations. Great for research.",
    url:     "https://perplexity.ai",
    tagRu:   "Поиск · Исследования · Источники",
    tagEn:   "Search · Research · Sources",
    tagKz:   "Іздеу · Зерттеу · Дереккөздер",
    free:    true,
  },
  {
    name:    "Midjourney",
    company: "Midjourney",
    emoji:   "🎨",
    color:   "#7B68EE",
    descRu:  "Лучший ИИ для генерации изображений. Создаёт реалистичные и художественные картины по текстовому описанию.",
    descKz:  "Суреттер генерациялауға арналған үздік ЖИ. Мәтіндік сипаттама бойынша реалистік және көркем суреттер жасайды.",
    descEn:  "Best AI for image generation. Creates realistic and artistic images from text descriptions.",
    url:     "https://midjourney.com",
    tagRu:   "Изображения · Арт · Дизайн",
    tagEn:   "Images · Art · Design",
    tagKz:   "Суреттер · Өнер · Дизайн",
    free:    false,
  },
  {
    name:    "Suno",
    company: "Suno AI",
    emoji:   "🎵",
    color:   "#FF6B6B",
    descRu:  "Генерация музыки по тексту. Напишите описание стиля и темы — получите полноценную песню с вокалом за секунды.",
    descKz:  "Мәтін бойынша музыка генерациясы. Стиль мен тақырып сипаттамасын жазыңыз — секундтар ішінде толық ән аласыз.",
    descEn:  "Music generation from text. Write a style and theme description — get a full song with vocals in seconds.",
    url:     "https://suno.com",
    tagRu:   "Музыка · Песни · Аудио",
    tagEn:   "Music · Songs · Audio",
    tagKz:   "Музыка · Әндер · Аудио",
    free:    true,
  },
  {
    name:    "Runway",
    company: "Runway ML",
    emoji:   "🎬",
    color:   "#FF4500",
    descRu:  "Генерация и редактирование видео с помощью ИИ. Создавайте короткие ролики из текста или изображений.",
    descKz:  "ЖИ көмегімен бейне генерациясы және өңдеу. Мәтіннен немесе суреттерден қысқа роликтер жасаңыз.",
    descEn:  "AI-powered video generation and editing. Create short clips from text or images.",
    url:     "https://runwayml.com",
    tagRu:   "Видео · Анимация · Монтаж",
    tagEn:   "Video · Animation · Editing",
    tagKz:   "Бейне · Анимация · Монтаж",
    free:    false,
  },
  {
    name:    "GitHub Copilot",
    company: "GitHub / Microsoft",
    emoji:   "👨‍💻",
    color:   "#333333",
    descRu:  "ИИ-помощник для программистов прямо в редакторе кода. Дописывает строки, генерирует функции и объясняет чужой код.",
    descKz:  "Бағдарламашыларға арналған ЖИ-көмекші, тікелей код редакторында. Жолдарды аяқтайды, функциялар жасайды.",
    descEn:  "AI assistant for developers right inside the code editor. Completes lines, generates functions, explains code.",
    url:     "https://github.com/features/copilot",
    tagRu:   "Код · IDE · Программирование",
    tagEn:   "Code · IDE · Programming",
    tagKz:   "Код · IDE · Бағдарламалау",
    free:    false,
  },
  {
    name:    "Canva AI",
    company: "Canva",
    emoji:   "🖼️",
    color:   "#00C4CC",
    descRu:  "ИИ-инструменты внутри Canva: генерация изображений, фона, текста и автоматическое создание презентаций по описанию.",
    descKz:  "Canva ішіндегі ЖИ-құралдар: суреттер, фон, мәтін генерациясы және сипаттама бойынша презентациялар жасау.",
    descEn:  "AI tools inside Canva: image generation, background removal, text generation and auto presentations.",
    url:     "https://canva.com",
    tagRu:   "Дизайн · Презентации · Изображения",
    tagEn:   "Design · Presentations · Images",
    tagKz:   "Дизайн · Презентациялар · Суреттер",
    free:    true,
  },
  {
    name:    "Kling AI",
    company: "Kuaishou",
    emoji:   "🎥",
    color:   "#8B5CF6",
    descRu:  "Китайский конкурент Sora. Генерирует реалистичные видео до 2 минут из текстового описания или изображения.",
    descKz:  "Sora-ның қытайлық бәсекелесі. Мәтін сипаттамасынан немесе суреттен 2 минутқа дейін реалистік бейне жасайды.",
    descEn:  "Chinese competitor to Sora. Generates realistic videos up to 2 minutes from text descriptions or images.",
    url:     "https://klingai.com",
    tagRu:   "Видео · Генерация · Реализм",
    tagEn:   "Video · Generation · Realism",
    tagKz:   "Бейне · Генерация · Реализм",
    free:    true,
  },
  {
    name:    "ElevenLabs",
    company: "ElevenLabs",
    emoji:   "🎙️",
    color:   "#F59E0B",
    descRu:  "Лучший ИИ для синтеза голоса. Клонирует голос по образцу, создаёт аудиокниги и озвучку видео на любом языке.",
    descKz:  "Дауыс синтезіне арналған үздік ЖИ. Үлгі бойынша дауысты клондайды, аудиокітаптар мен бейне дауыстап оқуды жасайды.",
    descEn:  "Best AI for voice synthesis. Clones voice from samples, creates audiobooks and video dubbing in any language.",
    url:     "https://elevenlabs.io",
    tagRu:   "Голос · Аудио · Дубляж",
    tagEn:   "Voice · Audio · Dubbing",
    tagKz:   "Дауыс · Аудио · Дубляж",
    free:    true,
  },
  {
    name:    "Bolt.new",
    company: "StackBlitz",
    emoji:   "⚡",
    color:   "#6366F1",
    descRu:  "Создаёт полноценные веб-приложения по текстовому описанию прямо в браузере. Идеально для обучения веб-разработке.",
    descKz:  "Мәтіндік сипаттама бойынша тікелей браузерде толыққанды веб-қосымшалар жасайды. Веб-әзірлеуді оқыту үшін өте жақсы.",
    descEn:  "Creates full web applications from text descriptions right in the browser. Perfect for learning web development.",
    url:     "https://bolt.new",
    tagRu:   "Веб · Код · Без навыков",
    tagEn:   "Web · Code · No-code",
    tagKz:   "Веб · Код · Кодсыз",
    free:    true,
  },
];
