import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from '../utils/constant';
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () =>{
    const feed = useSelector(store => store.feed);
    const dispatch = useDispatch();

    const getFeed = async () =>{
        if (feed && feed.length > 0) return;
        try{
            const res = await axios.get(BASE_URL + "/feed",{withCredentials: true});
            console.log(res.data)
            dispatch(addFeed(res.data.data));
        }catch(err){
            console.error("Error fetching feed:", err);

        }
        
    };
        useEffect(() => {
            getFeed(); 
         }, []); 
    return (
  <div className = "flex justify-center my-10">
    
    {Array.isArray(feed) && feed.length > 0 ? (
  <div className="flex flex-wrap gap-4">
    {feed.map((u) => (
      <UserCard key={u._id} user={u} />
    ))}
  </div>
) : (
  <p>Loading...</p>
)}
  </div>
);



};
export default Feed; 






















