const express = require('express')
const router = express.Router();

const Task = require('../models/Task')


router.get('/', async(req, res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

router.post('/', async(req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        taskStatus: req.body.taskStatus
    })

    try{
        const newTask = await task.save();
        res.status(201).json(newTask);
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

router.put('/', async (req, res) => {
    const taskId = req.body.taskId;
    const newTaskStatus = req.body.taskStatus;

    try {
        const task = await Task.findById(taskId);
        if (!task) return res.status(404).json({ message: 'Task not found' });

        task.taskStatus = newTaskStatus;
        await task.save();

        res.status(200).json({ message: "Task status updated successfully", updatedTask: task });
    } catch (err) {
        console.error('Error updating task:', err);
        res.status(500).json({ message: "Internal server error" });
    }
});


router.delete('/', async(req,res) => {
    const {id} = req.params;
    try{
        const deletedTask = await Task.findByIdAndDelete(id);
        if(!deletedTask) return res.status(404).json({message: 'Task not found'});
        res.status(200).json({message: 'Task deleted successfully', deletedTask});
    }catch(err){
        console.log('Error deleting task', error);
        res.status(500).json({message: "Internal server error"});
    }
})

module.exports = router;