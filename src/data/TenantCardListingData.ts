// Card data type and array
interface Card {
    title: string;
    price: string;
    category: string;
    image: string;
    beds?: number;
    showers?: number;
    isFeatured?: boolean;
}

export const tenantsCardsListingData: Card[] = [
    { title: "2 Bed Flat with a Separate Kitchen", price: "$1200/mo", category: "Flat", image: "/uploads/charming-3-bedroom-house-with-garden-in-mitcham.jpg", beds: 2, showers: 1, isFeatured: true },
    { title: "3 Bed House with Garden", price: "$1500/mo", category: "House", image: "/uploads/charming-3-bedroom-house-with-garden-in-mitcham-1.jpg", beds: 3, showers: 2, isFeatured: true },
    { title: "1 Bed Studio Apartment", price: "$900/mo", category: "Apartment", image: "/uploads/charming-3-bedroom-house-with-garden-in-mitcham-2.jpg", beds: 1, isFeatured: true },
    { title: "4 Bed Villa", price: "$3000/mo", category: "Villa", image: "/uploads/charming-3-bedroom-house-with-garden-in-mitcham-3.jpg", beds: 4, showers: 3, isFeatured: true },
    { title: "Cozy 1 Bed Flat", price: "$800/mo", category: "Flat", image: "/uploads/charming-3-bedroom-house-with-garden-in-mitcham-4.jpg", beds: 1, isFeatured: true },
    { title: "Luxury 2 Bed Apartment", price: "$2000/mo", category: "Apartment", image: "/uploads/charming-3-bedroom-house-with-garden-in-mitcham-5.jpg", beds: 2, showers: 2, isFeatured: true },
    { title: "Modern 3 Bed Penthouse", price: "$3500/mo", category: "Penthouse", image: "/uploads/beautiful-2-bedroom-flat-in-mitcham.jpg", beds: 3, showers: 3, isFeatured: false },
    { title: "2 Bed Cottage with Scenic View", price: "$1800/mo", category: "Cottage", image: "/uploads/beautiful-2-bedroom-flat-in-mitcham-1.jpg", beds: 2, showers: 1, isFeatured: false },
    { title: "5 Bed Luxury Mansion", price: "$8000/mo", category: "Mansion", image: "/uploads/beautiful-2-bedroom-flat-in-mitcham-2.jpg", beds: 5, showers: 5, isFeatured: true },
    { title: "1 Bed Minimalistic Studio", price: "$700/mo", category: "Studio", image: "/uploads/beautiful-2-bedroom-flat-in-mitcham-3.jpg", beds: 1, showers: 1, isFeatured: false },
];