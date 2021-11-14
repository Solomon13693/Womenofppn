import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

export default function Flutterwave() {
   const config = {
    public_key: 'FLWPUBK_TEST-9352aa49b24609a25d90d6325969abce-X',
    tx_ref: Date.now(),
    amount: "",
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'Womenoffiremedia@gmail.com',
      phonenumber: '',
      name: 'Womenoffireppn',
    },
    customizations: {
      title: 'Womenoffireppn',
      logo: 'https://www.womenoffireppn.org/wp-content/uploads/2021/08/prayer-network-logo-png.png',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Donate with flutterwave',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="">
      <FlutterWaveButton  className="btn btn-primary px-5 py-3" {...fwConfig} />
      <div>
      <img className="text-center" style={{width: "200px"}} src="https://flutterwave.com/images/badge.png" alt="" />
      </div>
    </div>
  );
}