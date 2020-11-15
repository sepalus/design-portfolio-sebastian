import variables from "../variables.js";

const {
  catalogWidth,
  catalogWidthPlusMargin,
  catalogCollapsedWidth,
  catalogCollapsedWidthPlusMargin,
  backgroundColorBlack,
  backgroundColorDark,
} = variables;

const descriptionPlacementTopRightCorner = {
  top: "126px",
  right: "100px",
  width: "285px",
};

const descriptionPlacementRightCenter = {
  width: "256px",
  top: "50%",
  transform: "translateY(-50%)",
  right: "100px",
};

const descriptionPlacementBottomCentered = {
  width: "520px",
  bottom: "90px",
  left: catalogWidthPlusMargin,
};

const descriptionPlacementTopCentered = {
  top: "70px",
  left: catalogWidthPlusMargin,
  width: "520px",
};

const kaarnaDesignProject = {
  id: "kaarna",
  title: "Kaarna",
  description:
    "An electric foldable scooter designed for laid-back cruising. With its innovative rotating folding mechanism, high-quality materials and elegant detailing, Kaarna is designed for people who want to ride the streets in style. An urban mobility solution that matches the character of flourishing cities.",
  year: 2017,
  isTeam: false,
  categories: ["Product Design", "Vehicle Design", "Urban Mobility"],
  displayableCategory: 1,
  images: ["kaarna1.jpg", "kaarna2.jpg", "kaarna3.jpg", "kaarna4.jpg"],
  descriptionStyle: descriptionPlacementTopRightCorner,
  mainColorDark: false,
  controlColorDark: true,
  backgroundColor: backgroundColorBlack,
};

const lamppuDesignProject = {
  id: "lamp",
  title: "Pendant Lamp",
  description:
    "A dining room pendant lamp designed for atmospheric dining. The lamp has three lampshades that reflect different intensities of light, giving both a focused and relaxed ambience to the dining experience.",
  year: 2020,
  isTeam: false,
  categories: ["Furniture Design", "Lamp Design", "Lighting Design"],
  displayableCategory: 1,
  images: ["lamp.png"],
  mainColorDark: false,
  backgroundColor: "black",
};

const tyyniDesignProject = (catalogIsCompressed) => {
  return {
    id: "tyyni",
    title: "Tyyni",
    description:
      "A sound diffusing wall element, with oustanding acoustic qualities and beautiful form. The overall shape of Tyyni is based on a tested mathematical equation that ensures a high-quality sonic experinece. The wave-like form gives a visual expression that matches the acoustic qualities - without compromising the sound.",
    year: 2017,
    isTeam: false,
    categories: ["Product Design", "Acoustic Design", "Wall Panel Design"],
    displayableCategory: 1,
    images: ["tyyni1.jpg", "tyyni2.jpg", "tyyni3.jpg"],
    descriptionStyle: {
      ...descriptionPlacementBottomCentered,
      left: catalogIsCompressed
        ? catalogCollapsedWidthPlusMargin
        : catalogWidthPlusMargin,
      transition: "left 1s",
    },
    imageStyle: {
      common: {},
      individual: [
        {
          objectFit: "contain",
          objectPosition: "0 0",
          left: catalogIsCompressed ? catalogCollapsedWidth : catalogWidth,
          transition: "left 1s",
        },
      ],
    },
    mainColorDark: true,
    catalogColorDark: false,
    backgroundColor: backgroundColorDark,
  };
};

const kuutamoDesignProject = {
  id: "kuutamo",
  title: "Kuutamo",
  description:
    "A directional night light that provides light to you, without interrupting your partner's sleep. The light is perfect for two people sharing a bed, allowing one to stay awake while the other sleeps. Kuutamo works well aesthetically both as a single piece for one person, or as two lamps side-by-side.",
  year: 2016,
  isTeam: false,
  categories: ["Product Design", "Furniture Design", "Lamp Design"],
  displayableCategory: 2,
  images: ["kuu.png"],
  mainColorDark: false,
  backgroundColor: "black",
};

const kiskoDesignProject = {
  id: "kisko",
  title: "Kisko",
  description:
    "An elegant industrial furniture series that combines character with comfort. Made out of industrial materials, Kisko furniture gets its identity from the intuitive yet original way of connecting the components.",
  year: 2019,
  isTeam: false,
  categories: ["Furniture Design", "Chair Design", "Component Design"],
  displayableCategory: 2,
  images: ["kisko.png"],
  classes: "contain",
  mainColorDark: true,
  backgroundColor: "white",
};

