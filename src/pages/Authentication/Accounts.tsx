import './Accounts.css'
import { NavLink, useNavigate } from 'react-router-dom'
export default function Accounts() {
    const navigate = useNavigate()
    return (
        <>
            <div className="AccountFrom">
                <div className="AccountBox">
                    <h2>Login</h2>
                    <label>Username or Gmail</label>
                    <input type="text" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="LoginBtn"
                        onClick={() => navigate("/home")}
                    >
                        Login
                    </button>
                    <div className='AccountLink'>
                        <h4>Don't have an account? <NavLink to='/register'>Register?</NavLink></h4>
                    </div>
                    <div className='AccountLink'>
                        <NavLink to='/resetpassword'>Forgot password?</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}