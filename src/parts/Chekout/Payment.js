import React from "react";
import Fade from "react-reveal/Fade";

import { InputFile, InputText } from "elements/Form";

import LogoBjb from "assets/images/logo-bjb.jpg";
import LogoMandiri from "assets/images/logo-mandiri.jpg";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  // const tax = 10;
  const subTotal = ItemDetails.price ;
  const grandTotal = subTotal;
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran</p>
              {/* <p>Tax: {tax}%</p> */}
              <p>Sub Total: IDR{subTotal}</p>
              <p>Total: IDR{grandTotal}</p>
              <div className="row mt-4">
                
                <div className="col-3 text-right">
                  <img src={LogoMandiri} alt="Bank Mandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>{ItemDetails.bank[0].nameBank}</dd>
                    <dd>	{ItemDetails.bank[0].nomorRekening}</dd>
                    <dd>{ItemDetails.bank[0].name}</dd>
                  </dl>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-3 text-right">
                  <img src={LogoMandiri} alt="Bank Mandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>	089898</dd>
                    <dd>Galih</dd>
                  </dl>
                </div>
              </div> */}
            </Fade>
          </div>

          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />
              <label htmlFor="bankName">Asal Bank</label>
              <InputText
                type="text"
                id="bankName"
                name="bankName"
                value={data.bankName}
                onChange={props.onChange}
              />

              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText
                type="text"
                id="bankHolder"
                name="bankHolder"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
