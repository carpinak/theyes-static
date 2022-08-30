const CDN_HOST_NAME = "cdn.theyes.com";
export const CDN_IMAGES_URL =
  "https://cdn.theyes.com/frontend-assets/web/images";

export default function getImageFromCdn(
  imageUrl,
  imageWidth,
  dimension,
  quality = 80
) {
  if (!imageUrl) {
    return "";
  }
  // failsafe if we have product url being served from any other place
  if (imageUrl.indexOf(CDN_HOST_NAME) < 0) {
    return imageUrl;
  }
  // svg image resizing is not supported by the CDN. So skip for SVG images.
  if (imageUrl.indexOf(".svg") >= 0) {
    return imageUrl;
  }

  // if dimension (desired width) > image width, then there is no point in
  // resizing the image. Simply return the original URL.
  if (dimension >= imageWidth) {
    return imageUrl;
  }

  // format=auto: Return webp if the browser supports it.
  // https://developers.cloudflare.com/images/url-format
  const cgiParams = ["format=auto"];
  if (dimension) {
    cgiParams.push(`width=${dimension}`);
    cgiParams.push("fit=scale-down");
  }
  if (quality) {
    cgiParams.push(`quality=${quality}`);
  }
  if (cgiParams.length > 0) {
    return `https://${CDN_HOST_NAME}/cdn-cgi/image/${cgiParams.join(
      ","
    )}${imageUrl.substring(`https://${CDN_HOST_NAME}`.length)}`;
  }
  return imageUrl;
}
