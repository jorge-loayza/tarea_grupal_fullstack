const express = require('express');
const app = express();
const productoRoutes = require('./routes/producto.routes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api', productoRoutes);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT} (Sequalize)`)
);
