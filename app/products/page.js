'use client';

import FilterProducts from '@/components/pages/products/FilterProducts';
import Header from '@/components/Header';
import HeaderProducts from '@/components/pages/products/HeaderProducts';
import CardProduct from '@/components/pages/products/CardProduct';

function ProductsPage() {
  return (
    <div>
      <Header isNavFooterHidden={true} />
      <div className="flex flex-col md:flex-row gap-y-4 py-10 pl-4 md:pl-10 pr-4">
        <div className="block md:basis-[30%] md:border-r-2 border-gray-400 pr-4">
          <FilterProducts />
        </div>
        <div className="w-full md:basis-[70%] py-2 pl-4 lg:px-4 sm:overflow-x-auto">
          <HeaderProducts />
          <div className="py-4 overflow-x-auto sm:overflow-x-visible">
            <div className="min-w-[500px] ">
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage