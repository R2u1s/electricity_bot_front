import React from "react";
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
