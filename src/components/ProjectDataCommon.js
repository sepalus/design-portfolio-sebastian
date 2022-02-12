import variables from "../variables.js";

const {
  catalogWidth,
  catalogWidthPlusMargin,
  catalogRemainingWidth,
  catalogCollapsedWidth,
  catalogCollapsedWidthPlusMargin,
  catalogCollapsedRemainingWidth,
} = variables;

export const minWidth = "258px";
export const minWidthTablet = "235px";
export const marginSideMin = "80px";
export const marginSideMinTablet = "60px";
export const marginTopMin = "70px";
export const marginBottomMin = "90px";
export const topAlignWithTitle = "126px";
export const bottomAlign = "60px";

export const alignVerticalCenter = {
  top: "50%",
  transform: "translateY(-50%)",
};

export const alignHorizontalCenter = {
  right: "50%",
  transform: "translateX(50%)",
};

export const descriptionPlacementTopRightCorner = {
  top: topAlignWithTitle,
  right: marginSideMin,
  width: minWidth,
};

export const descriptionPlacementBottomRightCorner = {
  bottom: bottomAlign,
  right: marginSideMin,
  width: minWidth,
};

export const descriptionPlacementRightVerticalCenter = {
  ...alignVerticalCenter,
  width: minWidth,
  right: marginSideMin,
};

export const descriptionPlacementTopLeftCatalog = (catalogIsCompressed) => ({
  top: "50px",
  right: marginSideMin,
  left: catalogIsCompressed
    ? catalogCollapsedWidthPlusMargin
    : catalogWidthPlusMargin,
});

export const descriptionPlacementTabletRightVerticalCenter = {
  ...alignVerticalCenter,
  right: marginSideMinTablet,
  width: minWidthTablet,
};

export const imageStyleMobilePaddingVertical = {
  paddingTop: "50px",
  paddingBottom: "50px",
};

export const imageStyleMobilePadding = {
  padding: "6%",
};

export const imageStyleWide = {
  height: "calc(100% - 240px)",
  marginTop: "120px",
  marginBottom: "120px",
};

export const imageStyleMobileCover = {
  width: "100%",
  padding: "0px",
  objectFit: "cover",
};

export const descriptionPlacementCenteredRightExpandable = (
  catalogIsCompressed
) => ({
  ...moveImageOnExpand(catalogIsCompressed),
  right: catalogIsCompressed
    ? catalogCollapsedWidthPlusMargin
    : catalogWidthPlusMargin,
  transition: "left 1s, right 1s",
});

export const imageStyleDigital = (catalogIsCompressed) => ({
  ...imageStyleWide,
  right: catalogIsCompressed ? catalogCollapsedWidth : catalogWidth,
  left: 0,
  width: catalogIsCompressed
    ? catalogCollapsedRemainingWidth
    : catalogRemainingWidth,
  transition: "width 1s",
  padding: "0px 72px",
});

export const imageStyleWebMain = (catalogIsCompressed) => ({
  ...moveImageOnExpand(catalogIsCompressed),
  margin: "300px 0px 100px -20px",
  padding: "0px",
  height: "calc(100% - 400px)",
  width: "auto",
});

export const imageStyleWebTablet = (catalogIsCompressed) => ({
  left: catalogIsCompressed ? "118px" : "90px",
  margin: "350px 0px 100px -20px",
  height: "calc(100% - 450px)",
});

export const imageStyleServiceTablet = (catalogIsCompressed) => ({
  left: catalogIsCompressed ? "122px" : "80px",
});

export const descriptionStyleServiceTablet = (catalogIsCompressed) =>
  catalogIsCompressed
    ? {
        left: "122px",
        right: "218px",
      }
    : {
        left: "80px",
        right: "260px",
      };

export const descriptionStyleWebTablet = (catalogIsCompressed) =>
  catalogIsCompressed
    ? {
        left: "114px",
        right: "210px",
      }
    : {
        left: "64px",
        right: "412px",
      };

export const moveImageOnExpand = (catalogIsCompressed) => ({
  left: catalogIsCompressed ? "140px" : marginSideMin,
  transition: "left 1s",
});
