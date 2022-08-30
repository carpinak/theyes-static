import { createMedia } from "@artsy/fresnel";

export function mediaLessThan(width) {
  return `screen and (max-width: ${width - 1}px)`;
}

export function mediaBetween(minWidth, maxWidth) {
  if (minWidth < 0) {
    return mediaLessThan(maxWidth);
  }
  if (maxWidth < 0) {
    return mediaGreaterOrEqual(minWidth);
  }
  return `screen and (min-width: ${minWidth}px) and (max-width: ${
    maxWidth - 1
  }px)`;
}

export function mediaGreaterOrEqual(width) {
  return `screen and (min-width: ${width}px)`;
}

export function createCssMedia(breakpoints) {
  return {
    mediaLessThan: (breakpoint) => mediaLessThan(breakpoints[breakpoint]),
    mediaBetween: (beginBreakpoint, endBreakpoint) =>
      mediaBetween(breakpoints[beginBreakpoint], breakpoints[endBreakpoint]),
    mediaGreaterOrEqual: (breakpoint) =>
      mediaGreaterOrEqual(breakpoints[breakpoint]),
    widthOf: (breakpoint) => breakpoints[breakpoint],
  };
}

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1192,
  xxl: 1400,
};

const THEYESMedia = createMedia({ breakpoints });

// Generate CSS to be injected into the head
export const mediaStyles = THEYESMedia.createMediaStyle();
export const { Media, MediaContextProvider } = THEYESMedia;
export const CssMedia = createCssMedia(breakpoints);

export function isMobile() {
  return window.innerWidth < CssMedia.widthOf("md");
}
