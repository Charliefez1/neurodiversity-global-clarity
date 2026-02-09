export interface Client {
  name: string;
  url: string;
  logo: string; // Clearbit logo URL
}

export interface ClientCategory {
  title: string;
  description: string;
  clients: Client[];
}

const logo = (domain: string) => `https://logo.clearbit.com/${domain}`;

export const publicSector: Client[] = [
  { name: "NHS", url: "https://www.nhs.uk", logo: logo("nhs.uk") },
  { name: "NHS England", url: "https://www.england.nhs.uk", logo: logo("england.nhs.uk") },
  { name: "NHS Blood and Transplant", url: "https://www.nhsbt.nhs.uk", logo: logo("nhsbt.nhs.uk") },
  { name: "GOV.UK", url: "https://www.gov.uk", logo: logo("gov.uk") },
  { name: "NIHR", url: "https://www.nihr.ac.uk", logo: logo("nihr.ac.uk") },
  { name: "Royal Berkshire Fire & Rescue", url: "https://www.rbfrs.co.uk", logo: logo("rbfrs.co.uk") },
  { name: "Transport for London", url: "https://tfl.gov.uk", logo: logo("tfl.gov.uk") },
  { name: "University of Cambridge", url: "https://www.cam.ac.uk", logo: logo("cam.ac.uk") },
  { name: "Warwick University", url: "https://www.warwick.ac.uk", logo: logo("warwick.ac.uk") },
  { name: "University of New Mexico", url: "https://www.unm.edu", logo: logo("unm.edu") },
  { name: "National Crime Agency", url: "https://www.nationalcrimeagency.gov.uk", logo: logo("nationalcrimeagency.gov.uk") },
  { name: "The National Lottery", url: "https://www.national-lottery.co.uk", logo: logo("national-lottery.co.uk") },
  { name: "Alan Turing Institute", url: "https://www.turing.ac.uk", logo: logo("turing.ac.uk") },
  { name: "Welsh Government", url: "https://www.gov.wales", logo: logo("gov.wales") },
  { name: "Engineering Council", url: "https://www.engc.org.uk", logo: logo("engc.org.uk") },
];

export const enterprise: Client[] = [
  { name: "IBM", url: "https://www.ibm.com", logo: logo("ibm.com") },
  { name: "Google", url: "https://www.google.com", logo: logo("google.com") },
  { name: "PayPal", url: "https://www.paypal.com", logo: logo("paypal.com") },
  { name: "Lloyds Bank", url: "https://www.lloydsbank.com", logo: logo("lloydsbank.com") },
  { name: "Aviva", url: "https://www.aviva.co.uk", logo: logo("aviva.co.uk") },
  { name: "Volkswagen Group", url: "https://www.volkswagenag.com", logo: logo("volkswagenag.com") },
  { name: "Royal Mail", url: "https://www.royalmail.com", logo: logo("royalmail.com") },
  { name: "Sky", url: "https://www.sky.com", logo: logo("sky.com") },
  { name: "Elastic", url: "https://www.elastic.co", logo: logo("elastic.co") },
  { name: "Kyndryl", url: "https://www.kyndryl.com", logo: logo("kyndryl.com") },
  { name: "Morgan Sindall", url: "https://www.morgansindall.com", logo: logo("morgansindall.com") },
  { name: "CACI", url: "https://www.caci.co.uk", logo: logo("caci.co.uk") },
  { name: "SUEZ", url: "https://www.suez.com", logo: logo("suez.com") },
  { name: "Bacardi", url: "https://www.bacardilimited.com", logo: logo("bacardilimited.com") },
  { name: "Marriott International", url: "https://www.marriott.com", logo: logo("marriott.com") },
  { name: "Holiday Inn by IHG", url: "https://www.ihg.com", logo: logo("ihg.com") },
  { name: "Atlas Hotels", url: "https://www.atlashotels.co.uk", logo: logo("atlashotels.co.uk") },
  { name: "HyperionDev", url: "https://www.hyperiondev.com", logo: logo("hyperiondev.com") },
  { name: "Multiverse", url: "https://www.multiverse.io", logo: logo("multiverse.io") },
  { name: "Quadrature", url: "https://www.quadrature.co", logo: logo("quadrature.co") },
  { name: "Compare the Market", url: "https://www.comparethemarket.com", logo: logo("comparethemarket.com") },
  { name: "Agilio Software", url: "https://www.agiliosoftware.com", logo: logo("agiliosoftware.com") },
  { name: "TransPennine Express", url: "https://www.tpexpress.co.uk", logo: logo("tpexpress.co.uk") },
  { name: "Elis", url: "https://www.elis.com", logo: logo("elis.com") },
  { name: "XPO Logistics", url: "https://www.xpo.com", logo: logo("xpo.com") },
  { name: "Smartest Energy", url: "https://www.smartestenergy.com", logo: logo("smartestenergy.com") },
  { name: "Geocaching", url: "https://www.geocaching.com", logo: logo("geocaching.com") },
  { name: "Millennium", url: "https://www.millennium.com", logo: logo("millennium.com") },
];

export const charityThirdSector: Client[] = [
  { name: "ACAS", url: "https://www.acas.org.uk", logo: logo("acas.org.uk") },
  { name: "FareShare", url: "https://fareshare.org.uk", logo: logo("fareshare.org.uk") },
  { name: "Brook Green Supply", url: "https://www.brookgreensupply.com", logo: logo("brookgreensupply.com") },
  { name: "Animal Health Trust", url: "https://www.aht.org.uk", logo: logo("aht.org.uk") },
];

export const clientCategories: ClientCategory[] = [
  {
    title: "Public sector, government & education",
    description: "From the NHS to government departments and leading universities.",
    clients: publicSector,
  },
  {
    title: "Global enterprise & commercial",
    description: "FTSE 250, Fortune 500, and high-growth organisations across every sector.",
    clients: enterprise,
  },
  {
    title: "Charity & third sector",
    description: "Non-profits and specialist organisations building inclusive practice.",
    clients: charityThirdSector,
  },
];

export const allClients: Client[] = [...publicSector, ...enterprise, ...charityThirdSector];

// Top-tier recognisable logos for the marquee
export const marqueeClients: Client[] = [
  ...publicSector.filter((c) => ["NHS", "GOV.UK", "Transport for London", "University of Cambridge", "Alan Turing Institute", "Welsh Government", "National Crime Agency"].includes(c.name)),
  ...enterprise.filter((c) => ["IBM", "Google", "PayPal", "Lloyds Bank", "Aviva", "Volkswagen Group", "Royal Mail", "Sky", "Elastic", "Marriott International", "Compare the Market", "XPO Logistics", "Bacardi", "Multiverse"].includes(c.name)),
  ...charityThirdSector.filter((c) => ["ACAS", "FareShare"].includes(c.name)),
];

export const trustSignals = [
  "#1 neurodiversity training brand in the workplace sector globally",
  "2024–25 CSAT score: 9.7 / 10",
  "30,000+ people directly trained",
  "750+ organisations across business, public sector, and education",
  "Recommended by ACAS, BEO, and UK Government Foreign Office",
  "2,000+ people cognitively assessed via exclusive partnership with Cognassist",
  "Recognised neurodiversity training supplier across the NHS",
  "Trusted by HR, Management, and Leadership teams representing 5M+ employees globally",
];