const kierreDesignProject = {
  id: "kierre",
  title: "Kierre",
  description:
    "An electric toothbrush designed for recyclability and the circular economy. The shell of the toothbrush is manufactured from recycled plastic, made out of monomaterial components and designed for easy disassembly. Kierre showcases that products designed for recyclability can be beautiful, by turning the recyclable features into the product's own aesthetics.",
  year: 2020,
  isTeam: true,
  designTeam: [
    "Sebastian Högnabba",
    "Mikko Siponen",
    "Tuomas Jussila",
    "Aurora Tani",
  ],
  categories: [
    "Home Appliance Design",
    "Design for Recyclability",
    "Design for the Circular Economy",
  ],
  displayableCategory: 2,
  images: ["kierre1.png", "kierre2.png", "kierre3.png", "kierre4.png"],
  classes: "contain contain-center",
  imageStyle: {
    common: {
      paddingTop: "100px",
      paddingBottom: "120px",
      maxWidth: "calc(100vh - 340px)",
    },
    individual: [{}, {}, {}, { transform: "translateX(70%)" }],
  },
  descriptionStyle: descriptionPlacementRightCenter,
  mainColorDark: false,
  backgroundColor: "black",
};

const kolmioillaDesignProject = (catalogIsCompressed) => ({
  id: "kolmiot",
  title: "Kohdataan Kolmioilla",
  description:
    "Three pieces of street furniture that create a space that encourages both planned and incidental encounters. The concept is designed for an unused triangle-shaped cobblestone plaza in front of the Helsinki Design Museum, where three neighborhoods meet. Together the triangular pieces of furniture create a cultural meeting point for city residents.",
  year: 2020,
  isTeam: true,
  designTeam: ["Sebastian Högnabba", "Johanna Kesälä", "Anna Akins"],
  categories: ["Street Furniture Design", "Chair Design", "Spatial Design"],
  displayableCategory: 2,
  images: ["kolmiot1.png", "kolmiot2.png", "kolmiot3.png", "kolmiot4.png"],
  descriptionStyle: {
    ...descriptionPlacementTopCentered,
    left: catalogIsCompressed
      ? catalogCollapsedWidthPlusMargin
      : catalogWidthPlusMargin,
    transition: "left 1s",
  },
  imageStyle: {
    individual: [
      {},
      {},
      {},
      {
        height: "calc(100% - 240px)",
        objectFit: "cover",
        marginTop: "120px",
        marginBottom: "120px",
      },
    ],
  },
  mainColorDark: false,
  backgroundColor: "black",
});

const museDesignProject = {
  id: "muse",
  title: "Muse",
  description:
    "A community connecting UBS bank, millennials and startups through providing unique experiences to its members. Muse is a value-added service for millenials that helps them form a connection with their bank from an early age. Muse is a service. Muse is a web application. Muse is a brand. Muse is a community.",
  year: 2014,
  isTeam: true,
  designTeam: [
    "Sebastian Högnabba",
    "Tik Ho Lee",
    "Beatrice Hutzli",
    "Matthias Wittmann",
    "Martina Rakaric",
    "Samuel Huber",
    "Shanshan Chu",
    "Yuntao Zhu",
    "Elena Vimpari",
    "Issey Ishikura",
  ],
  displayTeamHorizontal: "true",
  categories: ["Service Design", "Web Design", "Concept Design"],
  displayableCategory: 0,
  mainImage: ["muse.png"],
  images: [
    "muse1.jpg",
    "muse2.jpg",
    "muse3.png",
    "muse4.png",
    "muse5.jpg",
    "muse6.jpg",
    "muse7.jpg",
  ],
  classes: "contain",
  imageStyle: {
    common: {
      paddingBottom: "250px",
      left: "80px",
    },
  },
  descriptionStyle: {
    right: catalogWidthPlusMargin,
    left: "80px",
    bottom: "40px",
  },
  carouselStyle: {
    common: {
      padding: "40px 0px 60px",
      height: "calc(100% - 100px)",
      width: "auto",
      margin: "auto",
    },
    individual: [
      { backgroundColor: "white", paddingLeft: "30px", paddingRight: "30px" },
      { backgroundColor: "white", paddingLeft: "70px", paddingRight: "70px" },
      {},
      {},
      { padding: "0", height: "100%" },
      { padding: "0", height: "100%" },
      {
        padding: "12%",
        height: "100%",
        backgroundColor: "white",
        boxSizing: "border-box",
      },
    ],
  },
  mainColorDark: true,
  backgroundColor: "#6bc9b7",
};

