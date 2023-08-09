import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export const DetailView: React.FC<{}> = () => {

    const { id } = useParams()

    const getbyid = async (id:any) => {
        const response = await axios.get("http://localhost:3001/movies/"+ id)
        console.log(response.data)
    }

    useEffect(()=>{
        getbyid(id)
    },[])
    return(
        <div>

        </div>
    )
}