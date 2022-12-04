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

      <main className="mx-auto h-full max-w-7xl">{children}</main>
      <Footer />
    </div>
  );
};
