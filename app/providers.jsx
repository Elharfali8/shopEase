// app/providers.js
"use client"; // Required in Next.js 13 for client-side code

import { Provider } from "react-redux";
import store from "@/store"; // Adjust the path based on your store's location

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}