export type TProductsResponse = {
    data: TProduct[];
    support: {
        url: string;
        text: string;
    };
} & TPagination;

export type TProductIdResponse = {
    data: TProduct;
    support: {
        url: string;
        text: string;
    };
};

export type TProduct = {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}

export type TPagination = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}