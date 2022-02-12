import {
  marginTopMin,
  descriptionPlacementCenteredRightExpandable,
  descriptionStyleWebTablet,
  descriptionStyleServiceTablet,
  imageStyleDigital,
  imageStyleServiceTablet,
  imageStyleWebMain,
  imageStyleWebTablet,
  imageStyleMobileCover,
  imageStyleMobilePadding,
  moveImageOnExpand,
} from "./ProjectDataCommon";

const museDesignProject = (catalogIsCompressed) => ({
  id: "muse",
  title: "Muse",
  description:
    "A community connecting UBS bank, millennials and startups through providing unique experiences to its members. Muse is a value-added service for millenials that helps them form a connection with their bank from an early age. Muse is a service. Muse is a web application. Muse is a brand. Muse is a community.",
  descriptionShort:
    "A community connecting UBS bank, millennials and startups through providing unique experiences to its members. Muse is a service for millenials that helps them form a connection with their bank from an early age. Muse is a service. Muse is a web application. Muse is a brand. Muse is a community.",
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
    common: imageStyleMobilePadding,
    individual: [
      {},
      { padding: "0px" },
      { padding: "0px" },
      {},
      {},
      imageStyleMobileCover,
      { padding: "0px" },
    ],
  },

  descriptionStyle: {
    ...descriptionPlacementCenteredRightExpandable(catalogIsCompressed),
    bottom: "110px",
  },
  descriptionStyleTablet: descriptionStyleServiceTablet(catalogIsCompressed),
  mainColorDark: true,
  backgroundColor: "#6bc9b7",
  backgroundColorLight: {
    common: "#b5e4db",
    individual: [
      null,
      "white",
      "white",
      null,
      null,
      null,
      "rgb(180,180,180)",
      "white",
    ],
  },
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
    common: imageStyleMobilePadding,
  },
  descriptionStyle: {
    ...descriptionPlacementCenteredRightExpandable(catalogIsCompressed),
    top: marginTopMin,
  },
  descriptionStyleTablet: descriptionStyleWebTablet(catalogIsCompressed),
  mainColorDark: true,
  backgroundColor: "#96c1d9",
  backgroundColorLight: { common: "#cbe0ec" },
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
  backgroundColorLight: { common: "#fcf9bc" },
});

const axiomDesignProject = (catalogIsCompressed) => ({
  id: "axiom",
  title: "Axiom",
  description:
    "A network that brings students, university and industry together to produce qualitative doctoral research. A service that manifests itself as a network, series of events and co-creation platform. Axiom allows doctoral candidates, unviersities and companies to conduct more qualitave, compelling and relevant industrial PhD research.",
  descriptionShort:
    "A network that brings students, university and industry together to produce qualitative doctoral research. A service that manifests itself as a network, series of events and co-creation platform. Axiom allows doctoral candidates to conduct more qualitave and relevant industrial PhD research.",
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
    common: imageStyleMobilePadding,
    individual: [
      {},
      imageStyleMobileCover,
      imageStyleMobileCover,
      {},
      imageStyleMobileCover,
      imageStyleMobileCover,
      {},
      imageStyleMobileCover,
    ],
  },
  descriptionStyle: {
    ...descriptionPlacementCenteredRightExpandable(catalogIsCompressed),
    bottom: "90px",
  },
  descriptionStyleTablet: descriptionStyleServiceTablet(catalogIsCompressed),
  mainColorDark: true,
  backgroundColor: "#d2ebf9",
  backgroundColorLight: {
    common: "#e9f5fc",
    individual: [
      null,
      null,
      "white",
      "white",
      null,
      null,
      "white",
      null,
      "white",
    ],
  },
});

export const digitalProjects = (catalogIsCompressed) => [
  museDesignProject(catalogIsCompressed),
  anneliinaDesignProject(catalogIsCompressed),
  scootDesignProject(catalogIsCompressed),
  axiomDesignProject(catalogIsCompressed),
];
