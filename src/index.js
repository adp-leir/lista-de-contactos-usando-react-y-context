const express = require('express');
const app = express();
const PORT = 3000;

const contactsData = {
  contacts: [
    {
      name: "Joselito",
      phone: "2143544",
      email: "jose@gmail.com",
      address: "calle joselito 1ero",
      id: 72
    }
  ]
};

app.get('/contacts', (req, res) => {
  res.json(contactsData);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});