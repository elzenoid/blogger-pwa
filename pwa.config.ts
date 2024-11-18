import type { Config } from './types';

export default {
  version: '1.0',
  id: '/',
  name: 'elzeno.id',
  shortName: 'elzeno.id',
  description: 'Biografi, Motifasi, Tradisi dan Inspirasi',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'scr1',
      shortName: 'scr1',
      description: 'Gabung Grup WhatsApp Penjaga Tradisi Sunnah',
      url: '/search/label/scr1?utm_source=homescreen',
    },
    {
      name: 'scr2',
      shortName: 'scr2',
      description: 'Pilih menu favorit di pojok kanan atas',
      url: '/search/label/scr2?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '********-****-****-****-************',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.elzeno.id',
} satisfies Config;
