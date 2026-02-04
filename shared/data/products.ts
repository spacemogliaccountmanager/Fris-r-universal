import type { Product } from "../types/product";

export const products: readonly Product[] = [
  {
    id: "repair-me-wash",
    name: "REPAIR.ME.WASH",
    price: "349 kr",
    description:
      "Återställande schampo som reparerar och stärker skadat hår. Perfekt för färgbehandlat och torrt hår.",
    features: [
      "Återuppbygger hårets struktur",
      "Ger mjukhet och lyster",
      "Färgbevarande formula",
    ],
    image: "km-repair-wash.jpg",
  },
  {
    id: "repair-me-rinse",
    name: "REPAIR.ME.RINSE",
    price: "349 kr",
    description:
      "Återställande balsam som kompletterar REPAIR.ME.WASH för maximal reparation och lyster.",
    features: [
      "Djupgående återfuktning",
      "Stärker hårstråna",
      "Underlättar kamning",
    ],
    image: "km-repair-rinse.jpg",
  },
  {
    id: "session-spray",
    name: "SESSION.SPRAY",
    price: "299 kr",
    description:
      "Flexibel hårspray som ger perfekt stadga utan att kännas stel. Borstar lätt ut när du vill ändra frisyren.",
    features: [
      "Mediumhårt håll",
      "Lätt att borsta ut",
      "Ger naturlig glans",
    ],
    image: "km-session-spray.jpg",
  },
  {
    id: "smooth-again-wash",
    name: "SMOOTH.AGAIN.WASH",
    price: "349 kr",
    description:
      "Utjämnande schampo som tämjer frissigt hår och ger silkeslen känsla. Idealisk för grovt eller lockigt hår.",
    features: [
      "Kontrollerar friss",
      "Ger mjukt och hanterbart hår",
      "Värmeskyddande egenskaper",
    ],
    image: "km-smooth-wash.jpg",
  },
] as const;
