function Holidays() {
    const category1 = "Beach Holidays";
    const category2 = "City Holidays";
    
    return (
        <ul>
            <li>{category1}</li>
            <li>{category2.toUpperCase()}</li>    
            <li>Valentine's Day</li>
            <li>St. Patrick's Day</li>
        </ul>
    );
}

export default Holidays