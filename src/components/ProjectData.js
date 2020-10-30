const kaarnaDesignProject = {
  title: "Kaarna",
  description:
    "An electric foldable scooter designed for laid-back cruising. With its innovative rotating folding mechanism, high-quality materials and elegant detailing, Kaarna is designed for people who want to ride the streets in style. An urban mobility solution that matches the character of flourishing cities.",
  year: 2017,
  isTeam: false,
  categories: ["Product Design", "Vehicle Design", "Urban Mobility"],
  displayableCategory: 1,
  image: "./assets/kaarna.jpg",
  descriptionStyle: {
    top: "126px",
    right: "100px",
    width: "285px",
  },
  styleDarkColor: false,
  backgroundColor: "black",
};

const lamppuDesignProject = {
  title: "Pendant Lamp",
  description:
    "A dining room pendant lamp designed for atmospheric dining. The lamp has three lampshades that reflect different intensities of light, giving both a focused and relaxed ambience to the dining experience.",
  year: 2020,
  isTeam: false,
  categories: ["Furniture Design", "Lamp Design", "Lighting Design"],
  displayableCategory: 1,
  image: "./assets/lamp.png",
  styleDarkColor: false,
  backgroundColor: "black",
};

const tyyniDesignProject = {
  title: "Tyyni",
  description:
    "A sound diffusing wall element, with oustanding acoustic qualities and beautiful form. The overall shape of Tyyni is based on a tested mathematical equation that ensures a high-quality sonic experinece. The wave-like form gives a visual expression that matches the acoustic qualities - without compromising the sound.",
  year: 2017,
  isTeam: false,
  categories: ["Product Design", "Acoustic Design", "Wall Panel Design"],
  displayableCategory: 1,
  image: "./assets/tyyni.png",
  descriptionStyle: {
    left: "480px",
  },
  styleDarkColor: false,
  backgroundColor: "black",
};

const kuutamoDesignProject = {
  title: "Kuutamo",
  description:
    "A directional night light that provides light to you, without interrupting your partner's sleep. The light is perfect for two people sharing a bed, allowing one to stay awake while the other sleeps. Kuutamo works well aesthetically both as a single piece for one person, or as two lamps side-by-side.",
  year: 2016,
  isTeam: false,
  categories: ["Product Design", "Furniture Design", "Lamp Design"],
  displayableCategory: 2,
  image: "./assets/kuu.png",
  styleDarkColor: false,
  backgroundColor: "black",
};

const kiskoDesignProject = {
  title: "Kisko",
  description:
    "An elegant industrial furniture series that combines character with comfort. Made out of industrial materials, Kisko furniture gets its identity from the intuitive yet original way of connecting the components.",
  year: 2019,
  isTeam: false,
  categories: ["Furniture Design", "Chair Design", "Component Design"],
  displayableCategory: 2,
  image: "./assets/kisko.png",
  classes: "contain",
  styleDarkColor: true,
  backgroundColor: "white",
};

const kolmioillaDesignProject = {
  title: "Kohdataan Kolmioilla",
  description:
    "Three pieces of street furniture that create a space that encourages both planned and incidental encounters. The concept is designed for an unused triangle-shaped cobblestone plaza in front of the Helsinki Design Museum, where three neighborhoods meet. Together the triangular pieces of furniture create a cultural meeting point for city residents.",
  year: 2020,
  isTeam: true,
  categories: ["Street Furniture Design", "Chair Design", "Spatial Design"],
  displayableCategory: 2,
  image: "./assets/kolmioilla.png",
  descriptionStyle: {
    left: "480px",
  },
  styleDarkColor: false,
  backgroundColor: "black",
};

const kierreDesignProject = {
  title: "Kierre",
  description:
    "An electric toothbrush designed for recyclability and the circular economy. The shell of the toothbrush is manufactured from recycled plastic, made out of monomaterial components and designed for easy disassembly. Kierre showcases that products designed for recyclability can be beautiful, by turning the recyclable features into the product's own aesthetics.",
  year: 2020,
  isTeam: true,
  categories: [
    "Home Appliance Design",
    "Design for Recyclability",
    "Design for the Circular Economy",
  ],
  displayableCategory: 2,
  image: "./assets/kierre.png",
  classes: "contain",
  imageStyle: {
    paddingTop: "80px",
    paddingBottom: "80px",
    paddingLeft: "150px",
  },
  descriptionStyle: {
    width: "235px",
    top: "50%",
    transform: "translateY(-50%)",
  },
  styleDarkColor: false,
  backgroundColor: "black",
};

const museDesignProject = {
  title: "Muse",
  description:
    "A community connecting UBS bank, millennials and startups through unique experiences",
  year: 2014,
  isTeam: true,
  categories: ["Service Design", "Web Design", "Concept Design"],
  displayableCategory: 0,
  image: "./assets/muse.png",
  classes: "contain",
  styleDarkColor: true,
  backgroundColor: "#6bc9b7",
};

const anneliinaDesignProject = {
  title: "Anneliina",
  description:
    "A brand identity, that communicates the caring service's core values",
  year: 2016,
  isTeam: false,
  categories: ["Brand Identity Design", "Web Design", "Graphic Design"],
  displayableCategory: 0,
  image: "./assets/anneliina.png",
  classes: "contain",
  styleDarkColor: true,
  backgroundColor: "#96c1d9",
};

const scootDesignProject = {
  title: "Scoot",
  description: "A webpage showcasing designs for electrical foldable scooters",
  year: 2017,
  isTeam: false,
  categories: ["Web Design", "UX Design", "UI Design"],
  displayableCategory: 0,
  image: "./assets/scoot.png",
  classes: "contain",
  styleDarkColor: true,
  backgroundColor: "#f8f379",
};

const axiomDesignProject = {
  title: "Axiom",
  description:
    "A network that brings students, university and industry together in doctoral research",
  year: 2019,
  isTeam: true,
  categories: ["Service Design", "Co-Design", "Concept Design"],
  displayableCategory: 0,
  image: "./assets/axiom.png",
  classes: "contain",
  styleDarkColor: true,
  backgroundColor: "#d2ebf9",
};

export const aestheticsDesignProjects = [
  {
    title: "Aesthetics",
    description: "Aesthetics",
    year: 2020,
    isTeam: false,
    categories: ["Beauty", "Cuteness", "Hotness"],
    displayableCategory: 0,
    image: "",
    styleDarkColor: true,
    backgroundColor: "black",
  },
];

export const industrialProjects = [
  kaarnaDesignProject,
  tyyniDesignProject,
  kierreDesignProject,
  kolmioillaDesignProject,
];

export const digitalProjects = [
  museDesignProject,
  anneliinaDesignProject,
  scootDesignProject,
  axiomDesignProject,
];
