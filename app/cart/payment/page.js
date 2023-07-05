import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PaymentPage from '@/components/payment/page'
import React from 'react'

const Payment = () => {
  return (
    <>
      <Header isNavFooterHidden={true}/>
      <PaymentPage/>
      <Footer/>
    </>
  )
}

export default Payment