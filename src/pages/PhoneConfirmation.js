import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../style/phoneConfirm.module.css";
import PhoneInput from "react-phone-number-input";

export default function PhoneConfirmation() {
  const [value, setValue] = useState();
  return (
    <div className={style.phoneConfirmContainer}>
      <Link to="/" className={style.backBtn}>
        <img src="/images/arrow.png" alt="" />
      </Link>
      <h1>Enter your phone</h1>
      <PhoneInput
        international
        defaultCountry="US"
        value={value}
        onChange={setValue}
      />
      <p>
        By entering your number, you're aggreing to our{" "}
        <span>Terms of Service and Privacy Policy.</span> Thanks!
      </p>
      <Link to="/code_confirm"
        className="primaryBtn d-flex align-items-center"
      >
        Next <img src="/images/nextArrowIcon.svg" alt="" className="ml-1" />
      </Link>
    </div>
  );
}
