import { NavLink, useNavigate } from 'react-router-dom'
import './Registers.css'
export default function Register() {
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        setTimeout(() => {
            alert("Success")
        }, 500);
        setTimeout(() => {
            navigate("/accounts")
        }, 1000);
    }
    return (
        <>
            <div className="RegisterFrom">
                <div className="RegisterBox">
                    <form onSubmit={() => handleSubmit(event)}>
                        <h2>Register</h2>
                        <label>Username or Gmail</label>
                        <input type="text" />
                        <label>Password</label>
                        <input type="password" />
                        <button className="RegisterBtn"
                            type='submit'
                        >
                            Register
                        </button>
                    </form>
                    <div className='RegisterLink'>
                        <h4>Have an account? <NavLink to='/accounts'>Login</NavLink></h4>
                    </div>
                </div>
            </div>
        </>
    )
}