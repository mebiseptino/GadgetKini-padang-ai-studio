import { Product } from '../data/products.ts';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export interface ShopeeTrackingParams {
  item_id?: string;
  item_name?: string;
  item_brand?: string;
  item_category?: string;
  price?: number;
  currency?: string;
  affiliate_code?: string;
  destination_url?: string;
  click_location?: string;
  [key: string]: any;
}

/**
 * Sends GA4 event 'click_shopee' with product details and click origin.
 */
export function trackShopeeClick(product?: Product | null, location: string = 'general') {
  try {
    const eventParams: ShopeeTrackingParams = {
      event_category: 'ecommerce',
      event_label: product ? `${product.brand} - ${product.name}` : 'Shopee Affiliate Link',
      item_id: product?.id || 'gk-shopee',
      item_name: product?.name || 'Shopee Official Store Padang',
      item_brand: product?.brand || 'Shopee',
      item_category: product?.category || 'Gadget',
      price: product?.price || 0,
      currency: 'IDR',
      affiliate_code: product?.shopeeAffiliateCode || 'GK-PADANG',
      destination_url: product?.shopeeUrl || 'https://shopee.co.id',
      click_location: location,
      value: product?.price || 0,
    };

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'click_shopee', eventParams);
    } else if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'click_shopee',
        ...eventParams,
      });
    }
  } catch (err) {
    console.warn('[GA4] Could not record click_shopee event:', err);
  }
}
