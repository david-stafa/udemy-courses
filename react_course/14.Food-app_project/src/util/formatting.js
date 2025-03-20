export function formatCurrency(number) {
  const formattedCurrency = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(number);

  return formattedCurrency;
}
