import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ShippingPage from '@/components/shipping/page'
import React from 'react'

const CheckoutPage = () => {
  return (
    <>
      <Header isNavFooterHidden={true} />
      <ShippingPage/>
      <Footer/>
    </>
  )
}

export default CheckoutPage