export default function Item({name, category, quantity, onSelect}) {
    const handleItemClick = () => {
        
        const cleanName = name
            .split(',')[0] 
            .replace(/[\u{1F300}-\u{1F9FF}]/gu, '') 
            .toLowerCase()
            .trim();  
        
        onSelect(cleanName);
    };

    return (    
        <div 
            className="w-64 rounded-lg bg-yellow-300 p-2 m-2 cursor-pointer hover:bg-yellow-400"
            onClick={handleItemClick}
        >
            <h1> {name} </h1>
            <h3> buy {quantity} in {category}</h3>
        </div>
    );
}
