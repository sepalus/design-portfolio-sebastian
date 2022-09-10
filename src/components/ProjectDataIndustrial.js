import variables from "../variables.js";

const { backgroundColorBlack, backgroundColorDark, catalogWidthPlusMargin } =
  variables;

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
    "With its three different lamp shades, the Kajo lamp lights up the room with a rich and atmospheric light. The elegant and minimalistic lamp is shaped entirely by the conditions of light. Each lamp shade directs and reflects light in a carefully designed matter. As a result, Kajo provides atmospheric lighting to the surrounding space, and is also a stylish interior design piece in its own right.",
  year: 2021,
  isTeam: false,
  categories: ["Furniture Design", "Lamp Design", "Lighting Design"],
  displayableCategory: 1,
  images: [
    "kajo1.jpg",
    "kajo2.jpg",
    "kajo3.png",
    "kajo4.png",
    "kajo5.jpg",
    "kajo6.jpg",
    "kajo7.jpg",
    "kajo8.png",
    "kajo9.jpg",
  ],
  descriptionStyle: {
    ...descriptionPlacementBottomRightCorner,
    right: "60px",
  },
  imageStyle: {
    individual: [
      {
        objectPosition: "50% 30%",
      },
      {
        objectPosition: "50% 30%",
      },
      {
        objectFit: "contain",
      },
      {
        objectFit: "contain",
      },
    ],
  },
  imageStyleMobile: {
    individual: [
      {
        objectPosition: "50% 30%",
      },
      {
        objectPosition: "50% 30%",
      },
      {
        objectFit: "contain",
      },
      {
        objectFit: "contain",
      },
    ],
  },
  mainColorDark: false,
  backgroundColor: "black",
};

