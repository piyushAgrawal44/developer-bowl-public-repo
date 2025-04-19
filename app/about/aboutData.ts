export interface Plans {
  id: number;
  title: string;
  price: string;
  plainDes: string[];
}


export const Plans:Plans[] = [
  {
    id: 1,
    title: "Startup Essentials",
    price: "₹14,999",
    plainDes: [
      "Responsive Website (5 Pages)",
      "Basic SEO Optimization",
      "1-Month Maintenance",
      "Domain & Hosting Assistance"
    ]
  },
  {
    id: 2,
    title: "Business Growth",
    price: "₹39,999",
    plainDes: [
      "Custom Web App Development",
      "On-Page & Off-Page SEO",
      "Social Media Integration",
      "3-Month Support & Maintenance"
    ]
  },
  {
    id: 3,
    title: "Enterprise Digital Suite",
    price: "₹89,999",
    plainDes: [
      "End-to-End Mobile App + Web App",
      "Cloud Deployment & DevOps",
      "UI/UX Design Services",
      "6-Month Premium Support"
    ]
  }
];



