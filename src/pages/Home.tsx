import { useQuery } from "@tanstack/react-query";
import Header from "../components/app/Header";
import ProductsTable from "../components/app/ProductsTable";
import ContentContainer from "../components/ui/ContentContainer";
import axios from 'axios';
import { TProductsResponse } from "../types/api";

export default function Home() {
    const { data: productsResponse, isLoading } = useQuery({ queryKey: ['products'], queryFn: () => {
        return axios.get<TProductsResponse>('https://reqres.in/api/products?per_page=5');
    }});

    return (
        <ContentContainer>
            <Header />
            {isLoading ? (
                <h1>Products data is loading...</h1>
            ): (
                <>
                    {productsResponse && <ProductsTable products={productsResponse.data.data} />}
                </>
            )}
        </ContentContainer>
    )
}