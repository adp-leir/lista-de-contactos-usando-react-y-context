import React, { useContext, useState, useEffect } from "react";
import { ContactContext } from "../Context/ContactContext";
import { useNavigate, useParams } from "react-router-dom";

const AddContact = () => {
  const { addContact, updateContact, contacts } = useContext(ContactContext);
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", address: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const c = contacts.find((c) => c.id == id);
      if (c) setForm(c);
    }
  }, [id, contacts]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateContact(id, form);
    } else {
      await addContact(form);
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="full_name" placeholder="Nombre" value={form.full_name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="phone" placeholder="Teléfono" value={form.phone} onChange={handleChange} />
      <input name="address" placeholder="Dirección" value={form.address} onChange={handleChange} />
      <button type="submit">{id ? "Actualizar" : "Crear"}</button>
    </form>
  );
};

export default AddContact;
