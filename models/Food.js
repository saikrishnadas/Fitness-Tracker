import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
    {
        caloriesBurned:{
            type: Number,
            required: true
        },
        caloriesConsumed:{
            type: Number,
            required: true
        },
        caloriesDifference:{
            type: Number,
            required: true
        },
        protein:{
            type: Number,
            required: true
        },
        carbs:{
            type: Number,
            required: true
        },
        fat:{
            type: Number,
            required: true
        },
        fiber:{
            type: Number,
            required: true
        }
    },
    { timestamps: true }
)

const Food = mongoose.models.Food || mongoose.model("Food",foodSchema)

export default Food;