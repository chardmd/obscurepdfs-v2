const getDomain = (paramUrl, paramSubdomain) => {
  const subdomain = paramSubdomain || false;

  let url = paramUrl.replace(/(https?:\/\/)?(www.)?/i, "");

  if (!subdomain) {
    url = url.split(".");

    url = url.slice(url.length - 2).join(".");
  }

  if (url.indexOf("/") !== -1) {
    return url.split("/")[0];
  }

  return url;
};

export default getDomain;
