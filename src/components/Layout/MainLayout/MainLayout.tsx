import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";
import { Footer } from "src/components/Layout/Footer";
import { Header } from "src/components/Layout/Header";
import { ContactFormButton } from "src/components/pages/contact/ContactFormButton";

type Props = {
  children: ReactNode;
};

/** @package */
export const MainLayout: FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="font-line text-gray-800">
      <Header />

      <main className="mx-auto h-full">{children}</main>
      <Footer />

      {router.pathname !== "/contact" && <ContactFormButton />}
    </div>
  );
};
