export function fetchYears() {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: currentYear - 2014 }, (_, i) => currentYear - i);
}
