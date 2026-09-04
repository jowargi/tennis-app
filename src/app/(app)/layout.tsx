import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Spinner from "@/components/spinner/Spinner";
import AuthorizedUserContextProvider from "@/providers/AuthorizedUserContextProvider";
import FavoriteRacketsContextProvider from "@/providers/FavoriteRacketsContextProvider";
import { getUser } from "@/services/getUser";
import { FC, Suspense } from "react";

const AppLayout: FC<LayoutProps<"/">> = ({ children }) => {
  const getUserPromise = getUser();

  return (
    <Suspense fallback={<Spinner />}>
      <AuthorizedUserContextProvider getUserPromise={getUserPromise}>
        <FavoriteRacketsContextProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </FavoriteRacketsContextProvider>
      </AuthorizedUserContextProvider>
    </Suspense>
  );
};

export default AppLayout;
