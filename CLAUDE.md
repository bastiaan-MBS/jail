# Junior AI League — Instructies voor Claude Code

## Over dit project
Website voor Junior AI League (junioraileague.nl), een programma van NextGen AI, uitgevoerd onder Stichting Bits.
- GitHub: https://github.com/bastiaan-MBS/jail
- Deploy: automatisch via GitHub Actions bij push naar `main` (FTP naar Vimexx, demo + productie)

## Merkwaarden (altijd gebruiken)
- Navy:   #000e72
- Teal:   #099f8a
- Teal licht: #0bc4ac
- Mint:   #c3fbea
- Geel:   #ffca3a
- Roze:   #f72585 (spaarzaam gebruiken)
- Wit:    #ffffff
- Grijs:  #f0f3f2
- Body tekst: #1a2a5e

## Typografie
- Display/koppen: Rajdhani (Google Fonts) — altijd font-weight 700
- Body: Exo 2 (Google Fonts) — weight 300/400/600/700
- Nooit: Inter, Arial, Roboto, system-ui

## Taalregels
- Altijd Nederlands
- GEEN koppeltekens in doorlopende tekst (dus "AI weerbaarheid" niet "AI-weerbaarheid")
- Geen prijzen noemen — altijd "Op aanvraag"
- Leeftijd altijd: "10 tot 15 jaar"
- Programmaformats: S = AI Hackathon Event, M = AI City Challenge, L = AI City Prototypes

## Contactgegevens (gebruik altijd deze)
- Hoofdcontact email: peter@junioraileague.nl
- Telefoon: 06 11 73 60 39
- Kennismakingsgesprek: https://calendly.com/peter-impact
- LinkedIn: https://www.linkedin.com/company/junior-ai-league
- Team email-formaat: voornaam@junioraileague.nl
- Kantoor: 5TRACKS Offices, Stationslaan 396, 4815 GW Breda

## Team
- Peter Brouwers — Firestarter — peter@junioraileague.nl
- Bastiaan Arkenbout — Accelerator — bastiaan@junioraileague.nl
- Geraldine Brouwers — Growth — geraldine@junioraileague.nl

## Bestandsstructuur
```
junior-ai-league/
├── .htaccess               — Clean URLs (geen .html extensie in browser)
├── index.html              — Homepage
├── programmas.html         — Programma's pagina
├── over-ons.html           — Over ons pagina (incl. team sectie)
├── in-beeld.html           — Media overzichtspagina (video, shorts, events, fotobibliotheek)
├── contact.html            — Contactpagina / Start een league
├── media/                  — Detailpagina's per event/artikel
│   ├── breda-2025.html
│   ├── tilburg-2025.html
│   └── [nieuwe events hier toevoegen]
├── assets/
│   ├── css/style.css       — ALLE gedeelde stijlen hier
│   ├── js/main.js          — ALLE gedeelde scripts hier
│   └── images/
│       ├── LOGO JAIL Dark BG.svg     — Logo voor donkere achtergronden (nav, hero)
│       ├── LOGO JAIL.svg             — Logo voor lichte achtergronden
│       ├── JAIL LOGO LIGGEND.svg     — Horizontaal logo voor witte achtergrond (footer-logo-bar en contact hero)
│       ├── NEXTGENAI LOGO.svg        — NextGen AI logo (NOOIT filter:brightness/invert toepassen)
│       ├── Favicon.svg               — Favicon (alle pagina's)
│       ├── Social-media-graph-junioraileague.png — OG-afbeelding 1200×630px
│       ├── Partners/                 — Partnerlogo's voor de ticker
│       ├── fotobibliotheek/          — Evenementfoto's voor de fotobibliotheek op in-beeld.html
│       └── team/                     — Teamfoto's voor over-ons.html
└── CLAUDE.md               — Dit bestand
```

## Logo-regels
- `LOGO JAIL Dark BG.svg` — alleen op donkere achtergronden (nav, hero)
- `LOGO JAIL.svg` — op lichte achtergronden
- `JAIL LOGO LIGGEND.svg` — horizontaal logo, op witte achtergrond (footer-logo-bar én contact-hero)
- `NEXTGENAI LOGO.svg` — ALTIJD `style="filter:none;"` meegeven; nooit brightness/invert toepassen, het logo heeft een eigen donkere achtergrond
- Stichting Bits logo gebruikt `filter:brightness(0) invert(1)` om wit te worden op donkere achtergrond — dat is correct
- Elk logo moet minimaal 2× per pagina voorkomen: nav-logo + footer-logo-bar

