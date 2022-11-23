import type { FC, ReactNode } from "react";
import { ContactButton } from "src/components/ContactButton";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

type Props = {
  children: ReactNode;
};

/** @package */
export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="font-line text-gray-800">
      <Header />
      <main className="mx-auto">{children}</main>
      <Footer />
      <ContactButton />
    </div>
  );
};
