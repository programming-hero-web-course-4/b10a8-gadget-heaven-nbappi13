import React from 'react';

const CategoriesSidebar = ({ categories, onSelectCategory }) => {
    return (
        <div className="w-64 h-auto bg-gray-100 p-4 rounded-md shadow-md">
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
                {categories.map((category, index) => (
                    <li key={index}>
                        <button
                            className="w-full text-left p-2 hover:bg-purple-100 rounded-md"
                            onClick={() => onSelectCategory(category)}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesSidebar;
