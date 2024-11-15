import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createComment, getPostComment, likeComment, editComment, deleteComment, getComments } from '../controller/comment.controller.js'


const router = express.Router();

router.post('/create', verifyToken, createComment);
router.get('/getPostComments/:postId', getPostComment);
router.put('/likeComment/:commentId', verifyToken, likeComment);
router.put('/editComment/:commentId', verifyToken, editComment);
router.delete('/deleteComment/:commentId', verifyToken, deleteComment);
router.get('/getComments', verifyToken,  getComments);

export default router;