export default function ItemList(name, quantity, category) {

    const item1 = {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
    };
    
    const item2 = {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
    };
    
    const item3 = {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
    };
    
    const item4 = {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
    };
    
    const item5 = {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
    };
    
    const item6 = {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
    };
    
    const item7 = {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
    };
    
    const item8 = {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
    };
    
    const item9 = {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
    };
    
    const item10 = {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
    };
    
    const item11 = {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
    };
    
    const item12 = {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
    };

    /* ARRAY MAPPING METHOD
    const items = [
        {
            name: "milk, 4 L 🥛",
            quantity: 1,
            category: "dairy",
        },
        {
            name: "bread 🍞",
            quantity: 2,
            category: "bakery",
        },
    ];

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center my-8">Shopping List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item, index) => (
                    <div key={index} className="bg-blue-100 p-4 rounded-lg shadow">
                        <p className="font-bold">{item.name}</p>
                        <p>Buy {item.quantity} in {item.category}</p>
                    </div>
                ))}
            </div>
        </div>
    ) */

    return (
    <div className="min-h-screen bg-gray-200 py-8">
        <h1 className="text-3xl font-bold text-center my-8">Shopping List</h1>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 max-w-4xl mx-auto">
                
                <div className="bg-blue-100 p-4 max-w-sm rounded-lg shadow">
                    <p className="font-bold">{item1.name}</p>
                    <p>Buy {item1.quantity} in {item1.category}</p>
                </div>

                <div className="bg-blue-100 p-4 max-w-sm rounded-lg shadow">
                    <p className="font-bold">{item2.name}</p>
                    <p>Buy {item2.quantity} in {item2.category}</p>
                </div>

                <div className="bg-blue-100 p-4 max-w-sm rounded-lg shadow">
                    <p className="font-bold">{item3.name}</p>
                    <p>Buy {item3.quantity} in {item3.category}</p>
                </div>

                <div className="bg-blue-100 p-4 max-w-sm rounded-lg shadow">
                        <p className="font-bold">{item4.name}</p>
                        <p>Buy {item4.quantity} in {item4.category}</p>
                </div>

                <div className="bg-blue-100 p-4 max-w-sm rounded-lg shadow">
                        <p className="font-bold">{item5.name}</p>
                        <p>Buy {item5.quantity} in {item5.category}</p>
                </div>

                <div className="bg-blue-100 p-4 max-w-sm rounded-lg shadow">
                        <p className="font-bold">{item6.name}</p>
                        <p>Buy {item6.quantity} in {item6.category}</p>
                </div>

                <div className="bg-blue-100 p-4 max-w-sm rounded-lg shadow">
                        <p className="font-bold">{item7.name}</p>
                        <p>Buy {item7.quantity} in {item7.category}</p>
                </div>

                <div className="bg-blue-100 p-4 max-w-sm rounded-lg shadow">
                        <p className="font-bold">{item8.name}</p>
                        <p>Buy {item8.quantity} in {item8.category}</p>
                </div>

                <div className="bg-blue-100 p-4 max-w-sm rounded-lg shadow">
                        <p className="font-bold">{item9.name}</p>
                        <p>Buy {item9.quantity} in {item9.category}</p>
                </div>

                <div className="bg-blue-100 p-4 max-w-sm rounded-lg shadow">
                        <p className="font-bold">{item10.name}</p>
                        <p>Buy {item10.quantity} in {item10.category}</p>
                </div>

                <div className="bg-blue-100 p-4 max-w-sm rounded-lg shadow">
                        <p className="font-bold">{item11.name}</p>
                        <p>Buy {item11.quantity} in {item11.category}</p>
                </div>

                <div className="bg-blue-100 p-4 max-w-sm rounded-lg shadow">
                        <p className="font-bold">{item12.name}</p>
                        <p>Buy {item12.quantity} in {item12.category}</p>
                </div>


            </div>
        </div>
    )
}


