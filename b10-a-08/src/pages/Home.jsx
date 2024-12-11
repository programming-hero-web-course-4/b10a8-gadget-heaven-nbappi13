import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import CategoriesSidebar from '../components/CategoriesSidebar';
import GadgetsCards from '../components/GadgetsCards';

const Home = () => {
    const categories = [
        "All Products",
        "Laptops",
        "Phones",
        "Headphones",
        "Smart Watches",
        "Power Bank",
        "Keyboard",
        "Mouse",
        "Chargers"
    ];

    const [allProducts, setAllProducts] = useState([]); 
    const [filteredProducts, setFilteredProducts] = useState([]); 
    const [visibleProductsCount, setVisibleProductsCount] = useState(12); 
    const [currentCategory, setCurrentCategory] = useState("All Products"); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/products.json');
                const data = await response.json();
                setAllProducts(data);
                setFilteredProducts(data.slice(0, 12)); 
                setLoading(false); 
            } catch (error) {
                console.error('Error fetching the products:', error);
                setLoading(false); 
            }
        };

        fetchProducts();
    }, []);

    const handleCategorySelect = (category) => {
        setCurrentCategory(category);
        setVisibleProductsCount(12); 
        setLoading(true); 

        setTimeout(() => {
            if (category === "All Products") {
                setFilteredProducts(allProducts.slice(0, 12));
            } else {
                const filtered = allProducts.filter(product => product.category === category);
                setFilteredProducts(filtered.slice(0, 12)); 
            }
            setLoading(false); 
        }, 500); 
    };

    const loadMoreProducts = () => {
        const start = visibleProductsCount;
        const end = visibleProductsCount + 8;
        setVisibleProductsCount(end);

        if (currentCategory === "All Products") {
            setFilteredProducts((prevProducts) => [
                ...prevProducts,
                ...allProducts.slice(start, end)
            ]);
        } else {
            const filtered = allProducts.filter(product => product.category === currentCategory);
            setFilteredProducts((prevProducts) => [
                ...prevProducts,
                ...filtered.slice(start, end)
            ]);
        }
    };

    return (
        <div>
            <div className="mb-8">
                <Banner />
            </div>

            <div className="container mx-auto flex flex-col md:flex-row gap-6 p-4 mt-72">
                <aside className="w-full md:w-1/4 bg-white shadow-md rounded-md p-4 mt-16">
                    <CategoriesSidebar
                        categories={categories}
                        onSelectCategory={handleCategorySelect}
                        activeCategory={currentCategory} 
                    />
                </aside>

                <section className="w-full md:w-3/4">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-left ml-8 mb-10">
                        Explore Cutting-Edge Gadgets
                    </h2>
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <span className="loading loading-bars loading-lg"></span>
                        </div>
                    ) : (
                        <GadgetsCards
                            products={filteredProducts}
                            loadMoreProducts={loadMoreProducts}
                            showMoreButton={currentCategory === "All Products" && visibleProductsCount < allProducts.length} 
                            noDataMessage={filteredProducts.length === 0}
                        />
                    )}
                </section>
            </div>
        </div>
    );
};

export default Home;
