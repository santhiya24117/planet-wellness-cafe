/**
 * Generates an encoded WhatsApp direct order link.
 * Does not require external APIs or API keys.
 */
export function createWhatsAppOrderLink(
  phone: string,
  itemName?: string
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');

  const message = itemName
    ? `Hi Planet Wellness Café! 👋

I'd like to order:

${itemName}

Please confirm availability and current price.

Thank you!`
    : `Hi Planet Wellness Café! 👋

I'd like to place an order.

Please share today's menu and ordering details.

Thank you!`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates an encoded WhatsApp subscription enquiry link.
 */
export function createWhatsAppSubscriptionLink(
  phone: string,
  planName: string,
  details?: {
    cadence?: string;
    dietary?: string;
    timing?: string;
    notes?: string;
  }
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');

  let message = `Hi Planet Wellness Café! 👋

I'm interested in subscribing to:
*${planName}*`;

  if (details?.cadence) {
    message += `\nCadence: ${details.cadence}`;
  }
  if (details?.dietary) {
    message += `\nDietary Preference: ${details.dietary}`;
  }
  if (details?.timing) {
    message += `\nPreferred Delivery: ${details.timing}`;
  }
  if (details?.notes) {
    message += `\nNotes: ${details.notes}`;
  }

  message += `\n\nPlease share menu rotation and subscription confirmation details.\n\nThank you!`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
