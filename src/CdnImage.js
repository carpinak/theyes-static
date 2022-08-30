import React from "react";
import getImageFromCdn from "./utils/cdn";

/*
Get all the sources for different widths for a given image.
- imageUrl: Identifier of the base image.
- width: width of the base image.
Creates a srcSet with different sizes of the image.
https://cloudfour.com/thinks/responsive-images-101-part-4-srcset-width-descriptors/
https://formidable.com/blog/2019/responsive-images/

*/
function getSrcSetFromCdn(imageUrl, width) {
  const dimensions = [
    // Thumbnail on PDP on desktop:
    // - 90px X 2 (dots/CSS px) ~ 180
    180,
    // (1) Search item / MLT item on desktop
    // - 260px X 2 = 520
    // (2) Search item on mobile
    // - 414px (iphone) X 44vw X 3 (dots/px) = 546
    550,
    // Mobile PDP image
    // - 414px (iphone) X 60vw X 3 (dots/px) = 745.2
    750,
    // Desktop PDP
    // - 1440px X 44vw X 2 = 1267
    // This is generally close enough to the width of the image
    // that we ignore this.
    width,
  ];

  /* For now comment out the logic to compute accurate sizes. This
  potentially reduces CDN cache hit rate because we end up requesting
  too many sizes.
  sizes.forEach(size => {
    const [vpWidth, vw] = size;
    // vw is of the form "px", use the px value directly.
    const pxMatch = vw.match(/(\d+)px/);
    let dim = width;

    if (pxMatch) {
      // Dimension is in px. Use as is.
      dim = pxMatch[1];
    } else {
      // Dimension is in vw. Multiply vw value by the viewport size.
      // If specified, use the viewport size, otherwise use 1900.
      const vwMatch = vw.match(/(\d+)vw/);
      if (vwMatch) {
        dim = Math.ceil((vwMatch[1] * (vpWidth < 0 ? 1900 : vpWidth)) / 100);
      }
    }
    [1, 2, 3, 4].forEach(m => {
      dimensions.push(dim * m);
    });
  });
  */

  return (
    dimensions
      // Remove any values above the width of the image.
      .filter((value) => value <= width)
      // Remove any duplicates.
      .filter((value, index, self) => self.indexOf(value) === index)
      // Get the CDN URL and the width of the image as a tuple.
      .map((x) => [getImageFromCdn(imageUrl, width, x), `${x}w`].join(" "))
      .join(",")
  );
}

function redirectImageToGCS(imageUrl) {
  return imageUrl?.replace(
    // TODO: An experiment to serve images bypassing Cloudflare.
    // This should be handled in the IB.
    /^https:\/\/cdn.theyes.com\/images\/v2\//,
    "https://static.theyes.com/images/v2/"
  );
}

function getSrcSetForProcessedImage(processedImage, width) {
  const necessaryDimensions = [180, 550, 750, width];

  const preResizedWidthToUrl = new Map();
  processedImage?.altSizes?.forEach((resized) => {
    preResizedWidthToUrl.set(resized.width, resized.gcsUrl);
  });

  return (
    necessaryDimensions
      // Remove any values above the width of the image.
      .filter((value) => value <= width)
      // Remove any duplicates.
      .filter((value, index, self) => self.indexOf(value) === index)
      .map((srcWidth) => {
        let url;
        if (preResizedWidthToUrl.has(srcWidth)) {
          url = preResizedWidthToUrl.get(srcWidth);
          url = redirectImageToGCS(url);
        } else {
          url = getImageFromCdn(processedImage?.gcsUrl, width, srcWidth);
        }
        return `${url} ${srcWidth}w`;
      })
      .join(",")
  );
}

/*
Compute the sizes for the image src set based on:
https://cloudfour.com/thinks/responsive-images-101-part-5-sizes/

input is an array of the form:
[ (view_port max width, percentage of view width used by image), ... ]
e.g. sizes = [
    [800, 100],
    [-1, 20],
  ] means that if viewport is < 800px, then the image uses 100% of the view
  width, otherwise it used 20%.
*/
function getSizes(sizes) {
  const outSizes = [];
  sizes.forEach((size) => {
    const [vpWidth, vw] = size;
    if (vpWidth > 0) {
      outSizes.push(`(max-width: ${vpWidth}px) ${vw}`);
    } else {
      outSizes.push(`${vw}`);
    }
  });
  return outSizes.join(",");
}

CdnImage.defaultProps = {
  width: 1600,
  height: 2400,
  mobileSize: "100vw",
  desktopSize: "100vw",
  style: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    borderRadius: "0.25rem",
  },
};

export default function CdnImage({
  src,
  alt,
  width = undefined,
  height = undefined,
  style,
  className,
  mobileSize,
  desktopSize,
  onError,
  ...props
}) {
  const sizes = [
    [414, mobileSize],
    [-1, desktopSize],
  ];
  const sizesStr = getSizes(sizes);
  let srcSet, srcStr;
  if (typeof src === "string") {
    srcSet = getSrcSetFromCdn(src, width);
    srcStr = src;
  } else {
    // src is a ProcessedImage.
    srcSet = getSrcSetForProcessedImage(src, width);
    srcStr = src?.gcsUrl;
  }
  return (
    <img
      alt={alt}
      width={width}
      height={height}
      style={{
        color: "transparent" /* hide alt text */,
        ...style,
      }}
      {...(className && { className })}
      src={redirectImageToGCS(srcStr)}
      sizes={sizesStr}
      srcSet={srcSet}
      {...props}
      onError={onError}
    />
  );
}
