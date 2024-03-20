import { useEffect, useRef } from "react";
import { TProduct } from "../../types/api";

type TProps = {
    product: TProduct;
    onClose: () => void;
}

export default function ProductModal({ product, onClose }: TProps) {
    const modalRef = useRef<HTMLDivElement|null>(null);

    useEffect(() => {
        const clickOutsideFn = (e: Event) => {
            const targetEl = e.target as HTMLElement;
            if (modalRef.current && !modalRef.current.contains(targetEl)) onClose();
        };
        
        document.addEventListener("mousedown", (e) => clickOutsideFn(e));
        return () => document.removeEventListener("mousedown", clickOutsideFn);
    }, [modalRef]);

    return (
        <div className="h-full w-full bg-black bg-opacity-80 fixed inset-0 z-50">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
                <div className="bg-white rounded-lg p-5 max-w-2xl mx-auto" ref={modalRef}>
                    <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
                        <h1 className="text-2xl font-semibold">Product Details</h1>
                        <button 
                            className="rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-200 px-4 py-2" 
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                    {Object.entries(product).map(([key, value]) => (
                        <div key={key} className="mb-2">
                            <span className="text-lg">{key}: </span>
                            <span className="text-lg font-semibold">{value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
