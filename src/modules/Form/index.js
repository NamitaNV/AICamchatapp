import "./index.css";
import Input from "../../components/input";
const Form = () => {
  return (
    <div className="form">
      <div className="Wel">Welcome</div>
    <div className="Si">Sign up now to get started</div>
    <Input label='Full Name:' name="name" placeholder="Enter your full name"/>
    <Input label="Email address:" name="email" placeholder="Enter your email"/>
    <Input label="Password:" type="password" name="name" placeholder="Enter your password"/>
    </div>
  )
}

export default Form;