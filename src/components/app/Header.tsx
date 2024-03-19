import SearchProducts from "./SearchProducts";

export default function Header() {
    return (
        <div className="bg-white rounded-lg p-8 mb-8">
            <h1 className="text-4xl text-gray-900 font-semibold mb-6">Products List</h1>
            <SearchProducts />
        </div>
    )
}
