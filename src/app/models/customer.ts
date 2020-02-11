export interface LISTING_MODEL {
    count: number;
    page: number;
    limit: number;
    rows: data[]
}

export interface data {
    email: string;
    username: string;
    status: string;
    id: string;
    createdAt: Date;
}

export interface CUSTOMER_MODULE {
    statusCode: number;
    message: string;
    data: LISTING_MODEL;
}





