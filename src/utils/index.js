export const lang = (page = "index") => {
  const l = localStorage.getItem("@lang")
    ? localStorage.getItem("@lang")
    : "en";
  return require("../i18n/" + l + "/" + page);
};
