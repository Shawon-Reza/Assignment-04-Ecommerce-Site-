
const categoriesValidation = (path, Allproducs) => {
    const categoryData = Allproducs.filter(product => (product.category == path));


    return categoryData;
}





export { categoriesValidation }
