
const Product = ({ product }) => {
    // console.log(product);
    const { category, price, description, product_image, product_title, rating, specification } = product;

    console.log(category,price,product_image);
    return (
        <div className="space-y-2 p-3 shadow-xl rounded-xl flex flex-col">
            <img className="rounded-lg shadow-2xl" src={product_image} alt="" />
            <h1 className="text-2xl font-semibold">{product_title}</h1>
            <p className="opacity-70 flex-grow">Price: {price}k</p>
            <button className="btn rounded-3xl border-cyan-500">ViewDetails</button>
        </div>
    );
};

export default Product;