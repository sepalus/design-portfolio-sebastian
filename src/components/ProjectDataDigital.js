import {
  marginTopMin,
  descriptionPlacementCenteredRightExpandable,
  descriptionStyleWebTablet,
  descriptionStyleServiceTablet,
  imageStyleDigital,
  imageStyleServiceTablet,
  imageStyleWebMain,
  imageStyleWebMainDynamicWidth,
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

const sydanpuuDesignProject = (catalogIsCompressed) => ({
  id: "sydanpuu",
  title: "Sydänpuu",
  description:
    "A graphic visualization of the company's sustainability efforts and strategy. The infographic communicates the sustainable materials, sustainable values and climate actions of the company with both measurable metrics and narratives.",
  year: 2021,
  isTeam: true,
  designTeam: ["Sebastian Högnabba", "Linnea Seeskari", "Ida Gröndahl"],
  displayTeamHorizontal: "true",
  categories: ["Graphic Design", "Sustainability Design", "Infographic Design"],
  displayableCategory: 0,
  images: ["sydanpuu1.jpg", "sydanpuu2.png", "sydanpuu3.png"],
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
    individual: [{}, { padding: "0px" }, { padding: "0px" }],
  },

  descriptionStyle: {
    ...descriptionPlacementCenteredRightExpandable(catalogIsCompressed),
    letterSpacing: "-0.005em",
    bottom: "110px",
  },
  descriptionStyleTablet: descriptionStyleServiceTablet(catalogIsCompressed),
  mainColorDark: true,
  backgroundColor: "#f8f3bb",
  backgroundColorLight: {
    common: "f8f8da",
    individual: [null, "white", "white"],
  },
});

const helfiDesignProject = (catalogIsCompressed) => ({
  id: "helfi",
  title: "Hel.fi",
  description:
    "The complete re-design of the City of Helsinki’s website of over 7000 pages. This extensive project transformed Hel.fi into a highly accessible, user-centric website, that allows for navigation of city services according to user needs rather than organizational structures. The work included designing strategic theme sites that align with the City of Helsinki’s startegy, and establishing a city-wide Design System inclusing UX components, patterns and templates. The project resulted in a unified digital experience that emphasizes inclusivity and accessibility, allowing all citizens to easily navigate and utilize city services.",
  descriptionShort:
    "The complete re-design of the City of Helsinki’s website of over 7000 pages. The project transformed Hel.fi into a highly accessible, user-centric website, that allows for navigation of city services according to user needs rather than organizational structures.",
  isTeam: true,
  categories: ["Design", " Design", "Design"],
  displayableCategory: 0,
  images: [
    "helfi1.png",
    "helfi2.jpg",
    "helfi3.jpg",
    "helfi4.png",
    "helfi5.png",
    "helfi6.png",
  ],
  firstImageIsDuplicate: false,
  classes: "contain",
  imageStyle: {
    individual: [
      {
        ...imageStyleDigital(catalogIsCompressed),
        ...imageStyleWebMain(catalogIsCompressed),
      },
      { objectFit: "cover" },
      { objectFit: "cover" },
      imageStyleDigital(catalogIsCompressed),
      imageStyleDigital(catalogIsCompressed),
      imageStyleDigital(catalogIsCompressed),
    ],
  },
  imageStyleTablet: {
    individual: [imageStyleWebTablet(catalogIsCompressed)],
  },
  imageStyleMobile: {
    individual: [
      { imageStyleMobilePadding },
      { objectFit: "cover" },
      { objectFit: "cover", padding: "0px" },
      { imageStyleMobilePadding },
      { imageStyleMobilePadding },
      { imageStyleMobilePadding },
    ],
  },
  descriptionStyle: {
    ...descriptionPlacementCenteredRightExpandable(catalogIsCompressed),
    top: marginTopMin,
  },
  descriptionStyleTablet: descriptionStyleWebTablet(catalogIsCompressed),
  mainColorDark: true,
  backgroundColor: "#ccf7ed",
  backgroundColorLight: { common: "#e6fbf6" },
});

const anneliina2022DesignProject = (catalogIsCompressed) => ({
  id: "anneliina2022",
  title: "Anneliina (2022)",
  description:
    "A re-design of Hoivapalvelu Anneliina's visual identity and website. The new brand identity is modern, elegant and communicates the caring service's core values: compassion, respect, trust and personalized care. The project included the design of colors, fonts, logos, visual elements and the website.",
  descriptionShort:
    "A re-design of Hoivapalvelu Anneliina's visual identity and website. The new brand identity is modern, elegant and communicates the caring service's core values: compassion, respect, trust and personalized care. The project included the design of colors, fonts, logos and visual elements.",
  year: 2022,
  isTeam: false,
  categories: ["Brand Identity Design", "UX Design", "UI Design"],
  displayableCategory: 0,
  images: [
    "anneliina2022_1.png",
    "anneliina2022_1.png",
    "anneliina2022_2.png",
    "anneliina2022_3.png",
    "anneliina2022_5.jpg",
    "anneliina2022_4.png",
  ],
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
    common: imageStyleMobilePadding,
  },
  descriptionStyle: {
    ...descriptionPlacementCenteredRightExpandable(catalogIsCompressed),
    top: marginTopMin,
  },
  descriptionStyleTablet: descriptionStyleWebTablet(catalogIsCompressed),
  mainColorDark: true,
  backgroundColor: "#96c1d9",
  backgroundColorLight: {
    common: "#cbe0ec",
    individual: ["#cbe0ec", "#cbe0ec", "#cbe0ec", "white", "white"],
  },
});

