import "./signup.css";
import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    //navigate using the react router dom
    const navigate = useNavigate();
    // Function to handle sign up
    const handleSignUp = async(e) => {
        e.preventDefault(); //Prevebt page refresh on form submit

        const email = e.target.email.value; // Get email from form
        const password = e.target.password.value; // Get password from form

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User signed up:", user);
            navigate("/"); // Navigate to login page after successful sign up
            

        } catch (error) {
            console.error("Error signing up:", error);
        }
    }

    return(
        <><div className="Sign-up">
            <h1>Sign Up</h1>
            <p>This is the Sign Up page. Here you can create a new account.</p>
        </div>
        <div className="form-container">
            <h1>Please fill out the form below:</h1>
            <form className="form" onSubmit={handleSignUp}>
                    <br />
                    <input type="email" text="Email" name="email" placeholder="Email" className="sign-up-input"/>
                    <br />
                    <input type="password" name="password" placeholder="Password" className="sign-up-input"/>
                    <br />
                    <button type="submit" className="sign-up-button">Sign Up</button>
            </form>
                <p>Already have an account? <Link to="/">Login here</Link></p>
        </div>    
        
        
        </>








    );

}