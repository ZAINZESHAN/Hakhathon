import { Router } from 'express';
import ensureAuthenticated from '../Middlewares/Auth.js';

const router = Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- Logged in user details ---', req.user);
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "tv",
            price: 20000
        }
    ]);
});

export default router;
