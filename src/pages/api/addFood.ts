// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import Food from "../../../models/Food";
import dbConnect from "../../../utils/mongo";

// interface ResponseProps {
//     caloriesBurned: string;
//     caloriesConsumed:string;
//     caloriesDifference: string;
//     protein:string;
//     carbs: string;
//     fat:string;
//     fiber: string;
//     Tdate:string;
//     slug: string;
//     _id:string;
//     createdAt?:string;
//     updatedAt?:string;
//     __v?:any;
// }

export default async function addFood(req:NextApiRequest,res:NextApiResponse<any>) {
    const {method} = req;
    await dbConnect();
    if(method === "GET"){
        try{
            const foods = await Food.find({});
            res.status(200).json(foods);
        }catch(err){
            res.status(400).json(err);
        }
    }
    if(method === "POST"){
        try{
            const food = await Food.create(req.body);
            res.status(201).json(food);
        } catch(err){
            res.status(500).json(err);
        }
    }
}