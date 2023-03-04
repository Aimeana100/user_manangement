import express from 'express';
import rootRouter from './api/root';
import usersRouter from './api/users';
import docs from './docs/index';
import db from './models/index';

const app = express();

// built-in middleware to handle urlencoded form data
app.use(express.json());
// routes
app.use('/', rootRouter);
app.use('/users', usersRouter);
app.use(docs);

app.all('*', (req, res) => { res.json({ error: '404 Not Found' }) });

const PORT = process.env.PORT || 4000;

db.dbConnection
db.sequelize.sync({ force: false }).then( async() => {
    console.log('DB synced')
     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
