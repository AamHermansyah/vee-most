import Header from '@/components/Header'
import ShippingPage from '@/components/shipping/page'
import React from 'react'

const CheckoutPage = () => {
  return (
    <>
      <Header isNavFooterHidden={true} />
      <ShippingPage/>
    </>
  )
}

export default CheckoutPage