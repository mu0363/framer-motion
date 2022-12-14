import Head from "next/head";
import React from "react";
import { ContactForm } from "@components/pages/form/ContactForm";
import { MainLayout } from "src/components/Layout/MainLayout";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <div className="mb-20 md:mb-40">
          <ContactForm />
        </div>
      </MainLayout>
    </>
  );
};

export default Contact;
