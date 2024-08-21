import { useEffect } from "react";
import "./App.css";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Container } from "./components/Container/Container";
import { Route, Routes } from "react-router-dom";
import { ProductList } from "./components/ProductList/ProductList";
import { Product } from "./components/Product/Product";
import { Form } from "./components/Form/Form";

import { useTg } from "./hooks/useTelegram";
import { useLocation } from "react-router-dom";

function App() {
  const { tg } = useTg();
  const { pathname } = useLocation();

  const backPage = () => {
    window.history.back();
  };

  // useEffect(() => {
  tg.ready();
  // }, []);

  if (pathname === "/") {
    tg.BackButton.hide();
  } else {
    tg.BackButton.show();
  }

  useEffect(() => {
    tg.BackButton.onClick(backPage);
    return () => {
      tg.BackButton.offClick(backPage);
    };
  }, [pathname]);

  return (
    <main className="App">
      <Header />
      <Container>
        <Routes>
          <Route index element={<ProductList />} />
          <Route path="/contacts" element={<Form />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Container>
      {/* <Footer /> */}
    </main>
  );
}

export default App;
