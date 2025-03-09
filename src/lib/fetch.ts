import { ProductProps, ProductType } from "@/types";

export async function getAllProductImproved({ category, sort, limit, search }: ProductProps): Promise<ProductType[]> {
  let url = 'https://fakestoreapi.com/products';
  if (category) {
    url += `/category/${encodeURIComponent(category)}`;
  }
  if (sort) {
    url += `${limit && category ? '?' : '?'}sort=${sort}`;
  }
  if (limit) {
    url += `${sort && category ? '&' : sort ? '&' : '?'}limit=${limit}`;
  }
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP Error bang! Status ${res.status}`);
  } 
  const products = await res.json();
  if(search) {
    return products.filter((product: ProductType) => product.category.toLowerCase().includes(search.toLowerCase()) || product.title.toLowerCase().includes(search.toLowerCase()));
  }
  return products;
}

export async function getProductById(id: string): Promise<ProductType> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if(!res.ok) {
    throw new Error(`HTTP Error! Status ${res.status}`);
  }
  return res.json()
}

export async function getSimilarProduct(productCategory:string){
  const res = await fetch(`https://fakestoreapi.com/products/category/${productCategory}`)
  return res.json()
}