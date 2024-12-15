interface Blog {
  _id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  url: string;
}

const blogData: Blog[] = [
  {
    _id: "1",
    createdAt: "2024-12-01 10:00 AM",
    updatedAt: "2024-12-01 10:00 AM",
    title: "Exploring Al Amri Group",
    subtitle:
      "Al Amri Group: Your Trusted Partner for Comprehensive Business Solutions",
    description:
      "In the digital age, the demand for effective SEO solutions has led to the emergence of a thriving marketplace filled with a wide array of SEO services and tools. From agencies offering comprehensive SEO packages to freelancers specializing in niche services, businesses have plenty of options to choose from when it comes to become a global leader across all sectors we operate in, recognized for our unwavering commitment to quality, customer satisfaction, and sustainable growth. Our vision is to push the boundaries of what's possible, setting new standards of excellence and creating lasting impacts in the communities we serve.",
    url: "/",
    image: "blog-1.jpg",
  },
  {
    _id: "2",
    createdAt: "2024-12-07 10:00 AM",
    updatedAt: "2024-12-07 10:00 AM",
    title: "Exceeding Expectations",
    subtitle:
      "Al Amri's Commitment to Quality and Service",
    description:
      "Meeting customer expectations is not enough for Al Amri—we aim to exceed them. Learn how our dedication to quality and continuous improvement ensures customer satisfaction and long-term trust.",
    url: "/",
    image: "blog-2.jpg",
  },
  {
    _id: "3",
    createdAt: "2024-12-03 10:00 AM",
    updatedAt: "2024-12-03 10:00 AM",
    title: "Elevating Catering Standards",
    subtitle:
      "World-Class Catering Services by Al Amri Group",
    description:
      "Our catering division takes pride in providing exceptional dining experiences. Whether it's high-end corporate events or intimate gatherings, our team of skilled chefs crafts world-class meals tailored to your needs. Learn how we blend innovation and quality to deliver unforgettable flavors.",
    url: "/",
    image: "blog-3.jpg",
  },
  {
    _id: "4",
    createdAt: "2024-12-04 10:00 AM",
    updatedAt: "2024-12-04 10:00 AM",
    title: "Innovation at the Core",
    subtitle:
      "How Al Amri Stays Ahead in a Competitive Industry",
    description:
      "In an ever-evolving market, innovation is key. At Al Amri, our dedicated team continuously explores new ideas and technologies to improve products and services. Dive into how our passion for innovation drives excellence and sets us apart.",
    url: "/",
    image: "innovation.png",
  },
  {
    _id: "5",
    createdAt: "2024-12-05 10:00 AM",
    updatedAt: "2024-12-05 10:00 AM",
    title: "A Legacy of Excellence",
    subtitle:
      "Al Amri's Journey Since 2002",
    description:
      "From humble beginnings in 2002 to becoming a trusted name in wholesale distribution, Al Amri Group has always prioritized excellence. Explore our journey of growth and the milestones that have shaped our reputation as industry leaders.",
    url: "/",
    image: "legacy.png",
  },
  {
    _id: "6",
    createdAt: "2024-12-06 10:00 AM",
    updatedAt: "2024-12-06 10:00 AM",
    title: "Empowering Teams",
    subtitle:
      "The Al Amri Approach to Teamwork and Collaboration",
    description:
      "At Al Amri, our people are our greatest asset. Discover how we foster teamwork, collaboration, and professional growth within our organization, creating a culture of empowerment and shared success.",
    url: "/",
    image: "teamwork.png",
  },
  {
    _id: "7",
    createdAt: "2024-12-02 10:00 AM",
    updatedAt: "2024-12-02 10:00 AM",
    title: "Building on Integrity",
    subtitle:
      "How Al Amri Group Stays True to Its Values of Honesty and Respect",
    description:
      "At Al Amri, integrity forms the backbone of our operations. From fostering trust with our stakeholders to maintaining transparency in all transactions, our commitment to honesty is unwavering. Discover how we prioritize strong relationships and cultivate a work environment that values mutual respect and collaboration.",
    url: "/",
    image: "values.png",
  },
  {
    _id: "8",
    createdAt: "2024-12-08 10:00 AM",
    updatedAt: "2024-12-08 10:00 AM",
    title: "Sustainable Growth",
    subtitle:
      "The Future of Al Amri Group",
    description:
      "As we look to the future, sustainability remains a core focus for Al Amri Group. From eco-friendly practices to community engagement, discover our vision for creating a lasting, positive impact in every sector we operate.",
    url: "/",
    image: "sustainability.png",
  },
];

export default blogData;
