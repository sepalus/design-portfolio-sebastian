import variables from "../variables.js";

const { backgroundColorBlack, backgroundColorDark } = variables;

import {
  minWidth,
  marginSideMin,
  alignHorizontalCenter,
  alignVerticalCenter,
  descriptionPlacementBottomRightCorner,
  descriptionPlacementTopLeftCatalog,
  descriptionPlacementTopRightCorner,
  descriptionPlacementRightVerticalCenter,
  descriptionPlacementTabletRightVerticalCenter,
  imageStyleWide,
  imageStyleMobilePaddingVertical,
} from "./ProjectDataCommon";

const kaarnaDesignProject = {
  id: "kaarna",
  title: "Kaarna",
  description:
    "An electric foldable scooter designed for laid-back cruising. With its innovative rotating folding mechanism, high-quality materials and elegant detailing, Kaarna is designed for people who want to ride the streets in style. An urban mobility solution that matches the character of flourishing cities.",
  descriptionShort:
    "An electric foldable scooter designed for laid-back cruising. With its innovative rotating folding mechanism, high-quality materials and elegant detailing, Kaarna is for people who want to ride the streets in style. An urban mobility solution that matches the character of flourishing cities.",
  year: 2018,
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

const kajoDesignProject = {
  id: "kajo",
  title: "Kajo",
  description:
    "A dining room pendant lamp designed for atmospheric dining. The lamp has three lampshades that reflect different intensities of light, giving both a focused and relaxed ambience to the dining experience.",
  year: 2020,
  isTeam: false,
  categories: ["Furniture Design", "Lamp Design", "Lighting Design"],
  displayableCategory: 1,
  images: ["kajo1.jpg", "kajo2.jpg", "kajo3.jpg", "kajo4.jpg", "kajo5.jpg"],
  descriptionStyle: {
    ...descriptionPlacementBottomRightCorner,
    right: "60px",
  },

  imageStyle: {
    common: {
      objectPosition: "50% 30%",
    },
  },
  imageStyleMobile: {
    common: {
      objectPosition: "50% 30%",
    },
  },
  mainColorDark: false,
  backgroundColor: "black",
};

const puolikuuDesignProject = {
  id: "puolikuu",
  title: "Puolikuu",
  description:
    "A bedside wall lamp inspired by soothing moonlight. Puolikuu can be installed as a single piece above the bed, or as two lamps side-by-side above a shared bed, allowing one person to stay awake while the other sleeps.",
  year: 2016,
  isTeam: false,
  categories: ["Product Design", "Furniture Design", "Lamp Design"],
  displayableCategory: 2,
  images: ["puolikuu1.jpg", "puolikuu2.jpg", "puolikuu3.jpg"],
  descriptionStyle: {
    ...descriptionPlacementRightVerticalCenter,
    transform: "translateY(-70%)",
    width: minWidth,
  },
  descriptionStyleTablet: {
    width: "240px",
    right: "60px",
  },
  mainColorDark: false,
  descriptionColorDark: true,
  controlColorDark: true,
  backgroundColor: "black",
};

const kiskoDesignProject = {
  id: "kisko",
  title: "Kisko",
  description:
    "An elegant industrial inspired furniture series that combines comfort with character. Kisko introduces an industrial connecting component - the stainless steel U channel tube - to the world of furniture.",
  year: 2019,
  isTeam: false,
  categories: ["Furniture Design", "Chair Design", "Component Design"],
  displayableCategory: 2,
  images: [
    "kisko1.jpg",
    "kisko2.jpg",
    "kisko3.jpg",
    "kisko4.jpg",
    "kisko5.png",
  ],
  descriptionStyle: { width: "270px", right: " 100px", top: " 100px" },
  descriptionStyleTablet: {
    top: "70px",
    right: "80px",
  },
  mainColorDark: false,
  descriptionColorDark: true,
  controlColorDark: true,
  backgroundColor: "black",
  imageStyle: {
    individual: [
      {},
      {},
      {},
      {},
      {
        objectFit: "contain",
        padding: "100px 200px",
        boxSizing: "border-box",
        backgroundColor: "white",
      },
    ],
  },

  imageStyleTablet: {
    individual: [{}, {}, {}, {}, { padding: "60px 120px" }],
  },
  imageStyleMobile: {
    individual: [
      {},
      {},
      {},
      {},
      {
        objectFit: "contain",
        padding: "70px 60px",
        boxSizing: "border-box",
        backgroundColor: "white",
      },
    ],
  },
};

const kierreDesignProject = {
  id: "kierre",
  title: "Kierre",
  description:
    "An electric toothbrush designed for recyclability and the circular economy. The shell of the toothbrush is manufactured from recycled ABS plastic, made out of monomaterial components and designed for easy disassembly. Kierre demonstrates that products designed for recyclability can have beautiful and elegent aesthetics.",
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
    "Street furniture that creates a space that encourages both planned and incidental encounters. The concept is designed for a triangle-shaped cobblestone plaza in front of the Helsinki Design Museum, where three neighborhoods meet. Together the three triangular pieces of furniture create a cultural meeting point for city residents.",
  descriptionShort:
    "Street furniture that creates a space that encourages both planned and incidental encounters. The concept is designed for a cobblestone plaza in front of the Helsinki Design Museum, where three neighborhoods meet. Together the three pieces of furniture create a cultural meeting point",
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
    individual: [{}, {}, { objectFit: "contain" }, { ...imageStyleWide }],
  },
  imageStyleTablet: {
    common: imageStyleWide,
  },
  imageStyleMobile: {
    common: { objectPosition: "43% 50%" },
    individual: [{}, {}, {}, { objectFit: "cover", minHeight: "250px" }],
  },
  mainColorDark: false,
  backgroundColor: "black",
});

