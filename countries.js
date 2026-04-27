const countries = {

// =======================
// 🇪🇺 ЕВРОПА
// =======================

germany: {
  name: "Германия",
  flag: "https://flagcdn.com/w640/de.png",
  capital: "Берлин",
  population: "83 млн",
  foundation: "1871",
  history: "Объединение Германии в 1871, разделение после войны и повторное объединение в 1990.",
  economy: "Одна из сильнейших экономик мира.",
  facts: "BMW, Mercedes, Volkswagen.",
  images: []
},

france: {
  name: "Франция",
  flag: "https://flagcdn.com/w640/fr.png",
  capital: "Париж",
  population: "67 млн",
  foundation: "843",
  history: "Французская революция сильно повлияла на Европу.",
  economy: "Туризм, мода, авиация.",
  facts: "Эйфелева башня, Лувр.",
  images: []
},

italy: {
  name: "Италия",
  flag: "https://flagcdn.com/w640/it.png",
  capital: "Рим",
  population: "60 млн",
  foundation: "1861",
  history: "Римская империя — древняя цивилизация.",
  economy: "Мода и туризм.",
  facts: "Пицца, паста.",
  images: []
},

spain: {
  name: "Испания",
  flag: "https://flagcdn.com/w640/es.png",
  capital: "Мадрид",
  population: "47 млн",
  foundation: "1469",
  history: "Колониальная империя.",
  economy: "Туризм.",
  facts: "Футбол, фламенко.",
  images: []
},

uk: {
  name: "Великобритания",
  flag: "https://flagcdn.com/w640/gb.png",
  capital: "Лондон",
  population: "67 млн",
  foundation: "1707",
  history: "Британская империя.",
  economy: "Финансы.",
  facts: "Лондон.",
  images: []
},

poland: {
  name: "Польша",
  flag: "https://flagcdn.com/w640/pl.png",
  capital: "Варшава",
  population: "38 млн",
  foundation: "966",
  history: "История войн и восстановления.",
  economy: "Развитие промышленности.",
  facts: "Культура и традиции.",
  images: []
},

netherlands: {
  name: "Нидерланды",
  flag: "https://flagcdn.com/w640/nl.png",
  capital: "Амстердам",
  population: "17 млн",
  foundation: "1581",
  history: "Морская держава Европы.",
  economy: "Торговля и логистика.",
  facts: "Каналы и тюльпаны.",
  images: []
},

belgium: {
  name: "Бельгия",
  flag: "https://flagcdn.com/w640/be.png",
  capital: "Брюссель",
  population: "11 млн",
  foundation: "1830",
  history: "Центр Европейского союза.",
  economy: "Финансы и химия.",
  facts: "Шоколад и вафли.",
  images: []
},

switzerland: {
  name: "Швейцария",
  flag: "https://flagcdn.com/w640/ch.png",
  capital: "Берн",
  population: "8 млн",
  foundation: "1291",
  history: "Нейтральная страна.",
  economy: "Банки и финансы.",
  facts: "Альпы.",
  images: []
},

austria: {
  name: "Австрия",
  flag: "https://flagcdn.com/w640/at.png",
  capital: "Вена",
  population: "9 млн",
  foundation: "1156",
  history: "Бывшая империя.",
  economy: "Туризм и культура.",
  facts: "Классическая музыка.",
  images: []
},

sweden: {
  name: "Швеция",
  flag: "https://flagcdn.com/w640/se.png",
  capital: "Стокгольм",
  population: "10 млн",
  foundation: "1523",
  history: "Северная Европа.",
  economy: "IT и промышленность.",
  facts: "IKEA.",
  images: []
},

norway: {
  name: "Норвегия",
  flag: "https://flagcdn.com/w640/no.png",
  capital: "Осло",
  population: "5 млн",
  foundation: "872",
  history: "Страна викингов.",
  economy: "Нефть и газ.",
  facts: "Фьорды.",
  images: []
},

finland: {
  name: "Финляндия",
  flag: "https://flagcdn.com/w640/fi.png",
  capital: "Хельсинки",
  population: "5.5 млн",
  foundation: "1917",
  history: "Северная страна.",
  economy: "Образование и технологии.",
  facts: "Самая счастливая страна.",
  images: []
},

denmark: {
  name: "Дания",
  flag: "https://flagcdn.com/w640/dk.png",
  capital: "Копенгаген",
  population: "6 млн",
  foundation: "10 век",
  history: "Викинги.",
  economy: "Социальная модель.",
  facts: "Лего.",
  images: []
},

czech: {
  name: "Чехия",
  flag: "https://flagcdn.com/w640/cz.png",
  capital: "Прага",
  population: "10 млн",
  foundation: "1993",
  history: "Чехословакия.",
  economy: "Промышленность.",
  facts: "Пиво.",
  images: []
},

hungary: {
  name: "Венгрия",
  flag: "https://flagcdn.com/w640/hu.png",
  capital: "Будапешт",
  population: "9 млн",
  foundation: "1000",
  history: "Империя.",
  economy: "Туризм.",
  facts: "Красивый город.",
  images: []
},

romania: {
  name: "Румыния",
  flag: "https://flagcdn.com/w640/ro.png",
  capital: "Бухарест",
  population: "19 млн",
  foundation: "1859",
  history: "Древние корни.",
  economy: "Развитие.",
  facts: "Дракула.",
  images: []
},

greece: {
  name: "Греция",
  flag: "https://flagcdn.com/w640/gr.png",
  capital: "Афины",
  population: "10 млн",
  foundation: "1830",
  history: "Древняя цивилизация.",
  economy: "Туризм.",
  facts: "Демократия.",
  images: []
}, 

// =======================
// 🇰🇬 ЦЕНТРАЛЬНАЯ АЗИЯ
// =======================

kyrgyzstan: {
  name: "Кыргызстан",
  flag: "https://flagcdn.com/w640/kg.png",
  capital: "Бишкек",
  population: "7 млн",
  foundation: "1991",
  history: "Горная страна с древней кочевой культурой и наследием Шёлкового пути.",
  economy: "Сельское хозяйство, золото (Кумтор), гидроэнергетика.",
  facts: "Иссык-Куль — одно из самых красивых озёр мира.",
  images: []
},

kazakhstan: {
  name: "Казахстан",
  flag: "https://flagcdn.com/w640/kz.png",
  capital: "Астана",
  population: "19 млн",
  foundation: "1991",
  history: "Бывшая часть СССР, крупнейшая страна Центральной Азии.",
  economy: "Нефть, газ, уран.",
  facts: "9-я по площади страна в мире.",
  images: []
},

tajikistan: {
  name: "Таджикистан",
  flag: "https://flagcdn.com/w640/tj.png",
  capital: "Душанбе",
  population: "10 млн",
  foundation: "1991",
  history: "Горная страна Памира с древними персидскими корнями.",
  economy: "Гидроэнергия, алюминий.",
  facts: "Памир — «крыша мира».",
  images: []
},

turkmenistan: {
  name: "Туркменистан",
  flag: "https://flagcdn.com/w640/tm.png",
  capital: "Ашхабад",
  population: "6 млн",
  foundation: "1991",
  history: "Древний Шёлковый путь и пустыня Каракумы.",
  economy: "Природный газ.",
  facts: "Одна из самых закрытых стран мира.",
  images: []
},

uzbekistan: {
  name: "Узбекистан",
  flag: "https://flagcdn.com/w640/uz.png",
  capital: "Ташкент",
  population: "36 млн",
  foundation: "1991",
  history: "Центр Шёлкового пути: Самарканд, Бухара, Хива.",
  economy: "Хлопок, газ, золото.",
  facts: "Самарканд — древний город мира.",
  images: []
},

// =======================
// 🌏 ВОСТОЧНАЯ АЗИЯ
// =======================

china: {
  name: "Китай",
  flag: "https://flagcdn.com/w640/cn.png",
  capital: "Пекин",
  population: "1.4 млрд",
  foundation: "221 до н.э.",
  history: "Одна из древнейших цивилизаций мира.",
  economy: "Вторая экономика мира.",
  facts: "Великая Китайская стена.",
  images: []
},

mongolia: {
  name: "Монголия",
  flag: "https://flagcdn.com/w640/mn.png",
  capital: "Улан-Батор",
  population: "3 млн",
  foundation: "1206",
  history: "Империя Чингисхана.",
  economy: "Скотоводство, добыча ресурсов.",
  facts: "Огромные степи.",
  images: []
},

north_korea: {
  name: "Северная Корея",
  flag: "https://flagcdn.com/w640/kp.png",
  capital: "Пхеньян",
  population: "25 млн",
  foundation: "1948",
  history: "Закрытая государственная система.",
  economy: "Плановая экономика.",
  facts: "Одна из самых закрытых стран.",
  images: []
},

south_korea: {
  name: "Южная Корея",
  flag: "https://flagcdn.com/w640/kr.png",
  capital: "Сеул",
  population: "52 млн",
  foundation: "1948",
  history: "Быстрый экономический рост.",
  economy: "Samsung, Hyundai, LG.",
  facts: "K-pop и технологии.",
  images: []
},

japan: {
  name: "Япония",
  flag: "https://flagcdn.com/w640/jp.png",
  capital: "Токио",
  population: "125 млн",
  foundation: "660 до н.э.",
  history: "Технологическая сверхдержава.",
  economy: "Авто и электроника.",
  facts: "Аниме и самураи.",
  images: []
},

// =======================
// 🌏 ЮГО-ВОСТОЧНАЯ АЗИЯ
// =======================

brunei: {
  name: "Бруней",
  flag: "https://flagcdn.com/w640/bn.png",
  capital: "Бандар-Сери-Бегаван",
  population: "0.4 млн",
  foundation: "1984",
  history: "Нефтяное государство на Борнео.",
  economy: "Нефть и газ.",
  facts: "Очень богатая страна.",
  images: []
},

east_timor: {
  name: "Восточный Тимор",
  flag: "https://flagcdn.com/w640/tl.png",
  capital: "Дили",
  population: "1.3 млн",
  foundation: "2002",
  history: "Бывшая португальская колония.",
  economy: "Сельское хозяйство.",
  facts: "Молодое государство.",
  images: []
},

vietnam: {
  name: "Вьетнам",
  flag: "https://flagcdn.com/w640/vn.png",
  capital: "Ханой",
  population: "100 млн",
  foundation: "1945",
  history: "Война и быстрое развитие.",
  economy: "Экспорт и производство.",
  facts: "Быстрорастущая экономика.",
  images: []
},

indonesia: {
  name: "Индонезия",
  flag: "https://flagcdn.com/w640/id.png",
  capital: "Джакарта",
  population: "270 млн",
  foundation: "1945",
  history: "Архипелаг из тысяч островов.",
  economy: "Туризм, нефть.",
  facts: "17 000+ островов.",
  images: []
},

cambodia: {
  name: "Камбоджа",
  flag: "https://flagcdn.com/w640/kh.png",
  capital: "Пномпень",
  population: "17 млн",
  foundation: "1953",
  history: "Древняя империя Ангкор.",
  economy: "Туризм, текстиль.",
  facts: "Ангкор-Ват.",
  images: []
},

laos: {
  name: "Лаос",
  flag: "https://flagcdn.com/w640/la.png",
  capital: "Вьентьян",
  population: "7 млн",
  foundation: "1953",
  history: "Горная страна Индокитая.",
  economy: "ГЭС и сельское хозяйство.",
  facts: "Одна из самых спокойных стран.",
  images: []
},

malaysia: {
  name: "Малайзия",
  flag: "https://flagcdn.com/w640/my.png",
  capital: "Куала-Лумпур",
  population: "33 млн",
  foundation: "1963",
  history: "Британская колония.",
  economy: "Электроника и нефть.",
  facts: "Башни Петронас.",
  images: []
},

myanmar: {
  name: "Мьянма",
  flag: "https://flagcdn.com/w640/mm.png",
  capital: "Нейпьидо",
  population: "55 млн",
  foundation: "1948",
  history: "Бывшая Бирма.",
  economy: "Сельское хозяйство.",
  facts: "Много древних храмов.",
  images: []
},

singapore: {
  name: "Сингапур",
  flag: "https://flagcdn.com/w640/sg.png",
  capital: "Сингапур",
  population: "6 млн",
  foundation: "1965",
  history: "Город-государство.",
  economy: "Финансы и технологии.",
  facts: "Один из самых богатых городов мира.",
  images: []
},

thailand: {
  name: "Таиланд",
  flag: "https://flagcdn.com/w640/th.png",
  capital: "Бангкок",
  population: "70 млн",
  foundation: "1932",
  history: "Никогда не был колонией.",
  economy: "Туризм.",
  facts: "Популярный курорт.",
  images: []
},

philippines: {
  name: "Филиппины",
  flag: "https://flagcdn.com/w640/ph.png",
  capital: "Манила",
  population: "110 млн",
  foundation: "1946",
  history: "Испанское и американское влияние.",
  economy: "Сервис и IT.",
  facts: "7000 островов.",
  images: []
},

// =======================
// 🌏 ЮЖНАЯ АЗИЯ
// =======================

afghanistan: {
  name: "Афганистан",
  flag: "https://flagcdn.com/w640/af.png",
  capital: "Кабул",
  population: "40 млн",
  foundation: "1919",
  history: "Древний регион Шёлкового пути.",
  economy: "Сельское хозяйство.",
  facts: "Горная страна.",
  images: []
},

bangladesh: {
  name: "Бангладеш",
  flag: "https://flagcdn.com/w640/bd.png",
  capital: "Дакка",
  population: "170 млн",
  foundation: "1971",
  history: "Бывший Восточный Пакистан.",
  economy: "Текстиль.",
  facts: "Очень густонаселённая страна.",
  images: []
},

azerbaijan: {
  name: "Азербайджан",
  flag: "https://flagcdn.com/w640/az.png",
  capital: "Баку",
  population: "10 млн",
  foundation: "1991",
  history: "Кавказ и Каспийское море.",
  economy: "Нефть и газ.",
  facts: "Огни Баку.",
  images: []
},

armenia: {
  name: "Армения",
  flag: "https://flagcdn.com/w640/am.png",
  capital: "Ереван",
  population: "3 млн",
  foundation: "1991",
  history: "Древняя христианская страна.",
  economy: "IT и туризм.",
  facts: "Гора Арарат.",
  images: []
},

bahrain: {
  name: "Бахрейн",
  flag: "https://flagcdn.com/w640/bh.png",
  capital: "Манама",
  population: "1.5 млн",
  foundation: "1971",
  history: "Персидский залив.",
  economy: "Нефть и финансы.",
  facts: "Островное государство.",
  images: []
},

georgia: {
  name: "Грузия",
  flag: "https://flagcdn.com/w640/ge.png",
  capital: "Тбилиси",
  population: "4 млн",
  foundation: "1991",
  history: "Кавказская страна с древней историей.",
  economy: "Туризм и сельское хозяйство.",
  facts: "Горы Кавказа.",
  images: []
},

israel: {
  name: "Израиль",
  flag: "https://flagcdn.com/w640/il.png",
  capital: "Иерусалим",
  population: "9 млн",
  foundation: "1948",
  history: "Древняя и современная страна.",
  economy: "Технологии.",
  facts: "Стартап-нация.",
  images: []
},

bhutan: {
  name: "Бутан",
  flag: "https://flagcdn.com/w640/bt.png",
  capital: "Тхимпху",
  population: "0.7 млн",
  foundation: "1907",
  history: "Гималаи и буддизм.",
  economy: "Туризм.",
  facts: "Измеряет счастье народа.",
  images: []
},

india: {
  name: "Индия",
  flag: "https://flagcdn.com/w640/in.png",
  capital: "Нью-Дели",
  population: "1.4 млрд",
  foundation: "1947",
  history: "Древняя цивилизация.",
  economy: "IT и кино.",
  facts: "Болливуд.",
  images: []
},

maldives: {
  name: "Мальдивы",
  flag: "https://flagcdn.com/w640/mv.png",
  capital: "Мале",
  population: "0.5 млн",
  foundation: "1965",
  history: "Островное государство.",
  economy: "Туризм.",
  facts: "Райские пляжи.",
  images: []
},

nepal: {
  name: "Непал",
  flag: "https://flagcdn.com/w640/np.png",
  capital: "Катманду",
  population: "30 млн",
  foundation: "1768",
  history: "Гималаи.",
  economy: "Туризм.",
  facts: "Эверест.",
  images: []
},

pakistan: {
  name: "Пакистан",
  flag: "https://flagcdn.com/w640/pk.png",
  capital: "Исламабад",
  population: "240 млн",
  foundation: "1947",
  history: "Раздел Индии.",
  economy: "Текстиль.",
  facts: "Большая страна.",
  images: []
},

sri_lanka: {
  name: "Шри-Ланка",
  flag: "https://flagcdn.com/w640/lk.png",
  capital: "Шри-Джаяварденепура-Котте",
  population: "22 млн",
  foundation: "1948",
  history: "Остров Цейлон.",
  economy: "Чай и туризм.",
  facts: "Остров в Индийском океане.",
  images: []
},

// =======================
// 🌏 ОКЕАНИЯ
// =======================

australia: {
  name: "Австралия",
  flag: "https://flagcdn.com/w640/au.png",
  capital: "Канберра",
  population: "26 млн",
  foundation: "1901",
  history: "Бывшая британская колония, позже стала независимым государством.",
  economy: "Добыча ресурсов, сельское хозяйство, туризм.",
  facts: "Кенгуру, коала и Большой Барьерный риф.",
  images: []
}, // ← ВОТ ЭТА ЗАПЯТАЯ ВАЖНА!

new_zealand: {
  name: "Новая Зеландия",
  flag: "https://flagcdn.com/w640/nz.png",
  capital: "Веллингтон",
  population: "5 млн",
  foundation: "1907",
  history: "Британская колония, позже независимое государство.",
  economy: "Сельское хозяйство, туризм.",
  facts: "Овцы и природа.",
  images: []
},

papua_new_guinea: {
  name: "Папуа — Новая Гвинея",
  flag: "https://flagcdn.com/w640/pg.png",
  capital: "Порт-Морсби",
  population: "9 млн",
  foundation: "1975",
  history: "Бывшая колония Австралии.",
  economy: "Добыча ресурсов.",
  facts: "Много племён и языков.",
  images: []
},

fiji: {
  name: "Фиджи",
  flag: "https://flagcdn.com/w640/fj.png",
  capital: "Сува",
  population: "0.9 млн",
  foundation: "1970",
  history: "Британская колония.",
  economy: "Туризм.",
  facts: "Острова и пляжи.",
  images: []
},

samoa: {
  name: "Самоа",
  flag: "https://flagcdn.com/w640/ws.png",
  capital: "Апиа",
  population: "0.2 млн",
  foundation: "1962",
  history: "Одна из первых независимых стран Океании.",
  economy: "Сельское хозяйство.",
  facts: "Тропический климат.",
  images: []
},

tonga: {
  name: "Тонга",
  flag: "https://flagcdn.com/w640/to.png",
  capital: "Нукуалофа",
  population: "0.1 млн",
  foundation: "1970",
  history: "Королевство.",
  economy: "Сельское хозяйство.",
  facts: "Монархия.",
  images: []
},

solomon_islands: {
  name: "Соломоновы Острова",
  flag: "https://flagcdn.com/w640/sb.png",
  capital: "Хониара",
  population: "0.7 млн",
  foundation: "1978",
  history: "Британская колония.",
  economy: "Рыболовство.",
  facts: "Островное государство.",
  images: []
},

vanuatu: {
  name: "Вануату",
  flag: "https://flagcdn.com/w640/vu.png",
  capital: "Порт-Вила",
  population: "0.3 млн",
  foundation: "1980",
  history: "Франко-британское управление.",
  economy: "Туризм.",
  facts: "Вулканы.",
  images: []
},

kiribati: {
  name: "Кирибати",
  flag: "https://flagcdn.com/w640/ki.png",
  capital: "Южная Тарава",
  population: "0.1 млн",
  foundation: "1979",
  history: "Островное государство.",
  economy: "Рыболовство.",
  facts: "Расположено на экваторе.",
  images: []
},

tuvalu: {
  name: "Тувалу",
  flag: "https://flagcdn.com/w640/tv.png",
  capital: "Фунафути",
  population: "0.01 млн",
  foundation: "1978",
  history: "Британская колония.",
  economy: "Помощь и рыболовство.",
  facts: "Одна из самых маленьких стран.",
  images: []
},

nauru: {
  name: "Науру",
  flag: "https://flagcdn.com/w640/nr.png",
  capital: "Нет официальной",
  population: "0.01 млн",
  foundation: "1968",
  history: "Фосфатная экономика.",
  economy: "Ресурсы.",
  facts: "Очень маленькая страна.",
  images: []
},

micronesia: {
  name: "Микронезия",
  flag: "https://flagcdn.com/w640/fm.png",
  capital: "Паликир",
  population: "0.1 млн",
  foundation: "1986",
  history: "Связана с США.",
  economy: "Помощь.",
  facts: "Много островов.",
  images: []
},

marshall_islands: {
  name: "Маршалловы Острова",
  flag: "https://flagcdn.com/w640/mh.png",
  capital: "Маджуро",
  population: "0.06 млн",
  foundation: "1986",
  history: "Связаны с США.",
  economy: "Помощь.",
  facts: "Атоллы.",
  images: []
},

// =======================
// 🌍 АФРИКА
// =======================

 
egypt: {
  name: "Египет",
  flag: "https://flagcdn.com/w640/eg.png",
  capital: "Каир",
  population: "110 млн",
  foundation: "1922",
  history: "Одна из древнейших цивилизаций мира, пирамиды и фараоны.",
  economy: "Туризм, нефть, сельское хозяйство.",
  facts: "Пирамиды Гизы и Нил.",
  images: []
},

nigeria: {
  name: "Нигерия",
  flag: "https://flagcdn.com/w640/ng.png",
  capital: "Абуджа",
  population: "220 млн",
  foundation: "1960",
  history: "Бывшая британская колония.",
  economy: "Нефть и газ.",
  facts: "Самая населённая страна Африки.",
  images: []
},

south_africa: {
  name: "ЮАР",
  flag: "https://flagcdn.com/w640/za.png",
  capital: "Претория",
  population: "60 млн",
  foundation: "1910",
  history: "Апартеид и его отмена.",
  economy: "Промышленность и добыча ресурсов.",
  facts: "Три столицы.",
  images: []
},

kenya: {
  name: "Кения",
  flag: "https://flagcdn.com/w640/ke.png",
  capital: "Найроби",
  population: "55 млн",
  foundation: "1963",
  history: "Британская колония.",
  economy: "Сельское хозяйство и туризм.",
  facts: "Сафари.",
  images: []
},

ethiopia: {
  name: "Эфиопия",
  flag: "https://flagcdn.com/w640/et.png",
  capital: "Аддис-Абеба",
  population: "120 млн",
  foundation: "древнее государство",
  history: "Одна из старейших стран мира.",
  economy: "Сельское хозяйство.",
  facts: "Никогда не была колонизирована.",
  images: []
},

morocco: {
  name: "Марокко",
  flag: "https://flagcdn.com/w640/ma.png",
  capital: "Рабат",
  population: "37 млн",
  foundation: "1956",
  history: "Арабская и берберская культура.",
  economy: "Туризм и сельское хозяйство.",
  facts: "Сахара.",
  images: []
},

algeria: {
  name: "Алжир",
  flag: "https://flagcdn.com/w640/dz.png",
  capital: "Алжир",
  population: "45 млн",
  foundation: "1962",
  history: "Борьба за независимость от Франции.",
  economy: "Нефть и газ.",
  facts: "Крупнейшая страна Африки.",
  images: []
},

tunisia: {
  name: "Тунис",
  flag: "https://flagcdn.com/w640/tn.png",
  capital: "Тунис",
  population: "12 млн",
  foundation: "1956",
  history: "Карфаген и Римская история.",
  economy: "Туризм.",
  facts: "Средиземное море.",
  images: []
},

libya: {
  name: "Ливия",
  flag: "https://flagcdn.com/w640/ly.png",
  capital: "Триполи",
  population: "7 млн",
  foundation: "1951",
  history: "Бывшая итальянская колония.",
  economy: "Нефть.",
  facts: "Пустыня Сахара.",
  images: []
},

ghana: {
  name: "Гана",
  flag: "https://flagcdn.com/w640/gh.png",
  capital: "Аккра",
  population: "33 млн",
  foundation: "1957",
  history: "Первая независимая страна Африки.",
  economy: "Золото и какао.",
  facts: "Золотой берег.",
  images: []
},

uganda: {
  name: "Уганда",
  flag: "https://flagcdn.com/w640/ug.png",
  capital: "Кампала",
  population: "48 млн",
  foundation: "1962",
  history: "Британская колония.",
  economy: "Сельское хозяйство.",
  facts: "Озеро Виктория.",
  images: []
},

tanzania: {
  name: "Танзания",
  flag: "https://flagcdn.com/w640/tz.png",
  capital: "Додома",
  population: "65 млн",
  foundation: "1964",
  history: "Союз Танганьики и Занзибара.",
  economy: "Туризм.",
  facts: "Килиманджаро.",
  images: []
},

angola: {
  name: "Ангола",
  flag: "https://flagcdn.com/w640/ao.png",
  capital: "Луанда",
  population: "35 млн",
  foundation: "1975",
  history: "Португальская колония.",
  economy: "Нефть.",
  facts: "Долгая гражданская война.",
  images: []
},

zimbabwe: {
  name: "Зимбабве",
  flag: "https://flagcdn.com/w640/zw.png",
  capital: "Хараре",
  population: "16 млн",
  foundation: "1980",
  history: "Бывшая Родезия.",
  economy: "Сельское хозяйство.",
  facts: "Водопад Виктория.",
  images: []
},

madagascar: {
  name: "Мадагаскар",
  flag: "https://flagcdn.com/w640/mg.png",
  capital: "Антананариву",
  population: "30 млн",
  foundation: "1960",
  history: "Остров у Африки.",
  economy: "Сельское хозяйство.",
  facts: "Лемуры.",
  images: []
},

senegal: {
  name: "Сенегал",
  flag: "https://flagcdn.com/w640/sn.png",
  capital: "Дакар",
  population: "18 млн",
  foundation: "1960",
  history: "Французская колония.",
  economy: "Рыболовство.",
  facts: "Запад Африки.",
  images: []
},

cameroon: {
  name: "Камерун",
  flag: "https://flagcdn.com/w640/cm.png",
  capital: "Яунде",
  population: "28 млн",
  foundation: "1960",
  history: "Французское и британское влияние.",
  economy: "Сельское хозяйство.",
  facts: "Африка в миниатюре.",
  images: []
},

ivory_coast: {
  name: "Кот-д'Ивуар",
  flag: "https://flagcdn.com/w640/ci.png",
  capital: "Ямусукро",
  population: "28 млн",
  foundation: "1960",
  history: "Французская колония.",
  economy: "Какао.",
  facts: "Крупнейший производитель какао.",
  images: []
},

// =======================
// 🌎 СЕВЕРНАЯ АМЕРИКА
// =======================

usa: {
  name: "США",
  flag: "https://flagcdn.com/w640/us.png",
  capital: "Вашингтон",
  population: "335 млн",
  foundation: "1776",
  history: "Независимость от Великобритании, развитие в мировую сверхдержаву.",
  economy: "Крупнейшая экономика мира.",
  facts: "Голливуд, NASA, Нью-Йорк.",
  images: []
},

canada: {
  name: "Канада",
  flag: "https://flagcdn.com/w640/ca.png",
  capital: "Оттава",
  population: "40 млн",
  foundation: "1867",
  history: "Британская колония, федерация.",
  economy: "Ресурсы и технологии.",
  facts: "Кленовый сироп.",
  images: []
},

mexico: {
  name: "Мексика",
  flag: "https://flagcdn.com/w640/mx.png",
  capital: "Мехико",
  population: "130 млн",
  foundation: "1810",
  history: "Цивилизации майя и ацтеков.",
  economy: "Туризм и производство.",
  facts: "Тако, пирамиды.",
  images: []
},

greenland: {
  name: "Гренландия",
  flag: "https://flagcdn.com/w640/gl.png",
  capital: "Нуук",
  population: "0.06 млн",
  foundation: "Самоуправление с 1979",
  history: "Автономная территория Дании.",
  economy: "Рыболовство.",
  facts: "Ледяной остров.",
  images: []
},

cuba: {
  name: "Куба",
  flag: "https://flagcdn.com/w640/cu.png",
  capital: "Гавана",
  population: "11 млн",
  foundation: "1902",
  history: "Революция 1959 года.",
  economy: "Туризм.",
  facts: "Старые машины.",
  images: []
},

haiti: {
  name: "Гаити",
  flag: "https://flagcdn.com/w640/ht.png",
  capital: "Порт-о-Пренс",
  population: "11 млн",
  foundation: "1804",
  history: "Первая независимая страна Латинской Америки.",
  economy: "Сельское хозяйство.",
  facts: "Карибское государство.",
  images: []
},

dominican_republic: {
  name: "Доминиканская Республика",
  flag: "https://flagcdn.com/w640/do.png",
  capital: "Санто-Доминго",
  population: "11 млн",
  foundation: "1844",
  history: "Освобождение от Гаити.",
  economy: "Туризм.",
  facts: "Карибские пляжи.",
  images: []
},

guatemala: {
  name: "Гватемала",
  flag: "https://flagcdn.com/w640/gt.png",
  capital: "Гватемала-Сити",
  population: "18 млн",
  foundation: "1821",
  history: "Майя цивилизация.",
  economy: "Сельское хозяйство.",
  facts: "Вулканы.",
  images: []
},

belize: {
  name: "Белиз",
  flag: "https://flagcdn.com/w640/bz.png",
  capital: "Бельмопан",
  population: "0.4 млн",
  foundation: "1981",
  history: "Британская колония.",
  economy: "Туризм.",
  facts: "Англоязычная страна.",
  images: []
},

el_salvador: {
  name: "Сальвадор",
  flag: "https://flagcdn.com/w640/sv.png",
  capital: "Сан-Сальвадор",
  population: "6 млн",
  foundation: "1821",
  history: "Независимость от Испании.",
  economy: "Переводы и услуги.",
  facts: "Самая маленькая страна региона.",
  images: []
},

honduras: {
  name: "Гондурас",
  flag: "https://flagcdn.com/w640/hn.png",
  capital: "Тегусигальпа",
  population: "10 млн",
  foundation: "1821",
  history: "Испанская колония.",
  economy: "Сельское хозяйство.",
  facts: "Карибское побережье.",
  images: []
},

nicaragua: {
  name: "Никарагуа",
  flag: "https://flagcdn.com/w640/ni.png",
  capital: "Манагуа",
  population: "7 млн",
  foundation: "1821",
  history: "Колония Испании.",
  economy: "Сельское хозяйство.",
  facts: "Озёра и вулканы.",
  images: []
},

costa_rica: {
  name: "Коста-Рика",
  flag: "https://flagcdn.com/w640/cr.png",
  capital: "Сан-Хосе",
  population: "5 млн",
  foundation: "1821",
  history: "Без армии.",
  economy: "Туризм и экология.",
  facts: "Очень зелёная страна.",
  images: []
},

panama: {
  name: "Панама",
  flag: "https://flagcdn.com/w640/pa.png",
  capital: "Панама",
  population: "4 млн",
  foundation: "1903",
  history: "Отделение от Колумбии.",
  economy: "Канал Панамы.",
  facts: "Соединяет океаны.",
  images: []
},

// =======================
// 🇧🇷 ЮЖНАЯ АМЕРИКА
// =======================

brazil: {
  name: "Бразилия",
  flag: "https://flagcdn.com/w640/br.png",
  capital: "Бразилиа",
  population: "215 млн",
  foundation: "1822",
  history: "Бывшая португальская колония, крупнейшая страна Южной Америки.",
  economy: "Сельское хозяйство, нефть, промышленность.",
  facts: "Амазонка, футбол, карнавал.",
  images: []
},

argentina: {
  name: "Аргентина",
  flag: "https://flagcdn.com/w640/ar.png",
  capital: "Буэнос-Айрес",
  population: "46 млн",
  foundation: "1816",
  history: "Независимость от Испании в 1816 году.",
  economy: "Сельское хозяйство и мясная промышленность.",
  facts: "Танго, Патагония.",
  images: []
},

colombia: {
  name: "Колумбия",
  flag: "https://flagcdn.com/w640/co.png",
  capital: "Богота",
  population: "52 млн",
  foundation: "1810",
  history: "Независимость от Испании.",
  economy: "Кофе, нефть, горнодобыча.",
  facts: "Анды и Амазонка.",
  images: []
},

peru: {
  name: "Перу",
  flag: "https://flagcdn.com/w640/pe.png",
  capital: "Лима",
  population: "34 млн",
  foundation: "1821",
  history: "Цивилизация инков.",
  economy: "Горнодобыча и туризм.",
  facts: "Мачу-Пикчу.",
  images: []
},

chile: {
  name: "Чили",
  flag: "https://flagcdn.com/w640/cl.png",
  capital: "Сантьяго",
  population: "19 млн",
  foundation: "1818",
  history: "Длинная страна вдоль побережья.",
  economy: "Медь и экспорт.",
  facts: "Пустыня Атакама.",
  images: []
},

bolivia: {
  name: "Боливия",
  flag: "https://flagcdn.com/w640/bo.png",
  capital: "Сукре / Ла-Пас",
  population: "12 млн",
  foundation: "1825",
  history: "Бывшая часть империи инков.",
  economy: "Горнодобыча.",
  facts: "Самая высокогорная столица.",
  images: []
},

paraguay: {
  name: "Парагвай",
  flag: "https://flagcdn.com/w640/py.png",
  capital: "Асунсьон",
  population: "7 млн",
  foundation: "1811",
  history: "Независимость от Испании.",
  economy: "Сельское хозяйство.",
  facts: "Две официальные столицы в истории.",
  images: []
},

uruguay: {
  name: "Уругвай",
  flag: "https://flagcdn.com/w640/uy.png",
  capital: "Монтевидео",
  population: "3.5 млн",
  foundation: "1825",
  history: "Между Бразилией и Аргентиной.",
  economy: "Сельское хозяйство.",
  facts: "Очень стабильная страна.",
  images: []
},

ecuador: {
  name: "Эквадор",
  flag: "https://flagcdn.com/w640/ec.png",
  capital: "Кито",
  population: "18 млн",
  foundation: "1830",
  history: "Часть Великой Колумбии.",
  economy: "Нефть и бананы.",
  facts: "Галапагосские острова.",
  images: []
},

venezuela: {
  name: "Венесуэла",
  flag: "https://flagcdn.com/w640/ve.png",
  capital: "Каракас",
  population: "28 млн",
  foundation: "1811",
  history: "Борьба за независимость.",
  economy: "Нефть.",
  facts: "Водопад Анхель.",
  images: []
},

guyana: {
  name: "Гайана",
  flag: "https://flagcdn.com/w640/gy.png",
  capital: "Джорджтаун",
  population: "0.8 млн",
  foundation: "1966",
  history: "Британская колония.",
  economy: "Ресурсы и нефть.",
  facts: "Англоязычная страна Южной Америки.",
  images: []
},

suriname: {
  name: "Суринам",
  flag: "https://flagcdn.com/w640/sr.png",
  capital: "Парамарибо",
  population: "0.6 млн",
  foundation: "1975",
  history: "Бывшая голландская колония.",
  economy: "Золото и бокситы.",
  facts: "Самая маленькая страна континента.",
  images: []
},

french_guiana: {
  name: "Французская Гвиана",
  flag: "https://flagcdn.com/w640/gf.png",
  capital: "Кайенна",
  population: "0.3 млн",
  foundation: "Франция",
  history: "Заморский регион Франции.",
  economy: "Космический центр (Куру).",
  facts: "Европа в Южной Америке.",
  images: []
}

} 

