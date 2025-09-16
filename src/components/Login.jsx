import {useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {addUser} from "../utils/userSlice"
import {useNavigate} from "react-router-dom";
import {BASE_URL} from '../utils/constant';
const Login = () => {

  const [emailId, setEmailId] = useState("smriti@gmail.com");
  const [password, setPassword] = useState("Smr!t!123");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    try {
      const res = await axios.post(BASE_URL +"/login", {
        emailId,
        password,
      }, { withCredentials: true });
      dispatch(addUser(res.data));
      return navigate("/")
    } catch (err) {
      setError(err.message)
      console.error(err?.response?.data || " Something Went wrong ...!!!");
      
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login!</h2>
          <form onSubmit={handleSubmit}> 
            <div>
              <label className="form-control w-full max-w-xs my-3">
                <div className="label">
                  <span className="label-text">Email Id </span>
                </div>
                <input
                  type="text"
                  value={emailId}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs my-3">
                <div className="label">
                  <span className="label-text">Password </span>
                </div>
                <input
                  type="password" 
                  value={password}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <p className = "text-red-500">{error} </p>
            <div className="card-actions justify-center">
              <button type="submit" className="btn btn-primary">Login</button> 
            </div>
          </form> 
        </div>
      </div>
    </div>
  );
};

export default Login;
