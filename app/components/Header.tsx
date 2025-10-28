import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-[#004c41] px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <Image src="/logo.webp" alt="Beyond Meat Logo" width={100} height={100} />
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/prank" className="text-white uppercase text-sm font-medium hover:text-green-200 transition-colors">
                        PRODUCTS
                    </Link>
                    <Link href="/prank" className="text-white uppercase text-sm font-medium hover:text-green-200 transition-colors">
                        WHERE TO BUY
                    </Link>
                    <Link href="/prank" className="text-white uppercase text-sm font-medium hover:text-green-200 transition-colors">
                        OUR MISSION
                    </Link>
                </nav>

                {/* Search and Button */}
                <div className="flex items-center space-x-4">
                    {/* Search Icon */}
                    <svg className="w-5 h-5 text-white cursor-pointer hover:text-green-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>


                    <Link href="/prank" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium uppercase transition-colors inline-block">
                        BUY NOW
                    </Link>
                </div>
            </div>
        </header>
    );
}
