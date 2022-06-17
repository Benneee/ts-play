import { UserTypes, Price, Country } from ".";



interface Review {
    name: string;
    stars: number;
    loyaltyUser: UserTypes;
    date: string;
}

interface Property {
    image: string;
    title: string;
    price: Price,
    location: {
        firstLine: string;
        city: string;
        code: number | string;
        country: Country;
    }
    contact: [number, string]
    isAvailable: boolean;
}