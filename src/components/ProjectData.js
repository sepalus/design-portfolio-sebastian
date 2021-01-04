import variables from "../variables.js";

const {
  catalogWidth,
  catalogWidthPlusMargin,
  catalogRemainingWidth,
  catalogCollapsedWidth,
  catalogCollapsedWidthPlusMargin,
  catalogCollapsedRemainingWidth,
  backgroundColorBlack,
  backgroundColorDark,
} = variables;

const minWidth = "258px";
const minWidthTablet = "235px";
const marginSideMin = "80px";
const marginSideMinTablet = "60px";
const marginTopMin = "70px";
const marginBottomMin = "90px";
const topAlignWithTitle = "126px";

const alignVerticalCenter = {
  top: "50%",
  transform: "translateY(-50%)",
};

const alignHorizontalCenter = {
  right: "50%",
  transform: "translateX(50%)",
};

const descriptionPlacementTopRightCorner = {
  top: topAlignWithTitle,
  right: marginSideMin,
  width: minWidth,
};

const descriptionPlacementRightVerticalCenter = {
  ...alignVerticalCenter,
  width: minWidth,
  right: marginSideMin,
};

const descriptionPlacementTopLeftCatalog = (catalogIsCompressed) => ({
  top: "50px",
  right: marginSideMin,
  left: catalogIsCompressed
    ? catalogCollapsedWidthPlusMargin
    : catalogWidthPlusMargin,
});

const descriptionPlacementTabletRightVerticalCenter = {
  ...alignVerticalCenter,
  right: marginSideMinTablet,
  width: minWidthTablet,
};

const imageStyleMobilePaddingVertical = {
  paddingTop: "50px",
  paddingBottom: "50px",
};

const imageStyleMobilePadding = {
  padding: "50px",
};

const imageStyleWide = {
  height: "calc(100% - 240px)",
  marginTop: "120px",
  marginBottom: "120px",
};

const descriptionPlacementCenteredRightExpandable = (catalogIsCompressed) => ({
  ...moveImageOnExpand(catalogIsCompressed),
  right: catalogIsCompressed
    ? catalogCollapsedWidthPlusMargin
    : catalogWidthPlusMargin,
  transition: "left 1s, right 1s",
});

const imageStyleDigital = (catalogIsCompressed) => ({
  ...imageStyleWide,
  right: catalogIsCompressed ? catalogCollapsedWidth : catalogWidth,
  left: 0,
  width: catalogIsCompressed
    ? catalogCollapsedRemainingWidth
    : catalogRemainingWidth,
  transition: "width 1s",
  padding: "0px 72px",
});

const imageStyleWebMain = (catalogIsCompressed) => ({
  ...moveImageOnExpand(catalogIsCompressed),
  margin: "300px 0px 100px -20px",
  padding: "0px",
  height: "calc(100% - 400px)",
  width: "auto",
});

const imageStyleWebTablet = (catalogIsCompressed) => ({
  left: catalogIsCompressed ? "118px" : "90px",
  margin: "350px 0px 100px -20px",
  height: "calc(100% - 450px)",
});

const imageStyleServiceTablet = (catalogIsCompressed) => ({
  left: catalogIsCompressed ? "122px" : "80px",
});

const descriptionStyleServiceTablet = (catalogIsCompressed) =>
  catalogIsCompressed
    ? {
        left: "122px",
        right: "218px",
      }
    : {
        left: "80px",
        right: "260px",
      };

const descriptionStyleWebTablet = (catalogIsCompressed) =>
  catalogIsCompressed
    ? {
        left: "114px",
        right: "210px",
      }
    : {
        left: "64px",
        right: "412px",
      };

const moveImageOnExpand = (catalogIsCompressed) => ({
  left: catalogIsCompressed ? "140px" : marginSideMin,
  transition: "left 1s",
});

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
  descriptionStyle: { ...descriptionPlacementTopRightCorner, width: "285px" },
  descriptionStyleTablet: {
    ...alignVerticalCenter,
    width: "244px",
    right: marginSideMin,
  },
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

