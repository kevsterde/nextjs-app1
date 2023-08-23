import { NextResponse } from "next/server"
import connect from "@/utils/db";
import {Post} from "@/app/models/Post";
import { useParams } from "next/navigation";


export const GET = async (request) =>{
    //fetch
    const params = useParams();




    const id = params.id;



try {
    await connect()

    const post = await Post.findById(id)

    return new NextResponse(JSON.stringify(post),{status:200});
} catch (error) {
    return new NextResponse("Db error",{status:500});
}

}



export const DELETE = async (request,{params}) =>{
    //fetch

const {id} = params

try {
    await connect()

    await Post.findByIdAndDelete(id);

    return new NextResponse("Post Deleted",{status:200});
} catch (error) {
    return new NextResponse("Db error",{status:500});
}

}