export default function ProductsTable() {
  return (
    <div className="bg-white rounded-lg">
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
                        <tr style={{ backgroundColor: '#98B2D1' }}>
                            <td>
                                <div className="flex items-center justify-center p-5 h-20 text-center">
                                    <span className="text-lg font-heading font-medium">1</span>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center justify-center p-5 h-20 text-center">
                                    <span className="text-lg font-heading font-medium">cerulean</span>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center justify-center p-5 h-20 text-center">
                                    <span className="text-lg font-heading font-medium">2000</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
      </div>
    </div>
  )
}
