export interface Office {
    location: string;
    address: string;
    coordinates: string;
    distance : number;
}

export interface PartnersResponse {
    id: number;
    urlName: string;
    organization: string;
    customerLocations: string;
    willWorkRemotely: boolean;
    website: string;
    services: string;
    offices: Office[];
}