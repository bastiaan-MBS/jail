# Junior AI League — Instructies voor Claude Code

## Over dit project
Website voor Junior AI League (junioraileague.nl), een programma van NextGen AI, uitgevoerd onder Stichting Bits.

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

## Bestandsstructuur
```
junior-ai-league/
├── index.html          — Homepage
├── programmas.html     — Programma's pagina
├── over-ons.html       — Over ons pagina
├── in-beeld.html       — Media overzichtspagina
├── media/              — Detailpagina's per event/artikel
│   ├── breda-2025.html
│   ├── tilburg-2025.html
│   └── [nieuwe events hier toevoegen]
├── assets/
│   ├── css/style.css   — ALLE gedeelde stijlen hier
│   ├── js/main.js      — ALLE gedeelde scripts hier
│   └── images/         — Afbeeldingen hier plaatsen
└── CLAUDE.md           — Dit bestand
```

## Hoe een nieuwe mediategel toevoegen
1. Maak een nieuw HTML-bestand aan in /media/ op basis van het patroon van breda-2025.html
2. Voeg een nieuwe .media-tile toe aan in-beeld.html
3. Zet de tegel bovenaan (nieuwste eerst)
4. Gebruik altijd hetzelfde HTML-patroon voor de tegel

## Logo URLs
- Junior AI League: https://irp.cdn-website.com/5f9ed68d/dms3rep/multi/LOGO+JAIL_1.svg
- NextGen AI: https://www.nextgen-ai.club/themes/custom/nextgen-ai/dist/images/logo.svg
- Stichting Bits: https://www.bitsweb.nl/themes/custom/bitsweb/dist/images/logo-dark.svg

## Navigatie (alle pagina's)
Altijd dezelfde nav opnemen met links naar:
- index.html (Home)
- programmas.html (Programma's)
- over-ons.html (Over ons)
- in-beeld.html (In beeld)
- #contact op index.html (Start een league)

## Stijlprincipes
- Secties afwisselen: wit → grijs → donker → wit → grijs etc.
- GEEN stipjespatroon of rasterpatroon in achtergronden
- Diagonale overgangen gebruiken tussen secties
- SVG iconen: altijd filled, afgeronde hoeken, in merkwaarden
- Geen emoji's als iconen
- Scroll reveal op alle content blokken (.r klasse)
