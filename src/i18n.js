const t = {
  ET: {
    // Header
    headerTitle: "Proovitöö",
    accessibility: "Ligipääsetavus",
    accessibilityUrl: "https://www.stat.ee/et/ligipaasetavus",

    // Welcome screen
    welcomeTitle: "Eesti Viktoriin",
    welcomeDesc: (n) =>
      `Testi oma teadmisi Eesti kohta! Viktoriin koosneb ${n} küsimusest ning iga küsimuse juures saad kohese tagasiside.`,
    welcomeRule1: "✦ Vali iga küsimuse juures üks vastus",
    welcomeRule2: "✦ Saad kohese tagasiside iga vastuse kohta",
    welcomeRule3: "✦ Lõpus näed oma tulemust koos kokkuvõttega",
    welcomeBtn: "Alusta viktoriin",

    // Quiz screen
    question: "Küsimus",
    score: "Skoor",
    feedbackCorrect: "✔ Õige vastus! Tubli!",
    feedbackWrong: (correct) => `✘ Vale vastus. Õige oli: ${correct}`,
    nextBtn: "Järgmine küsimus",
    finishBtn: "Vaata tulemused",

    // Results screen
    resultsTitle: "Viktoriin lõppenud!",
    msg100: "Suurepärane! Kõik vastused õiged, Tubli!",
    msg80: "Väga hea tulemus!",
    msg60: "Hea töö!",
    msg40: "Hea katse!",
    msg0: "Ära anna alla!",
    tableQuestion: "Küsimus",
    tableAnswer: "Sinu vastus",
    tableResult: "Tulemus",
    correct: "✔ Õige",
    wrong: "✘ Vale",
    restartBtn: "Proovi uuesti",

    // Footer
    footerContacts: "Kontaktid",
    footerQuick: "Leia kiirelt",
    footerSitemap: "Sisukaart",
    footerSitemapUrl: "https://brand.stat.ee/?content=sitemap&lang=et",
    footerPrivacy: "Andmekaitse",
    footerPrivacyLabel: "Andmekaitse",
    footerPrivacyUrl: "https://www.stat.ee/et/statistikaamet/andmekaitse-ja-privaatsuspoliitika",
    footerCookies: "Küpsiste sätted",
  },

  EN: {
    // Header
    headerTitle: "Internship project",
    accessibility: "Accessibility",
    accessibilityUrl: "https://www.stat.ee/en/accessibility",

    // Welcome screen
    welcomeTitle: "Estonian Quiz",
    welcomeDesc: (n) =>
      `Test your knowledge about Estonia! The quiz consists of ${n} questions and you get instant feedback after each one.`,
    welcomeRule1: "✦ Choose one answer per question",
    welcomeRule2: "✦ Get instant feedback on every answer",
    welcomeRule3: "✦ See your final score and summary at the end",
    welcomeBtn: "Start quiz",

    // Quiz screen
    question: "Question",
    score: "Score",
    feedbackCorrect: "✔ Correct! Well done!",
    feedbackWrong: (correct) => `✘ Wrong answer. The correct answer was: ${correct}`,
    nextBtn: "Next question",
    finishBtn: "See results",

    // Results screen
    resultsTitle: "Quiz finished!",
    msg100: "Perfect score! Excellent work!",
    msg80: "Very good result!",
    msg60: "Good job!",
    msg40: "Nice try!",
    msg0: "Don't give up!",
    tableQuestion: "Question",
    tableAnswer: "Your answer",
    tableResult: "Result",
    correct: "✔ Correct",
    wrong: "✘ Wrong",
    restartBtn: "Try again",

    // Footer
    footerContacts: "Contacts",
    footerQuick: "Quick links",
    footerSitemap: "Sitemap",
    footerSitemapUrl: "https://brand.stat.ee/?content=sitemap&lang=en",
    footerPrivacy: "Data protection",
    footerPrivacyLabel: "Privacy policy",
    footerPrivacyUrl: "https://www.stat.ee/en/statistics-estonia/data-protection-privacy-policy",
    footerCookies: "Cookie settings",
  },
};

export default t;