const rytmiDesignProject = (catalogIsCompressed) => ({
  id: "rytmi",
  title: "Rytmi",
  description:
    "A solar balcony that uses solar glass panels in place of regular glass to generate electricity for the building and the grid. The design patterns are printed on architectural glass using dye-sensitized printing methods. Inspired by the movement of the sun, the solar panels give expressive character to the otherwise monotone facade.",
  descriptionShort:
    "A solar balcony that uses solar glass panels in place of regular glass to generate electricity for the building and the grid. The design patterns are printed on architectural glass using dye-sensitized printing. Inspired by sun movement, the solar panels give character to the monotone facade.",
  year: 2021,
  isTeam: false,
  categories: ["Solar Balcony", "Solar Glass", "Solar Panels"],
  displayableCategory: 2,
  iconSize: "26px",
  images: [
    "rytmi1.jpg",
    "rytmi2.jpg",
    "rytmi3.jpg",
    "rytmi4.jpg",
    "rytmi5.jpg",
    "rytmi6.jpg",
  ],
  descriptionStyle: {
    ...descriptionPlacementTopLeftCatalog(catalogIsCompressed),
    transition: "left 1s, right 1s",
  },
  descriptionStyleTablet: {},
  imageStyle: {
    common: alignHorizontalCenter,
    individual: [{ objectFit: "contain" }, {}, {}, { objectFit: "contain" }],
  },
  imageStyleTablet: {},
  imageStyleMobile: {
    individual: [
      {
        objectPosition: "50% 90%",
      },
      {},
      {},
      {
        objectPosition: "50% 90%",
      },
    ],
  },
  mainColorDark: false,
  controlColorDark: true,
  descriptionColorDark: true,
  backgroundColor: "#dddddd",
  backgroundColorMobile: backgroundColorDark,
});

export const industrialProjects = (catalogIsCompressed) => [
  kaarnaDesignProject,
  kajoDesignProject,
  kiskoDesignProject,
  puolikuuDesignProject,
  rytmiDesignProject(catalogIsCompressed),
  kolmioillaDesignProject(catalogIsCompressed),
  kierreDesignProject,
];
