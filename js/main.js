// Aquajex 5F — site vitrine. Pas de framework : HTML statique + ce script
// pour la bascule FR/EN (dictionnaire ci-dessous), le menu mobile et les
// animations d'apparition au scroll.

const DICT = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.products": "Produits",
    "nav.news": "Actualités",
    "nav.contact": "Contact",
    "nav.cta": "Nous contacter",
    "header.search": "Rechercher un produit...",

    "home.eyebrow": "Fabricant & distributeur — Sfax, Tunisie",
    "home.title1": "Des produits du quotidien,",
    "home.title2": "pensés pour durer.",
    "home.lead": "STE AQUAJEX 5F conçoit et distribue deux gammes d'entretien et d'hygiène de la maison — Aquajex et Les Cinq Frères — pensées pour les familles comme pour les professionnels, partout en Tunisie et à l'export.",
    "home.cta.products": "Découvrir les produits",
    "home.cta.contact": "Demander un tarif",
    "home.stat1.n": "2",
    "home.stat1.l": "marques maison",
    "home.stat2.n": "100+",
    "home.stat2.l": "références produits",
    "home.stat3.n": "Sfax",
    "home.stat3.l": "siège & production",
    "home.card1.title": "Aquajex",
    "home.card1.sub": "Entretien & nettoyage",
    "home.card2.title": "Les Cinq Frères",
    "home.card2.sub": "Hygiène & maison",

    "home.values.eyebrow": "Pourquoi Aquajex 5F",
    "home.values.title": "Une qualité constante, une disponibilité totale",
    "home.values.lead": "Depuis Sfax, nous fabriquons et sélectionnons des produits fiables, livrés rapidement à nos revendeurs et partenaires.",
    "home.v1.title": "Qualité contrôlée",
    "home.v1.text": "Chaque référence est vérifiée avant expédition, pour une qualité constante d'un carton à l'autre.",
    "home.v2.title": "Livraison rapide",
    "home.v2.text": "Une logistique organisée depuis Sfax pour réapprovisionner nos revendeurs partout en Tunisie, sans rupture.",
    "home.v3.title": "Accompagnement commercial",
    "home.v3.text": "Une équipe commerciale disponible pour conseiller sur les assortiments et les volumes adaptés à chaque point de vente.",

    "home.cats.eyebrow": "Nos univers",
    "home.cats.title": "Deux marques, un seul engagement qualité",

    "home.cta.title": "Envie de référencer nos produits ?",
    "home.cta.text": "Parlez-nous de votre point de vente ou de votre activité : nous vous proposons l'assortiment et les volumes adaptés.",
    "home.cta.btn": "Contacter l'équipe commerciale",

    "about.eyebrow": "Notre histoire",
    "about.title": "STE AQUAJEX 5F, une entreprise familiale tunisienne",
    "about.p1": "Basée à Sfax, STE AQUAJEX 5F conçoit, fabrique et distribue des produits d'entretien et d'hygiène de la maison à travers deux marques complémentaires : Aquajex et Les Cinq Frères.",
    "about.p2": "Nous travaillons avec un réseau de revendeurs, grossistes et commerciaux terrain, en nous appuyant sur un catalogue tenu à jour en temps réel et une équipe commerciale mobile capable de répondre vite aux besoins de chaque point de vente.",
    "about.badge1": "Entretien & nettoyage",
    "about.badge2": "Hygiène & maison",
    "about.tl1.title": "Deux marques, un même standard",
    "about.tl1.text": "Aquajex et Les Cinq Frères partagent les mêmes exigences de qualité, avec des gammes complémentaires.",
    "about.tl2.title": "Réseau commercial terrain",
    "about.tl2.text": "Une équipe de commerciaux équipée d'un catalogue numérique à jour pour conseiller chaque client en temps réel.",
    "about.tl3.title": "Production & siège à Sfax",
    "about.tl3.text": "Toute l'activité est centralisée à Sfax, au cœur du bassin industriel du sud tunisien.",

    "about.values.eyebrow": "Nos engagements",
    "about.values.title": "Ce qui guide notre travail au quotidien",
    "about.v1.title": "Fiabilité",
    "about.v1.text": "Des produits testés et un approvisionnement pensé pour ne jamais laisser un revendeur en rupture.",
    "about.v2.title": "Proximité",
    "about.v2.text": "Une équipe commerciale qui se déplace, écoute et conseille, plutôt qu'un simple fournisseur à distance.",
    "about.v3.title": "Exigence qualité",
    "about.v3.text": "Un contrôle qualité à chaque étape, de la sélection des matières premières à la mise en carton.",

    "products.eyebrow": "Notre catalogue",
    "products.title": "Des produits de qualité pour un quotidien plus propre",
    "products.lead": "Un aperçu de nos familles de produits. Le catalogue complet, avec les prix professionnels, est réservé à nos revendeurs et commerciaux via notre outil interne — contactez-nous pour y accéder.",

    "products.aquajex.tag": "Marque",
    "products.aquajex.title": "Aquajex",
    "products.aquajex.text": "Produits d'entretien et de nettoyage pour la maison : éponges, tampons abrasifs, articles de vaisselle et accessoires du quotidien.",
    "products.cinq.tag": "Marque",
    "products.cinq.title": "Les Cinq Frères",
    "products.cinq.text": "Gamme hygiène et maison : papier cuisson, articles ménagers et produits complémentaires pour la cuisine et l'entretien.",

    "products.cats.eyebrow": "Familles de produits",
    "products.cats.title": "Un assortiment pensé pour chaque rayon",
    "products.cats.lead": "Un vrai aperçu, photos à l'appui, de nos familles les plus demandées.",
    "products.p1": "Chiffons & gants microfibre",
    "products.p2": "Éponges & tampons Jex",
    "products.p3": "Éponges cellulose",
    "products.p4": "Éponges Spontex",
    "products.p5": "Plumeaux & balais",
    "products.p6": "Serpillières & chamoisines",
    "products.p7": "Papier aluminium",
    "products.p8": "Papier cuisson",
    "products.p9": "Hygiène dentaire",

    "products.hero.cta1": "Explorer les familles",
    "products.hero.chip": "+100 références produits",

    "products.showcase.eyebrow": "Sélection",
    "products.showcase.title": "Nos produits phares",
    "products.showcase.lead": "Un échantillon de nos références les plus demandées, en conditionnement prêt à vendre.",
    "products.item1.title": "Chiffons microfibre 2+1 gratuit",
    "products.item1.desc": "Super-absorbants, lot de 3",
    "products.item2.title": "Jex métallique inox, lot de 3",
    "products.item2.desc": "Tampons récurants cuisine",
    "products.item3.title": "Vadrouille lavable mains libres",
    "products.item3.desc": "Nettoyage des sols",
    "products.item4.title": "Brosses à dents Extra Clean",
    "products.item4.desc": "Hygiène dentaire, lot de 3",
    "products.item5.title": "Serpillières multicolores",
    "products.item5.desc": "Entretien de la maison",
    "products.item6.title": "Papier aluminium 100 m",
    "products.item6.desc": "Cuisine & conservation",
    "products.item7.title": "Tampons à récurer Aquajex",
    "products.item7.desc": "Vaisselle, lot de 2",
    "products.item8.title": "Papier cuisson réversible 6 m",
    "products.item8.desc": "Cuisine, réutilisable",
    "products.item.cta": "Demander un tarif",
    "products.link.catalog": "Voir le catalogue complet",
    "products.link.more": "Voir plus",
    "products.filter.all": "Tous",
    "products.filter.aquajex": "Aquajex",
    "products.filter.cinq": "Les Cinq Frères",
    "products.filters.title": "Filtres",
    "products.filters.reset": "Réinitialiser",
    "products.filters.search": "Recherche",
    "products.filters.brand": "Marque",
    "products.filters.category": "Catégorie",
    "products.results": "produits trouvés",
    "products.sort.label": "Trier par",
    "products.sort.relevance": "Pertinence",
    "products.sort.az": "Nom A–Z",
    "products.sort.za": "Nom Z–A",
    "products.sidebar.cta.title": "Vous ne trouvez pas le produit recherché ?",
    "products.sidebar.cta.text": "Notre équipe est à votre disposition pour vous aider.",
    "products.sidebar.cta.btn": "Contactez-nous →",
    "products.item.details": "Voir les détails",
    "products.noresults": "Aucun produit ne correspond à vos filtres.",
    "products.cat.microfibre": "Chiffons & gants microfibre",
    "products.cat.eponges": "Éponges & tampons",
    "products.cat.accessoires": "Accessoires de nettoyage",
    "products.cat.hygiene": "Hygiène dentaire",
    "products.cat.serpilliere": "Serpillières & chamoisines",
    "products.cat.aluminium": "Papier aluminium",
    "products.cat.cuisson": "Papier cuisson",
    "products.badge.new": "Nouveau",
    "products.badge.promo": "Promo",
    "products.promo.title": "Tout pour l'entretien de la maison",
    "products.promo.li1": "Qualité contrôlée à chaque étape",
    "products.promo.li2": "Livraison rapide dans toute la Tunisie",
    "products.promo.li3": "Large choix de références",
    "products.promo.cta": "Découvrir la gamme",
    "products.trust1.title": "Livraison rapide",
    "products.trust1.text": "Partout en Tunisie",
    "products.trust2.title": "Produits de qualité",
    "products.trust2.text": "Sélectionnés avec soin",
    "products.trust3.title": "Accompagnement commercial",
    "products.trust3.text": "Une équipe à votre écoute",
    "products.trust4.title": "Sfax · Tunisie",
    "products.trust4.text": "Notre siège & production",

    "products.cta.title": "Vous êtes revendeur ou grossiste ?",
    "products.cta.text": "Demandez l'accès au catalogue complet avec tarifs détail et gros, et à notre équipe commerciale dédiée.",
    "products.cta.btn": "Demander le catalogue",

    "news.eyebrow": "Actualités",
    "news.title": "Nouveautés et temps forts Aquajex 5F",
    "news.lead": "Nouvelles références, promotions et actualités de nos deux marques.",
    "news.n1.badge": "Nouveauté",
    "news.n1.title": "Nouvelle gamme d'éponges cellulose",
    "news.n1.text": "Une nouvelle génération d'éponges cellulose, plus absorbantes et plus résistantes, disponible chez nos revendeurs.",
    "news.n2.badge": "Promotion",
    "news.n2.title": "Offres de lancement pour nos revendeurs",
    "news.n2.text": "Des conditions préférentielles pour les nouveaux points de vente qui référencent nos deux marques ce trimestre.",
    "news.n3.badge": "Entreprise",
    "news.n3.title": "Renforcement de notre équipe commerciale",
    "news.n3.text": "Une équipe commerciale terrain élargie pour mieux couvrir et accompagner nos revendeurs partout en Tunisie.",

    "contact.eyebrow": "Contact",
    "contact.title": "Parlons de votre point de vente",
    "contact.lead": "Une question, une demande de catalogue ou de tarif ? Notre équipe vous répond rapidement.",
    "contact.addr.title": "Adresse",
    "contact.phone.title": "Téléphone",
    "contact.hours.title": "Horaires",
    "contact.hours.text": "Lun. – Ven. : 8h00 – 17h00",
    "contact.form.title": "Envoyez-nous un message",
    "contact.form.name": "Nom complet",
    "contact.form.company": "Société / point de vente",
    "contact.form.email": "Email",
    "contact.form.phone": "Téléphone",
    "contact.form.subject": "Sujet",
    "contact.form.subject.ph": "Sélectionner…",
    "contact.form.subject.catalog": "Demande de catalogue",
    "contact.form.subject.partner": "Devenir revendeur",
    "contact.form.subject.other": "Autre demande",
    "contact.form.message": "Message",
    "contact.form.submit": "Envoyer le message",
    "contact.form.note": "Ce formulaire ouvre votre messagerie avec le message pré-rempli, à destination directe de notre équipe.",

    "footer.tagline": "Deux marques, une même exigence de qualité — depuis Sfax, pour toute la Tunisie.",
    "footer.nav": "Navigation",
    "footer.brands": "Nos marques",
    "footer.contact": "Coordonnées",
    "footer.rights": "Tous droits réservés.",
    "footer.internal": "Espace professionnel",
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.news": "News",
    "nav.contact": "Contact",
    "nav.cta": "Contact us",
    "header.search": "Search a product...",

    "home.eyebrow": "Manufacturer & distributor — Sfax, Tunisia",
    "home.title1": "Everyday products,",
    "home.title2": "built to last.",
    "home.lead": "STE AQUAJEX 5F designs and distributes two home care and cleaning ranges — Aquajex and Les Cinq Frères — made for families and professionals alike, across Tunisia and for export.",
    "home.cta.products": "Discover our products",
    "home.cta.contact": "Request pricing",
    "home.stat1.n": "2",
    "home.stat1.l": "in-house brands",
    "home.stat2.n": "100+",
    "home.stat2.l": "product references",
    "home.stat3.n": "Sfax",
    "home.stat3.l": "head office & production",
    "home.card1.title": "Aquajex",
    "home.card1.sub": "Cleaning & care",
    "home.card2.title": "Les Cinq Frères",
    "home.card2.sub": "Home & hygiene",

    "home.values.eyebrow": "Why Aquajex 5F",
    "home.values.title": "Consistent quality, full availability",
    "home.values.lead": "From Sfax, we manufacture and select reliable products, delivered quickly to our retailers and partners.",
    "home.v1.title": "Controlled quality",
    "home.v1.text": "Every reference is checked before shipping, for consistent quality from one batch to the next.",
    "home.v2.title": "Fast delivery",
    "home.v2.text": "Logistics organised from Sfax to restock our retailers across Tunisia without interruption.",
    "home.v3.title": "Sales support",
    "home.v3.text": "A sales team available to advise on the right assortment and volumes for every point of sale.",

    "home.cats.eyebrow": "Our ranges",
    "home.cats.title": "Two brands, one quality commitment",

    "home.cta.title": "Want to carry our products?",
    "home.cta.text": "Tell us about your store or business — we'll suggest the right assortment and volumes.",
    "home.cta.btn": "Talk to our sales team",

    "about.eyebrow": "Our story",
    "about.title": "STE AQUAJEX 5F, a Tunisian family business",
    "about.p1": "Based in Sfax, STE AQUAJEX 5F designs, manufactures and distributes home care and cleaning products through two complementary brands: Aquajex and Les Cinq Frères.",
    "about.p2": "We work with a network of retailers, wholesalers and field sales reps, backed by a catalogue updated in real time and a mobile sales team able to respond quickly to each store's needs.",
    "about.badge1": "Cleaning & care",
    "about.badge2": "Home & hygiene",
    "about.tl1.title": "Two brands, one standard",
    "about.tl1.text": "Aquajex and Les Cinq Frères share the same quality requirements, with complementary ranges.",
    "about.tl2.title": "Field sales network",
    "about.tl2.text": "A sales team equipped with a live digital catalogue to advise every customer in real time.",
    "about.tl3.title": "Production & HQ in Sfax",
    "about.tl3.text": "All activity is centralised in Sfax, at the heart of southern Tunisia's industrial hub.",

    "about.values.eyebrow": "Our commitments",
    "about.values.title": "What guides our work every day",
    "about.v1.title": "Reliability",
    "about.v1.text": "Tested products and supply planning designed so a retailer is never left out of stock.",
    "about.v2.title": "Closeness",
    "about.v2.text": "A sales team that visits, listens and advises — not just a remote supplier.",
    "about.v3.title": "Quality standards",
    "about.v3.text": "Quality control at every step, from raw material selection to packing.",

    "products.eyebrow": "Our catalogue",
    "products.title": "Quality products for a cleaner everyday",
    "products.lead": "A preview of our product families. The full catalogue, with professional pricing, is reserved for our retailers and sales reps through our internal tool — contact us for access.",

    "products.aquajex.tag": "Brand",
    "products.aquajex.title": "Aquajex",
    "products.aquajex.text": "Home cleaning and care products: sponges, scouring pads, dishware items and everyday accessories.",
    "products.cinq.tag": "Brand",
    "products.cinq.title": "Les Cinq Frères",
    "products.cinq.text": "Home & hygiene range: baking paper, household items and complementary kitchen and cleaning products.",

    "products.cats.eyebrow": "Product families",
    "products.cats.title": "An assortment built for every shelf",
    "products.cats.lead": "A real look, photos included, at our best-selling product families.",
    "products.p1": "Microfibre cloths & gloves",
    "products.p2": "Jex sponges & scouring pads",
    "products.p3": "Cellulose sponges",
    "products.p4": "Spontex sponges",
    "products.p5": "Dusters & brooms",
    "products.p6": "Floor cloths & chamois",
    "products.p7": "Aluminium foil",
    "products.p8": "Baking paper",
    "products.p9": "Dental care",

    "products.hero.cta1": "Browse our families",
    "products.hero.chip": "100+ product references",

    "products.showcase.eyebrow": "Selection",
    "products.showcase.title": "Our featured products",
    "products.showcase.lead": "A sample of our best-selling references, in ready-to-sell packaging.",
    "products.item1.title": "Microfibre cloths, buy 2 get 1 free",
    "products.item1.desc": "Super-absorbent, pack of 3",
    "products.item2.title": "Stainless steel Jex scourers, pack of 3",
    "products.item2.desc": "Kitchen scouring pads",
    "products.item3.title": "Hands-free washable mop",
    "products.item3.desc": "Floor cleaning",
    "products.item4.title": "Extra Clean toothbrushes",
    "products.item4.desc": "Dental care, pack of 3",
    "products.item5.title": "Multicolour floor cloths",
    "products.item5.desc": "Home cleaning",
    "products.item6.title": "Aluminium foil, 100 m",
    "products.item6.desc": "Kitchen & food storage",
    "products.item7.title": "Aquajex scouring pads",
    "products.item7.desc": "Dishware, pack of 2",
    "products.item8.title": "Reusable baking paper, 6 m",
    "products.item8.desc": "Kitchen, reusable",
    "products.item.cta": "Request pricing",
    "products.link.catalog": "View the full catalogue",
    "products.link.more": "See more",
    "products.filter.all": "All",
    "products.filter.aquajex": "Aquajex",
    "products.filter.cinq": "Les Cinq Frères",
    "products.filters.title": "Filters",
    "products.filters.reset": "Reset",
    "products.filters.search": "Search",
    "products.filters.brand": "Brand",
    "products.filters.category": "Category",
    "products.results": "products found",
    "products.sort.label": "Sort by",
    "products.sort.relevance": "Relevance",
    "products.sort.az": "Name A–Z",
    "products.sort.za": "Name Z–A",
    "products.sidebar.cta.title": "Can't find what you're looking for?",
    "products.sidebar.cta.text": "Our team is on hand to help.",
    "products.sidebar.cta.btn": "Contact us →",
    "products.item.details": "View details",
    "products.noresults": "No product matches your filters.",
    "products.cat.microfibre": "Microfibre cloths & gloves",
    "products.cat.eponges": "Sponges & scourers",
    "products.cat.accessoires": "Cleaning accessories",
    "products.cat.hygiene": "Dental care",
    "products.cat.serpilliere": "Floor cloths & chamois",
    "products.cat.aluminium": "Aluminium foil",
    "products.cat.cuisson": "Baking paper",
    "products.badge.new": "New",
    "products.badge.promo": "Deal",
    "products.promo.title": "Everything for home cleaning",
    "products.promo.li1": "Quality checked at every step",
    "products.promo.li2": "Fast delivery across Tunisia",
    "products.promo.li3": "A wide range of references",
    "products.promo.cta": "Discover the range",
    "products.trust1.title": "Fast delivery",
    "products.trust1.text": "Across Tunisia",
    "products.trust2.title": "Quality products",
    "products.trust2.text": "Carefully selected",
    "products.trust3.title": "Sales support",
    "products.trust3.text": "A team at your service",
    "products.trust4.title": "Sfax, Tunisia",
    "products.trust4.text": "Our headquarters & production",

    "products.cta.title": "Are you a retailer or wholesaler?",
    "products.cta.text": "Request access to our full catalogue with retail and wholesale pricing, and our dedicated sales team.",
    "products.cta.btn": "Request the catalogue",

    "news.eyebrow": "News",
    "news.title": "Aquajex 5F news & highlights",
    "news.lead": "New references, promotions and news from our two brands.",
    "news.n1.badge": "New",
    "news.n1.title": "New cellulose sponge range",
    "news.n1.text": "A new generation of cellulose sponges, more absorbent and more durable, now available at our retailers.",
    "news.n2.badge": "Promotion",
    "news.n2.title": "Launch offers for our retailers",
    "news.n2.text": "Preferential terms for new points of sale carrying both our brands this quarter.",
    "news.n3.badge": "Company",
    "news.n3.title": "Growing our sales team",
    "news.n3.text": "An expanded field sales team to better cover and support our retailers across Tunisia.",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about your store",
    "contact.lead": "A question, a catalogue or pricing request? Our team replies quickly.",
    "contact.addr.title": "Address",
    "contact.phone.title": "Phone",
    "contact.hours.title": "Hours",
    "contact.hours.text": "Mon – Fri: 8:00 AM – 5:00 PM",
    "contact.form.title": "Send us a message",
    "contact.form.name": "Full name",
    "contact.form.company": "Company / store",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.subject": "Subject",
    "contact.form.subject.ph": "Select…",
    "contact.form.subject.catalog": "Catalogue request",
    "contact.form.subject.partner": "Become a retailer",
    "contact.form.subject.other": "Other request",
    "contact.form.message": "Message",
    "contact.form.submit": "Send message",
    "contact.form.note": "This form opens your email app with the message pre-filled, sent directly to our team.",

    "footer.tagline": "Two brands, one quality standard — from Sfax, for all of Tunisia.",
    "footer.nav": "Navigation",
    "footer.brands": "Our brands",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.internal": "Professional access",
  },
};

