import type { ReactNode } from 'react';

import { Footer } from '@/layouts/Footer';
import { Header } from '@/layouts/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = ({ meta, children }: IMainProps) => (
  <div className="w-full text-gray-700">
    {meta}

    <div className="mx-auto max-w-screen-md px-2.5">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  </div>
);

export { Main };
