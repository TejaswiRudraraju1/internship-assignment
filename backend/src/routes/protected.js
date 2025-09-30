// backend/src/routes/protected.js
import express from "express";
import { protect, authorize } from "../middleware/protected.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Protected
 *   description: Routes protected by login/admin
 */

/**
 * @swagger
 * /api/v1/protected/user:
 *   get:
 *     summary: Access for logged-in users
 *     tags: [Protected]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User route accessed
 */
router.get("/user", protect, (req, res) => {
  res.json({ message: `Hello ${req.user.name}, this is a user route.` });
});

/**
 * @swagger
 * /api/v1/protected/admin:
 *   get:
 *     summary: Access for admins only
 *     tags: [Protected]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Admin route accessed
 *       401:
 *         description: Unauthorized
 */
router.get("/admin", protect, authorize("admin"), (req, res) => {
  res.json({ message: "Welcome Admin, this is an admin route." });
});

export default router;
