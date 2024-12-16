interface ServiceItem {
    title: string;
    text: string;
    description: string;
    image: string;
    class: string;
}

const serviceData: ServiceItem[] = [
    {
        title: "Catering & Restaurant Excellence",
        text: "Elevate your events with our world-class catering services. Fresh ingredients and exceptional detail.",
        description:
            "Elevate your events with our world-class catering services. From corporate gatherings to intimate occasions, we craft unforgettable culinary experiences with fresh ingredients and exceptional attention to detail.",
        image: "service-1.png",
        class: "w-40"
    },
    {
        title: "Road Safety & Equipment",
        text: "Ensure seamless construction projects with our reliable performance tools and safety equipment.",
        description:
            "Ensure seamless and efficient construction projects with our performance tools and safety equipment designed for reliability.",
        image: "service-2.png",
        class: "w-20"
    },
    {
        title: "Building Materials Trading",
        text: "Explore our extensive range of top-quality wholesale building materials at competitive prices.",
        description:
            "Discover our extensive range of top-quality wholesale offerings, ensuring durability and affordability for your construction projects.",
        image: "service-3.png",
        class: "w-40"
    },
    {
        title: "Expert Consultation & Support",
        text: "Leverage our industry expertise and personalized guidance to achieve your goals.",
        description:
            "Benefit from our industry expertise and personalized guidance to overcome challenges and achieve success in your projects.",
        image: "service-4.gif",
        class: "w-40"
    },
    {
        title: "Welding & Fabrication Solutions",
        text: "Unlock precision with custom metal fabrication tailored to your unique needs.",
        description:
            "Unlock precision and innovation with our custom metal fabrication services tailored to meet your unique project requirements.",
        image: "welding.gif",
        class: ""
    },
    {
        title: "Shopping Center",
        text: "Shop with ease at our well-equipped centers, tailored for all your needs.",
        description:
            "Benefit from our industry expertise and personalized guidance at our shopping centers, offering quality and convenience.",
        image: "service-6.png",
        class: "w-20"
    },
];

export default serviceData;
