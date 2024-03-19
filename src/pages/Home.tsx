import { useQuery } from "@tanstack/react-query";
import Header from "../components/app/Header";
import ProductsTable from "../components/app/ProductsTable";
import ContentContainer from "../components/ui/ContentContainer";
import axios from 'axios';
import { TProductsResponse } from "../types/api";
import Pagination from "../components/app/Pagination";
import { useSearchParams } from 'react-router-dom';

export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const DEFAULT_PAGE = '1';
    const currentPage = parseInt(searchParams.get("page") || DEFAULT_PAGE);

    const { data: productsResponse, isLoading, error } = useQuery({ queryKey: ['products', currentPage], queryFn: () => {
        return axios.get<TProductsResponse>(`https://reqres.in/api/products?per_page=5&page=${currentPage}`);
    }});

    const handlePrevPage = () => {
        if (!productsResponse) return;
        const prevPage = productsResponse.data.page - 1;
        setSearchParams({ page: prevPage.toString() });
    };
    
    const handleNextPage = () => {
        if (!productsResponse) return;
        const nextPage = productsResponse.data.page + 1;
        setSearchParams({ page: nextPage.toString() });
    };

    return (
        <ContentContainer>
            <Header />
            {error && <h1>{error.message}</h1>}
            {isLoading ? (
                <h1>Products data is loading...</h1>
            ): (
                <>
                    {productsResponse && (
                        <>
                            <ProductsTable products={productsResponse.data.data} />
                            <Pagination 
                                page={productsResponse.data.page} 
                                totalPages={productsResponse.data.total_pages}
                                onPrevClick={handlePrevPage}
                                onNextClick={handleNextPage}
                            />
                        </>
                    )}
                </>
            )}
        </ContentContainer>
    )
}