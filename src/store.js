
const API = "https://playground.4geeks.com/apis/fake/contact";
const AGENDA = "mi_agenda";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: []
    },
    actions: {
      loadContacts: async () => {
        try {
          const res = await fetch(`${API}/agenda/${AGENDA}`);
          if (!res.ok) throw new Error(`Error ${res.status}`);
          const data = await res.json();
          setStore({ contacts: data });
        } catch (error) {
          console.error("Error cargando contactos:", error);
          setStore({ contacts: [] }); // o manejo alternativo
        }
      },

      addContact: async (contact) => {
        await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...contact, agenda_slug: AGENDA })
        });
        getActions().loadContacts();
      },
      deleteContact: async (id) => {
        await fetch(`${API}/${id}`, { method: "DELETE" });
        getActions().loadContacts();
      },
      updateContact: async (id, contact) => {
        await fetch(`${API}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contact)
        });
        getActions().loadContacts();
      }
    }
  };
};

export default getState;