const anneliina2016DesignProject = (catalogIsCompressed) => ({
  id: "anneliina2016",
  title: "Anneliina (2016)",
  description:
    "A new brand identity for Anneliina that communicates the caring service's core values: compassion, respect, trust and personalized care. The brand update included the launch of a re-designed responsive website and new marketing material, such as flyers and newspaper ads.",
  year: 2016,
  isTeam: false,
  categories: ["Brand Identity Design", "Web Design", "Graphic Design"],
  displayableCategory: 0,
  images: [
    "anneliina2016_1.png",
    "anneliina2016_1.png",
    "anneliina2016_2.png",
    "anneliina2016_3.png",
    "anneliina2016_4.png",
    "anneliina2016_5.png",
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
  backgroundColor: "#ebe6da",
  backgroundColorLight: { common: "#f4f1e9" },
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

const consultancyProject = (catalogIsCompressed) => ({
  isTeam: true,
  categories: ["Design", " Design", "Design"],
  displayableCategory: 0,
  firstImageIsDuplicate: false,
  classes: "contain",
  imageStyle: {
    common: {
      ...imageStyleDigital(catalogIsCompressed),
      maxHeight: "500px",
      backgroundColor: "#fdeaef",
      padding: "0px",
      margin: "50px",
      width: "auto",
    },
    individual: [
      { ...imageStyleWebMainDynamicWidth(catalogIsCompressed) },
      {},
      { backgroundColor: "none" },
    ],
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
  backgroundColor: "#9098bc",
  backgroundColorLight: { common: "#d9d9ed" },
});

const professionalServicesDesignProject = (catalogIsCompressed) => ({
  ...consultancyProject(catalogIsCompressed),
  id: "professionalServices",
  title: "Professional Services Portal",
  description:
    "Crafting digital products to streamline professional services, focusing on automating tasks like risk assurance and tax advisory to enhance efficiency and client satisfaction..",
  descriptionShort:
    "Crafting digital products to streamline professional services, focusing on automating tasks like risk assurance and tax advisory to enhance efficiency and client satisfaction.",
  images: [
    "professionalServices1.png",
    "professionalServices2.png",
    "professionalServices3.png",
    "professionalServices4.png",
  ],
});

const retailDesignProject = (catalogIsCompressed) => ({
  ...consultancyProject(catalogIsCompressed),
  id: "retail",
  title: "E-Commerce Website",
  description:
    "Creating a seamless online shopping experience through a responsive webshop, enhancing customer engagement and streamlining the retail journey from browsing to checkout.",
  descriptionShort:
    "Creating a seamless online shopping experience through a responsive webshop, enhancing customer engagement and streamlining the retail journey from browsing to checkout.",
  images: ["retail1.png", "retail2.png", "retail3.png", "retail4.png"],
});

const publicTransportDesignProject = (catalogIsCompressed) => ({
  ...consultancyProject(catalogIsCompressed),
  id: "publicTransport",
  title: "HSL - Public Transportation",
  description:
    "Designing user-friendly digital products, that improve route planning for citizens and training for HSL employees, resulting in a better commuting experience.",
  descriptionShort:
    "Designing user-friendly digital products, that improve route planning for citizens and training for HSL employees, resulting in a better commuting experience.",
  images: [
    "publicTransport1.png",
    "publicTransport2.png",
    "publicTransport3.png",
    "publicTransport4.png",
  ],
});
const ministryDesignProject = (catalogIsCompressed) => ({
  ...consultancyProject(catalogIsCompressed),
  id: "ministry",
  title: "Ministry of Justice",
  description:
    "Transforming legal processes by designing an award-winning intuitive digital service that digitizes court proceedings, enhancing efficiency and accessibility in the justice system.",
  descriptionShort:
    "Transforming legal processes by designing an award-winning intuitive digital service that digitizes court proceedings, enhancing efficiency and accessibility in the justice system.",
  images: ["ministry1.png", "ministry2.png", "ministry3.png", "ministry4.png"],
});

const financialServicesDesignProject = (catalogIsCompressed) => ({
  ...consultancyProject(catalogIsCompressed),
  id: "financialServices",
  title: "Financial Services Website",
  description:
    "Re-designing the company’s website to modernize its online presence, making financial information and services more accessible and user-friendly for clients.",
  descriptionShort:
    "Re-designing the company’s website to modernize its online presence, making financial information and services more accessible and user-friendly for clients.",
  images: [
    "financialServices1.png",
    "financialServices2.png",
    "financialServices3.png",
    "financialServices4.png",
  ],
});

export const digitalProjects = (catalogIsCompressed) => [
  helfiDesignProject(catalogIsCompressed),
  anneliina2022DesignProject(catalogIsCompressed),
  museDesignProject(catalogIsCompressed),
  sydanpuuDesignProject(catalogIsCompressed),
  scootDesignProject(catalogIsCompressed),
  axiomDesignProject(catalogIsCompressed),
  anneliina2016DesignProject(catalogIsCompressed),
  professionalServicesDesignProject(catalogIsCompressed),
  retailDesignProject(catalogIsCompressed),
  publicTransportDesignProject(catalogIsCompressed),
  ministryDesignProject(catalogIsCompressed),
  financialServicesDesignProject(catalogIsCompressed),
];