const tyyniDesignProject = {
  id: "tyyni",
  title: "Tyyni",
  description:
    "A sound diffusing wall element, with oustanding acoustic qualities and beautiful form. The overall shape of Tyyni is based on a tested mathematical equation that ensures a high-quality sonic experinece. The wave-like form gives a visual expression that matches the acoustic qualities - without compromising the sound.",
  year: 2017,
  isTeam: false,
  categories: ["Product Design", "Acoustic Design", "Wall Panel Design"],
  displayableCategory: 1,
  images: ["tyyni1.jpg", "tyyni2.jpg"],
  descriptionStyle: {
    ...descriptionPlacementRightVerticalCenter,
    transform: "translateY(-70%)",
    width: minWidth,
  },
  descriptionStyleTablet: {
    top: "200px",
    width: "180px",
    right: "40px",
    transform: "translateY(0)",
  },
  mainColorDark: false,
  controlColorDark: true,
  descriptionColorDark: true,
  backgroundColor: backgroundColorDark,
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
  iconSize: "24px",
  classes: "contain",
  imageStyle: {
    common: {
      ...alignHorizontalCenter,
      paddingTop: "100px",
      paddingBottom: "120px",
      maxWidth: "calc(100vh - 340px)",
    },
    individual: [{}, {}, {}, { transform: "translateX(60%)" }],
  },
  imageStyleMobile: {
    common: {
      ...imageStyleMobilePaddingVertical,
      maxWidth: "calc(100vh - 340px)",
    },
    individual: [
      {},
      { paddingTop: "60px", paddingBottom: "60px" },
      { paddingTop: "60px", paddingBottom: "60px" },
      { transform: "translateX(10%)" },
    ],
  },
  descriptionStyle: {
    ...descriptionPlacementRightVerticalCenter,
    right: "100px",
  },
  descriptionStyleTablet: {
    ...descriptionPlacementTabletRightVerticalCenter,
    width: "230px",
  },
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
  iconSize: "26px",
  descriptionStyle: {
    ...descriptionPlacementTopLeftCatalog(catalogIsCompressed),
    transition: "left 1s, right 1s",
  },
  imageStyle: {
    individual: [{}, {}, {}, { ...imageStyleWide, objectFit: "cover" }],
  },
  imageStyleTablet: {
    common: imageStyleWide,
    individual: [{}, {}, {}, {}],
  },
  imageStyleMobile: {
    individual: [{}, {}, {}, { objectFit: "cover", minHeight: "250px" }],
  },
  mainColorDark: false,
  backgroundColor: "black",
});

const rytmiDesignProject = (catalogIsCompressed) => ({
  id: "rytmi",
  title: "Rytmi",
  description:
    "A solar glass balcony that uses solar glass panels in place of traditional glass to generate electricity for the building and the grid. The patterns are printed on architectural glass using dye-sensitized printing methods, and they integrate seamlessly into the building facade. Inspired by the movement of the sun, the solar panels give expressive character to the otherwise monotone building facade.",
  year: 2021,
  isTeam: false,
  categories: ["Solar Balcony", "Solar Glass", "Solar Panels"],
  displayableCategory: 2,
  images: [
    "rytmi1.jpg",
    "rytmi2.jpg",
    "rytmi3.jpg",
    "rytmi4.jpg",
    "rytmi5.jpg",
    "rytmi6.jpg",
  ],
  classes: "contain",
  descriptionStyle: {
    ...descriptionPlacementTopLeftCatalog(catalogIsCompressed),
    transition: "left 1s, right 1s",
  },
  descriptionStyleTablet: {},
  imageStyle: {
    common: alignHorizontalCenter,
  },
  imageStyleTablet: {},
  imageStyleMobile: {},
  mainColorDark: false,
  controlColorDark: true,
  descriptionColorDark: true,
  backgroundColor: "#dddddd",
  backgroundColorMobile: backgroundColorDark,
});

const museDesignProject = (catalogIsCompressed) => ({
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
  images: [
    "muse1.png",
    "muse2.jpg",
    "muse3.jpg",
    "muse4.png",
    "muse5.png",
    "muse6.jpg",
    "muse7.jpg",
    "muse8.jpg",
  ],
  classes: "contain",
  imageStyle: {
    common: imageStyleDigital(catalogIsCompressed),
    individual: [
      {
        ...moveImageOnExpand(catalogIsCompressed),
        marginTop: marginTopMin,
        marginBottom: "300px",
        width: "auto",
        height: "calc(100% - 370px)",
        padding: "0px",
      },
    ],
  },
  imageStyleTablet: {
    individual: [imageStyleServiceTablet(catalogIsCompressed)],
  },
  imageStyleMobile: {
    common: { ...imageStyleMobilePadding },
  },
  descriptionStyle: {
    ...descriptionPlacementCenteredRightExpandable(catalogIsCompressed),
    bottom: "110px",
  },
  descriptionStyleTablet: descriptionStyleServiceTablet(catalogIsCompressed),
  mainColorDark: true,
  backgroundColor: "#6bc9b7",
});

