import type { Organization } from '../types';

export const foodOrganizations: Organization[] = [
  {
    id: "food-not-bombs",
    name: "Food Not Bombs",
    description: "A global movement that recovers surplus food to share free vegan meals with the hungry in protest against war and poverty.",
    category: "Food Justice",
    website: "https://foodnotbombs.net",
    focusAreas: ["food", "community", "economic"],
    engagementTypes: ["in-person", "mutual aid", "direct service", "outreach", "messaging"],
    locations: ["International"],
    logo: "https://foodnotbombs.net/new_site/images/FNB_logo_color%20363_400.png"
  },
  {
    id: "young-farmers",
    name: "National Young Farmers Coalition",
    description: "A national network advocating for the success of young farmers through policy change and support services.",
    category: "Food Justice",
    website: "https://youngfarmers.org",
    focusAreas: ["food", "economic", "direct-democracy", "community", "youth"],
    engagementTypes: ["online", "in-person", "education", "training", "outreach"],
    locations: ["National"],
    logo: "https://equitytrust.org/wordpress/wp-content/uploads/2020/07/NYFC_Logo-334x500.png"
  },
  {
    id: "foodcorps",
    name: "FoodCorps",
    description: "Connects kids to healthy food in schools, helping them lead healthier lives and reach their full potential.",
    category: "Food Justice",
    website: "https://foodcorps.org",
    focusAreas: ["food", "youth", "community", "education"],
    engagementTypes: ["in-person", "education", "training", "direct service", "outreach"],
    locations: ["National"],
    logo: "https://foodcorps.org/wp-content/uploads/2022/02/logo-fc.svg"
  },
  {
    id: "urban-growers-collective",
    name: "Urban Growers Collective",
    description: "Builds a more just and equitable local food system in Chicago through urban agriculture and community development.",
    category: "Food Justice",
    website: "https://urbangrowerscollective.org",
    focusAreas: ["food", "racial", "economic", "community", "youth"],
    engagementTypes: ["in-person", "education", "training", "direct service"],
    locations: ["Chicago, Illinois"],
    logo: "https://images.squarespace-cdn.com/content/v1/62fbbf0d1a5b6d1f4e6aa7fc/0897f4c9-c01f-44a2-9046-c8be63c21231/UGC_logo_new_01+%283%29.png?format=1500w"
  },
  {
    id: "seed-savers",
    name: "Seed Savers Exchange",
    description: "A nonprofit dedicated to preserving heirloom seeds and sharing seed-saving knowledge to protect biodiversity.",
    category: "Food Justice",
    website: "https://seedsavers.org",
    focusAreas: ["food", "climate", "community", "indigenous"],
    engagementTypes: ["in-person", "education", "training", "outreach"],
    locations: ["Decorah, Iowa"],
    logo: "https://img1.wsimg.com/isteam/ip/6024d43f-73d1-4214-a0d8-c753226e818b/seed-savers-exchange%20logo.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:730,h:730,cg:true"
  },
  {
    id: "sustainable-agriculture",
    name: "National Sustainable Agriculture Coalition",
    description: "An alliance advocating for federal policy reform to advance sustainable agriculture, food systems, and rural communities.",
    category: "Food Justice",
    website: "https://sustainableagriculture.net",
    focusAreas: ["food", "climate", "economic", "direct-democracy"],
    engagementTypes: ["online", "advocacy", "outreach", "education", "training"],
    locations: ["National"],
    logo: "data:image/png;base64,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"
  },
  {
    id: "why-hunger",
    name: "WhyHunger",
    description: "Supports grassroots movements to end hunger and advance the right to nutritious food through social justice.",
    category: "Food Justice",
    website: "https://whyhunger.org",
    focusAreas: ["food", "economic", "community", "racial"],
    engagementTypes: ["online", "fundraising", "education", "training", "outreach"],
    locations: ["National"],
    logo: "https://whyhunger.org/wp-content/uploads/2024/07/xxWhyHunger_WebsiteLogo-02.png.pagespeed.ic.-TNPow2SP2.png"
  },
  {
    id: "caff",
    name: "Community Alliance with Family Farmers (CAFF)",
    description: "Builds sustainable food and farming systems through policy advocacy and on-the-ground programs that create more resilient family farms.",
    category: "Food Justice",
    website: "https://caff.org",
    focusAreas: ["food", "economic", "climate", "community"],
    engagementTypes: ["online", "education", "training", "outreach"],
    locations: ["California"],
    logo: "https://i0.wp.com/caff.org/wp-content/uploads/2020/07/CAFF_Seal_color_2020-e1594657915151.jpg?fit=500%2C500&ssl=1"
  }
];