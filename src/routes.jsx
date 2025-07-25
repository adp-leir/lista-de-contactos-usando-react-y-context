import React from "react";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import ContactList from "./pages/ContactList";
import AddContact from "./pages/AddContact";
import { Layout } from "./pages/Layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<ContactList />} />
      <Route path="add" element={<AddContact />} />
      <Route path="edit/:id" element={<AddContact />} />
    </Route>
  )
);
