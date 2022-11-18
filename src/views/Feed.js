import React, { useState, useEffect} from "react";
import Header from "../components/Header"
import PostContainer from "../components/posts/PostContainer"
import {useNavigate} from "react-router-dom"

export default function Feed(){
    const [posts , setPosts] = useState ([])


    useEffect(()=>{
        fetch('http://localhost:9292/data')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            // setPosts(data)
        });
    }, []);

    return (
        <div>
            {/* <Header /> */}
            {/* <PostContainer posts={posts}/> */}
        </div>
    )
}