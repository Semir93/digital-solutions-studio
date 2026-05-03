export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  challenge: string;
  role: string;
  stack: string[];
  deliverables: string[];
  outcomes: string[];
  gradient: string;
  image?: string;
  images?: string[];
  featured?: boolean;
};

export type Service = {
  slug: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  gradient: string;
  image?: string;
};

export const profile = {
  brand: "Digital Solutions Studio",
  email: "DigitalSolutions@gmail.com",
  phone: "+387 62 172 540",
  location: "Bosna i Hercegovina",
  availability: "Otvoren za nove projekte i dugoročnu saradnju",
  focusAreas: [
    "Brze i moderne web stranice",
    "Custom web softver za firme",
    "Mobilne aplikacije za korisnike i timove",
    "Desktop alati i interne platforme",
  ],
};

export const navigation = [
  { label: "Početna", href: "/" },
  { label: "Projekti", href: "/projekti" },
  { label: "Usluge", href: "/usluge" },
  { label: "Kontakt", href: "/kontakt" },
];

export const projects: Project[] = [
  {
    slug: "frizerski-salon-rezervacije",
    title: "Frizerski salon rezervacije web i mobilne aplikacije",
    category: "Web i mobilna aplikacija",
    summary:
      "Booking sistem za frizerski salon koji korisnicima omogućava online rezervaciju termina, a salonu daje pregledniji raspored i lakše upravljanje rezervacijama.",
    challenge:
      "Salon je trebao jednostavniji način za primanje rezervacija bez stalnih poziva, poruka i ručnog usklađivanja termina.",
    role: "Razvoj korisničkog toka, web panela i mobilnog iskustva",
    stack: [
      "Firebase",
      "JavaScript",
      "TypeScript",
      "React",
      "Progressive Web App",
    ],
    deliverables: [
      "Online rezervacija termina bez poziva i ručnog dopisivanja",
      "Web panel za pregled i upravljanje rezervacijama",
      "Mobilno iskustvo za krajnje korisnike",
      "Prikaz dostupnih termina i jednostavan booking tok",
    ],
    outcomes: [
      "Brze rezervacije u nekoliko klikova",
      "Manje opterećenje za salon i manje ručne komunikacije",
      "Preglednija organizacija termina i korisnika",
    ],
    gradient:
      "linear-gradient(135deg, #31111d 0%, #8d3557 45%, #f6c0d0 100%)",
    image: "/projects/frizerski_salon_app.png",
    images: [
      "/projects/frizerski_salon_app.png",
      "/projects/frizerski_salon_web.png",
      "/projects/frizerski_salon_web2.png",
      "/projects/frizerski_salon_web3.png",
      "/projects/frizerski_salon_web4.png",
      "/projects/frizerski_salon_app1.png",
      "/projects/frizerski_salon_app2.png",
    ],
    featured: true,
  },
  {
    slug: "em-electronics-interna-platforma",
    title: "EM Electronics interna web i mobilna platforma",
    category: "Web i mobilna aplikacija",
    summary:
      "Interna web i mobilna platforma za praćenje radnih naloga, materijala, radnika i operativnih informacija na jednom mjestu.",
    challenge:
      "Cilj je bio zamijeniti rasute informacije i ručno praćenje procesa jednim sistemom koji radi jednako dobro u kancelariji i na mobilnim uređajima na terenu.",
    role: "Web i mobilni razvoj, struktura podataka i UX tokovi",
    stack: [
      "Firebase",
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
    ],
    deliverables: [
      "Interni dashboard za pregled radnih naloga i statusa",
      "Pregled i evidencija materijala kroz aplikaciju",
      "Praćenje radnika i osnovnih operativnih zapisa",
      "Web i mobilni prikaz za rad u kancelariji i na terenu",
    ],
    outcomes: [
      "Brz pregled poslovnih informacija na jednom mjestu",
      "Manje ručnog rada i lakše praćenje procesa",
      "Bolja organizacija internih zadataka i materijala",
    ],
    gradient:
      "linear-gradient(135deg, #06283d 0%, #1c7293 48%, #c5ecf0 100%)",
    image: "/projects/em-electronics-web.png",
    images: [
      "/projects/em-electronics-web.png",
      "/projects/em-electronics-web2.png",
      "/projects/em-electronics-app.jpg",
      "/projects/em-electronics-app2.jpg",
      "/projects/em-electronics-app3.jpg",
    ],
    featured: true,
  },
  {
    slug: "djeciji-kutak-engleski-kutak",
    title: "Dječiji Kutak - Engleski kutak",
    category: "Web i mobilna edukativna aplikacija",
    summary:
      "Edukativna web i mobilna aplikacija za učenje engleskog jezika kroz slike, glas, igru i kratke zadatke prilagođene djeci.",
    challenge:
      "Aplikacija je trebala spojiti lekcije, slike, audio izgovor i vježbe u jednostavan tok koji djeca mogu koristiti uz roditelje, čak i prije samostalnog čitanja.",
    role: "Razvoj web i mobilnog iskustva, struktura lekcija i vježbi",
    stack: [
      "React",
      "TypeScript",
      "Progressive Web App",
      "Audio playback",
      "Local storage",
    ],
    deliverables: [
      "Tri odvojene grupe djece sa posebnim materijalima",
      "Lekcije sa riječima, rečenicama, slikama i audio izgovorom",
      "Vježbe kroz kartice, izbor tačnog odgovora, slušanje i dnevni izazov",
      "Lokalno praćenje napretka kroz zvjezdice i tačne odgovore",
      "Mobilno iskustvo za djecu i roditelje kod kuće",
    ],
    outcomes: [
      "Djeca mogu učiti engleski kroz slike, glas i kratke zadatke",
      "Roditelji dobijaju jednostavan link i jasan tok korištenja kod kuće",
      "Napredak se pamti lokalno na uređaju djeteta",
    ],
    gradient:
      "linear-gradient(135deg, #fff7d6 0%, #7dd3fc 45%, #fbcfe8 100%)",
    image: "/projects/djeciji-kutak-web-1.png",
    images: [
      "/projects/djeciji-kutak-web-1.png",
      "/projects/djeciji-kutak-web-2.png",
      "/projects/djeciji-kutak-web-3.png",
      "/projects/djeciji-kutak-mobile-1.png",
      "/projects/djeciji-kutak-mobile-2.png",
      "/projects/djeciji-kutak-mobile-3.png",
      "/projects/djeciji-kutak-mobile-4.png",
    ],
    featured: true,
  },
];

