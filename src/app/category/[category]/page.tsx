// import React from 'react'
// import { getAllCategoryProduct} from '@/lib/fetch'
// import Image from 'next/image';
// import CategoryBtn from '@/components/ui/CategoryBtn';

// export default async function page({ params: { category } }) {
//   // const {category} = params;
//   // console.log(params);
//   // console.log(categoryProduct);
//   const categoryProduct = await getAllCategoryProduct(category);
//   return (
//     <div className='flex flex-wrap gap-3'>
//       {categoryProduct.map((product)=> (
//         <div key={product.id} className='w-[400px] bg-sky-600 rounded-[30px] p-3'>
//           <Image src={product.image} width={240} height={240} layout='' alt='productImage' className=''/>
//           {product.title}
//           {product.price}
//         </div>
//       ))}
//     </div>
//   )
// }
