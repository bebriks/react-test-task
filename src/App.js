import React from 'react';
import { Routes, Route } from 'react-router';
import { List } from './pages/list';
import { ItemDetails } from './pages/item-details';
import { Cart } from './pages/cart';
import { Header } from './blocks/header';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}
