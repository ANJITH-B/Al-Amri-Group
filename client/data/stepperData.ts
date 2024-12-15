import { Icons } from "@/components/Icons";

interface SteperItem {
  title: string;
  description: string;
  icon: (props: React.SVGAttributes<SVGSVGElement>) => JSX.Element;
}

const stepperData: SteperItem[] = [
  {
    title: "Initial Consultation",
    description:
      "Share your requirements with our team, and we'll provide personalized guidance tailored to your needs.",
    icon: Icons.handshake,
  },
  {
    title: "Detailed Assessment",
    description:
      "We evaluate your inquiry to recommend the best products or services, ensuring optimal solutions for your business.",
    icon: Icons.handshake,
  },
  {
    title: "Customized Quotation",
    description:
      "Receive a competitive, transparent quote crafted to match your specifications and budget.",
    icon: Icons.handshake,
  },
  {
    title: "Seamless Delivery",
    description:
      "Once confirmed, we ensure timely delivery with ongoing support to guarantee your satisfaction.",
    icon: Icons.handshake,
  },
];

export default stepperData