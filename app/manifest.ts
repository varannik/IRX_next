import type { MetadataRoute } from 'next'


export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Quantical',
    short_name: 'QT',
    description: 'Real-Time Exchange Tracker, Live Iranian Free Market Rates',
    start_url: '/',
    display: 'fullscreen',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
        {
            "src": "/web-app-manifest-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/web-app-manifest-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
    ],
  }
}
