export async function getAllProduct(){
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json()
}

export async function getProductById(id){
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json()
}

export async function getAllCategory(){
    const res = await fetch(`https://fakestoreapi.com/products/categories`);
    return res.json()
}

export async function getAllCategoryProduct(category){
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return res.json()
}


export async function getAllProductImproved(category, sort){
    const res = await fetch(
        `https://fakestoreapi.com/products${
    category === 'electronics' && sort === 'asc' ? '/category/electronics?sort=asc' :
    category === 'electronics' && sort === 'desc' ? '/category/electronics?sort=desc' : 
    category === 'jewelery' && sort === 'asc' ? '/category/jewelery?sort=asc' :
    category === 'jewelery' && sort === 'desc' ? '/category/jewelery?sort=desc' :
    category === "men's clothing" && sort === 'asc' ? '/category/men%27s%20clothing?sort=asc' :
    category === "men's clothing" && sort === 'desc' ? '/category/men%27s%20clothing?sort=desc' :
    category === "women's clothing" && sort === 'asc' ? '/category/women%27s%20clothing?sort=asc' :
    category === "women's clothing" && sort === 'desc' ? '/category/women%27s%20clothing?sort=desc' :
    '' &&
    category === 'electronics' ? '/category/electronics' :
    category === 'jewelery' ? '/category/jewelery' :
    category === "men's clothing" ? '/category/men%27s%20clothing'  :
    category === "women's clothing" ? '/category/women%27s%20clothing'  : 
    '' &&
    sort === 'asc' ? '?sort=asc' :
    sort === 'desc' ? '?sort=desc' : 
    '' 
}`
    );
    if(!res.ok){
        throw new Error(`Http Error bang! Status${res.status}`);
    }
    return res.json()
}


export async function getLimitResults(){
    const res = await fetch(`https://fakestoreapi.com/products?limit=5`)
    return res.json()
}