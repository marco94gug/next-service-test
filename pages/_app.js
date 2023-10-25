import "../styles/globals.css";
import { useUsersService } from "@/hooks/useUserService";
import { createContext } from "react";

export let ServiceContext = createContext();

export default function App({ Component, pageProps }) {
  const userInterfaceService = useUsersService();
  ServiceContext = createContext(userInterfaceService);

  return (
    <>
      <ServiceContext.Provider value={userInterfaceService}>
        <Component {...pageProps} />
      </ServiceContext.Provider>
    </>
  );
}
