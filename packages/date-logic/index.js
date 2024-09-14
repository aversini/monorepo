/**
 * Date Logic
 */
module.exports = function getDate(
  locale = "fr-FR",
  options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric"
  }
) {
  return new Date().toLocaleDateString(locale, options);
};
