import "./signup.css";


export default function SignUp() {
    return(
        <><div className="Sign-up">
            <h1>Sign Up</h1>
            <p>This is the Sign Up page. Here you can create a new account.</p>
        </div>
        <div className="form-container">
            <h1>Please fill out the form below:</h1>
            <form className="form">
                    <input type="text" placeholder="Username" className="sign-up-input"/>
                    <br />
                    <input type="email" placeholder="Email" className="sign-up-input"/>
                    <br />
                    <input type="password" placeholder="Password" className="sign-up-input"/>
                    <br />
                    <button type="submit" className="sign-up-button">Sign Up</button>
            </form>
        </div>    
        
        
        </>








    );

}