const tyyniDesignProject = {
  id: "tyyni",
  title: "Tyyni",
  description:
    "Tyyni is a fascinating and elegant pendant lamp made from acrylic plastic. The formal language of the lamp expresses lightness, serenity, and stability. Inspired my tranquil motion in nature, Tyyni provides a calm ambience to the room. It has a sort of elegant and serene floating presence.",
  year: 2021,
  isTeam: false,
  categories: ["Furniture Design", "Lamp Design", "Lighting Design"],
  displayableCategory: 1,
  images: [
    "tyyni1.jpg",
    "tyyni2.jpg",
    "tyyni3.jpg",
    "tyyni4.jpg",
    "tyyni5.jpg",
    "tyyni6.jpg",
    "tyyni7.jpg",
  ],
  descriptionStyle: {
    ...descriptionPlacementBottomRightCorner,
    right: "60px",
  },
  imageStyle: {
    individual: [
      {
        objectPosition: "50% 30%",
      },
      {
        objectPosition: "50% 30%",
      },
    ],
  },
  imageStyleMobile: {
    individual: [
      {
        objectPosition: "50% 30%",
      },
      {
        objectPosition: "50% 30%",
      },
    ],
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
    "Kisko is an elegant, industrial furniture series that combines beauty with expressive character. Kisko introduces an industrial connecting component - the stainless steel U-channel - to the world of furniture. The U-channel is a widely used component in industrial design. It is strong and robust, and increases its strength when bent appropriately. The component functions great as a furniture connector, as it can be inserted into slits in wooden boards.",
  year: 2019,
  isTeam: false,
  categories: ["Furniture Design", "Chair Design", "Component Design"],
  displayableCategory: 2,
  images: [
    "kisko1.jpg",
    "kisko2.jpg",
    "kisko3.jpg",
    "kisko4.jpg",
    "kisko5.jpg",
  ],
  descriptionStyle: {
    bottom: "80px",
    left: catalogWidthPlusMargin,
  },

  mainColorDark: false,
  backgroundColor: "black",
  descriptionColorDark: true,
  imageStyle: {
    individual: [
      {
        objectFit: "contain",
        paddingTop: "20px",
        paddingBottom: "200px",
        height: "auto",
        backgroundColor: "white",
      },
      {},
      {},
      {},
      {},
      { objectFit: "contain" },
      { objectFit: "contain" },
      { objectFit: "contain" },
      { objectFit: "contain" },
    ],
  },
  imageStyleMobile: {
    individual: [
      { objectFit: "contain", backgroundColor: "white" },
      {},
      {},
      {},
      {},
      { objectFit: "contain" },
      { objectFit: "contain" },
      { objectFit: "contain" },
      { objectFit: "contain" },
    ],
  },
};

const koloDesignProject = {
  id: "kolo",
  title: "Kolo",
  description:
    "Kolo is a modular, configurable seating solution for children of all ages. Through its modularity and easy setup, Kolo caters to all types of learners. The Kolo seat can be assembled and re-assembled in a number of different ways, to set up different learning environments. With the help of the light-weight, yet robust acoustic panels made out of recycled PET plastic a multitude of seating solutions can be assembled.",
  year: 2022,
  isTeam: false,
  categories: ["Furniture Design", "Lamp Design", "Lighting Design"],
  displayableCategory: 1,
  images: [
    "kolo1.jpg",
    "kolo2.jpg",
    "kolo3.jpg",
    "kolo4.jpg",
    "kolo5.jpg",
    "kolo6.jpg",
  ],
  descriptionStyle: {
    ...descriptionPlacementTopRightCorner,
    right: "60px",
  },

  imageStyle: {
    common: {},
    individual: [
      {},
      {},
      { objectFit: "contain", backgroundColor: "white" },
      { objectFit: "contain", backgroundColor: "white" },
      { objectPosition: "50% 100%" },
    ],
  },
  imageStyleMobile: {
    common: {},
    individual: [
      {},
      {},
      { objectFit: "contain", backgroundColor: "white" },
      { objectFit: "contain", backgroundColor: "white" },
      { objectPosition: "50% 100%" },
    ],
  },
  mainColorDark: false,
  backgroundColor: "black",
  descriptionColorDark: true,
};

const kierreDesignProject = {
  id: "kierre",
  title: "Kierre",
  description:
    "An electric toothbrush designed for recyclability and the circular economy. The toothbrush is manufactured from recycled ABS plastic, made out of monomaterial components and designed for easy disassembly. Kierre demonstrates that products designed for recyclability can have beautiful and elegent aesthetics.",
  descriptionShort:
    "An electric toothbrush designed for recyclability and the circular economy. Kierre is manufactured from recycled ABS plastic, made from monomaterial components and designed for easy disassembly. It demonstrates that products designed for recyclability can have beautiful and elegant aesthetics.",
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

const runkoDesignProject = {
  id: "runko",
  title: "Runko",
  description:
    "The Runko display cabinet is made from solid wood and glass. The rounded wooden corner pillars, cladded with wooden ribs express strength and durability and emphasize the importance and value of the items being displayed. The Runko display cabinet expresses stability and security is a modern and elegant manner, with a touch of decor. A perfect place to showcase your valuables.",
  year: 2022,
  isTeam: false,
  categories: ["Furniture Design", "Lamp Design", "Lighting Design"],
  displayableCategory: 1,
  images: ["runko1.jpg", "runko2.jpg", "runko3.jpg", "runko4.jpg"],
  descriptionStyle: {
    ...descriptionPlacementTopRightCorner,
    right: "60px",
  },

  imageStyle: {
    individual: [
      { objectFit: "contain", backgroundColor: "white" },
      {
        objectFit: "contain",
        backgroundColor: "white",
        paddingLeft: "10vw",
        paddingTop: "5vw",
      },
    ],
  },
  imageStyleMobile: {
    individual: [
      { objectFit: "contain", backgroundColor: "white" },
      {
        objectFit: "contain",
        backgroundColor: "white",
        paddingLeft: "10vw",
        paddingTop: "5vw",
      },
    ],
  },
  mainColorDark: false,
  backgroundColor: "black",
  descriptionColorDark: true,
};

const kuutiotDesignProject = {
  id: "kuutiot",
  title: "Kuutiot",
  description:
    "The Kuutiot display cabinet is made from a steel structure and glass panels. It is based on the pure geometric form of the cube. Visually, the cabinet consists of a cube inside a cube. Two key functions of the cabinet - the supporting and the enveloping - are visually detached from each other. This creates an aesthetically pleasing composition, while allowing the displayable objects to receive most of the viewers’ attention.",
  year: 2022,
  isTeam: false,
  categories: ["Furniture Design", "Lamp Design", "Lighting Design"],
  displayableCategory: 1,
  images: [
    "kuutiot1.jpg",
    "kuutiot2.jpg",
    "kuutiot3.jpg",
    "kuutiot4.jpg",
    "kuutiot5.jpg",
  ],
  descriptionStyle: {
    ...descriptionPlacementTopRightCorner,
    right: "60px",
  },

  imageStyle: {
    common: {},
  },
  imageStyleMobile: {
    common: {},
  },
  mainColorDark: false,
  backgroundColor: "black",
  descriptionColorDark: true,
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

const arkkiDesignProject = {
  id: "arkki",
  title: "Arkki",
  description:
    "Arkki is a beautiful and functional coffee table that combines rattan and leather in an elegant fashion. Arkki is a multifunctional piece of furniture that functions as a coffee table, a serving tray and a storage unit. The leather , creating aesthetical value from its functionality. The leather - which performs several functions of the furniture piece - combined with various rattan weaves creates and interesting, elegant, multifunctional and highly useful piece of furniture.",
  year: 2022,
  isTeam: false,
  categories: ["Furniture Design", "Lamp Design", "Lighting Design"],
  displayableCategory: 1,
  images: [
    "arkki1.png",
    "arkki2.png",
    "arkki3.png",
    "arkki4.png",
    "arkki5.jpg",
    "arkki6.jpg",
    "arkki7.jpg",
    "arkki8.jpg",
  ],
  descriptionStyle: {
    ...descriptionPlacementTopRightCorner,
    width: "280px",
  },

  imageStyle: {
    common: {},
    individual: [
      { objectFit: "contain", backgroundColor: "white" },
      { objectFit: "contain", backgroundColor: "white" },
      { objectFit: "contain", backgroundColor: "white" },
      { objectFit: "contain", backgroundColor: "white" },
      { objectPosition: "50% 100%" },
      { objectPosition: "50% 100%" },
      { objectPosition: "50% 100%" },
    ],
  },
  imageStyleMobile: {
    common: {},
    individual: [
      { objectFit: "contain", backgroundColor: "white" },
      { objectFit: "contain", backgroundColor: "white" },
      { objectFit: "contain", backgroundColor: "white" },
      { objectFit: "contain", backgroundColor: "white" },
      { objectPosition: "50% 100%" },
      { objectPosition: "50% 100%" },
      { objectPosition: "50% 100%" },
    ],
  },
  mainColorDark: false,
  backgroundColor: "black",
  descriptionColorDark: true,
};

export const industrialProjects = (catalogIsCompressed) => [
  kajoDesignProject,
  tyyniDesignProject,
  kaarnaDesignProject,
  kiskoDesignProject,
  //koloDesignProject,
  //arkkiDesignProject,
  runkoDesignProject,
  kuutiotDesignProject,
  kierreDesignProject,
  puolikuuDesignProject,
  //rytmiDesignProject(catalogIsCompressed),
  //kolmioillaDesignProject(catalogIsCompressed),
];
