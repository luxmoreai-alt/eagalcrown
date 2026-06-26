import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { AboutPage } from "./pages/AboutPage";
import { BecomePartnerPage } from "./pages/BecomePartnerPage";
import { BusinessesPage } from "./pages/BusinessesPage";
import { ContactPage } from "./pages/ContactPage";
import { DistributionPage } from "./pages/DistributionPage";
import { HomePage } from "./pages/HomePage";
import { WhyChoosePage } from "./pages/WhyChoosePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "businesses", element: <BusinessesPage /> },
      { path: "distribution", element: <DistributionPage /> },
      { path: "why-choose-us", element: <WhyChoosePage /> },
      { path: "partner", element: <BecomePartnerPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
