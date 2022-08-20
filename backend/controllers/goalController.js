const asyncHandler = require('express-async-handler');

/// @desc Get Goals
/// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({'message':"get goals"})
})

/// @desc Set Goals
/// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400);
        throw new Error('please add a textfield');
    }

    res.status(200).json({'message':"set goals"})
})

/// @desc Update Goals
/// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req,res) => {
    res.status(200).json({'message':`update goal with ${req.params.id}`})
})

/// @desc Delete Goals
/// @route Delete /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req,res) => {
    res.status(200).json({'message':`deleted goal with ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}