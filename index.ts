import * as express from "express";
import * as cors from "cors";
import conectarDB from './config/db.config';

const app = express();

conectarDB();

app.use(cors());
app.use(express.json());

import postRouter from './routes/post.route';

app.use('/api/posts', postRouter);

const PORT = parseInt(process.env.PORT as string, 10) || 5000;

app.listen(PORT, () => {
  console.log(`El servidor está corriendo correctamente en el puerto ${PORT}...`);
});
