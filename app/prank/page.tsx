import Header from '../components/Header';

export default function PrankPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#004c41] uppercase tracking-wide mb-8">
                        {`YOU'VE BEEN PRANKED!`}
                    </h1>

                    <div className="bg-white p-12 rounded-lg shadow-lg max-w-4xl mx-auto">
                        <div className="text-6xl mb-8">🎭🤡🛒</div>
                        <h2 className="text-3xl font-bold text-red-600 mb-6">
                            GOTCHA!
                        </h2>
                        <p className="text-xl text-gray-700 mb-8">
                            {`This isn't a real Beyond Meat website! It's a prank site designed by Chaya and Simcha to trick you.`}
                        </p>

                        <div className="bg-red-100 border-l-4 border-red-500 p-6 mb-8">
                            <p className="text-red-800 font-medium text-lg">
                                <strong>PRANK ALERT:</strong> This entire website is fake! Chaya and Simcha created this elaborate prank
                                to fool you. No matter which menu item you clicked, you were always going to end up here. They got you good! 😄
                            </p>
                        </div>

                        <div className="space-y-6 text-left max-w-2xl mx-auto">
                            <h3 className="text-xl font-bold text-gray-800">What Chaya and Simcha tricked you with:</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li><strong>Fake Products:</strong> Beyond Steak and Beyond Lobster that don{`'`}   t exist</li>
                                <li><strong>Fake Store Locations:</strong> All those {`"where to buy"`} locations are imaginary</li>
                                <li><strong>Fake Mission:</strong> {`Their "mission" was just to prank you`}</li>
                                <li><strong>Convincing Design:</strong> Made it look like a real Beyond Meat site</li>
                                <li><strong>Professional Copy:</strong> Even wrote realistic product descriptions</li>
                            </ul>

                            <div className="mt-6 bg-yellow-100 p-4 rounded">
                                <h4 className="font-bold text-yellow-800 mb-2">The Ultimate Prank:</h4>
                                <p className="text-yellow-700">
                                    {`No matter if you clicked "Products" or "Where to Buy" or "Our Mission" -
                                    they ALL lead to this same prank page! Chaya and Simcha had you from the start.`}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            <p className="text-gray-600">Want to see the real thing?</p>
                            <a
                                href="https://www.beyondmeat.com"
                                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded font-medium uppercase transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit Real Beyond Meat Website
                            </a>
                        </div>

                        <div className="mt-8 text-sm text-gray-500">
                            <p>{`Hope you enjoyed Chaya and Simcha's prank! 😉`}</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
