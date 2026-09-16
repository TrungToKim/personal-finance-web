import './ResetPasswords.css'
import { useNavigate } from 'react-router-dom'
export default function ResetPassword() {
    const navigate = useNavigate()
    const handleClick = () => {
        setTimeout(() => {
            alert("Reset sucess")
            navigate("/accounts")
        }, 2000);
    }
    return (
        <>
            <div className="ResetFrom">
                <div className="ResetBox">
                    <h2>Reset Password</h2>
                    <label>Username or Gmail</label>
                    <input type="text" />
                    <button className="ResetBtn"
                        onClick={handleClick}
                    >
                        Reset
                    </button>
                    <button className='ResetBtn'
                        onClick={() => navigate("/accounts")}
                    >
                        Back
                    </button>
                </div>
            </div>
        </>
    )
}