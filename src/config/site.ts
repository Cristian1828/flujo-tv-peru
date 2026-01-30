// Configuración del sitio - peru.flujooficial.com
// Landing optimizada para Perú

export const site = {
    // Dominio y URLs
    domain: 'peru.flujooficial.com',
    canonical: 'https://peru.flujooficial.com',

    // Marca
    brand: {
        name: 'Flujo TV Perú',
        premiumLabel: 'Premium',
        tagline: 'La plataforma más completa de entretenimiento',
        description: 'Streaming premium con +5,000 canales en vivo, deportes peruanos y latinoamericanos, series y películas en HD, FHD y 4K. El mejor precio del mercado.'
    },

    // Contacto
    supportEmail: 'soporte@flujooficial.com',
    whatsappNumber: '51914326729', // Formato internacional sin +

    // Descarga de apps
    download: {
        downloaderCode: '888888',
        mobileApkHref: '/flujo-movil.apk'
    },

    // Precios en Soles
    pricing: {
        currencyCode: 'PEN',
        plans: [
            {
                id: '1m',
                name: '1 Mes',
                price: 34.99,
                label: 'Mensual',
                highlight: false,
                features: [
                    '+ 5000 Canales en Vivo',
                    'Películas y Series HD, FHD y 4K',
                    'Calidad Estable',
                    '3 Pantallas Simultáneas',
                    'Soporte 24/7'
                ]
            },
            {
                id: '3m',
                name: '3 Meses',
                price: 99.99,
                label: 'Trimestral',
                highlight: false,
                features: [
                    '+ 5000 Canales en Vivo',
                    'Películas y Series HD, FHD y 4K',
                    'Calidad Estable',
                    '3 Pantallas Simultáneas',
                    'Soporte 24/7'
                ]
            },
            {
                id: '6m',
                name: '6 Meses',
                price: 179.99,
                label: 'Semestral + 1 Gratis',
                highlight: true,
                features: [
                    '+ 5000 Canales en Vivo',
                    'Películas y Series HD, FHD y 4K',
                    'Calidad Estable',
                    '3 Pantallas Simultáneas',
                    'Soporte 24/7',
                    '+ 1 Mes GRATIS'
                ]
            },
            {
                id: '12m',
                name: '12 Meses',
                price: 339.99,
                label: 'Anual + 2 Gratis',
                highlight: false,
                features: [
                    '+ 5000 Canales en Vivo',
                    'Películas y Series HD, FHD y 4K',
                    'Calidad Estable',
                    '3 Pantallas Simultáneas',
                    'Soporte 24/7',
                    '+ 2 Meses GRATIS'
                ]
            }
        ]
    },

    // SEO optimizado para Perú
    seo: {
        title: 'Flujo TV Perú - Plataforma Premium | +5000 Canales en Vivo HD y 4K',
        description: 'Flujo TV Perú: La plataforma de streaming más completa. +5,000 canales en vivo, deportes peruanos, películas y series en HD, FHD y 4K. Precios en Soles. Activa en minutos.',
        keywords: [
            // Marca
            'Flujo TV',
            'Flujo TV Perú',
            'Flujo TV Premium',

            // Producto principal
            'streaming Perú',
            'televisión en vivo Perú',
            'canales peruanos en vivo',
            'TV peruana online',
            'IPTV Perú',
            'television por internet Peru',

            // Canales específicos
            'América TV en vivo',
            'Latina en vivo',
            'ATV en vivo',
            'Panamericana en vivo',
            'Willax en vivo',
            'canales peruanos gratis',

            // Deportes
            'fútbol peruano en vivo',
            'Liga 1 Perú en vivo',
            'Alianza Lima en vivo',
            'Universitario en vivo',
            'Sporting Cristal en vivo',
            'selección peruana en vivo',
            'ver Copa Libertadores',

            // Por dispositivo
            'Fire Stick Perú',
            'TV Box Perú',
            'Chromecast Perú',
            'ver canales Android Perú',
            'Smart TV Perú',

            // Por contenido
            'películas en español online',
            'series peruanas',
            'novelas latinoamericanas',
            'streaming económico Perú',

            // Calidad y precio
            'streaming 4K Perú',
            'TV en vivo HD Perú',
            'canales en vivo Full HD',
            'streaming barato Perú',
            'mejor IPTV Perú 2024'
        ],
        ogImage: '/og-image.png',
        twitterHandle: '@flujotv'
    }
} as const;

// Helper para generar enlaces de WhatsApp
export function waLink(message: string): string {
    return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Helper para generar URL canónica
export function canonicalUrl(path: string = ''): string {
    return `${site.canonical}${path}`;
}