const anneliinaDesignProject = (catalogIsCompressed) => ({
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
    "anneliina1.png",
    "anneliina2.png",
    "anneliina3.png",
    "anneliina4.png",
    "anneliina5.png",
  ],
  firstImageIsDuplicate: true,
  classes: "contain",
  imageStyle: {
    common: imageStyleDigital(catalogIsCompressed),
    individual: [
      imageStyleWebMain(catalogIsCompressed),
      {},
      {},
      {},
      { padding: "0px 100px" },
      { padding: "0px 100px" },
    ],
  },
  imageStyleTablet: {
    individual: [imageStyleWebTablet(catalogIsCompressed)],
  },
  imageStyleMobile: {
    common: { ...imageStyleMobilePadding },
  },
  descriptionStyle: {
    ...descriptionPlacementCenteredRightExpandable(catalogIsCompressed),
    top: marginTopMin,
  },
  descriptionStyleTablet: descriptionStyleWebTablet(catalogIsCompressed),
  mainColorDark: true,
  backgroundColor: "#96c1d9",
});

const scootDesignProject = (catalogIsCompressed) => ({
  id: "scoot",
  title: "Scoot",
  description:
    "A responsive website showcasing designs for electric foldable scooters. The site displays seven scooter designs that were exhibited at Helsinki Design Week. The Scoot website has a high quality video and images of the scooters, project and exhibition information and a press kit.",
  year: 2017,
  isTeam: false,
  categories: ["Web Design", "UX Design", "UI Design"],
  displayableCategory: 0,
  showVideo: true,
  images: ["scoot1.png", "scoot1.png", "scoot2.png", "scoot3.png"],
  firstImageIsDuplicate: true,
  classes: "contain",
  imageStyle: {
    common: imageStyleDigital(catalogIsCompressed),
    individual: [imageStyleWebMain(catalogIsCompressed)],
  },
  imageStyleTablet: {
    individual: [imageStyleWebTablet(catalogIsCompressed)],
  },
  imageStyleMobile: {
    common: { ...imageStyleMobilePadding },
  },
  descriptionStyle: {
    ...descriptionPlacementCenteredRightExpandable(catalogIsCompressed),
    top: marginTopMin,
  },
  descriptionStyleTablet: descriptionStyleWebTablet(catalogIsCompressed),
  individual: [moveImageOnExpand(catalogIsCompressed)],
  mainColorDark: true,
  backgroundColor: "#f8f379",
});

const axiomDesignProject = (catalogIsCompressed) => ({
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
  displayTeamHorizontal: "true",

  categories: ["Service Design", "Co-Design", "Concept Design"],
  displayableCategory: 0,
  images: [
    "axiom1.png",
    "axiom2.jpg",
    "axiom3.jpg",
    "axiom4.jpg",
    "axiom5.jpg",
    "axiom6.jpg",
    "axiom7.jpg",
    "axiom8.jpg",
    "axiom9.jpg",
  ],
  classes: "contain",
  imageStyle: {
    common: imageStyleDigital(catalogIsCompressed),
    individual: [
      {
        ...moveImageOnExpand(catalogIsCompressed),
        marginTop: marginTopMin,
        marginBottom: "320px",
        width: "auto",
        height: "calc(100% - 390px)",
        padding: "0px",
      },
    ],
  },
  imageStyleTablet: {
    individual: [
      {
        ...imageStyleServiceTablet(catalogIsCompressed),
        marginBottom: "340px",
        height: "calc(100% - 410px)",
      },
    ],
  },
  imageStyleMobile: {
    common: { ...imageStyleMobilePadding },
  },
  descriptionStyle: {
    ...descriptionPlacementCenteredRightExpandable(catalogIsCompressed),
    bottom: "90px",
  },
  descriptionStyleTablet: descriptionStyleServiceTablet(catalogIsCompressed),
  mainColorDark: true,
  backgroundColor: "#d2ebf9",
});

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
  tyyniDesignProject,
  kierreDesignProject,
  kolmioillaDesignProject(catalogIsCompressed),
  rytmiDesignProject(catalogIsCompressed),
];

export const digitalProjects = (catalogIsCompressed) => [
  museDesignProject(catalogIsCompressed),
  anneliinaDesignProject(catalogIsCompressed),
  scootDesignProject(catalogIsCompressed),
  axiomDesignProject(catalogIsCompressed),
];
