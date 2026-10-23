import type { Dictionary } from "../types";

/**
 * Albanian (shqip). Same shape as the English dictionary; TypeScript refuses to build if anything is missing.
 * Terminology: "Platforma Greecon" (the Greecon Platform), "bujqësi inteligjente" (smart agriculture),
 * "ujëra të ndotura" (wastewater), "agrovoltaik" (agrivoltaic). Brand and product names are not translated.
 */
export const sq: Dictionary = {
  meta: {
    home: {
      title: "Greecon — Energji e rinovueshme, bujqësi dhe sisteme uji",
      ogTitle: "Greecon — Duke ndërtuar inteligjencë të qëndrueshme për energjinë, ujin dhe bujqësinë",
      description:
        "Greecon bashkon energjinë e rinovueshme, bujqësinë inteligjente dhe menaxhimin e ujit në një platformë IoT dhe SCADA. Me qendër në Shijak, Shqipëri.",
      crumb: "Kryefaqja"
    },
    technology: {
      title: "Teknologjia dhe procesi — Platforma IoT dhe SCADA | Greecon",
      description:
        "Si i instalon Greecon sistemet inteligjente, i lidh me IoT, analizon të dhënat në një platformë SCADA dhe automatizon energjinë, bujqësinë dhe ujin.",
      crumb: "Teknologjia dhe procesi"
    },
    energy: {
      title: "Energji diellore dhe sisteme agrovoltaike | Greecon",
      description:
        "Greecon projekton dhe ofron sisteme diellore, hibride dhe agrovoltaike me ruajtje me bateri — të lidhura, të monitoruara dhe të optimizuara në kohë reale.",
      crumb: "Energjia"
    },
    agriculture: {
      title: "Sisteme bujqësie inteligjente me sensorë IoT | Greecon",
      description:
        "Sistemet e bujqësisë inteligjente të Greecon përdorin sensorë IoT për të monitoruar tokën, ujin dhe motin për një brez të ri fermash të lidhura e efikase.",
      crumb: "Bujqësia"
    },
    water: {
      title: "Trajtimi i ujërave të ndotura dhe ripërdorimi i ujit | Greecon",
      description:
        "Greecon projekton sisteme të automatizuara për trajtimin e ujërave të ndotura dhe ripërdorimin e ujit, për qytete e industri që riciklojnë ujin.",
      crumb: "Uji"
    },
    gaia: {
      title: "GAIA Tech — Inteligjenca brenda Platformës Greecon",
      description:
        "GAIA Tech është inteligjenca pronësore brenda Platformës Greecon — sistemi qendror që e kthen infrastrukturën e lidhur në një ekosistem të koordinuar.",
      crumb: "GAIA Tech"
    },
    terms: {
      title: "Kushtet e shërbimit — Greecon",
      description:
        "Kushtet që rregullojnë përdorimin e faqes së internetit të Greecon dhe të informacionit të publikuar në të.",
      crumb: "Kushtet e shërbimit"
    },
    privacy: {
      title: "Njoftimi i privatësisë — Greecon",
      description: "Si i mbledh, i përdor dhe i mbron Greecon të dhënat personale në greecon.earth.",
      crumb: "Njoftimi i privatësisë"
    }
  },

  site: {
    tagline: "Duke ndërtuar inteligjencë të qëndrueshme për energjinë, ujin dhe bujqësinë",
    keywords: [
      "Greecon",
      "energji e rinovueshme Shqipëri",
      "bujqësi inteligjente",
      "menaxhim i ujit",
      "trajtimi dhe ripërdorimi i ujërave të ndotura",
      "GAIA Tech",
      "platformë SCADA",
      "agrovoltaikë",
      "IoT dhe qëndrueshmëri"
    ],
    platformDescription:
      "Një sistem i unifikuar i bazuar në SCADA që lidh të gjitha pajisjet, sensorët dhe të dhënat në një panel inteligjent për të monitoruar, automatizuar dhe optimizuar operacionet në kohë reale.",
    processName: "Procesi i Greecon",
    services: {
      energy: {
        name: "Sisteme të energjisë së rinovueshme",
        serviceType: "Sisteme energjetike diellore, hibride dhe agrovoltaike"
      },
      agriculture: {
        name: "Sisteme të bujqësisë inteligjente",
        serviceType: "Monitorim dhe automatizim bujqësor i bazuar në IoT"
      },
      water: {
        name: "Sisteme të trajtimit të ujërave të ndotura dhe ripërdorimit të ujit",
        serviceType: "Trajtim i automatizuar i ujërave të ndotura dhe ripërdorim i ujit"
      }
    }
  },

  header: {
    menu: "Menuja",
    close: "Mbyll",
    goHome: "Kryefaqja e Greecon",
    mainNav: "Kryesore",
    platformCta: "Hap Platformën →",
    call: "Telefono",
    email: "Email",
    blog: "Blogu",
    links: {
      home: "Kryefaqja",
      energy: "Energjia",
      agriculture: "Bujqësia",
      water: "Uji",
      technology: "Teknologjia dhe procesi",
      gaia: "GAIA Tech"
    },
    language: "Gjuha"
  },

  footer: {
    explore: "Eksploro",
    legal: "Ligjore",
    follow: "Na ndiqni",
    language: "Gjuha",
    terms: "Kushtet e shërbimit",
    privacy: "Njoftimi i privatësisë",
    blog: "Blogu",
    socialLabel: "Rrjetet sociale",
    rights: "© 2026 Greecon Sh.p.k. (NUIS/NIPT M61525505A) — Të gjitha të drejtat e rezervuara.",
    links: {
      energy: "Energjia",
      agriculture: "Bujqësia",
      water: "Uji",
      technology: "Teknologjia dhe procesi",
      gaia: "GAIA Tech"
    }
  },

  contact: {
    heading: "Kontakt",
    tagline: "Ta ndërtojmë të ardhmen, në mënyrë të qëndrueshme.",
    copy: "Qoftë biznes, bashki apo investitor, jemi këtu t’ju ndihmojmë të projektoni dhe zbatoni sisteme më të zgjuara e më të gjelbra. Na kontaktoni për të eksploruar bashkëpunimin, partneritetin ose mundësitë e projekteve me Greecon.",
    email: "Email:",
    phone: "Telefon:",
    location: "Vendndodhja:",
    locationValue: "Shijak, Durrës, Shqipëri"
  },

  blog: {
    siteName: "Blogu i Greecon",
    description:
      "Histori, njohuri dhe projekte nga Greecon — energji e rinovueshme, bujqësi e zgjuar dhe menaxhim i ujit me IoT dhe SCADA.",
    heading: "Nga blogu",
    allArticles: "Të gjithë artikujt →",
    readArticle: "Lexo artikullin →",
    englishOnly: "Këta artikuj janë në anglisht.",
    // The same words the blog itself uses for its sectors.
    categories: { Platform: "Platformë", Energy: "Energji", Agriculture: "Bujqësi", Water: "Ujë" },
    moreOn: {
      energy: "Më shumë për energjinë në Blogun e Greecon →",
      agriculture: "Më shumë për bujqësinë në Blogun e Greecon →",
      water: "Më shumë për ujin në Blogun e Greecon →",
      platform: "Më shumë për platformën në Blogun e Greecon →",
      technology: "Më shumë për teknologjinë dhe procesin në Blogun e Greecon →"
    }
  },

  alt: {
    gaiaMark: "Simboli i GAIA Tech",
    platformScreenshot:
      "Paneli i përgjithshëm i Platformës Greecon, që tregon matje të drejtpërdrejta për energjinë diellore, bateritë, ujin dhe tokën në vendet e lidhura",
    platformDiagram:
      "Platforma Greecon që automatizon energjinë e rinovueshme, menaxhimin e ujit dhe bujqësinë inteligjente"
  },

  aria: {
    openPlatform: "Hap Platformën Greecon në app.greecon.earth",
    backHome: "Kthehu në kryefaqe",
    greeconHome: "Kryefaqja e Greecon",
    mainSections: "Seksionet kryesore"
  },

  home: {
    hero: [
      <>
        Dikur, bota funksiononte me instinkt — fermerët lexonin qiellin për të parashikuar shiun, komunitetet
        ndërtoheshin pranë lumenjve dhe energjia vinte vetëm nga ajo që natyra jepte lirisht. Me kalimin e kohës,
        njerëzimi përparoi, por në garën tonë për progres filluam të harronim ekuilibrin që dikur na lidhte me Tokën.
        Fushat u bënë më mekanike, qytetet më të ndotura dhe hendeku mes njerëzve dhe natyrës u zgjerua.
      </>,
      <>
        Greecon lindi për ta rikthyer këtë ekuilibër — për ta lidhur sërish teknologjinë me mençurinë e natyrës. Ne
        imagjinuam një botë ku inovacioni i shërben qëndrueshmërisë dhe jo e kundërta. Sot, Greecon bashkon energjinë
        e rinovueshme, bujqësinë inteligjente dhe menaxhimin e ujit në një ekosistem të vetëm inteligjent, të
        mundësuar nga teknologjitë IoT dhe SCADA. Përmes automatizimit, monitorimit në kohë reale dhe njohurive të
        bazuara te të dhënat, ndihmojmë komunitetet, fermerët dhe bizneset të lulëzojnë duke ruajtur burimet e
        planetit.
      </>,
      <>
        Misioni ynë është i thjeshtë, por i fuqishëm: ta kthejmë qëndrueshmërinë në një sistem — të zgjuar, të
        aksesueshëm dhe të dobishëm për të gjithë. Greecon është më shumë se një kompani; është një lëvizje për të
        rindërtuar harmoninë mes progresit dhe planetit.
      </>
    ],
    cards: {
      energy: {
        title: "Energjia",
        text: "Krijojmë sisteme të energjisë së rinovueshme që kombinojnë zgjidhje diellore, hibride dhe agrovoltaike. Çdo sistem është i lidhur, i monitoruar dhe i optimizuar përmes të dhënave në kohë reale — duke e kthyer energjinë e pastër në energji inteligjente."
      },
      agriculture: {
        title: "Bujqësia",
        text: "Sistemet tona të bujqësisë inteligjente përdorin sensorë IoT për të monitoruar tokën, ujin dhe kushtet e motit. Fermerët marrin njohuri të qarta që ndihmojnë në reduktimin e humbjeve, përmirësimin e rendimentit dhe kursimin e burimeve — duke ndërtuar një brez të ri fermash të lidhura dhe efikase."
      },
      water: {
        title: "Uji",
        text: "Greecon projekton sisteme të automatizuara për trajtimin e ujërave të ndotura dhe ripërdorimin e ujit. Teknologjia jonë ndihmon qytetet dhe industritë të riciklojnë ujin dhe të reduktojnë gjurmën e tyre mjedisore."
      }
    },
    platform: {
      heading: "Platforma",
      body: (
        <>
          Në <strong>qendër</strong> të gjithçkaje që ndërtojmë është Platforma Greecon — një sistem i unifikuar i
          bazuar në SCADA që lidh të gjitha pajisjet, sensorët dhe të dhënat në një panel të vetëm inteligjent. Ajo
          i ndihmon partnerët tanë të monitorojnë, automatizojnë dhe optimizojnë operacionet e tyre në kohë reale.
        </>
      ),
      open: "Hap Platformën →",
      seeTechnology: "Shiko teknologjinë dhe procesin →"
    },
    impact: {
      heading: "Ndikimi",
      text: "Në Greecon, suksesin e matim përmes ndikimit real dhe të prekshëm — jo vetëm përmes numrave. Sistemet tona ndihmojnë në reduktimin e emetimeve të karbonit, riciklimin e ujit dhe rritjen e produktivitetit bujqësor, duke forcuar njëkohësisht ekonomitë lokale. Çdo projekt kontribuon në krijimin e qyteteve më të pastra, fermave më të zgjuara dhe industrive më të qëndrueshme. Duke kombinuar automatizimin, IoT-në dhe inteligjencën e të dhënave, i fuqizojmë partnerët tanë të arrijnë rezultate të matshme mjedisore dhe financiare. Ndikimi i teknologjisë Greecon shkon përtej efikasitetit — bëhet fjalë për ndërtimin e qëndrueshmërisë, përgjegjësisë dhe regjenerimit për brezat që do të vijnë."
    },
    partnerships: {
      heading: "Partneritetet",
      text: "Besojmë se bashkëpunimi nxit inovacionin. Greecon punon së bashku me liderë të energjisë së rinovueshme, telekomunikacionit, IoT-së dhe qëndrueshmërisë për të bashkëkrijuar zgjidhje që sjellin ekspertizë globale për sfidat lokale. Përmes këtyre partneriteteve, zhvillojmë projekte të shkallëzueshme që përshpejtojnë tranzicionin e Shqipërisë dhe të rajonit drejt një ekonomie qarkulluese dhe të gjelbër. Qoftë duke integruar sisteme të rinovueshme, duke optimizuar bujqësinë apo duke përmirësuar infrastrukturën e ujit, rrjeti ynë i partnerëve na ndihmon të ofrojmë rezultate më të zgjuara, më të shpejta dhe më të qëndrueshme për të ardhmen."
    },
    future: {
      heading: "E ardhmja është e integruar",
      text: "Vizioni ynë është i qartë — një botë ku çdo sistem, natyror apo dixhital, funksionon në harmoni. Greecon qëndron në kryqëzimin e teknologjisë dhe ekologjisë, duke krijuar platforma që bashkojnë të dhënat, automatizimin dhe qëndrueshmërinë në një kuadër të vetëm inteligjent. Integrimin e shohim si themelin e progresit: energjia që mundëson prodhimin e ushqimit, uji që mbështet jetën dhe teknologjia që lidh gjithçka. Duke bashkuar këto sisteme, e shndërrojmë qëndrueshmërinë nga një ide në një realitet të gjallë — që mbështet njerëzit dhe planetin."
    }
  },

  technology: {
    title: "Teknologjia dhe procesi",
    intro:
      "Në Greecon, projektojmë teknologji që punon me natyrën, jo kundër saj. Sistemet tona ndërtohen mbi tri shtylla — integrim, automatizim dhe inteligjencë — duke kombinuar pajisjet, të dhënat dhe kuptimin njerëzor për të krijuar ndikim të qëndrueshëm në energji, bujqësi dhe ujë.",
    open: "Hap Platformën →",
    steps: [
      {
        title: "Instalojmë sisteme inteligjente",
        body: "Gjithçka fillon në terren. Projektojmë dhe instalojmë sisteme të energjisë së rinovueshme, bujqësisë inteligjente dhe menaxhimit të ujit, të përshtatura sipas kushteve lokale. Çdo sistem është modular, efikas dhe gati për të komunikuar — nga panelet diellore te sensorët e ujitjes dhe njësitë e trajtimit të ujit. Qasja jonë siguron fleksibilitet dhe shkallëzueshmëri, duke u lejuar projekteve të rriten ndërsa nevojat evoluojnë."
      },
      {
        title: "Lidhim gjithçka përmes IoT",
        body: "Pasi instalohet, çdo komponent pajiset me sensorë dhe pajisje IoT që mbledhin vazhdimisht të dhëna nga bota reale. Këto pajisje formojnë sistemin nervor të Greecon — duke transmetuar në kohë reale informacion mbi prodhimin e energjisë, cilësinë e tokës, nivelet e ujit dhe performancën e sistemit. Duke lidhur çdo pjesë të infrastrukturës, krijojmë një rrjet të gjallë sistemesh inteligjente që flasin të njëjtën gjuhë dixhitale."
      },
      {
        title: "Mbledhim dhe analizojmë të dhëna në kohë reale",
        body: "Të dhënat janë themeli i efikasitetit të qëndrueshëm. Platforma jonë e bazuar në SCADA mbledh dhe vizualizon të gjitha të dhënat e sensorëve në një panel qendror. Përdoruesit mund të monitorojnë operacionet, të zbulojnë joefikasitetet dhe të marrin vendime më të shpejta e më të zgjuara. Përmes analizave parashikuese, identifikojmë tendencat përpara se të bëhen probleme — duke optimizuar performancën dhe duke ulur kostot dhe përdorimin e burimeve."
      },
      {
        title: "Automatizojmë dhe optimizojmë",
        body: "Fuqia e vërtetë e Greecon qëndron te automatizimi. Platforma jonë përdor logjikë të avancuar kontrolli për t’i rregulluar sistemet në mënyrë dinamike — nga balancimi i rrjedhës së energjisë te përshtatja e saktë e cikleve të ujitjes ose të trajtimit të ujit. Çdo proces është projektuar të vetërregullohet dhe të përshtatet, duke siguruar efikasitet maksimal dhe ndikim minimal mjedisor.",
        emphasis: "Rezultati: sisteme që jo vetëm funksionojnë — por mendojnë."
      },
      {
        title: "Shkallëzim dhe qëndrueshmëri",
        body: "Kur një sistem provon efektivitetin e tij, shkallëzimi është i thjeshtë. Arkitektura e Greecon është ndërtuar për ndërveprim — module, vende ose rajone të reja mund të shtohen pa ndërprerje. Mbështesim evolucionin e vazhdueshëm përmes përditësimeve, monitorimit në distancë dhe bashkëpunimit në terren me ekspertë vendas. Çdo lidhje e re e forcon ekosistemin, duke na afruar me një rrjet të gjelbër vetëqëndrueshëm në të gjithë Shqipërinë dhe më gjerë."
      },
      {
        title: "Teknologjia pas gjithçkaje",
        body: "Në qendër të Greecon është platforma jonë e unifikuar SCADA, një shtresë inteligjente që integron të dhënat, automatizimin dhe analizat. Ajo mundëson monitorim në kohë reale, mirëmbajtje parashikuese dhe optimizim të bazuar në cloud — të gjitha të përshtatura sipas mjedisit të çdo klienti. Platforma është ndërtuar të rritet bashkë me standardet globale të qëndrueshmërisë, duke mbështetur gjithçka, nga gjurmimi i energjisë së rinovueshme te bujqësia precize dhe analizat e ujërave të ndotura."
      }
    ],
    philosophy: {
      title: "Filozofia jonë",
      lines: [
        "Besojmë se qëndrueshmëria nuk ka të bëjë vetëm me reduktimin e dëmit — ka të bëjë me krijimin e sistemeve inteligjente që rikthejnë ekuilibrin.",
        "Çdo vendim në Greecon udhëhiqet nga një parim: integrimi sjell harmoni.",
        "Duke bashkuar teknologjinë dhe ekologjinë, e shndërrojmë qëndrueshmërinë nga një qëllim në një proces — efikas, inteligjent dhe të gjallë."
      ]
    },
    poweredBy: "Mundësuar nga GAIA Tech →"
  },

  energy: {
    title: "Energjia",
    subtitle: "Duke fuqizuar të ardhmen me logjikën e natyrës",
    intro:
      "Krijojmë sisteme të energjisë së rinovueshme që kombinojnë zgjidhje diellore, hibride dhe agrovoltaike. Çdo sistem është i lidhur, i monitoruar dhe i optimizuar përmes të dhënave në kohë reale — duke e kthyer energjinë e pastër në energji inteligjente.",
    sections: [
      {
        title: "Sisteme të energjisë së rinovueshme",
        body: (
          <>
            <p>
              Greecon projekton dhe ofron sisteme fotovoltaike diellore nga 5 kWp deri në mbi 5 MW, të ndërtuara me
              panele me efikasitet të lartë dhe inverterë me standard të BE-së. Zgjidhjet tona janë projektuar për
              qëndrueshmëri, siguri dhe performancë afatgjatë. Çdo instalim optimizohet për prodhim maksimal sipas
              vendndodhjes, modeleve të konsumit dhe objektivave operacionale. Zhvillojmë gjithashtu sisteme
              agrovoltaike, duke vendosur panelet diellore mbi kulturat bujqësore për të prodhuar energji të pastër
              duke mbrojtur produktivitetin bujqësor.
            </p>
            <p className="emphasis">Prodhimi i energjisë dhe bujqësia bashkëjetojnë — në mënyrë inteligjente.</p>
          </>
        )
      },
      {
        title: "Ruajtje inteligjente e energjisë",
        body: (
          <>
            <p>
              Energjia nuk duhet vetëm të prodhohet — ajo duhet të menaxhohet. Greecon integron sisteme ruajtjeje me
              bateri LiFePO4, të njohura për jetëgjatësinë, sigurinë dhe përgjegjësinë mjedisore.
            </p>
            <p>Këto sisteme ruajtjeje sigurojnë:</p>
            <ul>
              <li>Furnizim të qëndrueshëm me energji</li>
              <li>Reduktimin e pikave të konsumit dhe balancimin e ngarkesës</li>
              <li>Varësi më të ulët nga rrjete të paqëndrueshme</li>
              <li>Autonomi më të madhe energjetike</li>
            </ul>
            <p className="emphasis">Energjia bëhet e besueshme, e kontrolluar dhe e optimizuar.</p>
          </>
        )
      },
      {
        title: "Menaxhim inteligjent i energjisë",
        body: (
          <>
            <p>
              Në qendër të çdo instalimi është Platforma Greecon — një sistem kontrolli që lidh panelet diellore,
              bateritë, pompat dhe infrastrukturën në një mjedis të vetëm dixhital të unifikuar.
            </p>
            <p>Platforma ofron:</p>
            <ul>
              <li>Monitorim në kohë reale të prodhimit dhe konsumit</li>
              <li>Gjendjen e baterive dhe parashikime</li>
              <li>Optimizim të automatizuar të rrjedhës së energjisë</li>
              <li>Analiza të performancës dhe raportim</li>
              <li>Gjurmim të kthimit të investimit (ROI) dhe të qëndrueshmërisë</li>
            </ul>
            <p className="emphasis">
              Energjia nuk është më statike. Ajo bëhet dinamike — duke u përshtatur vazhdimisht me kërkesën, motin dhe
              kushtet operacionale.
            </p>
          </>
        )
      },
      {
        title: "Automatizim dhe optimizim",
        body: (
          <>
            <p>
              Sistemet Greecon funksionojnë në mënyrë autonome. Përmes logjikës inteligjente të kontrollit, platforma
              balancon prodhimin dhe përdorimin, rregullon rrjedhën e energjisë mes sistemeve dhe mbështet proceset e
              automatizimit industrial. Kjo ul kostot operacionale, rrit jetëgjatësinë e sistemit dhe siguron përdorim
              efikas të burimeve.
            </p>
            <p className="emphasis">Sistemi nuk monitoron vetëm — ai vepron.</p>
          </>
        )
      },
      {
        title: "Projektuar për qëndrueshmëri",
        body: (
          <>
            <p>
              Divizioni ynë i energjisë së rinovueshme mbështet komponentë me certifikim ekologjik, teknologji me
              efikasitet të lartë dhe infrastrukturë të optimizuar për burimet.
            </p>
            <p>I orientojmë klientët drejt operacioneve më të pastra përmes:</p>
            <ul>
              <li>Emetimeve të reduktuara</li>
              <li>Pavarësisë së përmirësuar energjetike</li>
              <li>Kostove më të ulëta operative</li>
              <li>Gjurmimit afatgjatë të ndikimit mjedisor</li>
            </ul>
            <p className="emphasis">Energjia bëhet pjesë e një ekosistemi regjenerues — jo thjesht një shërbim komunal.</p>
          </>
        )
      }
    ],
    philosophy: {
      title: "Filozofia e energjisë së Greecon",
      lines: [
        "Energjia nuk duhet të shpërdorohet. Nuk duhet të jetë e shkëputur. Nuk duhet të jetë e paparashikueshme. Energjia duhet të jetë inteligjente.",
        "Greecon integron prodhimin e rinovueshëm, ruajtjen, automatizimin dhe analizat në një sistem të vetëm pa ndërprerje — duke e lidhur sërish infrastrukturën moderne me logjikën e natyrës.",
        "Ne nuk instalojmë thjesht panele diellore. Ne projektojmë ekosisteme energjetike."
      ]
    }
  },

  agriculture: {
    title: "Bujqësia",
    subtitle: "Inteligjencë e rrënjosur në tokë",
    intro:
      "Sistemet tona të bujqësisë inteligjente përdorin sensorë IoT për të monitoruar tokën, ujin dhe kushtet e motit. Fermerët marrin njohuri të qarta që ndihmojnë në reduktimin e humbjeve, përmirësimin e rendimentit dhe kursimin e burimeve — duke ndërtuar një brez të ri fermash të lidhura dhe efikase.",
    sections: [
      {
        title: "Sisteme inteligjente monitorimi",
        body: (
          <>
            <p>Greecon instalon sensorë të avancuar IoT që masin:</p>
            <ul>
              <li>Lagështinë e tokës</li>
              <li>Temperaturën e tokës</li>
              <li>Nivelet e EC dhe pH</li>
              <li>Intensitetin e dritës</li>
              <li>Nivelet e ujit</li>
              <li>Kushtet klimatike</li>
            </ul>
            <p>Çdo variabël gjurmohet vazhdimisht, duke krijuar një profil dixhital të gjallë të tokës.</p>
            <p className="emphasis">Rezultati është saktësi — jo hamendje.</p>
          </>
        )
      },
      {
        title: "Ujitje inteligjente",
        body: (
          <>
            <p>
              Uji jepet sipas nevojave reale të bimëve dhe të dhënave mjedisore në kohë reale. Sistemet tona
              inteligjente të ujitjes kombinojnë të dhënat e tokës me parashikimin e motit për të optimizuar ciklet e
              ujitjes. Kjo ul përdorimin e ujit, ul kostot operacionale dhe rrit rendimentin e kulturave.
            </p>
            <p className="emphasis">Çdo pikë bëhet e matshme. Çdo cikël bëhet i qëllimshëm.</p>
          </>
        )
      },
      {
        title: "Serra inteligjente",
        body: (
          <>
            <p>Greecon integron sisteme të automatizuara kontrolli për serrat, që përfshijnë:</p>
            <ul>
              <li>Menaxhimin e ventilimit</li>
              <li>Kontrollin e temperaturës dhe lagështisë</li>
              <li>Optimizimin e CO₂</li>
              <li>Sisteme inteligjente ndriçimi</li>
            </ul>
            <p>
              Serrat evoluojnë nga struktura statike në mjedise reaguese që përshtaten vazhdimisht me kërkesat e
              bimëve.
            </p>
            <p className="emphasis">
              Prodhimi bëhet i parashikueshëm. Kushtet bëhen të qëndrueshme. Efikasiteti rritet.
            </p>
          </>
        )
      },
      {
        title: "Fertigacion i automatizuar",
        body: (
          <>
            <p>
              Dhënia e lëndëve ushqyese automatizohet përmes sistemeve të fertigacionit që reagojnë drejtpërdrejt ndaj
              të dhënave të tokës. Kjo siguron:
            </p>
            <ul>
              <li>Humbje më të pakta plehrash</li>
              <li>Shëndet më të mirë të bimëve</li>
              <li>Kushte të ekuilibruara të tokës</li>
              <li>Produktivitet më të lartë bujqësor</li>
            </ul>
            <p className="emphasis">Ushqimi bëhet i saktë, jo i tepërt.</p>
          </>
        )
      },
      {
        title: "Hartëzim dixhital i fermës",
        body: (
          <>
            <p>
              Platforma Greecon mundëson hartëzimin dixhital të fushave, kulturave dhe zonave operacionale. Fermerët
              dhe operatorët mund të:
            </p>
            <ul>
              <li>Ndjekin aktivitetin bujqësor</li>
              <li>Monitorojnë performancën në të gjitha zonat</li>
              <li>Analizojnë të dhënat e prodhimit</li>
              <li>Optimizojnë shpërndarjen e burimeve</li>
            </ul>
            <p className="emphasis">I gjithë ferma bëhet e dukshme — në kohë reale.</p>
          </>
        )
      },
      {
        title: "Inteligjencë e integruar",
        body: (
          <>
            <p>
              Në qendër të sistemit qëndron <strong>Platforma Greecon</strong>. Të gjithë sensorët, sistemet e
              ujitjes, kontrollet e serrave dhe të dhënat mjedisore lidhen në një panel të vetëm të unifikuar.
              Platforma analizon tendencat, parashikon nevojat dhe automatizon vendimet.
            </p>
            <p className="emphasis">Bujqësia bëhet proaktive — jo reaktive.</p>
          </>
        )
      },
      {
        title: "Projektuar për rritje të qëndrueshme",
        body: (
          <>
            <p>Zgjidhjet bujqësore të Greecon janë ndërtuar për të:</p>
            <ul>
              <li>Ulur konsumin e ujit</li>
              <li>Ulur përdorimin e energjisë</li>
              <li>Rritur rendimentin për hektar</li>
              <li>Minimizuar ndikimin mjedisor</li>
              <li>Përmirësuar shëndetin afatgjatë të tokës</li>
            </ul>
            <p className="emphasis">Qëndrueshmëria bëhet operacionale — jo teorike.</p>
          </>
        )
      }
    ],
    philosophy: {
      title: "Filozofia bujqësore e Greecon",
      lines: [
        "Toka nuk ka nevojë për më shumë presion.",
        "Ajo ka nevojë për më shumë inteligjencë.",
        "Greecon integron të dhënat, automatizimin dhe logjikën ekologjike në një ekosistem të vetëm bujqësor të lidhur.",
        "Ne nuk e modernizojmë bujqësinë për kompleksitet. E modernizojmë për ekuilibër."
      ]
    }
  },

  water: {
    title: "Uji",
    subtitle: "Burimi i jetës, i menaxhuar me inteligjencë",
    intro:
      "Greecon projekton sisteme të automatizuara për trajtimin e ujërave të ndotura dhe ripërdorimin e ujit. Teknologjia jonë ndihmon qytetet dhe industritë të riciklojnë ujin dhe të reduktojnë gjurmën e tyre mjedisore.",
    sections: [
      {
        title: "Sisteme të ujit të pastër",
        body: (
          <>
            <p>Greecon zhvillon sisteme të integruara për:</p>
            <ul>
              <li>Monitorimin e nivelit të rezervuarëve</li>
              <li>Kontrollin e pompave</li>
              <li>Menaxhimin e presionit</li>
              <li>Gjurmimin e përdorimit të ujit</li>
            </ul>
            <p>
              Çdo komponent funksionon brenda një kuadri dixhital të lidhur, duke siguruar stabilitet, efikasitet dhe
              performancë të vazhdueshme.
            </p>
            <p className="emphasis">Uji bëhet i dukshëm. Rrjedha bëhet e kontrolluar. Humbjet minimizohen.</p>
          </>
        )
      },
      {
        title: "Trajtimi i ujërave të ndotura",
        body: (
          <>
            <p>
              Ujërat e ndotura nuk janë më një barrë — ato bëhen një burim. Greecon instalon njësi kompakte të trajtimit
              biologjik të kombinuara me filtrim të avancuar dhe sterilizim me rrezet UV.
            </p>
            <p>Uji i trajtuar mund të ripërdoret në mënyrë të sigurt për:</p>
            <ul>
              <li>Ujitje</li>
              <li>Aplikime teknike</li>
              <li>Nevoja operacionale jo të pijshme</li>
            </ul>
            <p className="emphasis">
              Kjo ul ndikimin mjedisor dhe ul ndjeshëm konsumin e ujit të ëmbël.
            </p>
          </>
        )
      },
      {
        title: "Sisteme riciklimi të ujit",
        body: (
          <>
            <p>
              Sistemet tona të riciklimit ulin përdorimin total të ujit me 20–50% përmes proceseve të automatizuara të
              filtrimit natyror dhe mekanik. Ciklet e ujit menaxhohen dixhitalisht, duke siguruar ripërdorim efikas pa
              cenuar sigurinë ose cilësinë.
            </p>
            <p className="emphasis">Qëndrueshmëria bëhet sistemike — jo e rastësishme.</p>
          </>
        )
      },
      {
        title: "Monitorim dhe automatizim në kohë reale",
        body: (
          <>
            <p>E gjithë infrastruktura e ujit lidhet me Platformën Greecon, e cila mundëson:</p>
            <ul>
              <li>Shikueshmëri në kohë reale të niveleve të ujit</li>
              <li>Matjen e cilësisë së ujit</li>
              <li>Zbulimin e rrjedhjeve</li>
              <li>Cikle të automatizuara pompimi</li>
              <li>Menaxhim në distancë të sistemit</li>
            </ul>
            <p>Platforma analizon vazhdimisht sjelljen dhe i rregullon operacionet automatikisht.</p>
            <p className="emphasis">Sistemet e ujit nuk reagojnë më vonë. Ato përgjigjen menjëherë.</p>
          </>
        )
      },
      {
        title: "Optimizim inteligjent i burimeve",
        body: (
          <>
            <p>Greecon integron teknologji miqësore me mjedisin si:</p>
            <ul>
              <li>Sterilizimin me UV pa kimikate</li>
              <li>Filtrimin biologjik</li>
              <li>Pompa me efikasitet të lartë</li>
              <li>Infrastrukturë të optimizuar për burimet</li>
            </ul>
            <p>Çdo instalim është projektuar të ulë kostot operacionale duke mbrojtur ekosistemet natyrore.</p>
            <p className="emphasis">Efikasiteti dhe përgjegjësia funksionojnë së bashku.</p>
          </>
        )
      },
      {
        title: "Ndërtuar për përdorim qarkullues të ujit",
        body: (
          <>
            <p>
              Qëllimi nuk është vetëm menaxhimi — është qarkullueshmëria. Duke kombinuar monitorimin, automatizimin dhe
              sistemet e ripërdorimit, Greecon i ndihmon bizneset, fermat dhe bashkitë të kalojnë drejt cikleve të
              mbyllura të ujit.
            </p>
            <p className="emphasis">Uji bëhet i rinovueshëm brenda vetë sistemit.</p>
          </>
        )
      }
    ],
    philosophy: {
      title: "Filozofia e ujit e Greecon",
      lines: [
        "Uji nuk është mall. Ai është vazhdimësi.",
        "Greecon integron inxhinierinë, automatizimin dhe logjikën ekologjike në ekosisteme inteligjente uji.",
        "Ne nuk e lëvizim vetëm ujin. Projektojmë sisteme që e respektojnë atë."
      ]
    }
  },

  gaia: {
    lede: "GAIA Tech është inteligjenca pronësore brenda Platformës Greecon. Është sistemi qendror që e kthen infrastrukturën e lidhur në një ekosistem të koordinuar, në mënyrë që energjia, uji dhe bujqësia të funksionojnë së bashku në vend që të jenë sisteme të ndara.",
    paragraphs: [
      <>
        <strong>E ndërtuar mbi një filozofi kontrolli ku siguria është e para,</strong> GAIA Tech ndjen vazhdimisht
        kushtet e botës reale, vlerëson cilësinë e të dhënave, modelon gjendjen e sistemit dhe ekzekuton automatizim të
        disiplinuar përmes një motori rregullash hierarkik. Çdo veprim ndjek prioritete të qarta, ku mbrojtja dhe
        stabiliteti vijnë përpara optimizimit.
      </>,
      <>
        GAIA Tech lidh pajisjet dhe sensorët përmes një <strong>shtrese të unifikuar integrimi</strong>, duke
        përkthyer pajisje dhe protokolle të ndryshme në një gjuhë të vetme të brendshme. Kjo e bën platformën elastike
        dhe të përshtatshme, sepse logjika e sistemit mbetet e qëndrueshme edhe kur ndryshojnë furnizuesit e pajisjeve
        ose konfigurimet e vendeve.
      </>,
      <>
        GAIA Tech funksionon si një <strong>arkitekturë hibride edge-dhe-cloud.</strong> Shtresa edge mundëson autonomi
        lokale, kontroll në kohë reale dhe funksionim pa lidhje kur lidhja është e kufizuar, ndërsa shtresa cloud
        mbështet analiza afatgjata, koordinim mes shumë vendeve, raportim dhe përmirësim të vazhdueshëm të performancës
        së sistemit.
      </>,
      <>
        <strong>Në energji,</strong> GAIA Tech ndihmon në monitorimin e prodhimit dhe konsumit, menaxhimin e sjelljes së
        ruajtjes dhe reduktimin e humbjeve operacionale përmes planifikimit dhe prioritizimit më të zgjuar.{" "}
        <strong>Në ujë,</strong> ajo mbështet logjikën e automatizuar të pompimit, kontrollin e rezervuarëve dhe
        presionit, sinjalet e zbulimit të rrjedhjeve dhe gjurmimin e efikasitetit. <strong>Në bujqësi,</strong> ajo
        mundëson vendime ujitjeje të nxitura nga sensorët, planifikim që merr parasysh klimën dhe automatizim që merr
        parasysh burimet, duke mbrojtur produktivitetin pa dëmtuar mjedisin.
      </>,
      <>
        GAIA Tech është projektuar të <strong>jetë e thjeshtë në sipërfaqe dhe e fuqishme në thellësi.</strong>{" "}
        Përdoruesit shohin gjendje të qartë, panele të pastra dhe veprime të kuptueshme, ndërsa sistemi bazë ruan
        auditueshmërinë, integritetin e kontrollit dhe performancë të besueshme përmes cikleve të vazhdueshme të
        reagimit.
      </>,
      <>
        Ky është motori që e bën <strong>Greecon të shkallëzueshëm</strong>. Ai sjell rregull në kompleksitet, e
        përkthen realitetin mjedisor në vendime operacionale dhe i ndihmon komunitetet dhe bizneset të drejtojnë
        sisteme më të pastra e më efikase me rezultate të matshme.
      </>
    ]
  },

  terms: (ln) => ({
    title: "Kushtet e shërbimit",
    updated: "Përditësuar së fundi: tetor 2026",
    intro: [
      <>
        Këto Kushte të Shërbimit («Kushtet») rregullojnë qasjen në dhe përdorimin e faqes së internetit të publikuar në
        greecon.earth dhe nënfaqet e saj («Faqja»), të operuar nga <strong>Greecon Sh.p.k.</strong> (NUIS/NIPT{" "}
        <strong>M61525505A</strong>), shoqëri e regjistruar pranë Qendrës Kombëtare të Biznesit të Shqipërisë, me selinë
        e regjistruar në Shijak, Qarku i Durrësit, Shqipëri («Greecon», «ne», «na» ose «tonë»). Duke hyrë ose duke
        përdorur Faqen, ju pranoni të jeni të detyruar nga këto Kushte. Nëse nuk pajtoheni, ju lutemi mos e përdorni
        Faqen.
      </>
    ],
    sections: [
      {
        title: "1. Rreth Faqes",
        body: (
          <>
            <p>
              Faqja përshkruan ofertat e Greecon në fushën e energjisë së rinovueshme, bujqësisë inteligjente,
              menaxhimit të ujit dhe platformës GAIA Tech, dhe ofron një mënyrë për të kontaktuar Greecon lidhur me
              mundësi bashkëpunimi, partneriteti ose projektesh. Faqja është informuese: asgjë në të nuk përbën ofertë
              detyruese, kuotim ose kontratë. Fusha e projektit, çmimet, specifikimet dhe afatet konfirmohen vetëm
              përmes një marrëveshjeje të nënshkruar mes Greecon dhe klientit.
            </p>
          </>
        )
      },
      {
        title: "2. Përshtatshmëria dhe përdorimi i pranueshëm",
        body: (
          <>
            <p>
              Mund ta përdorni Faqen vetëm për qëllime të ligjshme dhe në mënyrë që të mos cenoni të drejtat e ndonjë
              pale të tretë, as të kufizoni ose pengoni përdorimin dhe shijimin e Faqes nga ajo. Ju pranoni të mos:
            </p>
            <ul>
              <li>Tentoni të merrni qasje të paautorizuar në Faqe, sistemet e saj themelore ose rrjetet e lidhura;</li>
              <li>
                Ndërhyni ose ndërprisni funksionimin e Faqes, përfshirë përmes kërkesave të tepërta të automatizuara;
              </li>
              <li>Paraqisni informacion të rremë, çorientues ose mashtrues përmes kanaleve të kontaktit të Faqes;</li>
              <li>Riprodhoni, dublikoni, kopjoni ose rishitni ndonjë pjesë të Faqes pa pëlqimin tonë paraprak me shkrim.</li>
            </ul>
          </>
        )
      },
      {
        title: "3. Pronësia intelektuale",
        body: (
          <>
            <p>
              Faqja, përfshirë tekstin, grafikat, logot, ikonat, simbolin GAIA Tech dhe dizajnin e softuerin themelor,
              është në pronësi të Greecon ose të licencuesve të saj dhe mbrohet nga e drejta shqiptare dhe ndërkombëtare
              e pronësisë intelektuale. Përveç rastit kur është e nevojshme për ta parë Faqen në një shfletues standard,
              asnjë pjesë e saj nuk mund të riprodhohet, shpërndahet, modifikohet ose përdoret për të krijuar vepra të
              rrjedhura pa lejen tonë paraprake me shkrim.
            </p>
          </>
        )
      },
      {
        title: "4. Komunikimet",
        body: (
          <>
            <p>
              Nëse na kontaktoni përmes Faqes, do t’i përdorim të dhënat që jepni për t’iu përgjigjur kërkesës suaj.
              Shihni {ln("privacy", "Njoftimin e privatësisë")} për detaje se si i trajtojmë të dhënat personale.
            </p>
          </>
        )
      },
      {
        title: "5. Lidhje të palëve të treta",
        body: (
          <>
            <p>
              Faqja mund të përmbajë lidhje drejt faqeve të palëve të treta, përfshirë profilet tona në rrjetet sociale,
              që nuk i kontrollojmë. Nuk mbajmë përgjegjësi për përmbajtjen, saktësinë ose praktikat e asnjë faqeje të
              palës së tretë të lidhur, dhe përfshirja e një lidhjeje nuk nënkupton miratimin tonë për të.
            </p>
          </>
        )
      },
      {
        title: "6. Mohimi i garancive",
        body: (
          <>
            <p>
              Faqja dhe përmbajtja e saj ofrohen «ashtu siç janë» dhe «sipas disponueshmërisë», pa asnjë lloj garancie,
              të shprehur ose të nënkuptuar, përfshirë garancitë e tregtueshmërisë, përshtatshmërisë për një qëllim të
              caktuar ose mospërputhjes me të drejtat e tjera. Nuk garantojmë që Faqja do të jetë e pandërprerë, në kohë,
              e sigurt ose pa gabime, as që të metat do të korrigjohen.
            </p>
          </>
        )
      },
      {
        title: "7. Kufizimi i përgjegjësisë",
        body: (
          <>
            <p>
              Në masën maksimale të lejuar nga ligji i zbatueshëm, Greecon nuk mban përgjegjësi për dëme të tërthorta,
              rastësore, të veçanta, pasuese ose ndëshkuese, as për ndonjë humbje fitimi, të ardhure, të dhënash ose
              reputacioni, që lindin nga ose lidhen me qasjen tuaj në Faqe, përdorimin e saj ose pamundësinë për ta
              përdorur. Asgjë në këto Kushte nuk kufizon ndonjë përgjegjësi që nuk mund të kufizohet ose përjashtohet
              sipas së drejtës shqiptare në fuqi.
            </p>
          </>
        )
      },
      {
        title: "8. E drejta e zbatueshme dhe juridiksioni",
        body: (
          <>
            <p>
              Këto Kushte rregullohen nga ligjet e Republikës së Shqipërisë, pa marrë parasysh parimet e saj të
              konfliktit të ligjeve. Çdo mosmarrëveshje që lind nga ose lidhet me këto Kushte ose Faqen i nënshtrohet
              juridiksionit ekskluziv të gjykatave kompetente të Republikës së Shqipërisë, përveç rasteve kur ligji
              imperativ i mbrojtjes së konsumatorit kërkon ndryshe.
            </p>
          </>
        )
      },
      {
        title: "9. Ndryshimet e këtyre Kushteve",
        body: (
          <>
            <p>
              Mund t’i përditësojmë herë pas here këto Kushte për të pasqyruar ndryshimet në Faqe ose në ligjin e
              zbatueshëm. Data «Përditësuar së fundi» më lart tregon kur janë rishikuar për herë të fundit këto Kushte.
              Vazhdimi i përdorimit të Faqes pas hyrjes në fuqi të ndryshimeve përbën pranim të Kushteve të rishikuara.
            </p>
          </>
        )
      },
      {
        title: "10. Kontakt",
        body: (
          <>
            <p>
              Pyetjet rreth këtyre Kushteve mund të dërgohen në <a href="mailto:info@greecon.earth">info@greecon.earth</a>{" "}
              ose me postë në Greecon Sh.p.k., Durana Tech Park, Rruga Ahmet Zogu, Xhafzotaj, Shijak, Durrës 2013,
              Shqipëri.
            </p>
          </>
        )
      }
    ]
  }),

  privacy: () => ({
    title: "Njoftimi i privatësisë",
    updated: "Përditësuar së fundi: tetor 2026",
    intro: [
      <>
        Ky Njoftim i privatësisë shpjegon se si <strong>Greecon Sh.p.k.</strong> (NUIS/NIPT{" "}
        <strong>M61525505A</strong>) («Greecon», «ne», «na» ose «tonë»), shoqëri e regjistruar pranë Qendrës Kombëtare
        të Biznesit të Shqipërisë me selinë e regjistruar në Shijak, Qarku i Durrësit, Shqipëri, mbledh dhe përdor të
        dhëna personale kur vizitoni greecon.earth ose Blogun e Greecon në blog.greecon.earth (së bashku, «Faqja») ose
        na kontaktoni përmes saj. Greecon është kontrolluesi i të dhënave personale të përshkruara më poshtë.
      </>,
      <>
        Të dhënat personale i trajtojmë në përputhje me Ligjin nr. 124/2024 «Për mbrojtjen e të dhënave personale» të
        Shqipërisë, i cili është i harmonizuar me Rregulloren e Përgjithshme të BE-së për Mbrojtjen e të Dhënave
        (GDPR), dhe zbatojmë të njëjtin standard për të gjithë vizitorët, pavarësisht nga vendndodhja.
      </>
    ],
    sections: [
      {
        title: "1. Çfarë të dhënash mbledhim",
        body: (
          <>
            <p>Mbledhim vetëm atë që është e nevojshme për të operuar Faqen dhe për t’ju përgjigjur:</p>
            <ul>
              <li>
                <strong>Të dhëna kontakti</strong> që na jepni drejtpërdrejt — si emri, adresa e emailit dhe përmbajtja
                e çdo mesazhi — kur përdorni një kanal kontakti ose adresë emaili në Faqe.
              </li>
              <li>
                <strong>Të dhëna teknike</strong> të mbledhura automatikisht nga ofruesit tanë të pritjes (hosting) për
                të operuar dhe siguruar Faqen, si adresa IP, lloji i shfletuesit, informacioni i pajisjes dhe kohët e
                qasjes, zakonisht të ruajtura vetëm në regjistrat standardë të serverit dhe të sigurisë.
              </li>
            </ul>
            <p>
              Nuk mbledhim kategori të ndjeshme të dhënash (si informacion shëndetësor, financiar ose biometrik) përmes
              Faqes, dhe ju kërkojmë të mos përfshini informacion të tillë në asnjë mesazh që na dërgoni.
            </p>
          </>
        )
      },
      {
        title: "2. Cookie dhe teknologji të ngjashme",
        body: (
          <>
            <p>
              Faqja nuk përdor cookie reklamuese ose të gjurmimit ndër-faqesh. Ajo mund të mbështetet në mekanizma
              teknikë rreptësisht të nevojshëm, në nivel sesioni, që nevojiten për të ngarkuar faqet dhe për ta mbajtur
              Faqen të sigurt; këta nuk ju identifikojnë personalisht. Nëse kjo ndryshon — për shembull, nëse shtojmë
              analiza në të ardhmen — do ta përditësojmë këtë njoftim dhe do të kërkojmë pëlqimin tuaj kur kërkohet.
            </p>
          </>
        )
      },
      {
        title: "3. Si i përdorim të dhënat tuaja dhe baza jonë ligjore",
        body: (
          <>
            <ul>
              <li>
                <strong>Për t’iu përgjigjur kërkesave</strong> që na dërgoni, bazuar në interesin tonë legjitim për të
                komunikuar me partnerë, klientë dhe investitorë të mundshëm, ose për të ndërmarrë hapa me kërkesën tuaj
                përpara lidhjes së një kontrate.
              </li>
              <li>
                <strong>Për të mirëmbajtur dhe siguruar Faqen</strong>, bazuar në interesin tonë legjitim për t’i
                mbajtur sistemet tona të besueshme dhe të mbrojtura nga keqpërdorimi.
              </li>
              <li>
                <strong>Për të përmbushur detyrimet ligjore</strong>, si t’i përgjigjemi një kërkese të ligjshme të një
                autoriteti kompetent.
              </li>
            </ul>
          </>
        )
      },
      {
        title: "4. Me kë i ndajmë të dhënat",
        body: (
          <>
            <p>
              Nuk i shesim të dhënat personale. I ndajmë vetëm me ofrues shërbimesh që i përpunojnë në emrin tonë dhe
              sipas udhëzimeve tona — për shembull, ofruesit e pritjes dhe infrastrukturës që shërbejnë Faqen (aktualisht
              GitHub Pages dhe, kur është e zbatueshme, Railway) dhe ofruesin e emailit që përdorim për të marrë dhe
              për t’iu përgjigjur mesazheve — dhe, kur kërkohet me ligj, me autoritete publike.
            </p>
          </>
        )
      },
      {
        title: "5. Transferimet ndërkombëtare",
        body: (
          <>
            <p>
              Meqenëse ofruesit tanë të shërbimeve mund të përpunojnë të dhëna jashtë Shqipërisë, përfshirë brenda
              Zonës Ekonomike Evropiane, të dhënat tuaja mund të transferohen ndërkombëtarisht. Kur ndodh kjo,
              mbështetemi te ofrues që zbatojnë garanci të përshtatshme, si klauzola standarde kontraktore ose një bazë
              ligjore ekuivalente për transferimin.
            </p>
          </>
        )
      },
      {
        title: "6. Ruajtja e të dhënave",
        body: (
          <>
            <p>
              I ruajmë të dhënat e kontaktit për sa kohë nevojitet për t’iu përgjigjur kërkesës suaj, për të mbajtur
              marrëdhënien tonë të biznesit, ose derisa të kërkoni fshirjen e tyre, cilado që ndodh e para, sipas çdo
              periudhe më të gjatë ruajtjeje të kërkuar me ligj. Regjistrat standardë teknikë dhe të sigurisë zakonisht
              ruhen për një periudhë të kufizuar nga ofruesit tanë të pritjes dhe më pas fshihen automatikisht.
            </p>
          </>
        )
      },
      {
        title: "7. Të drejtat tuaja",
        body: (
          <>
            <p>Sipas ligjit në fuqi, ju keni të drejtë të:</p>
            <ul>
              <li>Qaseni te të dhënat personale që mbajmë për ju;</li>
              <li>Kërkoni korrigjimin e të dhënave të pasakta ose jo të plota;</li>
              <li>Kërkoni fshirjen e të dhënave tuaja;</li>
              <li>Kufizoni ose kundërshtoni përpunime të caktuara;</li>
              <li>Kërkoni një kopje të transferueshme të të dhënave që na keni dhënë;</li>
              <li>Tërhiqni pëlqimin në çdo kohë, pa ndikuar në përpunimin e kryer para tërheqjes; dhe</li>
              <li>Paraqisni një ankesë pranë një autoriteti mbikëqyrës.</li>
            </ul>
            <p>
              Për të ushtruar cilëndo nga këto të drejta, dërgoni email në{" "}
              <a href="mailto:privacy@greecon.earth">privacy@greecon.earth</a>. Në Shqipëri, mund të paraqisni
              gjithashtu një ankesë pranë Komisionerit për të Drejtën e Informimit dhe Mbrojtjen e të Dhënave
              Personale (IDP) në{" "}
              <a href="https://idp.al" target="_blank" rel="noreferrer">idp.al</a>.
            </p>
          </>
        )
      },
      {
        title: "8. Privatësia e fëmijëve",
        body: (
          <>
            <p>
              Faqja u drejtohet bizneseve, bashkive dhe investitorëve, dhe nuk është e destinuar për fëmijë. Nuk
              mbledhim me dije të dhëna personale nga fëmijët.
            </p>
          </>
        )
      },
      {
        title: "9. Siguria",
        body: (
          <>
            <p>
              Zbatojmë masa të arsyeshme teknike dhe organizative për të mbrojtur të dhënat personale nga qasja e
              paautorizuar, ndryshimi, zbulimi ose shkatërrimi. Asnjë metodë transmetimi ose ruajtjeje nuk është plotësisht
              e sigurt, dhe nuk mund të garantojmë sigurinë absolute.
            </p>
          </>
        )
      },
      {
        title: "10. Ndryshimet e këtij njoftimi",
        body: (
          <>
            <p>
              Mund ta përditësojmë herë pas here këtë Njoftim të privatësisë për të pasqyruar ndryshimet në praktikat
              tona ose në ligjin e zbatueshëm. Data «Përditësuar së fundi» më lart tregon kur është rishikuar për herë
              të fundit.
            </p>
          </>
        )
      },
      {
        title: "11. Kontakt",
        body: (
          <>
            <p>
              Për çdo pyetje rreth këtij njoftimi ose mënyrës se si i trajtojmë të dhënat tuaja, kontaktoni{" "}
              <a href="mailto:privacy@greecon.earth">privacy@greecon.earth</a> ose Greecon Sh.p.k., Durana Tech Park,
              Rruga Ahmet Zogu, Xhafzotaj, Shijak, Durrës 2013, Shqipëri.
            </p>
          </>
        )
      }
    ]
  })
};
