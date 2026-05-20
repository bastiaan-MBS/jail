# Junior AI League — Instructies voor Claude Code

## Over dit project
Website voor Junior AI League (junioraileague.nl), een programma van NextGen AI, uitgevoerd onder Stichting Bits.
- GitHub: https://github.com/bastiaan-MBS/jail
- Deploy demo: automatisch via GitHub Actions bij push naar `main` (`.github/workflows/deploy-demo.yml`)
- Deploy productie: handmatig triggeren via GitHub API — `curl -X POST -H "Authorization: token TOKEN" "https://api.github.com/repos/bastiaan-MBS/jail/actions/workflows/deploy-production.yml/dispatches" -d '{"ref":"main"}'` (token ophalen via `git credential fill`)

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
├── media/                  — Detailpagina's per event/artikel/video
│   ├── breda-2025.html           — League Breda (vastgepind #1)
│   ├── tilburg-2025.html         — League Tilburg (vastgepind #2)
│   ├── dataloog-awards.html      — Dutch Applied AI Awards / De Dataloog podcast
│   ├── anouk-ontdekstation.html  — Video: Anouk Kooter (Ontdekstation Tilburg)
│   ├── lennart-fontys.html       — Video: Lennart de Graaf (Fontys)
│   └── [nieuwe pagina's hier toevoegen]
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

**Twee smaken:**

*A. Video opent in modal (geen eigen pagina):*
1. Voeg een `.media-tile` div toe met `data-cat="video"` en `data-video-id="YOUTUBE_ID"`
2. Gebruik `https://img.youtube.com/vi/YOUTUBE_ID/maxresdefault.jpg` als thumbnail
3. Zet bovenaan de media-grid (nieuwste eerst), ná de vastgepinde tegels

*B. Video heeft eigen detailpagina (interviews, langere content):*
1. Maak `/media/naam.html` op basis van `anouk-ontdekstation.html`
2. Embed de video met responsive wrapper: `<div class="video-embed"><iframe src="https://www.youtube.com/embed/ID" ...></div>`
3. Tegel in in-beeld.html is een `<a href="/media/naam">` met `data-cat="video"` (geen `data-video-id`)
4. Voeg een play-icoon toe in de thumbnail zodat het herkenbaar is als video

**Categorieën:** `event` | `video` | `shorts` | `podcast` | `media` — filterknoppen verschijnen automatisch. Meerdere categorieën mogelijk via spaties: `data-cat="podcast media"`.

**Vastgepinde tegels:** Breda (#1) en Tilburg (#2) zijn vastgepind met `data-pinned="true"` en staan altijd bovenaan, ook bij filteren. Nieuwe tegels daarna invoegen.

## Hoe een nieuw evenement-verslag toevoegen
1. Maak een nieuw HTML-bestand aan in `/media/` op basis van `breda-2025.html`
2. Voeg een `.media-tile` toe aan `in-beeld.html` met `data-cat="event"`, ná de twee vastgepinde tegels
3. Tegel is een `<a href="/media/naam-jaar">`, geen modal
4. Video in het artikel zelf embedden als responsive iframe

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

## Toekomstige taak: WCAG 2.1 AA toegankelijkheid
Audit uitgevoerd op 2026-05-09. Site scoort goed op contrast, semantiek en responsive layout, maar mist een aantal dingen voor volledige AA-compliance. Nog niet opgepakt — oppakken wanneer er tijd voor is.

### Kritiek (blokkeert AA-compliance)
1. **Focus zichtbaar (2.4.7)** — geen `:focus-visible` stijl in style.css; toetsenbordgebruikers zien niet waar ze zijn. Fix: `a:focus-visible, button:focus-visible { outline: 2px solid #099f8a; outline-offset: 2px; }` toevoegen aan style.css.
2. **Skip-link (2.4.1)** — geen "sla navigatie over" link. Fix: `<a href="#main" class="skip-link">` vóór de nav op elke pagina; bijbehorende `.skip-link` stijl in style.css.
3. **`<main>` landmark (1.3.1)** — geen `<main>` element; screenreaders kunnen niet naar hoofdinhoud springen. Fix: hoofdcontent op elke pagina wrappen in `<main id="main">`.
4. **Filterstatus (4.1.3)** — filteren in "In beeld" geeft geen melding aan screenreaders. Fix: `<div role="status" aria-live="polite" id="filter-status" class="sr-only">` toevoegen en updaten in main.js bij elke filteractie.

### Groot (significante barrière)
5. **`aria-expanded` op FAQ (4.1.2)** — knoppen togglen visueel maar melden staat niet aan screenreaders. Fix: `aria-expanded` in- en uitschakelen in de FAQ click handler in main.js.
6. **`aria-pressed` op filterknop (4.1.2)** — actief-staat alleen via CSS class. Fix: `aria-pressed` togglen in de filter click handler in main.js.
7. **Focus trap in modals (2.1.1)** — tab verlaat modal zonder te sluiten. Fix: focus-trap logica toevoegen in main.js voor video-, foto- en podcast-modals.

### Klein
- Foto-alt teksten zijn generiek ("Junior AI League") — kunnen beschrijvender.
- SVG-iconen zonder `aria-hidden="true"` worden soms voorgelezen.
