import React from "react";
import Create from "@/sections/contactus/create/Create";
import HaveAChat from "@/sections/contactus/haveAChat/HaveAChat";
import ContactUs from "@/sections/contactus/contactUs/ContactUs";
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
