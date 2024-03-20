import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export default function SearchProducts() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [id, setId] = useState<string>(() => {
        const initialId = searchParams.get("id");
        return initialId || "";
    });

    useEffect(() => {
        if (id === "") {
            searchParams.delete("id");
            setSearchParams(searchParams);
        } else {
            setSearchParams((prevParams) => ({ ...prevParams, id }));
        }
    }, [id]);
    
    return (
        <div>
            <label htmlFor="product-id" className="block mb-2">Search for product by ID</label>
            <div className="flex flex-wrap gap-2">
                <input
                    id="product-id"
                    type="number" 
                    min="1" 
                    className="flex-1 rounded-md border border-gray-200 px-4 py-2 focus:ring-4 ring-blue-200 transition duration-200 outline-none" 
                    placeholder="Product ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    role="id-number-input"
                />
                <button 
                    className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition duration-200"
                    onClick={() => setId("")}
                    role="clear-button"
                >
                    Clear
                </button>
            </div>
        </div>
    )
}
