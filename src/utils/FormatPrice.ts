export default function formatCoffeePrice(value: number): string {
  return "R$" + (value / 100).toFixed(2).replace(".", ",");
}
