import { useEffect } from "react";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import config from "./config";
import AppRoutes from "./routes";
import ScrollToTop from "./layout/ScrollToTop";
import theme from "./themes";
import { UserProvider } from "./contexts/UserContext";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/api";

export default function App() {
  useEffect(() => {
    const tgAvailable = window.Telegram && window.Telegram.WebApp;
    if (!tgAvailable) {
      console.warn("Telegram WebApp is not available in this environment.");
      return;
    }
  
    const tg = window.Telegram.WebApp;
  
    const tgReady = () => {
      // tg.headerColor = "#141019";
      tg.ready();
      tg.expand();
      tg.BackButton.hide();
    };
  
    tgReady();
    // auth();
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme("light")}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <BrowserRouter basename={config.basename}>
            <ScrollToTop>
              <UserProvider>
                <AppRoutes />
              </UserProvider>
            </ScrollToTop>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
