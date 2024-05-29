import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import {
  Menyu,
  Filallar,
  BizHaqimizda,
  Boglanish,
  Korzina,
} from "./pages/HeaderSide/index";
import { Layout } from "./layout/Layout";

function App() {
  
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Menyu />} />
              <Route path="filial" element={<Filallar />} />
              <Route path="about" element={<BizHaqimizda />} />
              <Route path="connect" element={<Boglanish />} />
              <Route path="cart" element={<Korzina />} />
            </Route>
            <Route path="*" element={<h1>hello</h1>} />
          </Routes>
        </div>
      </Provider>
    </>
  );
}

export default App;

// App.js
// import React from 'react';
// import StickyMenu from './components/StickyMenu';
// import MainContent from "./components/MainContent";

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <StickyMenu />
//       <MainContent />
//     </div>
//   );
// }

// export default App;
