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
      nameRu:  "Туленгалиева Махаббат Галымжановна",
      nameKz:  "Туленгалиева Махаббат Галымжановна",
      nameEn:  "Туленгалиева Махаббат Галымжановна",
      roleRu:  "Основатель",
      roleKz:  "Негізін қалаушы",
      roleEn:  "Founder",
      bioRu:   "Магистр педагогических наук",
      bioKz:   "Инди-ойын әзірлеушісі · Unity",
      bioEn:   "Indie game developer · Unity · 4+ years with kids",
      photo:   "mahabbat.jpeg",
    },
    {
      nameRu:  "Садуов Айболат Абатович",
      nameKz:  "Садуов Айболат Абатович",
      nameEn:  "Садуов Айболат Абатович",
      roleRu:  "Основатель",
      roleKz:  "Негізін қалаушы",
      roleEn:  "Founder",
      bioRu:   "Разработчик инди-игр · Unity · Работа с детьми 4+ лет",
      bioKz:   "Инди-ойын әзірлеушісі · Unity",
      bioEn:   "Indie game developer · Unity · 4+ years with kids",
      photo:   "aibolat.JPG",
    },
    {
      nameRu:  "Советова Фариза Қанатқызы",
      nameKz:  "Советова Фариза Қанатқызы",
      nameEn:  "Советова Фариза Қанатқызы",
      roleRu:  "Спикер",
      roleKz:  "Спикер",
      roleEn:  "Speaker",
      bioRu:   "Преподаватель спец. предмета · Магистр дизайна",
      bioKz:   "Frontend-әзірлеуші · React / Vue · 3 жыл педагогика",
      bioEn:   "Frontend developer · React / Vue · 3 years teaching",
      photo:   "fariza.jpeg",
    },
    {
      nameRu:  "Абылаев Жандарбек Наренович",
      nameKz:  "Абылаев Жандарбек Наренович",
      nameEn:  "Абылаев Жандарбек Наренович",
      roleRu:  "Спикер",
      roleKz:  "Спикер",
      roleEn:  "Speaker",
      bioRu:   "Программист · ",
      bioKz:   "5+ жыл әзірлеуде · Стартаптарға арналған жобалар",
      bioEn:   "5+ yrs in development · Startup projects · Olympiad mentor",
      photo:   "jandarbek.JPG",
    },
    {
      nameRu:  "Кеулимжаева Балауса Бақытбайқызы",
      nameKz:  "Кеулимжаева Балауса Бақытбайқызы",
      nameEn:  "Кеулимжаева Балауса Бақытбайқызы",
      roleRu:  "Спикер",
      roleKz:  "Спикер",
      roleEn:  "Speaker",
      bioRu:   "Преподаватель казахского языка и литературы",
      bioKz:   "Механик-инженер · Arduino / ROS",
      bioEn:   "Mechanical engineer · Arduino / ROS · Olympiad participant",
      photo:   "balausa.jpeg",
    },
    {
      nameRu:  "Абат Ислам Абатұлы",
      nameKz:  "Абат Ислам Абатұлы",
      nameEn:  "Абат Ислам Абатұлы",
      roleRu:  "Спикер",
      roleKz:  "Спикер",
      roleEn:  "Speaker",
      bioRu:   "Техник-программист",
      bioKz:   "Инди-ойын әзірлеушісі · Unity",
      bioEn:   "Indie game developer · Unity · 4+ years with kids",
      photo:   "islam.JPG",
    },
    {
      nameRu:  "Серікқалиұлы Ғалым",
      nameKz:  "Серікқалиұлы Ғалым",
      nameEn:  "Серікқалиұлы Ғалым",
      roleRu:  "Спикер",
      roleKz:  "Спикер",
      roleEn:  "Speaker",
      bioRu:   "Техник-программист · Магистр информатики",
      bioKz:   "Инди-ойын әзірлеушісі · Unity",
      bioEn:   "Indie game developer · Unity · 4+ years with kids",
      photo:   "galym.jpeg",
    },
    {
      nameRu:  "Орманова Салтанат Амангелдіқызы",
      nameKz:  "Орманова Салтанат Амангелдіқызы",
      nameEn:  "Орманова Салтанат Амангелдіқызы",
      roleRu:  "Спикер",
      roleKz:  "Спикер",
      roleEn:  "Speaker",
      bioRu:   "Преподаватель графики и проектирования · Преподаватель информатики",
      bioKz:   "Инди-ойын әзірлеушісі · Unity",
      bioEn:   "Indie game developer · Unity · 4+ years with kids",
      photo:   "saltanat.jpeg",
    },
    {
      nameRu:  "Елеуберген Жанболат Айболатұлы",
      nameKz:  "Елеуберген Жанболат Айболатұлы",
      nameEn:  "Елеуберген Жанболат Айболатұлы",
      roleRu:  "Спикер",
      roleKz:  "Спикер",
      roleEn:  "Speaker",
      bioRu:   "Техник-программист · Магистр информатики",
      bioKz:   "Инди-ойын әзірлеушісі · Unity",
      bioEn:   "Indie game developer · Unity · 4+ years with kids",
      photo:   "janbolat.jpeg",
    }
  ],

  // ──────────────────────────────────────────────
  // НОВОСТИ И ГАЛЕРЕЯ МЕРОПРИЯТИЙ (news.html)
  //
  // Каждая новость — это карточка, при нажатии
  // открывается галерея с фотографиями мероприятия.
  //
  // photos: [ "ссылка1", "ссылка2", ... ] joska
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
    main: "bg.png",
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

  // ── ЧАТ / ТЕКСТ ──────────────────────────────────────
  {
    name: "Claude", company: "Anthropic", category: "text", emoji: "🧠", color: "#CC785C", free: true,
    descRu: "Күрделі ғылыми мәтіндер мен үлкен көлемді құжаттарды терең талдап, жоғары сапалы академиялық контент дайындайды.",
    descKz: "Күрделі ғылыми мәтіндер мен үлкен көлемді құжаттарды терең талдап, жоғары сапалы академиялық контент дайындайды.",
    descEn: "Deeply analyzes complex scientific texts and large documents, preparing high-quality academic content.",
    url: "https://claude.ai",
    tagRu: "Текст · Документы · Анализ", tagKz: "Мәтін · Құжаттар · Талдау", tagEn: "Text · Documents · Analysis",
  },
  {
    name: "Perplexity AI", company: "Perplexity AI", category: "text", emoji: "🔍", color: "#20B2AA", free: true,
    descRu: "Интернеттегі нақты дереккөздерге сілтеме жасай отырып, кез келген сұраққа дәлелді және өзекті ақпаратты тауып береді.",
    descKz: "Интернеттегі нақты дереккөздерге сілтеме жасай отырып, кез келген сұраққа дәлелді және өзекті ақпаратты тауып береді.",
    descEn: "Finds verified and relevant information for any question, citing exact internet sources.",
    url: "https://perplexity.ai",
    tagRu: "Поиск · Источники · Факты", tagKz: "Іздеу · Дереккөздер · Фактілер", tagEn: "Search · Sources · Facts",
  },
  {
    name: "ChatGPT", company: "OpenAI", category: "text", emoji: "💬", color: "#10A37F", free: true,
    descRu: "Мұғалім ЖИ-ге «Сен квест ойынының жетекшісісің» деген рөл беру арқылы оқушыларға интерактивті «логикалық детектив» немесе «виртуалды саяхат» ұйымдастырады.",
    descKz: "Мұғалім ЖИ-ге «Сен квест ойынының жетекшісісің» деген рөл беру арқылы оқушыларға 3-5 минуттық интерактивті «логикалық детектив» немесе «виртуалды саяхат» ұйымдастырады.",
    descEn: "Give ChatGPT a 'Game Master' role to organize 3–5 min interactive detective games or virtual journeys for students.",
    url: "https://chat.openai.com",
    tagRu: "Текст · Код · Роль-игры", tagKz: "Мәтін · Код · Рөлдік ойындар", tagEn: "Text · Code · Role-play",
  },
  {
    name: "DeepSeek", company: "DeepSeek AI", category: "text", emoji: "🔬", color: "#5B6BF5", free: true,
    descRu: "Мощный ИИ с открытым кодом. Отлично справляется с математикой, программированием и логикой.",
    descKz: "Ашық кодты қуатты ЖИ. Математика, бағдарламалау және логикалық ойлаумен өте жақсы жұмыс істейді.",
    descEn: "Powerful open-source AI excelling at mathematics, coding and logical reasoning.",
    url: "https://chat.deepseek.com",
    tagRu: "Код · Математика · Логика", tagKz: "Код · Математика · Логика", tagEn: "Code · Math · Logic",
  },
  {
    name: "Gemini", company: "Google", category: "text", emoji: "✨", color: "#4285F4", free: true,
    descRu: "ИИ от Google с доступом к поиску. Интегрирован с Google Docs, Sheets и Gmail.",
    descKz: "Google-дің іздеу мен өзекті деректерге қол жеткізуі бар ЖИ. Google Docs, Sheets және Gmail-мен біріктірілген.",
    descEn: "Google's AI with real-time search access, integrated with Docs, Sheets and Gmail.",
    url: "https://gemini.google.com",
    tagRu: "Поиск · Google · Документы", tagKz: "Іздеу · Google · Құжаттар", tagEn: "Search · Google · Documents",
  },
  {
    name: "Consensus", company: "Consensus", category: "text", emoji: "📚", color: "#3B5BDB", free: true,
    descRu: "Сұрақтарға тек тексерілген ғылыми мақалалар мен зерттеулер негізінде ғылыми негізделген жауаптар іздейді.",
    descKz: "Сұрақтарға тек тексерілген ғылыми мақалалар мен зерттеулер негізінде ғылыми негізделген жауаптар іздейді.",
    descEn: "Searches for scientifically grounded answers based only on verified academic articles and research.",
    url: "https://consensus.app",
    tagRu: "Наука · Статьи · Исследования", tagKz: "Ғылым · Мақалалар · Зерттеу", tagEn: "Science · Articles · Research",
  },

  // ── ОБРАЗОВАНИЕ / УЧИТЕЛЯМ ───────────────────────────
  {
    name: "Gamma App", company: "Gamma", category: "edu", emoji: "🎯", color: "#8B5CF6", free: true,
    descRu: "Берілген тақырып негізінде дайын презентацияларды, веб-беттерді және құрылымдалған құжаттарды дизайнмен бірге автоматты түрде жасайды.",
    descKz: "Берілген тақырып негізінде дайын презентацияларды, веб-беттерді және құрылымдалған құжаттарды дизайнмен бірге автоматты түрде жасайды.",
    descEn: "Automatically creates presentations, web pages and structured documents with design from any topic.",
    url: "https://gamma.app",
    tagRu: "Презентации · Дизайн · Документы", tagKz: "Презентациялар · Дизайн", tagEn: "Presentations · Design · Docs",
  },
  {
    name: "MagicSchool AI", company: "MagicSchool", category: "edu", emoji: "🏫", color: "#7C3AED", free: true,
    descRu: "Мұғалімдерге арналған 60-тан астам құралды біріктіре отырып, күрделі тақырыптарды «өмірлік мысалдармен» түсіндіруге және академиялық мазмұнды жеңілдетуге көмектеседі.",
    descKz: "Мұғалімдерге арналған 60-тан астам құралды біріктіре отырып, күрделі тақырыптарды «өмірлік мысалдармен» түсіндіруге және академиялық мазмұнды жеңілдетуге көмектеседі.",
    descEn: "Combines 60+ teacher tools, helps explain complex topics with real-life examples and simplify academic content.",
    url: "https://magicschool.ai",
    tagRu: "Учителям · Планы · Контент", tagKz: "Мұғалімдерге · Жоспарлар", tagEn: "Teachers · Plans · Content",
  },
  {
    name: "Khanmigo", company: "Khan Academy", category: "edu", emoji: "🎓", color: "#14A800", free: false,
    descRu: "Оқушыға дайын жауапты айтпай, бағыттаушы сұрақтар қою арқылы жаңа тақырыпты өздігінен меңгеруге жетелейтін виртуалды репетитор қызметін атқарады.",
    descKz: "Оқушыға дайын жауапты айтпай, бағыттаушы сұрақтар қою арқылы жаңа тақырыпты өздігінен меңгеруге жетелейтін виртуалды репетитор қызметін атқарады.",
    descEn: "Virtual tutor that never gives direct answers — guides students with questions to understand topics independently.",
    url: "https://www.khanacademy.org/khanmigo",
    tagRu: "Репетитор · Сократ · Обучение", tagKz: "Репетитор · Сократ · Оқыту", tagEn: "Tutor · Socratic · Learning",
  },
  {
    name: "Canva Magic Design", company: "Canva", category: "edu", emoji: "🖼️", color: "#00C4CC", free: true,
    descRu: "Тақырыптың атын жазсаңыз, сол салаға сай стильді безендірілген, суреттері мен мәтіні үйлесім тапқан толыққанды оқу материалдарын ұсынады.",
    descKz: "Тақырыптың атын жазсаңыз, сол салаға сай стильді безендірілген, суреттері мен мәтіні үйлесім тапқан толыққанды оқу материалдарын ұсынады.",
    descEn: "Write a topic name and get fully designed learning materials with matching images and text.",
    url: "https://canva.com",
    tagRu: "Дизайн · Материалы · Изображения", tagKz: "Дизайн · Материалдар · Суреттер", tagEn: "Design · Materials · Images",
  },
  {
    name: "Education Copilot", company: "Education Copilot", category: "edu", emoji: "✏️", color: "#0EA5E9", free: true,
    descRu: "Сабақ жоспарынан бастап, сол тақырыпқа қажетті қолжазба материалдарына (handouts) дейін барлық дидактикалық кешенді бір сәтте генерациялайды.",
    descKz: "Сабақ жоспарынан бастап, сол тақырыпқа қажетті қолжазба материалдарына (handouts) дейін барлық дидактикалық кешенді бір сәтте генерациялайды.",
    descEn: "Generates the complete didactic kit from lesson plan to handouts in a single request.",
    url: "https://educationcopilot.com",
    tagRu: "Планы уроков · Раздатка", tagKz: "Сабақ жоспарлары · Материалдар", tagEn: "Lesson Plans · Handouts",
  },
  {
    name: "SchoolAI", company: "SchoolAI", category: "edu", emoji: "🏛️", color: "#6366F1", free: true,
    descRu: "Оқушыларға қауіпсіз ортада жаңа тақырып бойынша кейіпкерлермен немесе тарихи тұлғалармен «сөйлесуге» мүмкіндік беретін виртуалды симуляциялар құрады.",
    descKz: "Оқушыларға қауіпсіз ортада жаңа тақырып бойынша кейіпкерлермен немесе тарихи тұлғалармен «сөйлесуге» мүмкіндік беретін виртуалды симуляциялар құрады.",
    descEn: "Creates safe virtual simulations where students can 'talk' with characters or historical figures on any topic.",
    url: "https://schoolai.com",
    tagRu: "Симуляции · История · Персонажи", tagKz: "Симуляциялар · Тарих · Кейіпкерлер", tagEn: "Simulations · History · Characters",
  },
  {
    name: "Curipod", company: "Curipod", category: "edu", emoji: "⚡", color: "#F59E0B", free: true,
    descRu: "Мұғалімге ЖИ көмегімен оқушылардың жауаптарын нақты уақытта талдайтын интерактивті сабақ сценарийлерін (сауалнама, сурет салу, талқылау) әзірлейді.",
    descKz: "Кез келген тақырып бойынша оқушылардың қатысуымен өтетін (сауалнама, сурет салу, талқылау) интерактивті слайдтар мен дайын сабақ сценарийлерін жасайды.",
    descEn: "Creates interactive lesson slides with polls, drawing and discussions, analyzing student answers in real time.",
    url: "https://curipod.com",
    tagRu: "Слайды · Опросы · Интерактив", tagKz: "Слайдтар · Сауалнамалар", tagEn: "Slides · Polls · Interactive",
  },
  {
    name: "Diffit", company: "Diffit", category: "edu", emoji: "📖", color: "#059669", free: true,
    descRu: "Кез келген мақала, видео немесе тақырыпты оқушының жас ерекшелігіне қарай бейімдеп, оған қысқаша мазмұндама, сөздік және деңгейлік тапсырмалар дайындайды.",
    descKz: "Кез келген мақала, видео немесе тақырыпты оқушының жас ерекшелігіне қарай бейімдеп, оған қысқаша мазмұндама, сөздік және деңгейлік тапсырмалар дайындайды.",
    descEn: "Adapts any article, video or topic to student's reading level with summary, vocabulary and leveled tasks.",
    url: "https://diffit.me",
    tagRu: "Адаптация · Уровни · Словарь", tagKz: "Бейімдеу · Деңгейлер · Сөздік", tagEn: "Adaptation · Levels · Vocabulary",
  },
  {
    name: "NotebookLM", company: "Google", category: "edu", emoji: "📓", color: "#34A853", free: true,
    descRu: "Загрузите PDF, лекции или книги — ИИ ответит на вопросы только по вашим материалам. Идеально для работы с документами.",
    descKz: "PDF, дәрістер немесе кітаптарды жүктеңіз — ЖИ тек сіздің материалдарыңыз бойынша жауап береді.",
    descEn: "Upload PDFs, lectures or books — AI answers questions based only on your own materials.",
    url: "https://notebooklm.google.com",
    tagRu: "Документы · PDF · Обучение", tagKz: "Құжаттар · PDF · Оқыту", tagEn: "Documents · PDF · Learning",
  },
  {
    name: "WolframAlpha", company: "Wolfram", category: "edu", emoji: "📐", color: "#DD1100", free: true,
    descRu: "Математикалық, физикалық немесе жаратылыстану бағытындағы күрделі есептер мен құбылыстарды қадамдық шешімімен және графиктерімен түсіндіріп береді.",
    descKz: "Математикалық, физикалық немесе жаратылыстану бағытындағы күрделі есептер мен құбылыстарды қадамдық шешімімен және графиктерімен түсіндіріп береді.",
    descEn: "Explains complex math, physics and science problems with step-by-step solutions and graphs.",
    url: "https://wolframalpha.com",
    tagRu: "Математика · Физика · Графики", tagKz: "Математика · Физика · Графиктер", tagEn: "Math · Physics · Graphs",
  },

  // ── ОЦЕНИВАНИЕ ──────────────────────────────────────
  {
    name: "Conker AI", company: "Conker", category: "assess", emoji: "🧩", color: "#DC2626", free: true,
    descRu: "Кез келген мәтін немесе тақырып негізінде Блум таксономиясының деңгейлеріне сәйкес келетін кәсіби тест сұрақтарын және олардың бағалау кілттерін генерациялайды.",
    descKz: "Кез келген мәтін немесе тақырып негізінде Блум таксономиясының деңгейлеріне сәйкес келетін кәсіби тест сұрақтарын және олардың бағалау кілттерін генерациялайды.",
    descEn: "Generates professional test questions aligned to Bloom's taxonomy with answer keys from any text or topic.",
    url: "https://conker.ai",
    tagRu: "Тесты · Блум · Казахский", tagKz: "Тесттер · Блум таксономиясы", tagEn: "Tests · Bloom · Multilingual",
  },
  {
    name: "Quizizz AI", company: "Quizizz", category: "assess", emoji: "📝", color: "#8A2BE2", free: true,
    descRu: "Кез келген мәтін немесе тақырып бойынша деңгейлік тест сұрақтарын, викториналар мен тапсырмаларды қазақ тілінде жылдам құрастырады.",
    descKz: "Кез келген мәтін немесе тақырып бойынша деңгейлік тест сұрақтарын, викториналар мен тапсырмаларды қазақ тілінде жылдам құрастырады.",
    descEn: "Quickly creates leveled test questions, quizzes and tasks on any text or topic.",
    url: "https://quizizz.com",
    tagRu: "Тесты · Викторины · Уровни", tagKz: "Тесттер · Викториналар · Деңгейлер", tagEn: "Tests · Quizzes · Levels",
  },
  {
    name: "Formative AI", company: "Formative", category: "assess", emoji: "📊", color: "#0EA5E9", free: true,
    descRu: "Оқушылардың тест немесе тапсырма орындау барысын нақты уақытта қадағалап, қателескен тұстары бойынша ЖИ көмегімен автоматты түрде бағыттаушы кеңестер ұсынады.",
    descKz: "Оқушылардың тапсырма орындау барысындағы қателіктерін нақты уақытта анықтап, әр оқушыға жеке даму траекториясы бойынша бағалау ұсыныстарын береді.",
    descEn: "Monitors student task completion in real time, automatically providing guidance on mistakes.",
    url: "https://goformative.com",
    tagRu: "Прогресс · Реальное время · ИИ", tagKz: "Прогресс · Нақты уақыт", tagEn: "Progress · Real-time · AI",
  },
  {
    name: "GradeScope", company: "Turnitin", category: "assess", emoji: "🔎", color: "#1E40AF", free: false,
    descRu: "Жаратылыстану бағытындағы (математика, физика) қолмен жазылған күрделі жұмыстарды сканерлеп, қателерін тауып және бірыңғай критериймен жылдам бағалайды.",
    descKz: "Жаратылыстану бағытындағы қолмен жазылған күрделі есептер мен формулаларды сканерлеп, қателерді топтастыру арқылы бірыңғай критериймен жылдам бағалайды.",
    descEn: "Scans handwritten STEM assignments, finds errors and grades by unified rubric quickly.",
    url: "https://gradescope.com",
    tagRu: "Сканирование · STEM · Рубрики", tagKz: "Сканерлеу · STEM · Рубрикалар", tagEn: "Scanning · STEM · Rubrics",
  },
  {
    name: "ClassCompanion", company: "ClassCompanion", category: "assess", emoji: "💡", color: "#059669", free: true,
    descRu: "Студенттердің үй тапсырмасын орындау барысында ЖИ арқылы шексіз кері байланыс алуына жағдай жасап, мұғалімге тек қорытынды есепті жібереді.",
    descKz: "Оқушыларға эссе немесе ашық сұрақтарға жауап беру кезінде ЖИ арқылы жедел кері байланыс беріп, қорытынды бағаны мұғалімнің бекітуіне жібереді.",
    descEn: "Provides unlimited AI feedback on student homework, sends teacher only the final report.",
    url: "https://classcompanion.com",
    tagRu: "Эссе · Фидбек · Автономно", tagKz: "Эссе · Кері байланыс", tagEn: "Essays · Feedback · Autonomous",
  },
  {
    name: "ZipGrade", company: "ZipGrade", category: "assess", emoji: "📷", color: "#0891B2", free: true,
    descRu: "Қағаз жүзіндегі тексеру жұмыстарын телефон камерасымен сканерлеп, қателерді талдайды және сыныптың орташа үлгерімі бойынша аналитикалық есеп шығарады.",
    descKz: "Қағаз нұсқадағы тест жауаптарын телефон камерасымен лезде сканерлеп, сыныптың үлгерімі мен сұрақтардың күрделілік деңгейіне ЖИ арқылы статистикалық талдау жасайды.",
    descEn: "Instantly scans paper test answers with a phone camera, analyzes errors and generates class performance statistics.",
    url: "https://zipgrade.com",
    tagRu: "Бумажные тесты · Сканер · Статистика", tagKz: "Қағаз тесттері · Сканер", tagEn: "Paper Tests · Scanner · Stats",
  },
  {
    name: "Roobrick", company: "Roobrick", category: "assess", emoji: "📋", color: "#9333EA", free: true,
    descRu: "Мұғалімнің сипаттамасы бойынша кез келген тапсырмаға арналған нақты бағалау рубрикаларын (критерийлерін) және жетістік деңгейлерін автоматты түрде құрастырады.",
    descKz: "Мұғалімнің сипаттамасы бойынша кез келген тапсырмаға арналған нақты бағалау рубрикаларын (критерийлерін) және жетістік деңгейлерін автоматты түрде құрастырады.",
    descEn: "Automatically creates precise grading rubrics and achievement levels for any task from a description.",
    url: "https://roobrick.com",
    tagRu: "Рубрики · Критерии · Оценивание", tagKz: "Рубрикалар · Критерийлер", tagEn: "Rubrics · Criteria · Assessment",
  },
  {
    name: "QuestionWell", company: "QuestionWell", category: "assess", emoji: "❓", color: "#7C3AED", free: true,
    descRu: "Оқу материалдары мен видеолардан мағыналық сұрақтар мен оқу мақсаттарын бөліп алып, оларды бағалаудың түрлі форматтарына (көп таңдаулы, ашық сұрақ) айналдырады.",
    descKz: "Оқу материалдары мен видеолардан мағыналық сұрақтар мен оқу мақсаттарын бөліп алып, оларды бағалаудың түрлі форматтарына (көп таңдаулы, ашық сұрақ) айналдырады.",
    descEn: "Extracts meaningful questions and learning objectives from materials, converts to multiple-choice and open formats.",
    url: "https://questionwell.org",
    tagRu: "Вопросы · Форматы · Цели", tagKz: "Сұрақтар · Форматтар · Мақсаттар", tagEn: "Questions · Formats · Objectives",
  },
  {
    name: "Turnitin Draft Coach", company: "Turnitin", category: "assess", emoji: "🛡️", color: "#1D4ED8", free: false,
    descRu: "Студент жұмысын тапсырмас бұрын оның академиялық адалдығын, плагиат пайызын және дәйексөз алу сапасын ЖИ көмегімен алдын ала бағалайды.",
    descKz: "Студент жұмысын тапсырмас бұрын оның академиялық адалдығын, плагиат пайызын және дәйексөз алу сапасын ЖИ көмегімен алдын ала бағалайды.",
    descEn: "Pre-submission AI check of academic integrity, plagiarism percentage and citation quality.",
    url: "https://turnitin.com/products/draft-coach",
    tagRu: "Плагиат · Академичность", tagKz: "Плагиат · Академиялық адалдық", tagEn: "Plagiarism · Integrity",
  },

  // ── ФИДБЕК / ОБРАТНАЯ СВЯЗЬ ─────────────────────────
  {
    name: "Brisk Teaching", company: "Brisk Teaching", category: "feedback", emoji: "⭐", color: "#F97316", free: true,
    descRu: "Студенттердің жұмыстарына критериалды кері байланыс беріп, оқу материалдарын оқушының деңгейіне қарай бірден бейімдеп береді. Google Docs-та нақты уақытта жұмыс істейді.",
    descKz: "Студенттердің Google Docs-тағы жұмыстарына нақты уақыт режимінде критериалды дескрипторлар бойынша тереңдетілген аналитикалық пікірлер мен бағалар береді.",
    descEn: "Gives criteria-based feedback on student work in real time inside Google Docs, adapts materials to student level.",
    url: "https://www.briskteaching.com",
    tagRu: "Фидбек · Google Docs · Критерии", tagKz: "Кері байланыс · Google Docs", tagEn: "Feedback · Google Docs · Criteria",
  },
  {
    name: "Mote", company: "Mote", category: "feedback", emoji: "🎙️", color: "#DB2777", free: true,
    descRu: "Мұғалімге оқушы жұмысына дауыстық пікір қалдыруға мүмкіндік береді және ол дауысты автоматты түрде мәтінге айналдырып, транскрипция жасайды.",
    descKz: "Мұғалімге оқушы жұмысына дауыстық пікір қалдыруға мүмкіндік береді және ол дауысты автоматты түрде мәтінге айналдырып, транскрипция жасайды.",
    descEn: "Lets teachers leave voice feedback on student work, automatically transcribing it to text.",
    url: "https://mote.com",
    tagRu: "Голос · Транскрипция · Фидбек", tagKz: "Дауыс · Транскрипция", tagEn: "Voice · Transcription · Feedback",
  },
  {
    name: "Kaizena", company: "Kaizena", category: "feedback", emoji: "🔗", color: "#16A34A", free: true,
    descRu: "Оқушының жұмысына пікір білдіріп қана қоймай, қателерін түзету үшін қажетті ресурстар мен видео-сабақтарға сілтемелерді автоматты түрде бекітеді.",
    descKz: "Оқушының жұмысына пікір білдіріп қана қоймай, қателерін түзету үшін қажетті ресурстар мен видео-сабақтарға сілтемелерді автоматты түрде бекітеді.",
    descEn: "Leaves comments on work and automatically attaches relevant resources and video lessons for error correction.",
    url: "https://kaizena.com",
    tagRu: "Комментарии · Ресурсы · Видео", tagKz: "Пікірлер · Ресурстар · Бейне", tagEn: "Comments · Resources · Video",
  },
  {
    name: "Feedback Studio (Turnitin)", company: "Turnitin", category: "feedback", emoji: "📄", color: "#1D4ED8", free: false,
    descRu: "Жұмыстың плагиатын тексеріп қана қоймай, ЖИ көмегімен грамматикалық және мағыналық қателерге сапалы талдау жасайды.",
    descKz: "Жұмыстың плагиатын тексеріп қана қоймай, ЖИ көмегімен грамматикалық және мағыналық қателерге сапалы талдау жасайды.",
    descEn: "Not only checks plagiarism but makes quality AI analysis of grammatical and semantic errors.",
    url: "https://turnitin.com",
    tagRu: "Плагиат · Грамматика · Анализ", tagKz: "Плагиат · Грамматика · Талдау", tagEn: "Plagiarism · Grammar · Analysis",
  },
  {
    name: "EdPuzzle AI", company: "EdPuzzle", category: "feedback", emoji: "🎬", color: "#EA580C", free: true,
    descRu: "Видео-сабақ барысында қойылған сұрақтардың жауаптарын талдап, оқушының тақырыпты қаншалықты меңгергені туралы мұғалімге толық аналитика береді.",
    descKz: "Видео-сабақ барысында қойылған сұрақтардың жауаптарын талдап, оқушының тақырыпты қаншалықты меңгергені туралы мұғалімге толық аналитика береді.",
    descEn: "Analyzes answers to in-video questions, giving teachers full analytics on topic mastery.",
    url: "https://edpuzzle.com",
    tagRu: "Видео · Вопросы · Аналитика", tagKz: "Бейне · Сұрақтар · Аналитика", tagEn: "Video · Questions · Analytics",
  },
  {
    name: "Floop", company: "Floop", category: "feedback", emoji: "🔄", color: "#0D9488", free: true,
    descRu: "Оқушылардың бір-бірін бағалау (peer-review) үдерісін ЖИ арқылы ұйымдастырып, сындарлы пікір алмасу мәдениетін қалыптастырады.",
    descKz: "Оқушылардың бір-бірін бағалау (peer-review) үдерісін ЖИ арқылы ұйымдастырып, сындарлы пікір алмасу мәдениетін қалыптастырады.",
    descEn: "Organizes AI-powered peer review among students, building a culture of constructive feedback.",
    url: "https://floopedu.com",
    tagRu: "Взаимооценка · Культура · Пир", tagKz: "Өзара бағалау · Мәдениет", tagEn: "Peer Review · Culture · AI",
  },

  // ── ИЗОБРАЖЕНИЯ / ДИЗАЙН ────────────────────────────
  {
    name: "Midjourney / DALL-E 3", company: "Midjourney / OpenAI", category: "image", emoji: "🎨", color: "#7B68EE", free: false,
    descRu: "Мәтіндік сипаттаманы пайдаланып, сабаққа қажетті бірегей әрі жоғары сапалы көрнекі суреттер мен иллюстрацияларды генерациялайды.",
    descKz: "Мәтіндік сипаттаманы пайдаланып, сабаққа қажетті бірегей әрі жоғары сапалы көрнекі суреттер мен иллюстрацияларды генерациялайды.",
    descEn: "Generates unique, high-quality visuals and illustrations for lessons from text descriptions.",
    url: "https://midjourney.com",
    tagRu: "Изображения · Арт · Иллюстрации", tagKz: "Суреттер · Өнер · Иллюстрациялар", tagEn: "Images · Art · Illustrations",
  },
  {
    name: "AutoDraw", company: "Google Creative Lab", category: "image", emoji: "✏️", color: "#FBBC04", free: true,
    descRu: "Қолмен салынған қарапайым шимайларды ЖИ көмегімен кәсіби деңгейдегі әдемі бейнелерге айналдырып, шығармашылық демалыс сыйлайды.",
    descKz: "Қолмен салынған қарапайым шимайларды ЖИ көмегімен кәсіби деңгейдегі әдемі бейнелерге айналдырып, шығармашылық демалыс сыйлайды.",
    descEn: "Turns simple hand-drawn sketches into professional illustrations with AI — creative break for class.",
    url: "https://autodraw.com",
    tagRu: "Рисование · Иллюстрации · Творчество", tagKz: "Сурет салу · Иллюстрациялар", tagEn: "Drawing · Illustrations · Creativity",
  },

  // ── ВИДЕО / ГОЛОС ────────────────────────────────────
  {
    name: "HeyGen", company: "HeyGen", category: "video", emoji: "🎭", color: "#6366F1", free: true,
    descRu: "Фотосуреттер мен аватарларды жанды бейнеге айналдырып, оларды мұғалімнің немесе тарихи тұлғаның дауысымен сөйлетеді.",
    descKz: "Фотосуреттер мен аватарларды жанды бейнеге айналдырып, оларды мұғалімнің немесе тарихи тұлғаның дауысымен сөйлетеді.",
    descEn: "Turns photos and avatars into talking videos — speaks with a teacher's or historical figure's voice.",
    url: "https://heygen.com",
    tagRu: "Аватар · Видео · Дубляж", tagKz: "Аватар · Бейне · Дубляж", tagEn: "Avatar · Video · Dubbing",
  },
  {
    name: "YouTube Summary (Eightify)", company: "Eightify", category: "video", emoji: "▶️", color: "#FF0000", free: true,
    descRu: "Ұзын бейнебаянды секундтар ішінде қысқаша мәтінге айналдырып, видеодағы негізгі тезистерді бөліп көрсету арқылы жаңа тақырыпты жылдам шолуға мүмкіндік береді.",
    descKz: "Ұзын бейнебаянды секундтар ішінде қысқаша мәтінге айналдырып, видеодағы негізгі тезистерді бөліп көрсету арқылы жаңа тақырыпты жылдам шолуға мүмкіндік береді.",
    descEn: "Converts long videos into text summaries in seconds, highlighting key theses for fast topic overviews.",
    url: "https://eightify.app",
    tagRu: "Видео · Конспект · Тезисы", tagKz: "Бейне · Конспект · Тезистер", tagEn: "Video · Summary · Key Points",
  },

  // ── КОД ───────────────────────────────────────────────
  {
    name: "GitHub Copilot", company: "GitHub / Microsoft", category: "code", emoji: "👨‍💻", color: "#333333", free: false,
    descRu: "ИИ-помощник прямо в редакторе кода: дополняет строки, генерирует функции, объясняет чужой код.",
    descKz: "Бағдарламашыларға арналған ЖИ-көмекші, тікелей код редакторында. Жолдарды аяқтайды, функциялар жасайды.",
    descEn: "AI coding assistant in the editor: completes lines, generates functions, explains code.",
    url: "https://github.com/features/copilot",
    tagRu: "Код · IDE · Автодополнение", tagKz: "Код · IDE · Автотолтыру", tagEn: "Code · IDE · Autocomplete",
  },
  {
    name: "Bolt.new", company: "StackBlitz", category: "code", emoji: "⚡", color: "#6366F1", free: true,
    descRu: "Создаёт полноценные веб-приложения по тексту прямо в браузере. Идеально для обучения веб-разработке.",
    descKz: "Мәтіндік сипаттама бойынша тікелей браузерде толыққанды веб-қосымшалар жасайды.",
    descEn: "Creates full web apps from text descriptions right in the browser. Perfect for web development learning.",
    url: "https://bolt.new",
    tagRu: "Веб · Код · No-code", tagKz: "Веб · Код · Кодсыз", tagEn: "Web · Code · No-code",
  },

  // ── ИНТЕРАКТИВ / ИГРЫ ────────────────────────────────
  {
    name: "MindMeister / Ayoa", company: "MindMeister", category: "interactive", emoji: "🗺️", color: "#2563EB", free: true,
    descRu: "Берілген тақырыптың логикалық құрылымын автоматты түрде интеллект-карта (mind map) түрінде сызып, ақпаратты жүйелі визуалды бейнеге айналдырады.",
    descKz: "Берілген тақырыптың логикалық құрылымын автоматты түрде интеллект-карта (mind map) түрінде сызып, ақпаратты жүйелі визуалды бейнеге айналдырады.",
    descEn: "Automatically draws the logical structure of any topic as a mind map, turning information into visual form.",
    url: "https://mindmeister.com",
    tagRu: "Mindmap · Структура · Визуал", tagKz: "Mindmap · Құрылым · Визуал", tagEn: "Mindmap · Structure · Visual",
  },
  {
    name: "Skybox AI", company: "Blockade Labs", category: "interactive", emoji: "🌍", color: "#7C3AED", free: true,
    descRu: "Бір сөйлем жазу арқылы 360 градустық виртуалды әлем (панорама) құрап, оқушыларды бір сәтте мүлдем басқа кеңістікке саяхаттауға жетелейді.",
    descKz: "Бір сөйлем жазу арқылы 360 градустық виртуалды әлем (панорама) құрап, оқушыларды бір сәтте мүлдем басқа кеңістікке саяхаттауға жетелейді.",
    descEn: "One sentence creates a 360° virtual world — instantly transport students to any era or place.",
    url: "https://skybox.blockadelabs.com",
    tagRu: "VR · Панорама · 360°", tagKz: "VR · Панорама · 360°", tagEn: "VR · Panorama · 360°",
  },
  {
    name: "Quick, Draw! (Google)", company: "Google", category: "interactive", emoji: "🖊️", color: "#34A853", free: true,
    descRu: "Оқушыларға берілген сөзді 20 секунд ішінде салуды тапсырады, ал нейрожелі оның не екенін нақты уақытта тауып, қызықты жарыс ұйымдастырады.",
    descKz: "Оқушыларға берілген сөзді 20 секунд ішінде салуды тапсырады, ал нейрожелі оның не екенін нақты уақытта тауып, қызықты жарыс ұйымдастырады.",
    descEn: "Neural network guesses drawings in 20 seconds — perfect fun warm-up or class activity.",
    url: "https://quickdraw.withgoogle.com",
    tagRu: "Игра · Рисование · Разминка", tagKz: "Ойын · Сурет · Жылыту", tagEn: "Game · Drawing · Warm-up",
  },
  {
    name: "Semantris (Google)", company: "Google", category: "interactive", emoji: "🎮", color: "#EA4335", free: true,
    descRu: "Сөздер арасындағы мағыналық байланысты табуға негізделген ЖИ ойыны арқылы оқушылардың сөздік қорын және жылдам ойлау қабілетін дамытады.",
    descKz: "Сөздер арасындағы мағыналық байланысты табуға негізделген ЖИ ойыны арқылы оқушылардың сөздік қорын және жылдам ойлау қабілетін дамытады.",
    descEn: "AI word association game that develops vocabulary and quick thinking through semantic connections.",
    url: "https://research.google.com/semantris",
    tagRu: "Слова · Ассоциации · Словарь", tagKz: "Сөздер · Ассоциациялар · Сөздік", tagEn: "Words · Associations · Vocab",
  },
  {
    name: "Akinator", company: "Elokence", category: "interactive", emoji: "🧞", color: "#1E6BE6", free: true,
    descRu: "ЖИ-дің логикалық сұрақтар қою арқылы ойлаған тұлғаны табу мүмкіндігін пайдаланып, сабақ тақырыбына қатысты кейіпкерлерді жұмбақтауға мүмкіндік береді.",
    descKz: "ЖИ-дің логикалық сұрақтар қою арқылы ойлаған тұлғаны табу мүмкіндігін пайдаланып, сабақ тақырыбына қатысты кейіпкерлерді жұмбақтауға мүмкіндік береді.",
    descEn: "AI guesses characters through logical questions — perfect for topic characters and historical figures in class.",
    url: "https://akinator.com",
    tagRu: "Угадайка · Логика · Персонажи", tagKz: "Жұмбақ · Логика · Кейіпкерлер", tagEn: "Guessing · Logic · Characters",
  },
  {
    name: "Animated Drawings", company: "Meta AI", category: "interactive", emoji: "🎪", color: "#0866FF", free: true,
    descRu: "Оқушы салған суретті (кейіпкерді) ЖИ арқылы қимылға келтіріп, оны билететін немесе жүгіртетін көңілді анимациялар жасайды.",
    descKz: "Оқушы салған суретті (кейіпкерді) ЖИ арқылы қимылға келтіріп, оны билететін немесе жүгіртетін көңілді анимациялар жасайды.",
    descEn: "Brings student-drawn characters to life with AI — makes them dance or run. Great for creative lessons.",
    url: "https://sketch.metademolab.com",
    tagRu: "Анимация · Рисунок · Творчество", tagKz: "Анимация · Сурет · Шығармашылық", tagEn: "Animation · Drawing · Creativity",
  },
  {
    name: "Blob Opera", company: "Google Arts & Culture", category: "interactive", emoji: "🎼", color: "#9333EA", free: true,
    descRu: "ЖИ негізіндегі опералық дауыстармен тәжірибе жасау арқылы оқушыларға ерекше музыкалық композициялар құрастыртып, эстетикалық релаксация жасайды.",
    descKz: "ЖИ негізіндегі опералық дауыстармен тәжірибе жасау арқылы оқушыларға ерекше музыкалық композициялар құрастыртып, эстетикалық релаксация жасайды.",
    descEn: "Experiment with AI-powered opera voices to create unique musical compositions — aesthetic relaxation for class.",
    url: "https://artsandculture.google.com/experiment/blob-opera",
    tagRu: "Опера · Музыка · Творчество", tagKz: "Опера · Музыка · Шығармашылық", tagEn: "Opera · Music · Creativity",
  },
  {
    name: "Incredibox", company: "So Far So Good", category: "interactive", emoji: "🎤", color: "#FF6B35", free: true,
    descRu: "Визуалды кейіпкерлер арқылы битбокс пен заманауи музыкалық микстер жасауға мүмкіндік беріп, сыныпта сергіту атмосферасын орнатады.",
    descKz: "Визуалды кейіпкерлер арқылы битбокс пен заманауи музыкалық микстер жасауға мүмкіндік беріп, сыныпта сергіту атмосферасын орнатады.",
    descEn: "Create beatbox and modern music mixes through visual characters — sets an energizing atmosphere in class.",
    url: "https://www.incredibox.com",
    tagRu: "Музыка · Битбокс · Сергіту", tagKz: "Музыка · Битбокс · Демалыс", tagEn: "Music · Beatbox · Energize",
  },
  {
    name: "Sketch Meta", company: "Meta AI", category: "interactive", emoji: "🖼️", color: "#0866FF", free: true,
    descRu: "Қарапайым эскиздерді өңдеп, олардан қозғалыстағы мультфильм кейіпкерлерін жасау арқылы оқушылардың қиялын ұштайды.",
    descKz: "Қарапайым эскиздерді өңдеп, олардан қозғалыстағы мультфильм кейіпкерлерін жасау арқылы оқушылардың қиялын ұштайды.",
    descEn: "Processes simple sketches into animated cartoon characters, sparking students' imagination.",
    url: "https://sketch.metademolab.com",
    tagRu: "Эскиз · Мультфильм · Анимация", tagKz: "Эскиз · Мультфильм · Анимация", tagEn: "Sketch · Cartoon · Animation",
  },
];
