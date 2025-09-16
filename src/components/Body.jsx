import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { BASE_URL } from '../utils/constant';
import { useDispatch, useSelector } from "react-redux"; 
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store) => store.user);

    const fetchUser = async () => {
        if (userData) {
            return;
        }

        try {
            const user = await axios.get(BASE_URL + "/profile/view", {
                withCredentials: true
            });
            
            dispatch(addUser(user.data)); 
            
        } catch (err) {
            console.error("Error fetching user profile:", err);
            
            if (axios.isAxiosError(err) && err.response) {
                if (err.response.status === 401 || err.response.status === 403) {
                    console.log("User not authenticated or session expired.");
                    dispatch(removeUser());
                    navigate('/login');
                }
            }
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Body;
