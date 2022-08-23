const List = require('../models/List');
const asyncHandler = require('express-async-handler');


//CREATE
const createList = asyncHandler(async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body);
        try {
            const savedList = await newList.save();
            res.status(201).json(savedList);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("You are not allowed create lists!");
    }

});
//DELETE
const deleteList = asyncHandler(async (req, res) => {
            if (req.user.isAdmin) {
                try {
                    await List.findOneAndDelete(req.params.id);
                    res.status(200).json({
                        "message": `List has been deleted!`
                    })
                } catch
                    (error) {
                    res.status(500).json(error);
                }
            } else {
                res.status(403).json("You are not allowed delete lists!");
            }
        }
    )
;

//GET
const getList = asyncHandler(async (req, res) => {

    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];


    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type: typeQuery, genre: genreQuery}}
                ])
            } else {
                list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type: typeQuery}}
                ])
            }
        } else {
            list = await List.aggregate([{$sample: {size: 10}}]);
        }
    } catch (error) {
        res.status(500).json(error);
    }
res.status(200).json(list);
});


module.exports = {
    createList,
    deleteList,
    getList
};