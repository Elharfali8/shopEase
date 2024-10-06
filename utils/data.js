import { man1, man2, man3, girl } from "@/images"

export const navLinks = [
    {
        id: 1,
        title: 'home',
        path: '/'
    },
    {
        id: 2,
        title: 'about',
        path: '/about'
    },
    {
        id: 3,
        title: 'products',
        path: '/products'
    },
    {
        id: 4,
        title: 'cart',
        path: '/cart'
    },
]

export const testimonials = [
    {
        id: 1,
        name: 'john Anderson',
        desc: 'This website offers great products and excellent service. I found everything I needed quickly and easily.',
        rate: '4.5/5',
        img: man1
    },
    {
        id: 2,
        name: 'Sarah Miller',
        desc: 'I love the modern design and the user experience. The checkout process was smooth, and my order arrived fast!',
        rate: '4.3/5',
        img: girl
    },
    {
        id: 3,
        name: 'Michael Brown',
        desc: 'Fantastic platform with a wide variety of products. The prices are competitive, and the customer support is great.',
        rate: '4.4/5',
        img: man2
    },
    {
        id: 4,
        name: 'David Wilson',
        desc: "I have been using this website for months, and I am always satisfied. It's my go-to store for all my needs.",
        rate: '4.2/5',
        img: man3
    },
]