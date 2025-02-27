import { ProductProps, ProductType} from "@/types";

export async function getProductById(id:string): Promise<ProductType>{
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json()
}

export async function getAllProductImproved({ category, sort, limit }: ProductProps): Promise<ProductType[]> {
    let url = 'https://fakestoreapi.com/products';
    if (category) {
      url += `/category/${encodeURIComponent(category)}`;
    }
    if (sort) {
      url += `${limit && category ? '?' : '?' }sort=${sort}`;
    }
    if(limit) {
      url += `${sort && category ? '&' : sort ? '&' : '?'}limit=${limit}`;
    }
    console.log('infetch', url)
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP Error bang! Status ${res.status}`);
    }
    return res.json();
  }