const anneliinaDesignProject = {
  id: "anneliina",
  title: "Anneliina",
  description:
    "A new brand identity for Anneliina that communicates the caring service's core values: compassion, respect, trustworthiness and personalized care. The brand update included the launch of a re-designed responsive website and new marketing material, such as flyers and newspaper ads.",
  year: 2016,
  isTeam: false,
  categories: ["Brand Identity Design", "Web Design", "Graphic Design"],
  displayableCategory: 0,
  images: [
    "anneliina1.png",
    "anneliina2.png",
    "anneliina3.png",
    "anneliina4.png",
    "anneliina5.png",
  ],
  classes: "contain contain-center",
  imageStyle: {
    common: {
      paddingTop: "270px",
    },
  },
  descriptionStyle: {
    top: "50px",
    left: "80px",
    right: catalogWidthPlusMargin,
  },
  carouselStyle: {
    common: {
      padding: "40px 0px 60px",
      height: "calc(100% - 100px)",
      width: "auto",
      margin: "auto",
    },
    individual: [
      {},
      {},
      {},
      {},
      {
        padding: "15%",
        height: "100%",
        boxSizing: "border-box",
      },
    ],
  },
  mainColorDark: true,
  backgroundColor: "#96c1d9",
};

const scootDesignProject = {
  id: "scoot",
  title: "Scoot",
  description:
    "A responsive website showcasing designs for electric foldable scooters. The site displays seven scooter designs that were exhibited at Helsinki Design Week. The Scoot website has an impressive video and high quality images of the scooters, details about the exhibition, information about thew design project and a press kit.",
  year: 2017,
  isTeam: false,
  categories: ["Web Design", "UX Design", "UI Design"],
  displayableCategory: 0,
  showVideo: true,
  images: ["scoot1.png", "scoot2.png", "scoot3.png"],
  classes: "contain contain-center",
  imageStyle: {
    common: {
      paddingTop: "270px",
    },
  },
  descriptionStyle: {
    top: "50px",
    left: "80px",
    right: "480px",
  },
  carouselStyle: {
    common: {
      padding: "40px 0px 60px",
      height: "calc(100% - 100px)",
      width: "auto",
      margin: "auto",
    },
  },
  mainColorDark: true,
  backgroundColor: "#f8f379",
};

const axiomDesignProject = {
  id: "axiom",
  title: "Axiom",
  description:
    "A network that brings students, university and industry together to produce qualitative doctoral research. A service that manifests itself as a network, series of events and co-creation platform. Axiom allwos doctoral candidates, unviersities and companies to conduct more qualitave, compelling and relevant industrial PhD research.",
  year: 2019,
  isTeam: true,
  designTeam: [
    "Sebastian Högnabba",
    "Ira Ottmann",
    "Suvi Majander",
    "Yi-tzu Hsiao",
  ],
  categories: ["Service Design", "Co-Design", "Concept Design"],
  displayableCategory: 0,
  mainImage: ["axiom.png"],
  images: [
    "axiom1.jpg",
    "axiom2.jpg",
    "axiom3.jpg",
    "axiom4.jpg",
    "axiom5.jpg",
    "axiom6.jpg",
    "axiom7.jpg",
    "axiom8.jpg",
  ],
  classes: "contain",
  imageStyle: { common: { paddingTop: "250px", left: "0px" } },
  descriptionStyle: {
    top: "45px",
    right: "445px",
    width: "425px",
  },
  mainColorDark: true,
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
    images: [""],
    mainColorDark: true,
    backgroundColor: "black",
  },
];

export const industrialProjects = (catalogIsCompressed) => [
  kaarnaDesignProject,
  tyyniDesignProject(catalogIsCompressed),
  kierreDesignProject,
  kolmioillaDesignProject(catalogIsCompressed),
];

export const digitalProjects = (catalogIsCompressed) => [
  museDesignProject,
  anneliinaDesignProject,
  scootDesignProject,
  axiomDesignProject,
];
