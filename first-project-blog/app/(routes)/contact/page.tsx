"use client";

import { RootState } from "@/rstore";
import { setText } from "@/rstore/rslice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ContactPage = () => {
  const { footerText, headerText } = useSelector(
    (state: RootState) => state.ui,
  );

  const dispatch = useDispatch();


  const handleUpdateText = (text:string) => {
    dispatch(setText(text))
  };

  return (
    <div className="flex flex-col">
      <h1>{headerText}</h1>
      <h1>{footerText}</h1>

      <input className="border border-mycolordarkprimary" type="text" onChange={(e) => handleUpdateText(e.target.value)} />
    </div>
  );
};

export default ContactPage;
