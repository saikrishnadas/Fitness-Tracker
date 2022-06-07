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
        },
        Tdate:{
            type: String,
            required:true
        },
        slug:{
            type: String,
            required: true,
            unique: true
        }
    },
    { timestamps: true }
)

const Food = mongoose.models.Food || mongoose.model("Food",foodSchema)

export default Food;