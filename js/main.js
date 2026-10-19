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

    "products.eyebrow": "Catalogue",
    "products.title": "Deux marques, une large gamme de produits",
    "products.lead": "Un aperçu de nos familles de produits. Le catalogue complet, avec les prix professionnels, est réservé à nos revendeurs et commerciaux via notre outil interne — contactez-nous pour y accéder.",

    "products.aquajex.tag": "Marque",
    "products.aquajex.title": "Aquajex",
    "products.aquajex.text": "Produits d'entretien et de nettoyage pour la maison : éponges, tampons abrasifs, articles de vaisselle et accessoires du quotidien.",
    "products.cinq.tag": "Marque",
    "products.cinq.title": "Les Cinq Frères",
    "products.cinq.text": "Gamme hygiène et maison : papier cuisson, articles ménagers et produits complémentaires pour la cuisine et l'entretien.",

    "products.cats.eyebrow": "Familles de produits",
    "products.cats.title": "Un assortiment pensé pour chaque rayon",
    "products.c1.tag": "Vaisselle",
    "products.c1.title": "Éponges & tampons",
    "products.c1.text": "Éponges cellulose, tampons abrasifs et tampons en fibre de coco pour un lavage efficace sans rayer.",
    "products.c1.l1": "Éponges cellulose double-face",
    "products.c1.l2": "Tampons abrasifs inox",
    "products.c1.l3": "Tampons fibre de coco",
    "products.c2.tag": "Entretien",
    "products.c2.title": "Produits ménagers",
    "products.c2.text": "Une sélection d'accessoires de nettoyage pensés pour durer, pour la maison comme pour les professionnels.",
    "products.c2.l1": "Éponges bi-couches ultra-absorbantes",
    "products.c2.l2": "Accessoires d'entretien quotidien",
    "products.c2.l3": "Formats pro et grand public",
    "products.c3.tag": "Cuisine",
    "products.c3.title": "Papier & emballage cuisine",
    "products.c3.text": "Papier cuisson et solutions d'emballage pour accompagner la préparation et la conservation des aliments.",
    "products.c3.l1": "Papier cuisson en rouleaux",
    "products.c3.l2": "Formats adaptés usage pro",
    "products.c3.l3": "Qualité constante garantie",

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

    "products.eyebrow": "Catalogue",
    "products.title": "Two brands, a wide product range",
    "products.lead": "A preview of our product families. The full catalogue, with professional pricing, is reserved for our retailers and sales reps through our internal tool — contact us for access.",

    "products.aquajex.tag": "Brand",
    "products.aquajex.title": "Aquajex",
    "products.aquajex.text": "Home cleaning and care products: sponges, scouring pads, dishware items and everyday accessories.",
    "products.cinq.tag": "Brand",
    "products.cinq.title": "Les Cinq Frères",
    "products.cinq.text": "Home & hygiene range: baking paper, household items and complementary kitchen and cleaning products.",

    "products.cats.eyebrow": "Product families",
    "products.cats.title": "An assortment built for every shelf",
    "products.c1.tag": "Dishware",
    "products.c1.title": "Sponges & scouring pads",
    "products.c1.text": "Cellulose sponges, abrasive pads and coconut fibre pads for effective, scratch-free cleaning.",
    "products.c1.l1": "Double-sided cellulose sponges",
    "products.c1.l2": "Stainless scouring pads",
    "products.c1.l3": "Coconut fibre pads",
    "products.c2.tag": "Cleaning",
    "products.c2.title": "Household products",
    "products.c2.text": "A selection of cleaning accessories built to last, for home and professional use alike.",
    "products.c2.l1": "Ultra-absorbent bi-layer sponges",
    "products.c2.l2": "Everyday cleaning accessories",
    "products.c2.l3": "Pro and retail formats",
    "products.c3.tag": "Kitchen",
    "products.c3.title": "Paper & kitchen packaging",
    "products.c3.text": "Baking paper and packaging solutions to support food preparation and storage.",
    "products.c3.l1": "Baking paper rolls",
    "products.c3.l2": "Professional-grade formats",
    "products.c3.l3": "Consistent guaranteed quality",

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

document.addEventListener("DOMContentLoaded", () => {
  initLangSwitch();
  initMobileNav();
  initReveal();
  initContactForm();
});
