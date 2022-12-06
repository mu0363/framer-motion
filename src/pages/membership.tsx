import Head from "next/head";
import React from "react";
import { EventForm } from "@components/pages/form/EventForm";
import { MainLayout } from "src/components/Layout/MainLayout";

const Membership = () => {
  return (
    <>
      <Head>
        <title>Membership Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <section className="mb-20 md:mb-40">
          <EventForm formUID={process.env.NEXT_PUBLIC_EVENT_FORM_UID} />
        </section>
      </MainLayout>
    </>
  );
};

export default Membership;
