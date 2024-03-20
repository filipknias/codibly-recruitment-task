import { useQuery } from "@tanstack/react-query";
import Header from "../components/app/Header";
import ProductsTable from "../components/app/ProductsTable";
import ContentContainer from "../components/ui/ContentContainer";
import axios from 'axios';
import { TProductIdResponse, TProductsResponse } from "../types/api";
import Pagination from "../components/app/Pagination";
import { useSearchParams } from 'react-router-dom';

export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const PRODUCTS_PER_PAGE = 5;
    const DEFAULT_PAGE = 1;
    const currentPage = searchParams.get("page") || DEFAULT_PAGE;
    const productId = searchParams.get("id") || null;

    const allProductsQuery = useQuery({ 
        queryKey: ['products', currentPage], 
        queryFn: () => {
            return axios.get<TProductsResponse>(`https://reqres.in/api/products?per_page=${PRODUCTS_PER_PAGE}&page=${currentPage}`);
        },
    });

    const productIdQuery = useQuery({ 
        queryKey: ['singleProduct', productId], 
        queryFn: async () => {
            const response = await axios.get<TProductIdResponse>(`https://reqres.in/api/products?id=${productId}`);
            return [response.data.data];
        },
        enabled: !!productId,
        retry: (_, error) => {
            if (error.message === "Request failed with status code 404") {
                return false;
            }
            return true;
        }
    });

    const isLoading = allProductsQuery.isLoading || productIdQuery.isLoading;
    const errorMessage = allProductsQuery.error || productIdQuery.error;

    const handlePrevPage = () => {
        if (!allProductsQuery.data) return;
        const prevPage = allProductsQuery.data.data.page - 1;
        setSearchParams({ page: prevPage.toString() });
    };
    
    const handleNextPage = () => {
        if (!allProductsQuery.data) return;
        const nextPage = allProductsQuery.data.data.page + 1;
        setSearchParams({ page: nextPage.toString() });
    };

    return (
        <ContentContainer>
            <Header />
            {isLoading ? (
                <div className="mx-auto rounded-lg p-5 bg-blue-200">
                    <p className="text-blue-500 text-center text-2xl">Products data is loading...</p>
                </div>
            ) : (
                <>
                    {errorMessage ? (
                        <div className="mx-auto rounded-lg p-5 bg-red-200">
                            <p className="text-red-500 text-center text-2xl">{errorMessage.message}</p>
                        </div>
                    ) : (
                        <>
                            {productIdQuery.data ? (
                                <ProductsTable products={productIdQuery.data} />
                            ) : allProductsQuery.data && (
                                <>
                                    <ProductsTable products={allProductsQuery.data.data.data} />
                                    <Pagination
                                        page={allProductsQuery.data.data.page} 
                                        totalPages={allProductsQuery.data.data.total_pages}
                                        onPrevClick={handlePrevPage}
                                        onNextClick={handleNextPage}
                                    />
                                </>
                            )}
                        </>
                    )}
                </>
            )}
        </ContentContainer>
    )
}