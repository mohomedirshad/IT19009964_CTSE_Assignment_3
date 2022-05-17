const ROUTES = [
    {
        url: '/cart',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "http://localhost:9000/cart",                        
            changeOrigin: true,
            pathRewrite: {
                [`^/cart`]: '',
            },
        }
    },
    {
        url: '/products',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "http://localhost:3000/products",
            changeOrigin: true,
            pathRewrite: {
                [`^/products`]: '',
            },
        }
    },
    {
        url: '/payment',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "http://localhost:8080/payment",
            changeOrigin: true,
            pathRewrite: {
                [`^/payment`]: '',
            },
        }
    }
]

exports.ROUTES = ROUTES;