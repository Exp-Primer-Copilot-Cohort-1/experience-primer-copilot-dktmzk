// Create web server

// Import express
const express = require('express');
const router = express.Router();

// Import comments controller
const commentsController = require('../controllers/commentsController');

// Get all comments
router.get('/', commentsController.getAllComments);

// Get comment by id
router.get('/:id', commentsController.getCommentById);

// Get all comments by post id
router.get('/post/:id', commentsController.getCommentsByPostId);

// Get all comments by user id
router.get('/user/:id', commentsController.getCommentsByUserId);

// Create new comment
router.post('/', commentsController.createComment);

// Update comment
router.put('/:id', commentsController.updateComment);

// Delete comment
router.delete('/:id', commentsController.deleteComment);

// Export router
module.exports = router;