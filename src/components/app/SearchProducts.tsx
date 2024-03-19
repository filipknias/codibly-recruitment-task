export default function SearchProducts() {
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
            />
            <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition duration-200">Clear</button>
        </div>
    </div>
  )
}
