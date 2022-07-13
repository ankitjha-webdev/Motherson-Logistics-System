import { Button, Input } from "@material-tailwind/react"
import { Link, } from "react-router-dom"
import motherson_logo from '../images/motherson_logo.png'
import ReCAPTCHA from "react-google-recaptcha";


const ForgotPassword = () => {

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    return (
        <div className="grid w-auto h-screen items-center justify-center  bg-grey-200 ">

            <div className="login-container grid text-center mx-auto  w-96   ">
                <div className="login-form   shadow-2xl p-10">
                    <div className="login-form-header ">
                        <img src={motherson_logo} className="-mt-16" alt="" sizes="" />
                    </div>
                    <div className="login-form-body ">
                        <form>

                            <div className="login-form-input my-4 ">
                                <Input label="Email" type="text" color="grey" icon={<i class="fa-solid fa-at"></i>} />
                            </div>
                            {/* recaptcha */}
                            <div className="login-form-input mb-4">
                                <ReCAPTCHA
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                    onChange={onChange}

                                />
                            </div>
                            <div className="login-form-input">
                                <Button color="red" className="w-full mb-3" type="submit">Reset</Button>
                            </div>
                            <div>
                                <span className="text-sm text-center space-x-20 text-grey-600">
                                    <small className="">
                                        <Link to="/" className="cursor-pointer">Go to Login</Link>
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
        </div>
    )
}

export default ForgotPassword