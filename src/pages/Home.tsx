import Header from "../components/app/Header";
import ProductsTable from "../components/app/ProductsTable";
import ContentContainer from "../components/ui/ContentContainer";

export default function Home() {
    return (
        <ContentContainer>
            <Header />
            <ProductsTable />
        </ContentContainer>
    )
}