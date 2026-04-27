const countries = {

germany: {
  name: "Германия",
  flag: "https://flagcdn.com/w640/de.png",
  capital: "Берлин",
  population: "83 млн",
  foundation: "1871 — объединение Германии",
  history: "Германия прошла войны, разделение и объединение в 1990 году.",
  economy: "Сильная промышленная экономика.",
  facts: "BMW, Mercedes, Volkswagen.",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/6/6d/Berlin_Brandenburg_Gate.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Neuschwanstein_Castle.jpg"
  ]
},

france: {
  name: "Франция",
  flag: "https://flagcdn.com/w640/fr.png",
  capital: "Париж",
  population: "67 млн",
  foundation: "843 — образование Франции",
  history: "Французская революция изменила Европу.",
  economy: "Туризм, мода, сельское хозяйство.",
  facts: "Самая туристическая страна мира.",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6d/Louvre_Museum_Wikimedia_Commons.jpg"
  ]
},

italy: {
  name: "Италия",
  flag: "https://flagcdn.com/w640/it.png",
  capital: "Рим",
  population: "60 млн",
  foundation: "1861 — объединение Италии",
  history: "Римская империя — древняя цивилизация.",
  economy: "Мода, авто, туризм.",
  facts: "Пицца и паста.",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Colosseum_in_Rome.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5f/Leaning_Tower_of_Pisa.jpg"
  ]
},

spain: {
  name: "Испания",
  flag: "https://flagcdn.com/w640/es.png",
  capital: "Мадрид",
  population: "47 млн",
  foundation: "1469 — объединение королевств",
  history: "1492 — открытие Америки",
  economy: "Туризм и сельское хозяйство",
  facts: "Футбол и фламенко",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Sagrada_Familia_01.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/Alhambra_of_Granada.jpg"
  ]
},

uk: {
  name: "Великобритания",
  flag: "https://flagcdn.com/w640/gb.png",
  capital: "Лондон",
  population: "67 млн",
  foundation: "1707 — объединение",
  history: "Британская империя и индустриальная революция.",
  economy: "Финансы и услуги.",
  facts: "Лондон — мировой центр.",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/c/cd/London_Montage_L.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tower_Bridge_London.jpg"
  ]
},

poland: {
  name: "Польша",
  flag: "https://flagcdn.com/w640/pl.png",
  capital: "Варшава",
  population: "38 млн",
  foundation: "966 — крещение Польши",
  history: "Войны и восстановление страны.",
  economy: "Развивающаяся экономика.",
  facts: "Сильная культура и история.",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/1/12/Warsaw_Old_Town.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/12/Wawel_Castle_Krakow.jpg"
  ]
},

netherlands: {
  name: "Нидерланды",
  flag: "https://flagcdn.com/w640/nl.png",
  capital: "Амстердам",
  population: "17 млн",
  foundation: "1581 — независимость",
  history: "Морская торговая держава.",
  economy: "Торговля и логистика.",
  facts: "Каналы и велосипеды.",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/6/6e/Amsterdam_Canal.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6d/Kinderdijk_Windmills.jpg"
  ]
},

belgium: {
  name: "Бельгия",
  flag: "https://flagcdn.com/w640/be.png",
  capital: "Брюссель",
  population: "11 млн",
  foundation: "1830 — независимость",
  history: "Центр Европейского союза.",
  economy: "ЕС, шоколад, финансы.",
  facts: "Штаб-квартира ЕС.",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/6/6f/Grand_Place_Brussels.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1a/Atomium_Brussels.jpg"
  ]
},

switzerland: {
  name: "Швейцария",
  flag: "https://flagcdn.com/w640/ch.png",
  capital: "Берн",
  population: "8 млн",
  foundation: "1291 — союз кантонов",
  history: "Нейтральная страна Европы.",
  economy: "Банки и финансы.",
  facts: "Горы и шоколад.",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/a/a3/Matterhorn.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4f/Lucerne_Lake.jpg"
  ]
},

austria: {
  name: "Австрия",
  flag: "https://flagcdn.com/w640/at.png",
  capital: "Вена",
  population: "9 млн",
  foundation: "1156 — государство",
  history: "Империя Габсбургов.",
  economy: "Туризм и культура.",
  facts: "Музыкальная столица.",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/6/6c/Vienna_Skyline.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4d/Sch%C3%B6nbrunn_Palace.jpg"
  ]
},

sweden: {
  name: "Швеция",
  flag: "https://flagcdn.com/w640/se.png",
  capital: "Стокгольм",
  population: "10 млн",
  foundation: "1523 — независимость",
  history: "Северная держава Европы.",
  economy: "Технологии и инновации.",
  facts: "IKEA и Volvo.",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/5/5a/Stockholm_old_town.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Vasa_museum.jpg"
  ]
},

norway: {
  name: "Норвегия",
  flag: "https://flagcdn.com/w640/no.png",
  capital: "Осло",
  population: "5 млн",
  foundation: "872 — объединение",
  history: "Страна викингов.",
  economy: "Нефть и газ.",
  facts: "Фьорды.",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/9/9f/Norwegian_fjord.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bergen_Bryggen.jpg"
  ]
},

finland: {
  name: "Финляндия",
  flag: "https://flagcdn.com/w640/fi.png",
  capital: "Хельсинки",
  population: "5.5 млн",
  foundation: "1917 — независимость",
  history: "Сложная история войн.",
  economy: "Образование и технологии.",
  facts: "Самая счастливая страна.",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/3/3a/Helsinki_Cathedral.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2e/Suomenlinna.jpg"
  ]
},

denmark: {
  name: "Дания",
  flag: "https://flagcdn.com/w640/dk.png",
  capital: "Копенгаген",
  population: "6 млн",
  foundation: "10 век",
  history: "Викинги.",
  economy: "Социальная модель.",
  facts: "Высокий уровень жизни.",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/0/0c/Nyhavn_Copenhagen.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6b/Tivoli_Copenhagen.jpg"
  ]
},

czech: {
  name: "Чехия",
  flag: "https://flagcdn.com/w640/cz.png",
  capital: "Прага",
  population: "10 млн",
  foundation: "1993 — Чехия",
  history: "Чехословакия.",
  economy: "Промышленность.",
  facts: "Пиво.",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Prague_Castle.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2e/Charles_Bridge_Prague.jpg"
  ]
},

hungary: {
  name: "Венгрия",
  flag: "https://flagcdn.com/w640/hu.png",
  capital: "Будапешт",
  population: "9 млн",
  foundation: "1000 — королевство",
  history: "Империи.",
  economy: "Туризм.",
  facts: "Красивый город.",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/0/0f/Budapest_Parliament.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/7d/Buda_Castle.jpg"
  ]
},

romania: {
  name: "Румыния",
  flag: "https://flagcdn.com/w640/ro.png",
  capital: "Бухарест",
  population: "19 млн",
  foundation: "1859 — объединение",
  history: "Социализм и переход.",
  economy: "Развивается.",
  facts: "Дракула.",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/Bran_Castle.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/3c/Palace_of_the_Parliament_Bucharest.jpg"
  ]
},

greece: {
  name: "Греция",
  flag: "https://flagcdn.com/w640/gr.png",
  capital: "Афины",
  population: "10 млн",
  foundation: "1830 — независимость",
  history: "Древняя цивилизация.",
  economy: "Туризм.",
  facts: "Родина демократии.",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/d/d4/Parthenon_from_west.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5a/Santorini_Oia.jpg"
  ]
}

};