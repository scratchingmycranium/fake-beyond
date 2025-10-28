import Image from "next/image";

interface ProductCardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    certification?: string;
}

export default function ProductCard({ title, description, imageSrc, imageAlt, certification }: ProductCardProps) {
    return (
        <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg w-xs mx-auto">
            {/* Product Image */}
            <div className="aspect-square relative">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    );
}
