'use client';

import FilterProducts from '@/components/pages/products/FilterProducts';
import Header from '@/components/Header';
import HeaderProducts from '@/components/pages/products/HeaderProducts';

function ProductsPage() {
  return (
    <div>
      <Header isNavFooterHidden={true} />
      <div className="flex flex-col md:flex-row gap-y-4 py-10 px-4 md:px-10">
        <div className="block md:basis-[30%] md:border-r-2 border-gray-400 pr-4">
          <FilterProducts />
        </div>
        <div className="w-full md:basis-[70%] py-2 sm:px-4">
          <HeaderProducts />
        </div>
      </div>
    </div>
  )
}

export default ProductsPage