import { TProduct } from "../../types/api"

type TProps = {
    products: TProduct[];
}

export default function ProductsTable({ products }: TProps) {
    return (
        <div className="bg-white rounded-lg mb-8">
            <div className="overflow-x-auto">
                <div className="inline-block min-w-full overflow-hidden">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="pl-9 h-20 uppercase font-semibold whitespace-nowrap border-b border-gray-200 text-gray-500">Product ID</th>
                                <th className="p-5 h-20 uppercase font-semibold whitespace-nowrap border-b border-gray-200 text-gray-500">Name</th>
                                <th className="p-5 h-20 uppercase font-semibold whitespace-nowrap border-b border-gray-200 text-gray-500">Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(({ id, name, year, color }) => (
                                <tr key={id} style={{ backgroundColor: color }} className="cursor-pointer transition duration-200">
                                    <td>
                                        <div className="flex items-center justify-center p-5 h-20 text-center">
                                            <span className="text-lg font-heading font-medium whitespace-nowrap">{id}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center justify-center p-5 h-20 text-center">
                                            <span className="text-lg font-heading font-medium whitespace-nowrap">{name}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center justify-center p-5 h-20 text-center">
                                            <span className="text-lg font-heading font-medium whitespace-nowrap">{year}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        </div>
        </div>
    )
}