export const services: Service[] = [
  {
    slug: "rezervacija-hrane-fast-food",
    title: "Rezervacija i narudžba hrane za fast food",
    badge: "Food ordering",
    description:
      "Digitalni meni i sistem narudžbi za fast food i restorane, prilagođen korisnicima koji žele brzo pregledati ponudu i naručiti bez poziva.",
    highlights: [
      "Digitalni meni i pregled proizvoda",
      "Narudžba i rezervacija termina preuzimanja",
      "Jednostavan panel za upravljanje ponudom",
    ],
    gradient:
      "linear-gradient(135deg, #2d140d 0%, #d35f2f 48%, #f6c28d 100%)",
    image: "/services/fast-food-ordering.jpg",
  },
  {
    slug: "radni-nalozi-za-firme",
    title: "Radni nalozi i interni sistemi za firme",
    badge: "Operations",
    description:
      "Interni sistemi za praćenje radnih naloga, materijala, zadataka, radnika i operativnih procesa, prilagođeni načinu rada konkretnog tima.",
    highlights: [
      "Praćenje naloga, statusa i izvršenja",
      "Evidencija materijala i radnika",
      "Dashboard i administrativni pregled poslovanja",
    ],
    gradient:
      "linear-gradient(135deg, #0d2030 0%, #237db3 46%, #8ce0ff 100%)",
    image: "/services/work-orders-system.jpg",
  },
  {
    slug: "online-butik-store",
    title: "Online butik store i e-commerce",
    badge: "E-commerce",
    description:
      "Online prodavnice za butike i manje brendove sa pregledom proizvoda, korpom, narudžbom i modernim iskustvom kupovine na telefonu i računaru.",
    highlights: [
      "Katalog proizvoda i kategorije",
      "Korpa, narudžba i osnovni checkout tok",
      "Moderan izgled za fashion i retail brendove",
    ],
    gradient:
      "linear-gradient(135deg, #2b1323 0%, #a14671 45%, #f6bfd8 100%)",
    image: "/services/online-boutique-store.jpg",
  },
  {
    slug: "custom-web-mobile-apps",
    title: "Web i mobilne aplikacije po mjeri korisnika",
    badge: "Custom apps",
    description:
      "Web i mobilne aplikacije razvijene prema konkretnom procesu, publici i funkcijama koje su važne za poslovanje.",
    highlights: [
      "Web i mobilno iskustvo u jednom sistemu",
      "Firebase i savremeni frontend stack",
      "Rješenje prilagođeno poslovnom modelu",
    ],
    gradient:
      "linear-gradient(135deg, #13233a 0%, #3e78f0 52%, #b9d3ff 100%)",
    image: "/services/custom-web-mobile-apps.jpg",
  },
  {
    slug: "ecommerce-rjesenja",
    title: "E-commerce rješenja",
    badge: "Online prodaja",
    description:
      "Web shopovi, katalozi proizvoda, online narudžbe i sistemi plaćanja za firme koje žele prodavati kroz moderan digitalni kanal.",
    highlights: [
      "Web shop i katalog proizvoda",
      "Korpa, narudžbe i checkout tok",
      "Prikaz ponude prilagođen desktop i mobilnim korisnicima",
    ],
    gradient:
      "linear-gradient(135deg, #3d1e13 0%, #c96b36 48%, #ffd8b1 100%)",
    image: "/services/ecommerce-solutions.jpg",
  },
  {
    slug: "redesign-aplikacija-i-web-stranica",
    title: "Redesign postojećih aplikacija i web stranica",
    badge: "Redesign",
    description:
      "Redizajn postojećih aplikacija i web stranica kada proizvod izgleda zastarjelo, teško se koristi ili ne prati kvalitet usluge koju firma nudi.",
    highlights: [
      "Moderniji izgled i jasniji raspored sadržaja",
      "Poboljšano korisničko iskustvo i preglednost",
      "Redizajn bez potrebe da se sve pravi ispočetka",
    ],
    gradient:
      "linear-gradient(135deg, #171b2b 0%, #4967b7 48%, #c9d7ff 100%)",
    image: "/services/redesign-existing-apps.jpg",
  },
  {
    slug: "custom-software-po-mjeri",
    title: "Custom softver po mjeri",
    badge: "Tailored solution",
    description:
      "Potpuno prilagođeno software rješenje za firme kojima gotovi šabloni ne odgovaraju procesu, modelu rada ili potrebnim funkcijama.",
    highlights: [
      "Sistem pravljen prema konkretnom poslovnom procesu",
      "Web i mobilne funkcionalnosti po potrebi",
      "Fokus na stvarni problem i praktično korištenje",
    ],
    gradient:
      "linear-gradient(135deg, #12273a 0%, #2b83c8 48%, #bfe8ff 100%)",
    image: "/services/custom-software.jpg",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
