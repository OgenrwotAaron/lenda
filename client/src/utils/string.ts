export function formatNumber(x: number, decimals: number) {
  return parseFloat(x.toString())
    ?.toFixed(decimals)
    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
