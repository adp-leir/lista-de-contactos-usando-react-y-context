import React, { useContext } from "react";
import { ContactContext } from "../Context/ContactContext";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const { deleteContact } = useContext(ContactContext);

  return (
    <div>
      <h3>{contact.full_name}</h3>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <p>{contact.address}</p>
      <Link to={`/edit/${contact.id}`}>✏️ Editar</Link>
      <button onClick={() => deleteContact(contact.id)}>🗑️ Borrar</button>
    </div>
  );
};

export default ContactCard;
