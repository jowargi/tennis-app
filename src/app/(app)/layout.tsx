import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Sidebar from "@/components/sidebar/Sidebar";
import Spinner from "@/components/spinner/Spinner";
import AuthorizedUserContextProvider from "@/providers/AuthorizedUserContextProvider";
import FavoriteRacketsContextProvider from "@/providers/FavoriteRacketsContextProvider";
import SidebarContextProvider from "@/providers/SidebarContextProvider";
import { getUser } from "@/services/getUser";
import { FC, Suspense } from "react";

const AppLayout: FC<LayoutProps<"/">> = ({ children }) => {
  const getUserPromise = getUser();

  return (
    <Suspense fallback={<Spinner />}>
      <AuthorizedUserContextProvider getUserPromise={getUserPromise}>
        <FavoriteRacketsContextProvider>
          <SidebarContextProvider>
            <Header />
            <Sidebar />
            <Main>{children}</Main>
            <Footer />
          </SidebarContextProvider>
        </FavoriteRacketsContextProvider>
      </AuthorizedUserContextProvider>
    </Suspense>
  );
};

export default AppLayout;
