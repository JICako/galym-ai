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
      title:     "Балаларға арналған Scratch",
      desc:      "Scratch визуалды тілі арқылы бағдарламалауға кіріспе. 7–11 жастағы балаларға өте қолайлы.",
      duration:    "3",     // ← месяцев
      age:         "7–11",
      lessons:     "24",
      formUrl:     "https://forms.google.com/example",   // ← ссылка на запись
    },
    {
      number:      "02",
      level:       "beginner",
      title:     "Python: негіздер",
      desc:      "Нақты бағдарламалау әлеміне алғашқы қадам. Айнымалылар, шарттар, циклдар.",
      duration:    "4",
      age:         "12–16",
      lessons:     "32",
      formUrl:     "https://forms.google.com/example",
    },
    {
      number:      "03",
      level:       "intermediate",
      title:     "Веб-әзірлеу",
      desc:      "HTML, CSS, JavaScript — нөлден толыққанды сайттар жасаңыз.",
      duration:    "5",
      age:         "13–17",
      lessons:     "40",
      formUrl:     "https://forms.google.com/example",
    },
    {
      number:      "04",
      level:       "intermediate",
      title:     "Жасанды интеллект",
      desc:      "ЖИ-дің ішінен қалай жұмыс істейтінін біліңіз. Нейрондық желілер, машиналық оқыту.",
      duration:    "6",
      age:         "14–18",
      lessons:     "48",
      formUrl:     "https://forms.google.com/example",
    },
    {
      number:      "05",
      level:       "advanced",
      title:     "Робототехника",
      desc:      "Arduino-да роботтар жинаңыз және бағдарламалаңыз.",
      duration:    "5",
      age:         "11–16",
      lessons:     "36",
      formUrl:     "https://forms.google.com/example",
    },
    {
      number:      "06",
      level:       "advanced",
      title:     "Ойын әзірлеу",
      desc:      "Unity мен Python-да өз ойындарыңызды жасаңыз.",
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
      nameKz:  "Туленгалиева Махаббат Галымжановна",
      roleKz:  "Негізін қалаушы",
      bioKz:   "Инди-ойын әзірлеушісі · Unity",
      photo:   "mahabbat.jpeg",
    },
    {
      nameKz:  "Садуов Айболат Абатович",
      roleKz:  "Негізін қалаушы",
      bioKz:   "Инди-ойын әзірлеушісі · Unity",
      photo:   "aibolat.JPG",
    },
    {
      nameKz:  "Советова Фариза Қанатқызы",
      roleKz:  "Спикер",
      bioKz:   "Frontend-әзірлеуші · React / Vue · 3 жыл педагогика",
      photo:   "fariza.jpeg",
    },
    {
      nameKz:  "Абылаев Жандарбек Наренович",
      roleKz:  "Спикер",
      bioKz:   "5+ жыл әзірлеуде · Стартаптарға арналған жобалар",
      photo:   "jandarbek.JPG",
    },
    {
      nameKz:  "Кеулимжаева Балауса Бақытбайқызы",
      roleKz:  "Спикер",
      bioKz:   "Механик-инженер · Arduino / ROS",
      photo:   "balausa.jpeg",
    },
    {
      nameKz:  "Абат Ислам Абатұлы",
      roleKz:  "Спикер",
      bioKz:   "Инди-ойын әзірлеушісі · Unity",
      photo:   "islam.JPG",
    },
    {
      nameKz:  "Серікқалиұлы Ғалым",
      roleKz:  "Спикер",
      bioKz:   "Инди-ойын әзірлеушісі · Unity",
      photo:   "galym.jpeg",
    },
    {
      nameKz:  "Орманова Салтанат Амангелдіқызы",
      roleKz:  "Спикер",
      bioKz:   "Инди-ойын әзірлеушісі · Unity",
      photo:   "saltanat.jpeg",
    },
    {
      nameKz:  "Елеуберген Жанболат Айболатұлы",
      roleKz:  "Спикер",
      bioKz:   "Инди-ойын әзірлеушісі · Unity",
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
      date:  "2024 жылғы 15 қараша",
      title: "Қалалық бағдарламалау олимпиадасы — 3 жүлделі орын!",
      text:  "GALYM AI оқушылары мектеп оқушылары арасындағы информатика олимпиадасында жүлделі орындарды иеленді. Арман Сейтов 14–16 жас санатында бірінші орынды алды.",
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
      date:  "2024 жылғы 1 қазан",
      title: "Жасанды интеллект бойынша жаңа курстың ашылуы",
      text:  "«Жасанды интеллект» курсының салтанатты ашылуы толы залда өтті. 20 оқушы нейрондық желілерді зерделеуге кірісті.",
      photos: [
        "https://picsum.photos/seed/event2a/800/600",
        "https://picsum.photos/seed/event2b/800/600",
        "https://picsum.photos/seed/event2c/800/600",
        "https://picsum.photos/seed/event2d/800/600",
      ],
    },
    {
      emoji:   "🎓",
      date:  "2024 жылғы 20 қыркүйек",
      title: "Күзгі шығарылым: 32 жаңа маман!",
      text:  "Күзгі ағымының сертификаттарын табыстаудың салтанатты рәсімі. 32 түлек өз жобаларын қорғады.",
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
    date:  "2025 жылғы 10 ақпан",
    title: "«Болашақтың роботтары» хакатоны",
    text:  "Екі күндік хакатонда 6 команда Arduino-да автономды роботтар жасауда жарысты. «Circuit Breakers» командасы нейрондық желімен басқарылатын тазалаушы роботпен бірінші орынды алды.",
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
    date:  "2024 жылғы 5 желтоқсан",
    title: "Demo Day: күзгі ағым жобаларын қорғау",
    text:  "Күзгі маусымның қорытынды іс-шарасы. 32 оқушы өз жобаларын ұсынды: сайттар, ойындар, чат-боттар. Ата-аналар мен жергілікті IT-мамандары қатысты.",
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
    date:  "2024 жылғы 18 қараша",
    title: "Мастер-класс: «4 сағатта веб-әзірлеу»",
    text:  "Жаңадан бастаушыларға арналған ашық шебер-сынып. 4 сағатта қатысушылар HTML, CSS және JavaScript арқылы өз сайттарын жасады. 12-25 жас аралығындағы 45 қатысушы келді.",
    photos: [
      "https://picsum.photos/seed/ev3a/800/600",
      "https://picsum.photos/seed/ev3b/800/600",
      "https://picsum.photos/seed/ev3c/800/600",
    ],
    videos: [],
  },
  {
    emoji:   "🧠",
    date:  "2024 жылғы 3 қазан",
    title: "Ашық сабақ: «ChatGPT қалай жұмыс істейді?»",
    text:  "Клуб негізшісі Ален Ғалымовтың үлкен тіл модельдерінің жұмыс принциптері туралы ашық дәрісі. 80+ адам келді.",
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
    desc: "Күрделі ғылыми мәтіндер мен үлкен көлемді құжаттарды терең талдап, жоғары сапалы академиялық контент дайындайды.",
    url: "https://claude.ai",
  },
  {
    name: "Perplexity AI", company: "Perplexity AI", category: "text", emoji: "🔍", color: "#20B2AA", free: true,
    desc: "Интернеттегі нақты дереккөздерге сілтеме жасай отырып, кез келген сұраққа дәлелді және өзекті ақпаратты тауып береді.",
    url: "https://perplexity.ai",
  },
  {
    name: "ChatGPT", company: "OpenAI", category: "text", emoji: "💬", color: "#10A37F", free: true,
    desc: "Мұғалім ЖИ-ге «Сен квест ойынының жетекшісісің» деген рөл беру арқылы оқушыларға 3-5 минуттық интерактивті «логикалық детектив» немесе «виртуалды саяхат» ұйымдастырады.",
    url: "https://chat.openai.com",
  },
  {
    name: "DeepSeek", company: "DeepSeek AI", category: "text", emoji: "🔬", color: "#5B6BF5", free: true,
    desc: "Ашық кодты қуатты ЖИ. Математика, бағдарламалау және логикалық ойлаумен өте жақсы жұмыс істейді.",
    url: "https://chat.deepseek.com",
  },
  {
    name: "Gemini", company: "Google", category: "text", emoji: "✨", color: "#4285F4", free: true,
    desc: "Google-дің іздеу мен өзекті деректерге қол жеткізуі бар ЖИ. Google Docs, Sheets және Gmail-мен біріктірілген.",
    url: "https://gemini.google.com",
  },
  {
    name: "Consensus", company: "Consensus", category: "text", emoji: "📚", color: "#3B5BDB", free: true,
    desc: "Сұрақтарға тек тексерілген ғылыми мақалалар мен зерттеулер негізінде ғылыми негізделген жауаптар іздейді.",
    url: "https://consensus.app",
  },

  // ── ОБРАЗОВАНИЕ / УЧИТЕЛЯМ ───────────────────────────
  {
    name: "Gamma App", company: "Gamma", category: "edu", emoji: "🎯", color: "#8B5CF6", free: true,
    desc: "Берілген тақырып негізінде дайын презентацияларды, веб-беттерді және құрылымдалған құжаттарды дизайнмен бірге автоматты түрде жасайды.",
    url: "https://gamma.app",
  },
  {
    name: "MagicSchool AI", company: "MagicSchool", category: "edu", emoji: "🏫", color: "#7C3AED", free: true,
    desc: "Мұғалімдерге арналған 60-тан астам құралды біріктіре отырып, күрделі тақырыптарды «өмірлік мысалдармен» түсіндіруге және академиялық мазмұнды жеңілдетуге көмектеседі.",
    url: "https://magicschool.ai",
  },
  {
    name: "Khanmigo", company: "Khan Academy", category: "edu", emoji: "🎓", color: "#14A800", free: false,
    desc: "Оқушыға дайын жауапты айтпай, бағыттаушы сұрақтар қою арқылы жаңа тақырыпты өздігінен меңгеруге жетелейтін виртуалды репетитор қызметін атқарады.",
    url: "https://www.khanacademy.org/khanmigo",
  },
  {
    name: "Canva Magic Design", company: "Canva", category: "edu", emoji: "🖼️", color: "#00C4CC", free: true,
    desc: "Тақырыптың атын жазсаңыз, сол салаға сай стильді безендірілген, суреттері мен мәтіні үйлесім тапқан толыққанды оқу материалдарын ұсынады.",
    url: "https://canva.com",
  },
  {
    name: "Education Copilot", company: "Education Copilot", category: "edu", emoji: "✏️", color: "#0EA5E9", free: true,
    desc: "Сабақ жоспарынан бастап, сол тақырыпқа қажетті қолжазба материалдарына (handouts) дейін барлық дидактикалық кешенді бір сәтте генерациялайды.",
    url: "https://educationcopilot.com",
  },
  {
    name: "SchoolAI", company: "SchoolAI", category: "edu", emoji: "🏛️", color: "#6366F1", free: true,
    desc: "Оқушыларға қауіпсіз ортада жаңа тақырып бойынша кейіпкерлермен немесе тарихи тұлғалармен «сөйлесуге» мүмкіндік беретін виртуалды симуляциялар құрады.",
    url: "https://schoolai.com",
  },
  {
    name: "Curipod", company: "Curipod", category: "edu", emoji: "⚡", color: "#F59E0B", free: true,
    desc: "Кез келген тақырып бойынша оқушылардың қатысуымен өтетін (сауалнама, сурет салу, талқылау) интерактивті слайдтар мен дайын сабақ сценарийлерін жасайды.",
    url: "https://curipod.com",
  },
  {
    name: "Diffit", company: "Diffit", category: "edu", emoji: "📖", color: "#059669", free: true,
    desc: "Кез келген мақала, видео немесе тақырыпты оқушының жас ерекшелігіне қарай бейімдеп, оған қысқаша мазмұндама, сөздік және деңгейлік тапсырмалар дайындайды.",
    url: "https://diffit.me",
  },
  {
    name: "NotebookLM", company: "Google", category: "edu", emoji: "📓", color: "#34A853", free: true,
    desc: "PDF, дәрістер немесе кітаптарды жүктеңіз — ЖИ тек сіздің материалдарыңыз бойынша жауап береді.",
    url: "https://notebooklm.google.com",
  },
  {
    name: "WolframAlpha", company: "Wolfram", category: "edu", emoji: "📐", color: "#DD1100", free: true,
    desc: "Математикалық, физикалық немесе жаратылыстану бағытындағы күрделі есептер мен құбылыстарды қадамдық шешімімен және графиктерімен түсіндіріп береді.",
    url: "https://wolframalpha.com",
  },

  // ── ОЦЕНИВАНИЕ ──────────────────────────────────────
  {
    name: "Conker AI", company: "Conker", category: "assess", emoji: "🧩", color: "#DC2626", free: true,
    desc: "Кез келген мәтін немесе тақырып негізінде Блум таксономиясының деңгейлеріне сәйкес келетін кәсіби тест сұрақтарын және олардың бағалау кілттерін генерациялайды.",
    url: "https://conker.ai",
  },
  {
    name: "Quizizz AI", company: "Quizizz", category: "assess", emoji: "📝", color: "#8A2BE2", free: true,
    desc: "Кез келген мәтін немесе тақырып бойынша деңгейлік тест сұрақтарын, викториналар мен тапсырмаларды қазақ тілінде жылдам құрастырады.",
    url: "https://quizizz.com",
  },
  {
    name: "Formative AI", company: "Formative", category: "assess", emoji: "📊", color: "#0EA5E9", free: true,
    desc: "Оқушылардың тапсырма орындау барысындағы қателіктерін нақты уақытта анықтап, әр оқушыға жеке даму траекториясы бойынша бағалау ұсыныстарын береді.",
    url: "https://goformative.com",
  },
  {
    name: "GradeScope", company: "Turnitin", category: "assess", emoji: "🔎", color: "#1E40AF", free: false,
    desc: "Жаратылыстану бағытындағы қолмен жазылған күрделі есептер мен формулаларды сканерлеп, қателерді топтастыру арқылы бірыңғай критериймен жылдам бағалайды.",
    url: "https://gradescope.com",
  },
  {
    name: "ClassCompanion", company: "ClassCompanion", category: "assess", emoji: "💡", color: "#059669", free: true,
    desc: "Оқушыларға эссе немесе ашық сұрақтарға жауап беру кезінде ЖИ арқылы жедел кері байланыс беріп, қорытынды бағаны мұғалімнің бекітуіне жібереді.",
    url: "https://classcompanion.com",
  },
  {
    name: "ZipGrade", company: "ZipGrade", category: "assess", emoji: "📷", color: "#0891B2", free: true,
    desc: "Қағаз нұсқадағы тест жауаптарын телефон камерасымен лезде сканерлеп, сыныптың үлгерімі мен сұрақтардың күрделілік деңгейіне ЖИ арқылы статистикалық талдау жасайды.",
    url: "https://zipgrade.com",
  },
  {
    name: "Roobrick", company: "Roobrick", category: "assess", emoji: "📋", color: "#9333EA", free: true,
    desc: "Мұғалімнің сипаттамасы бойынша кез келген тапсырмаға арналған нақты бағалау рубрикаларын (критерийлерін) және жетістік деңгейлерін автоматты түрде құрастырады.",
    url: "https://roobrick.com",
  },
  {
    name: "QuestionWell", company: "QuestionWell", category: "assess", emoji: "❓", color: "#7C3AED", free: true,
    desc: "Оқу материалдары мен видеолардан мағыналық сұрақтар мен оқу мақсаттарын бөліп алып, оларды бағалаудың түрлі форматтарына (көп таңдаулы, ашық сұрақ) айналдырады.",
    url: "https://questionwell.org",
  },
  {
    name: "Turnitin Draft Coach", company: "Turnitin", category: "assess", emoji: "🛡️", color: "#1D4ED8", free: false,
    desc: "Студент жұмысын тапсырмас бұрын оның академиялық адалдығын, плагиат пайызын және дәйексөз алу сапасын ЖИ көмегімен алдын ала бағалайды.",
    url: "https://turnitin.com/products/draft-coach",
  },

  // ── ФИДБЕК / ОБРАТНАЯ СВЯЗЬ ─────────────────────────
  {
    name: "Brisk Teaching", company: "Brisk Teaching", category: "feedback", emoji: "⭐", color: "#F97316", free: true,
    desc: "Студенттердің Google Docs-тағы жұмыстарына нақты уақыт режимінде критериалды дескрипторлар бойынша тереңдетілген аналитикалық пікірлер мен бағалар береді.",
    url: "https://www.briskteaching.com",
  },
  {
    name: "Mote", company: "Mote", category: "feedback", emoji: "🎙️", color: "#DB2777", free: true,
    desc: "Мұғалімге оқушы жұмысына дауыстық пікір қалдыруға мүмкіндік береді және ол дауысты автоматты түрде мәтінге айналдырып, транскрипция жасайды.",
    url: "https://mote.com",
  },
  {
    name: "Kaizena", company: "Kaizena", category: "feedback", emoji: "🔗", color: "#16A34A", free: true,
    desc: "Оқушының жұмысына пікір білдіріп қана қоймай, қателерін түзету үшін қажетті ресурстар мен видео-сабақтарға сілтемелерді автоматты түрде бекітеді.",
    url: "https://kaizena.com",
  },
  {
    name: "Feedback Studio (Turnitin)", company: "Turnitin", category: "feedback", emoji: "📄", color: "#1D4ED8", free: false,
    desc: "Жұмыстың плагиатын тексеріп қана қоймай, ЖИ көмегімен грамматикалық және мағыналық қателерге сапалы талдау жасайды.",
    url: "https://turnitin.com",
  },
  {
    name: "EdPuzzle AI", company: "EdPuzzle", category: "feedback", emoji: "🎬", color: "#EA580C", free: true,
    desc: "Видео-сабақ барысында қойылған сұрақтардың жауаптарын талдап, оқушының тақырыпты қаншалықты меңгергені туралы мұғалімге толық аналитика береді.",
    url: "https://edpuzzle.com",
  },
  {
    name: "Floop", company: "Floop", category: "feedback", emoji: "🔄", color: "#0D9488", free: true,
    desc: "Оқушылардың бір-бірін бағалау (peer-review) үдерісін ЖИ арқылы ұйымдастырып, сындарлы пікір алмасу мәдениетін қалыптастырады.",
    url: "https://floopedu.com",
  },

  // ── ИЗОБРАЖЕНИЯ / ДИЗАЙН ────────────────────────────
  {
    name: "Midjourney / DALL-E 3", company: "Midjourney / OpenAI", category: "image", emoji: "🎨", color: "#7B68EE", free: false,
    desc: "Мәтіндік сипаттаманы пайдаланып, сабаққа қажетті бірегей әрі жоғары сапалы көрнекі суреттер мен иллюстрацияларды генерациялайды.",
    url: "https://midjourney.com",
  },
  {
    name: "AutoDraw", company: "Google Creative Lab", category: "image", emoji: "✏️", color: "#FBBC04", free: true,
    desc: "Қолмен салынған қарапайым шимайларды ЖИ көмегімен кәсіби деңгейдегі әдемі бейнелерге айналдырып, шығармашылық демалыс сыйлайды.",
    url: "https://autodraw.com",
  },

  // ── ВИДЕО / ГОЛОС ────────────────────────────────────
  {
    name: "HeyGen", company: "HeyGen", category: "video", emoji: "🎭", color: "#6366F1", free: true,
    desc: "Фотосуреттер мен аватарларды жанды бейнеге айналдырып, оларды мұғалімнің немесе тарихи тұлғаның дауысымен сөйлетеді.",
    url: "https://heygen.com",
  },
  {
    name: "YouTube Summary (Eightify)", company: "Eightify", category: "video", emoji: "▶️", color: "#FF0000", free: true,
    desc: "Ұзын бейнебаянды секундтар ішінде қысқаша мәтінге айналдырып, видеодағы негізгі тезистерді бөліп көрсету арқылы жаңа тақырыпты жылдам шолуға мүмкіндік береді.",
    url: "https://eightify.app",
  },

  // ── КОД ───────────────────────────────────────────────
  {
    name: "GitHub Copilot", company: "GitHub / Microsoft", category: "code", emoji: "👨‍💻", color: "#333333", free: false,
    desc: "Бағдарламашыларға арналған ЖИ-көмекші, тікелей код редакторында. Жолдарды аяқтайды, функциялар жасайды.",
    url: "https://github.com/features/copilot",
  },
  {
    name: "Bolt.new", company: "StackBlitz", category: "code", emoji: "⚡", color: "#6366F1", free: true,
    desc: "Мәтіндік сипаттама бойынша тікелей браузерде толыққанды веб-қосымшалар жасайды.",
    url: "https://bolt.new",
  },

  // ── ИНТЕРАКТИВ / ИГРЫ ────────────────────────────────
  {
    name: "MindMeister / Ayoa", company: "MindMeister", category: "interactive", emoji: "🗺️", color: "#2563EB", free: true,
    desc: "Берілген тақырыптың логикалық құрылымын автоматты түрде интеллект-карта (mind map) түрінде сызып, ақпаратты жүйелі визуалды бейнеге айналдырады.",
    url: "https://mindmeister.com",
  },
  {
    name: "Skybox AI", company: "Blockade Labs", category: "interactive", emoji: "🌍", color: "#7C3AED", free: true,
    desc: "Бір сөйлем жазу арқылы 360 градустық виртуалды әлем (панорама) құрап, оқушыларды бір сәтте мүлдем басқа кеңістікке саяхаттауға жетелейді.",
    url: "https://skybox.blockadelabs.com",
  },
  {
    name: "Quick, Draw! (Google)", company: "Google", category: "interactive", emoji: "🖊️", color: "#34A853", free: true,
    desc: "Оқушыларға берілген сөзді 20 секунд ішінде салуды тапсырады, ал нейрожелі оның не екенін нақты уақытта тауып, қызықты жарыс ұйымдастырады.",
    url: "https://quickdraw.withgoogle.com",
  },
  {
    name: "Semantris (Google)", company: "Google", category: "interactive", emoji: "🎮", color: "#EA4335", free: true,
    desc: "Сөздер арасындағы мағыналық байланысты табуға негізделген ЖИ ойыны арқылы оқушылардың сөздік қорын және жылдам ойлау қабілетін дамытады.",
    url: "https://research.google.com/semantris",
  },
  {
    name: "Akinator", company: "Elokence", category: "interactive", emoji: "🧞", color: "#1E6BE6", free: true,
    desc: "ЖИ-дің логикалық сұрақтар қою арқылы ойлаған тұлғаны табу мүмкіндігін пайдаланып, сабақ тақырыбына қатысты кейіпкерлерді жұмбақтауға мүмкіндік береді.",
    url: "https://akinator.com",
  },
  {
    name: "Animated Drawings", company: "Meta AI", category: "interactive", emoji: "🎪", color: "#0866FF", free: true,
    desc: "Оқушы салған суретті (кейіпкерді) ЖИ арқылы қимылға келтіріп, оны билететін немесе жүгіртетін көңілді анимациялар жасайды.",
    url: "https://sketch.metademolab.com",
  },
  {
    name: "Blob Opera", company: "Google Arts & Culture", category: "interactive", emoji: "🎼", color: "#9333EA", free: true,
    desc: "ЖИ негізіндегі опералық дауыстармен тәжірибе жасау арқылы оқушыларға ерекше музыкалық композициялар құрастыртып, эстетикалық релаксация жасайды.",
    url: "https://artsandculture.google.com/experiment/blob-opera",
  },
  {
    name: "Incredibox", company: "So Far So Good", category: "interactive", emoji: "🎤", color: "#FF6B35", free: true,
    desc: "Визуалды кейіпкерлер арқылы битбокс пен заманауи музыкалық микстер жасауға мүмкіндік беріп, сыныпта сергіту атмосферасын орнатады.",
    url: "https://www.incredibox.com",
  },
  {
    name: "Sketch Meta", company: "Meta AI", category: "interactive", emoji: "🖼️", color: "#0866FF", free: true,
    desc: "Қарапайым эскиздерді өңдеп, олардан қозғалыстағы мультфильм кейіпкерлерін жасау арқылы оқушылардың қиялын ұштайды.",
    url: "https://sketch.metademolab.com",
  },
];
