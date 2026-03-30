import React from 'react';

const Card = ({ sellar }) => {
    return (
        <div className="w-[340px] p-6 border border-[#F2F2F2] rounded-lg shadow-md space-y-4 relative">
            {sellar.tag && (
                <button
                    className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full 
            ${sellar.tagType === "new" ? "bg-blue-200 text-blue-800" :
                            sellar.tagType === "popular" ? "bg-green-200 text-green-800" :
                                sellar.tagType === "best" ? "bg-yellow-200 text-yellow-800" :
                                    "bg-gray-200 text-gray-800"
                        }`}
                >
                    {sellar.tag}
                </button>
            )}
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <img
                    src={sellar.image}
                    alt={sellar.name}
                    className="w-6 h-6 object-contain"
                    loading="lazy"
                />
            </div>
            <h1 className="text-lg font-semibold text-gray-900">{sellar.name}</h1>
            <p className="text-sm text-gray-600">{sellar.description}</p>
            <p className="text-2xl font-bold">
                ${sellar.price}
                <span className="text-base font-normal text-gray-500">
                    {sellar.period === "monthly"
                        ? "/Mo"
                        : sellar.period === "yearly"
                            ? "/Yr"
                            : ""}
                </span>
            </p>
            <ul className="space-y-1 text-gray-700">
                {sellar.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                        <svg
                            className="w-5 h-5 text-green-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
            <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold rounded-md hover:from-purple-700 hover:to-purple-500 transition">
                Buy Now
            </button>
        </div>

    );
};

export default Card;