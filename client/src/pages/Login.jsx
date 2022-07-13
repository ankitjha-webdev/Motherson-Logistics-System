import { Button, Input } from "@material-tailwind/react"
import { Link,  } from "react-router-dom"
import motherson from '../images/motherson.jpg'
import motherson_logo from '../images/motherson_logo.png'
import ReCAPTCHA from "react-google-recaptcha";


const Login = () => {

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className="grid grid-cols-2 w-auto h-screen items-center  bg-grey-200 ">

      <div className="login-container grid text-center w-1/3 p-10  mx-auto rounded-full ">
        <div className="login-form     shadow-2xl p-10">
          <div className="login-form-header ">
            <img src={motherson_logo} className="-mt-20" alt="" sizes="" />
          </div>
          <div className="login-form-body">
            <form>
              <div className="login-form-input my-4 ">
                <Input label="Username" type="text" color="grey" icon={<i className="fa-solid fa-user"></i>} />
              </div>
              <div className="login-form-input my-4 ">
                <Input label="Domain" type="text" color="grey"  icon={<i className="fa-solid fa-building-flag"></i>} />
              </div>
              <div className="login-form-input my-4">
                <Input label="Password" type="password" color="grey" icon={<i className="fa-solid fa-key"></i>} />
              </div>
              {/* recaptcha */}
              <div className="login-form-input mb-4">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChange}
                 
                />
              </div>
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