type TProps = {
    page: number;
    totalPages: number;
    onPrevClick: () => void;
    onNextClick: () => void;
}

export default function Pagination({ page, totalPages, onPrevClick, onNextClick }: TProps) {
    const isNextPage = page < totalPages;
    const isPrevPage = page !== 1;

    return (
        <div className="flex flex-wrap justify-center">
            <button 
                className="rounded-tl-lg rounded-bl-lg px-4 py-2 text-lg font-semibold border-r border-gray-200 bg-white hover:bg-gray-100 transition duration-200 disabled:bg-black disabled:bg-opacity-10 disabled:text-gray-500"
                disabled={!isPrevPage}
                onClick={onPrevClick}
                role="prev-button"
            >
                Previous
            </button>
            <button 
                className="rounded-tr-lg rounded-br-lg px-4 py-2 text-lg font-semibold bg-white hover:bg-gray-100 transition duration-200 disabled:bg-black disabled:bg-opacity-10 disabled:text-gray-500"
                disabled={!isNextPage}
                onClick={onNextClick}
                role="next-button"
            >
                Next
            </button>
        </div>
    )
}
