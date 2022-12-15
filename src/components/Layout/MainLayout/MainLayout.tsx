import type { FC, ReactNode } from "react";
import { Footer } from "src/components/Layout/Footer";
import { Header } from "src/components/Layout/Header";

type Props = {
  children: ReactNode;
};

/** @package */
export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="text-gray-800">
      <Header />
      <div className="h-14 md:h-24" />
      <main className="mx-auto max-w-7xl">
        <section className="mx-5 lg:mx-20">{children}</section>
      </main>
      <Footer />
    </div>
  );
};
