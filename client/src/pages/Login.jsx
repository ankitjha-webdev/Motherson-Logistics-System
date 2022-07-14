import { Button, Input } from "@material-tailwind/react"
import { Link } from "react-router-dom"
import motherson from '../images/motherson.jpg'
import motherson_logo from '../images/motherson_logo.png'
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import axios from 'axios'

const Login = () => {

  // function onChange(value) {
  //   console.log("Captcha value:", value);
  // }

  const [data, setData] = useState({
    username: "",
    password: "",
  })
  const [error, setError] = useState("")
  const handleChange = ({ currentTarget: input }) => {
    setData({
      ...data,
      [input.name]: input.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const {data:res} = await axios.post(url, data);
      localStorage.setItem("token",res.data);
      window.location = "/dashboard"
      
    } catch (error) {
      if(error.response && error.response.status >= 400 && error.response.status <= 500){
        setError(error.response.data.message);
      }
    }
  }


  return (
    <div className="grid grid-cols-2 w-auto h-screen items-center  bg-grey-200 ">

      <div className="login-container grid text-center w-1/3 p-10  mx-auto rounded-full ">
        <div className="login-form     shadow-2xl p-10">
          <div className="login-form-header ">
            <img src={motherson_logo} className="-mt-20" alt="" sizes="" />
          </div>
          <div className="login-form-body">
            <form onSubmit={handleSubmit}>
              <div className="login-form-input my-4 ">
                <Input label="Username" type="text" onChange={handleChange} name="username" color="grey" icon={<i className="fa-solid fa-user"></i>} />
              </div>
              <div className="login-form-input my-4 ">
                <Input label="Domain" type="text"  onChange={handleChange} name="domain" color="grey"  icon={<i className="fa-solid fa-building-flag"></i>} />
              </div>
              <div className="login-form-input my-4">
                <Input label="Password" type="password" onChange={handleChange} name="password" color="grey" icon={<i className="fa-solid fa-key"></i>} />
              </div>
              {/* recaptcha */}
              <div className="login-form-input mb-4">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"               
                />
              </div>
              {error && <div >{error}</div>}
              <div className="login-form-input">
                <Button color="red" className="w-full" type="submit">Login</Button>
              </div>
              <div>
                <span className="text-sm text-center  space-x-24 text-grey-600">
                  <small className="">
                    <Link to="/forgotpassword" className="cursor-pointer">Forgot Password?</Link>
                  </small>
                  <small className="">
                    <Link to="/register" className="cursor-pointer">Don't have account?</Link>
                  </small>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className=" visible lg:visible md:invisible ">
      <img src={motherson} className=" rounded-2xl shadow-2xl  mx-auto shadow-gray-600 border-grey-400 border-8" alt="" />
      </div>
    </div>
  )
}

export default Login