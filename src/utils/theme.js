import styleToCss from "./css";
import React from "react";

export const fontWeights = {
  bold: 700,
  medium: 600,
  mediumLight: 500,
  regular: 400,
};

/* These are inspired by https://material-ui.com/customization/z-index/ */
export const zIndices = {
  navBar: 1202,
  tabBar: 1201,
  drawer: 1200,
  modal: 1300,
  floatAbove: 1,
};

const primaryFont = "GT America Expanded, Helvetica";
const secondaryFont = "GT America Standard, Helvetica";
const accentFont = "Noe Display, Times New Roman";

const typeFaces = {
  h3primary: typeFace(primaryFont, "20px", "28px", fontWeights.bold),
  h4primary: typeFace(primaryFont, "18px", "24px", fontWeights.bold),
  h5primary: typeFace(primaryFont, "16px", "20px", fontWeights.bold),
  h6primary: typeFace(primaryFont, "14px", "18px", fontWeights.bold),
  h6primarytiny: typeFace(primaryFont, "12px", "20px", fontWeights.bold),
  h6primaryxtiny: typeFace(primaryFont, "10px", "16px", fontWeights.bold),
  h3secondary: typeFace(secondaryFont, "20px", "26px", fontWeights.bold),
  h4secondary: typeFace(secondaryFont, "18px", "22px", fontWeights.bold),
  h5secondary: typeFace(secondaryFont, "16px", "20px"),
  h5secondarylabel: typeFace(secondaryFont, "16px", "16px"),
  h6secondary: typeFace(secondaryFont, "14px", "18px"),
  h6secondarytiny: typeFace(secondaryFont, "12px", "16px"),
  h6secondaryxtiny: typeFace(secondaryFont, "10px", "12px"),
  h1accent: typeFace(accentFont, "40px", "46px", fontWeights.regular),
  h2accent: typeFace(accentFont, "32px", "40px", fontWeights.regular),
  h3accent: typeFace(accentFont, "26px", "34px", fontWeights.regular),
  h4accent: typeFace(accentFont, "20px", "26px", fontWeights.regular),
  h5accent: typeFace(accentFont, "16px", "20px", fontWeights.regular),
};

export const typeFacesCss = Object.fromEntries(
  Object.entries(typeFaces).map(([key, typeface]) => [
    key,
    styleToCss(typeface),
  ])
);

function typeFace(fontFamily, fontSize, lineHeight, fontWeight = "inherit") {
  return {
    fontFamily,
    fontSize,
    lineHeight,
    fontWeight,
    fontKerning: "normal",
    fontFeatureSettings: '"kern" 1, "ss05"' /* ss05: rounded dots */,
  };
}

export const COLORS = {
  coolGray: "#F8F8F8",
  lightGray: "#F2F2F2",
  gray: "#DCDCDC",
  darkGray: "#999999",
  darkerGray: "#757575",
  yesBlue: "#0000FF",
  yesYellow: "#FFFB00",
  yesRed: "#FF4F0E",
  lightPink: "#FEF3EB",
  fbBlue: "#1877F2",
  yesBlack: "#000000",
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  bgPrimary: COLORS.yesBlue,
  bgSeconday: "",
  bgSuccess: "",
  bgDanger: COLORS.yesRed,
  bgInfo: "",
  bgLargeLight: COLORS.coolGray,
  bgLight: COLORS.lightGray,
  bgDark: COLORS.yesBlack,
  bgWhite: "#FFFFFF",
  bgFrosted: "rgba(255, 255, 255, 0.8)",
  bgDarkOverlay: "rgba(0, 0, 0, 0.3)",
  borderPrimary: COLORS.yesBlue,
  borderSecondary: "",
  borderSuccess: "",
  borderDanger: COLORS.yesRed,
  borderInfo: "",
  borderLight: COLORS.lightGray,
  borderGray: COLORS.gray,
  borderDark: COLORS.yesBlack,
  borderWhite: "#FFFFFF",
  secondaryRed: COLORS.yesRed,
  textPrimary: COLORS.yesBlue,
  textSecondary: COLORS.yesRed,
  textSuccess: "",
  textDanger: COLORS.yesRed,
  textDark: COLORS.yesBlack,
  textWhite: "#FFFFFF",
  textGray: COLORS.darkGray,
  textAccessibleGray: COLORS.darkerGray,
  textLightGray: COLORS.lightGray,
  typeFaces,
  fontWeights,
  zIndices,
  errorRed: "#FF0000",
  popUpBoxShadow: "0px 8px 50px 2px rgba(0, 0, 0, 0.4)",
  mediumBoxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.2)",
  smallBoxShadow: "0px 6px 10px 0px rgba(0, 0, 0, 0.1)",
  xSmallBoxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
};

