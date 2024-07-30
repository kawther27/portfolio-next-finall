"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux';
import store from '../store/index.js';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const inter = Inter({ subsets: ["latin"] });

const persistor = persistStore(store);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}



