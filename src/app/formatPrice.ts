export function formatPrice(price: number): string {
    return price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
  }