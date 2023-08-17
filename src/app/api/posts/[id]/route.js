import { NextResponse } from "next/server"
import connect from "@/utils/db";
import {Post} from "@/app/models/Post";


export const GET = async (request,{params}) =>{
    //fetch

const {id} = params

try {
    await connect()

    const post = await Post.findById(id)

    return new NextResponse(JSON.stringify(post),{status:200});
} catch (error) {
    return new NextResponse("Db error",{status:500});
}

  

}