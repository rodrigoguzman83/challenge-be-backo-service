import { Router } from "express";
import {createUser, deleteUser, getUsers, updateUser,getUserById} from "../controllers/user.controllers"

const router=Router()

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Returns a user list.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/User"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "No hay ususarios"
 * 
 *   post:
 *     summary: Create a new user.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/User"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "No se pudo crear el usuario"
 * 
 * /users/{userId}:
 *   get:
 *     summary: Returns a user by ID.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true 
 *         schema:
 *           type: integer
 *           format: integer
 *           minimum: 1
 *         description: user list by id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: string
 *                   items:
 *                     $ref: "#/components/schemas/User"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 * 
 *   put:
 *     summary: Update a user by ID.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true 
 *         schema:
 *           type: integer
 *           format: integer
 *           minimum: 1
 *         description: user list by id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/User"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 * 
 *   delete:
 *     summary: Delete a user by ID.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true 
 *         schema:
 *           type: integer
 *           format: integer
 *           minimum: 1
 *         description: user list by id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: string
 *                   example: "user was deleted"
 *                     
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 * 
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         userId:
 *           type: autoincrement
 *           example: 1
 *         username:
 *           type: string
 *           required: true
 *           example: rguzman
 *         phone:
 *           type: string
 *           required: true
 *           example: 1122456790
 *         email:
 *           type: string
 *           required: true
 *           example: rguzman@example.com
 *         fullname: 
 *           type: string
 *           required: true
 *           example: luis rodrigo guzman
 *         createdAt:
 *           type: datetime
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt:
 *           type: datetime
 *           example: 4/20/2022, 2:21:56 PM
 */

router.post('/users',createUser)
router.get('/users',getUsers)
router.get('/users/:userId',getUserById)
router.put('/users/:userId',updateUser)
router.delete('/users/:userId',deleteUser)

export default router;