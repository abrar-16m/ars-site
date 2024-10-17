import React from "react";
import Create from "@/sections/newcontactuspage/create/Create";
import HaveAChat from "@/sections/newcontactuspage/haveAChat/HaveAChat";
import ContactUs from "@/sections/newcontactuspage/contactUs/ContactUs";
import Footer from "@/sections/footer/Footer";

const page = () => {
  return (
    <div>
      <Create />
      <ContactUs />
      <HaveAChat />
      <Footer/>
    </div>
  );
};

export default page; 