function getLang() {
  return localStorage.getItem("aquajex-lang") || "fr";
}

function applyLang(lang) {
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = DICT[lang]?.[key];
    if (text !== undefined) el.textContent = text;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const text = DICT[lang]?.[key];
    if (text !== undefined) el.setAttribute("placeholder", text);
  });
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  localStorage.setItem("aquajex-lang", lang);
}

function initLangSwitch() {
  const lang = getLang();
  applyLang(lang);
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
}

function initParticles() {
  // Thème clair : de petites bulles d'eau translucides qui dérivent
  // doucement, plutôt qu'un effet "constellation" (trop chargé sur fond
  // blanc) — clin d'œil au nom Aquajex. Chaque bannière avec un
  // canvas.hero-canvas (hero principal, mini-bannière...) a sa propre
  // animation indépendante.
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  document.querySelectorAll("canvas.hero-canvas").forEach((canvas) => {
    const ctx = canvas.getContext("2d");
    let width, height, particles;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
    }

    function makeParticles() {
      const count = Math.min(26, Math.floor((width * height) / 42000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 3 + 1.5,
        vy: -(Math.random() * 0.22 + 0.08),
        vx: (Math.random() - 0.5) * 0.08,
        alpha: Math.random() * 0.25 + 0.12,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(47, 111, 237, ${p.alpha})`;
        ctx.fill();
      }
      if (!reduceMotion) requestAnimationFrame(step);
    }

    resize();
    makeParticles();
    step();
    window.addEventListener("resize", () => {
      resize();
      makeParticles();
      if (reduceMotion) step();
    });
  });
}

function initCounters() {
  const items = document.querySelectorAll("[data-count]");
  if (items.length === 0) return;

  function animate(el) {
    const target = parseInt(el.getAttribute("data-count"), 10);
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if (!("IntersectionObserver" in window)) {
    items.forEach(animate);
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  items.forEach((el) => obs.observe(el));
}

function initMobileNav() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav.main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open"))
  );
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || items.length === 0) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => obs.observe(el));
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const lines = [
      `Nom: ${data.get("name") || ""}`,
      `Société: ${data.get("company") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Téléphone: ${data.get("phone") || ""}`,
      `Sujet: ${data.get("subject") || ""}`,
      "",
      data.get("message") || "",
    ];
    const subject = encodeURIComponent(
      `[Site web] ${data.get("subject") || "Nouveau message"} — ${data.get("name") || ""}`
    );
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:contact@aquajex5f.tn?subject=${subject}&body=${body}`;
  });
}

function initCatalogFilters() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll(".product-card"));
  const originalOrder = cards.slice();
  const headerForm = document.querySelector(".header-search");
  const headerInput = headerForm ? headerForm.querySelector("input") : null;
  const sidebarInput = document.getElementById("sidebar-search-input");
  const brandChecks = document.querySelectorAll('.filter-check input[data-filter="brand"]');
  const catChecks = document.querySelectorAll('.filter-check input[data-filter="category"]');
  const brandPills = document.querySelectorAll(".brand-filter .brand-chip-filter");
  const sortSelect = document.getElementById("sort-select");
  const resetBtn = document.getElementById("reset-filters");
  const countEl = document.getElementById("results-count");
  const noResults = document.getElementById("no-results");
  const filtersToggle = document.getElementById("filters-toggle");
  const sidebar = document.getElementById("catalog-sidebar");

  let searchTerm = "";

  function selectedValues(nodelist) {
    return Array.from(nodelist)
      .filter((c) => c.checked)
      .map((c) => c.value);
  }

  function syncPills() {
    const brands = selectedValues(brandChecks);
    brandPills.forEach((p) => p.classList.remove("active"));
    let active = "all";
    if (brands.length === 1) active = brands[0];
    const match = document.querySelector(`.brand-filter .brand-chip-filter[data-brand="${active}"]`);
    if (match) match.classList.add("active");
  }

  function applyFilters() {
    const needle = searchTerm.trim().toLowerCase();
    const brands = selectedValues(brandChecks);
    const cats = selectedValues(catChecks);
    let visibleCount = 0;
    cards.forEach((card) => {
      const matchesText = !needle || card.textContent.toLowerCase().includes(needle);
      const matchesBrand = brands.length === 0 || brands.includes(card.dataset.brand);
      const matchesCat = cats.length === 0 || cats.includes(card.dataset.category);
      const show = matchesText && matchesBrand && matchesCat;
      card.style.display = show ? "" : "none";
      if (show) visibleCount++;
    });
    if (countEl) {
      const strong = countEl.querySelector("strong");
      if (strong) strong.textContent = visibleCount;
    }
    if (noResults) noResults.hidden = visibleCount !== 0;
    syncPills();
  }

  function applySort() {
    const mode = sortSelect ? sortSelect.value : "relevance";
    let ordered = originalOrder;
    if (mode === "az" || mode === "za") {
      ordered = cards.slice().sort((a, b) => {
        const ta = (a.querySelector("h3")?.textContent || "").trim().toLowerCase();
        const tb = (b.querySelector("h3")?.textContent || "").trim().toLowerCase();
        return mode === "az" ? ta.localeCompare(tb) : tb.localeCompare(ta);
      });
    }
    ordered.forEach((card) => grid.appendChild(card));
  }

  if (headerForm && headerInput) {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) {
      headerInput.value = q;
      searchTerm = q;
    }
    headerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      searchTerm = headerInput.value;
      if (sidebarInput) sidebarInput.value = searchTerm;
      applyFilters();
      grid.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (sidebarInput) {
    if (searchTerm) sidebarInput.value = searchTerm;
    sidebarInput.addEventListener("input", () => {
      searchTerm = sidebarInput.value;
      if (headerInput) headerInput.value = searchTerm;
      applyFilters();
    });
  }

  brandChecks.forEach((chk) => chk.addEventListener("change", applyFilters));
  catChecks.forEach((chk) => chk.addEventListener("change", applyFilters));

  brandPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const brand = pill.dataset.brand;
      brandChecks.forEach((chk) => {
        chk.checked = brand !== "all" && chk.value === brand;
      });
      applyFilters();
    });
  });

  if (sortSelect) sortSelect.addEventListener("change", applySort);

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      searchTerm = "";
      if (headerInput) headerInput.value = "";
      if (sidebarInput) sidebarInput.value = "";
      brandChecks.forEach((c) => (c.checked = false));
      catChecks.forEach((c) => (c.checked = false));
      if (sortSelect) sortSelect.value = "relevance";
      applySort();
      applyFilters();
    });
  }

  if (filtersToggle && sidebar) {
    filtersToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  applyFilters();
}

