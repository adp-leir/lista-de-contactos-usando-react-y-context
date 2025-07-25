
import React, { createContext, useState, useEffect } from "react";

export const ContactContext = createContext();

const API = "https://playground.4geeks.com/apis/fake/contact";
const AGENDA = "mi_agenda";

export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    const loadContacts = async () => {
        try {
            const res = await fetch(`${API}/agenda/${AGENDA}`);
            const data = await res.json();
            setContacts(data.contacts || []); // Si no hay "contacts", usa array vacío
        } catch (error) {
            console.error("Error loading contacts:", error);
            setContacts([]); // En caso de error, limpia el estado
        }
    };

    const addContact = async (contact) => {
        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...contact, agenda_slug: AGENDA }),
        });
        loadContacts();
    };

    const deleteContact = async (id) => {
        await fetch(`${API}/${id}`, { method: "DELETE" });
        loadContacts();
    };

    const updateContact = async (id, contact) => {
        await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contact),
        });
        loadContacts();
    };

    useEffect(() => {
        loadContacts();
    }, []);

    return (
        <ContactContext.Provider
            value={{ contacts, addContact, deleteContact, updateContact }}
        >
            {children}
        </ContactContext.Provider>
    );
};
