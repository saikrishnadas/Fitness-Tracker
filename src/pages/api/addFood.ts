// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import Food from "../../../models/Food";
import dbConnect from "../../../utils/mongo";

export default async function addFood(req:NextApiRequest,res:NextApiResponse<any>) {
    const {method} = req;
    await dbConnect();
    res.status(200).json({ message:"The api test call works" })
}