function initProductModal() {
  const modal = document.getElementById("product-modal");
  if (!modal) return;
  const imgEl = modal.querySelector(".pm-img img");
  const brandLogoEl = modal.querySelector(".pm-brand img");
  const brandNameEl = modal.querySelector(".pm-brand span");
  const titleEl = modal.querySelector(".pm-title");
  const catEl = modal.querySelector(".pm-cat");
  const refEl = modal.querySelector(".pm-ref");
  const descEl = modal.querySelector(".pm-desc");
  const closeBtn = document.getElementById("pm-close");

  function open(card) {
    const img = card.querySelector(".thumb img");
    const title = card.querySelector("h3");
    const cat = card.querySelector(".cat-label");
    const ref = card.querySelector(".ref");
    const desc = card.querySelector("p");
    const famTag = card.querySelector(".fam-tag");
    const cardLogo = card.querySelector(".card-brand-logo");
    if (imgEl && img) {
      imgEl.src = img.src;
      imgEl.alt = img.alt;
    }
    if (titleEl && title) titleEl.textContent = title.textContent;
    if (catEl) catEl.textContent = cat ? cat.textContent : "";
    if (refEl) refEl.textContent = ref ? ref.textContent : "";
    if (descEl) descEl.textContent = desc ? desc.textContent : "";
    if (brandNameEl && famTag) brandNameEl.textContent = famTag.textContent;
    if (brandLogoEl && cardLogo) brandLogoEl.src = cardLogo.src;
    modal.classList.add("open");
    document.body.classList.add("modal-open");
  }

  function close() {
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
  }

  document.querySelectorAll(".product-card .btn-details").forEach((btn) => {
    btn.addEventListener("click", () => open(btn.closest(".product-card")));
  });

  if (closeBtn) closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function initWishlistButtons() {
  document.querySelectorAll(".wish-btn").forEach((btn) => {
    btn.addEventListener("click", () => btn.classList.toggle("active"));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLangSwitch();
  initMobileNav();
  initReveal();
  initContactForm();
  initParticles();
  initCounters();
  initCatalogFilters();
  initProductModal();
  initWishlistButtons();
});
