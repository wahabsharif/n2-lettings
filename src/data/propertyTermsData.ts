interface PropertyTerm {
    id: number;
    term: string;
    option1: boolean;
    option2: boolean;
}

interface BranchData {
    id: number;
    mitcham: { name: string; email: string; contact1: string; contact2: string };
    cheam: { name: string; email: string; contact1: string; contact2: string };
}

interface CoveredItem {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
}

export const propertyTermsData: PropertyTerm[] = [
    { id: 1, term: 'Comprehensive marketing to find the right tenant', option1: true, option2: true },
    { id: 2, term: 'Obtaining tenant references', option1: true, option2: true },
    { id: 3, term: 'Tenant identify verification', option1: true, option2: true },
    { id: 4, term: 'Right to Rent checks', option1: true, option2: true },
    { id: 5, term: 'Preparation of tenancy agreement', option1: true, option2: true },
    { id: 6, term: 'Pre-tenancy saftey checks', option1: true, option2: true },
    { id: 7, term: 'Pre-tenancy clean & inventory check-in', option1: true, option2: true },
    { id: 8, term: 'Collection of rent', option1: true, option2: true },
    { id: 9, term: 'Transfer of utilities', option1: true, option2: true },
    { id: 10, term: 'Deposit claim negotiation,compilation & submission', option1: true, option2: true },
    { id: 11, term: 'Compliance advice', option1: true, option2: true },
    { id: 12, term: 'Dedicated Property Manager', option1: false, option2: true },
    { id: 13, term: 'Proactive credit control', option1: false, option2: true },
    { id: 14, term: 'keyholding service', option1: false, option2: true },
    { id: 15, term: 'Arranging payments of outgoings', option1: false, option2: true },
    { id: 16, term: 'Arranging quotes,repairs & maintenance', option1: false, option2: true },
    { id: 17, term: '24-hour emergency contractors', option1: false, option2: true },
    { id: 18, term: 'property inspections', option1: false, option2: true },
    { id: 19, term: 'Managing the check out process', option1: false, option2: true },

];



export const branchData: BranchData[] = [
    {
        id: 1,
        mitcham: {
            name: 'N2 Lettings',
            email: 'N2lettings@gmail.com',
            contact1: '020 34170607',
            contact2: '020 34170608',
        },
        cheam: {
            name: 'N2 Lettings',
            email: 'N2lettings@gmail.com',
            contact1: '020 86427175',
            contact2: '020 86427176',
        },
    },
];






export const coveredPlanData: CoveredItem[] = [
    {
        id: 1,
        imageUrl: "/images/light_blub.jpg",
        title: "Electric & Lights",
        description: "Electrical sockets, Electrical switches, lights",
    },
    {
        id: 2,
        imageUrl: "/images/window_image.jpg",
        title: "Windows & Doors",
        description: "Window glass, internal doors, locks, letter plate",
    },
    {
        id: 3,
        imageUrl: "/images/drains_image.jpg",
        title: "Drains",
        description: "Kitchen sink drain, Bathroom drains, Dishwasher/washing machine drain",
    },
    {
        id: 4,
        imageUrl: "/images/kitchen_image.jpg",
        title: "Kitchen",
        description: "Washing machine, fridge/freezer, hob/stove, oven, kitchen hood, dishwasher, kitchen sink (in tap)",
    },
    {
        id: 5,
        imageUrl: "/images/heating_image.jpg",
        title: "Heating",
        description: "Radiator leaks, radiator replacements, E.P.C rating certificate",
    },
    {
        id: 6,
        imageUrl: "/images/bathroom_image.jpg",
        title: "Bathroom & Toilet",
        description: "Bathtub, basin, shower (incl. tray and screen), mixer tap, toilet seat and pan",
    },
];