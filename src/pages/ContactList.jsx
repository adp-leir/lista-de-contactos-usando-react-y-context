import React, { useContext } from "react";
import { ContactContext } from "../Context/ContactContext";
import ContactCard from "../components/ContactCard";
import { Link } from "react-router-dom";

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <div>
      <h1>Lista de Contactos</h1>
      <Link to="/add">➕ Nuevo Contacto</Link>
      {contacts.map((c) => (
        <ContactCard key={c.id} contact={c} />
      ))}
    </div>
  );
};


export default ContactList;