export function FontFaces() {
  return (
    <>
      <style jsx global>{`
        @font-face {
          ${fontFace({
            fontFamily: "GT America Standard",
            fontStyle: "normal",
            fontWeight: "100",
            fontFilePrefix: "GT-America-Standard-Ultra-Light",
            fontDisplay: "swap",
          })}
        }

        @font-face {
          ${fontFace({
            fontFamily: "GT America Standard",
            fontStyle: "italic",
            fontWeight: "100",
            fontFilePrefix: "GT-America-Standard-Ultra-Light-Italic",
            fontDisplay: "swap",
          })}
        }

        @font-face {
          ${fontFace({
            fontFamily: "GT America Standard",
            fontStyle: "normal",
            fontWeight: "200",
            fontFilePrefix: "GT-America-Standard-Thin",
            fontDisplay: "swap",
          })}
        }

        @font-face {
          ${fontFace({
            fontFamily: "GT America Standard",
            fontStyle: "italic",
            fontWeight: "200",
            fontFilePrefix: "GT-America-Standard-Thin-Italic",
            fontDisplay: "swap",
          })}
        }

        @font-face {
          ${fontFace({
            fontFamily: "GT America Standard",
            fontStyle: "normal",
            fontWeight: "300",
            fontFilePrefix: "GT-America-Standard-Light",
            fontDisplay: "swap",
          })}
        }

        @font-face {
          ${fontFace({
            fontFamily: "GT America Standard",
            fontStyle: "italic",
            fontWeight: "300",
            fontFilePrefix: "GT-America-Standard-Light-Italic",
            fontDisplay: "swap",
          })}
        }

        @font-face {
          ${fontFace({
            fontFamily: "GT America Standard",
            fontStyle: "normal",
            fontWeight: "400",
            fontFilePrefix: "GT-America-Standard-Regular",
            fontDisplay: "swap",
          })}
        }

        @font-face {
          ${fontFace({
            fontFamily: "GT America Standard",
            fontStyle: "italic",
            fontWeight: "400",
            fontFilePrefix: "GT-America-Standard-Regular-Italic",
            fontDisplay: "swap",
          })}
        }

        @font-face {
          ${fontFace({
            fontFamily: "GT America Standard",
            fontStyle: "normal",
            fontWeight: "500 600",
            fontFilePrefix: "GT-America-Standard-Medium",
            fontDisplay: "swap",
          })}
        }

        @font-face {
          ${fontFace({
            fontFamily: "GT America Standard",
            fontStyle: "italic",
            fontWeight: "500 600",
            fontFilePrefix: "GT-America-Standard-Medium-Italic",
            fontDisplay: "swap",
          })}
        }

        @font-face {
          ${fontFace({
            fontFamily: "GT America Standard",
            fontStyle: "normal",
            fontWeight: "700 900",
            fontFilePrefix: "GT-America-Standard-Bold",
            fontDisplay: "swap",
          })}
        }

        @font-face {
          ${fontFace({
            fontFamily: "GT America Standard",
            fontStyle: "italic",
            fontWeight: "700 900",
            fontFilePrefix: "GT-America-Standard-Bold-Italic",
            fontDisplay: "swap",
          })}
        }

        @font-face {
          ${fontFace({
            fontFamily: "GT America Standard",
            fontStyle: "normal",
            fontWeight: "900",
            fontFilePrefix: "GT-America-Standard-Black",
            fontDisplay: "swap",
          })}
        }

        @font-face {
          ${fontFace({
            fontFamily: "GT America Standard",
            fontStyle: "italic",
            fontWeight: "900",
            fontFilePrefix: "GT-America-Standard-Black-Italic",
            fontDisplay: "swap",
          })}
        }

        @font-face {
          ${fontFace({
            fontFamily: "GT America Expanded",
            fontWeight: "100 900",
            fontFilePrefix: "GT-America-Expanded-Bold",
            fontDisplay: "swap",
          })}
        }

        @font-face {
          font-family: "Noe Display";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url("${CDN_PATH}/Noe-Display-Regular.ttf") format("truetype");
        }
      `}</style>
    </>
  );
}

const CDN_PATH = "https://cdn.theyes.com/frontend-assets/web/fonts";
const LOCAL_PATH = "/assets/web/fonts";
function fontFace({
  fontFamily,
  fontFilePrefix,
  fontStyle = undefined,
  fontWeight,
  fontDisplay,
}) {
  return `
      font-family: '${fontFamily}';
      ${fontStyle ? `font-style: ${fontStyle};` : ""}
      ${fontWeight ? `font-weight: ${fontWeight};` : ""}
      ${fontDisplay ? `font-display: ${fontDisplay};` : ""}
      src:
          url('${CDN_PATH}/${fontFilePrefix}.otf') format('opentype'),
          url('${CDN_PATH}/${fontFilePrefix}.ttf') format('truetype'),
          url('${CDN_PATH}/${fontFilePrefix}.woff') format('woff'),
          url('${CDN_PATH}/${fontFilePrefix}.woff2') format('woff2'),
          url('${LOCAL_PATH}/${fontFilePrefix}.otf') format('opentype'),
          url('${LOCAL_PATH}/${fontFilePrefix}.ttf') format('truetype'),
          url('${LOCAL_PATH}/${fontFilePrefix}.woff') format('woff'),
          url('${LOCAL_PATH}/${fontFilePrefix}.woff2') format('woff2');
  `;
}