## Navigatie (alle pagina's)
Gebruik altijd clean URLs (geen .html). Volgorde — "Waarom" staat NIET in de nav:
```html
<li><a href="/">Home</a></li>
<li><a href="/programmas">Programma's</a></li>
<li><a href="/over-ons">Over ons</a></li>
<li><a href="/in-beeld">In beeld</a></li>
<li><a href="/#faq">FAQ</a></li>
<li><a href="/contact" class="btn btn-teal btn-sm nav-cta">Start een league</a></li>
```
Zet `class="active"` op het huidige pagina-item. Voeg altijd de hamburger button toe:
```html
<button class="nav-hamburger" aria-label="Menu openen"><span></span><span></span><span></span></button>
```

## Favicon & Open Graph (alle pagina's)
Voeg toe in `<head>` na de stylesheet:
```html
<link rel="icon" href="/assets/images/Favicon.svg" type="image/svg+xml">
<meta name="description" content="[pagina-beschrijving]">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Junior AI League">
<meta property="og:url" content="https://junioraileague.nl/[pagina]">
<meta property="og:title" content="[paginatitel] – Junior AI League">
<meta property="og:description" content="[pagina-beschrijving]">
<meta property="og:image" content="https://junioraileague.nl/assets/images/Social-media-graph-junioraileague.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://junioraileague.nl/assets/images/Social-media-graph-junioraileague.png">
```
Voor pagina's in `/media/`: gebruik `/assets/images/Favicon.svg` (root-relatief, werkt via .htaccess).

## Footer-logo-bar (alle pagina's)
Voeg dit altijd toe vóór de `<footer>`:
```html
<div class="footer-logo-bar">
  <div class="wrap"><img src="assets/images/JAIL LOGO LIGGEND.svg" alt="Junior AI League"></div>
</div>
```
Voor pagina's in de `/media/` map: gebruik `../assets/images/JAIL LOGO LIGGEND.svg`.

## Partnerticker
Staat op homepage (onder "Flexibel en schaalbaar") en op contact.html. Logo's in `assets/images/Partners/`. Kop op homepage: "Onze partners". Kop op contact: "Eerder succesvol samengewerkt met". Altijd dubbele track voor naadloze loop. Encodeer spaties in bestandsnamen als `%20` en `@` als `%40`.

## Contactpagina (`/contact`)
Opbouw: witte hero (liggend logo + Calendly-knop) → partnerticker → donkere contactsectie (voordelen + Peter's kaart) → stappen (3 stappen: kennismaking, uitgebreid gesprek, voorstel in co-creatie) → collectief-sectie → locatiesectie (Google Maps + adresgegevens 5TRACKS Breda) → footer.

## Hoe een nieuwe mediategel toevoegen (video/short)
1. Voeg een `.media-tile` toe aan `in-beeld.html` bovenaan de media-grid (nieuwste eerst)
2. Geef `data-cat="video"` of `data-cat="shorts"` en `data-video-id="YOUTUBE_ID"`
3. Gebruik `https://img.youtube.com/vi/YOUTUBE_ID/maxresdefault.jpg` als thumbnail
4. De filterknoppen verschijnen automatisch op basis van aanwezige categorieën

## Hoe een nieuw evenement-verslag toevoegen
1. Maak een nieuw HTML-bestand aan in `/media/` op basis van `breda-2025.html`
2. Voeg een `.media-tile` toe aan `in-beeld.html` met `data-cat="event"`
3. Zet de tegel bovenaan (nieuwste eerst)
4. Link naar artikel: `href="/media/naam-jaar"` (tegel is een `<a>`, geen video)
5. Video in het artikel zelf embedden als responsive iframe

## Hoe fotobibliotheek bijwerken
1. Upload nieuwe foto's naar `assets/images/fotobibliotheek/`
2. Voeg een `.foto-item` toe in de `#fotobibliotheek` sectie van `in-beeld.html`
3. Encodeer spaties in bestandsnamen als `%20` in het href/src attribuut
4. Bestandsnamen worden NIET automatisch ingelezen — altijd handmatig toevoegen aan de HTML

## Stijlprincipes
- Secties afwisselen: wit → grijs → donker → wit → grijs etc.
- GEEN stipjespatroon of rasterpatroon in achtergronden
- Diagonale overgangen gebruiken tussen secties (`.exit-white`, `.exit-gray`, `.enter-gray`)
- SVG iconen: altijd filled, afgeronde hoeken, in merkwaarden
- Geen emoji's als iconen
- Scroll reveal op alle content blokken: voeg `.r` klasse toe (`.r1`, `.r2`, `.r3` voor vertraging)
- Clean URLs: alle interne links zonder `.html` — gebruik `/pagina` niet `pagina.html`
- Minimum deelnemers S-programma: 30 kinderen (niet 50)
