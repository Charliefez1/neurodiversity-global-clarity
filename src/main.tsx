import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./i18n/config";
import "@fontsource/cooper-hewitt/400.css";
import "@fontsource/cooper-hewitt/500.css";
import "@fontsource/cooper-hewitt/600.css";
import "@fontsource/cooper-hewitt/700.css";
import "@fontsource/cooper-hewitt/800.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
