import { useState } from 'react'
import './Profile.css'
import ReactImg from '../assets/react.svg'

export default function Profile() {
    const [fullName, setFullName] = useState('Trung')
    const [dob, setDob] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('trung@gmail.com')

    return (
        <div className="profile-form-wrapper">
            <div>
                <p className="profile-section-title">Thông tin cá nhân</p>
                <p className="profile-section-subtitle">Cập nhật ảnh đại diện và thông tin cá nhân của bạn</p>
            </div>

            {/* Avatar */}
            <div className="profile-avatar-section">
                <div className="profile-avatar-container">
                    <img
                        src={ReactImg}
                        alt="avatar"
                        className="profile-avatar-img"
                    />
                    <button
                        className="profile-avatar-edit-btn"
                        title="Change photo"
                        onClick={() => alert('Photo upload coming soon!')}
                    >
                        📷
                    </button>
                </div>
                <span className="profile-avatar-hint">Click the camera icon to change your photo</span>
            </div>

            {/* Form */}
            <form
                className="profile-form"
                onSubmit={(e) => { e.preventDefault(); alert('Changes saved!') }}
            >
                <div className="profile-form-group">
                    <label className="profile-form-label" htmlFor="fullName">Full Name</label>
                    <input
                        id="fullName"
                        type="text"
                        className="profile-form-input"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                    />
                </div>

                <div className="profile-form-group">
                    <label className="profile-form-label" htmlFor="dob">Date of Birth</label>
                    <input
                        id="dob"
                        type="date"
                        className="profile-form-input"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                </div>

                <div className="profile-form-group">
                    <label className="profile-form-label" htmlFor="phone">Phone Number</label>
                    <input
                        id="phone"
                        type="text"
                        className="profile-form-input"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                    />
                </div>

                <div className="profile-form-group">
                    <label className="profile-form-label" htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="profile-form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>

                <button type="submit" className="profile-save-btn">
                    💾 Save Changes
                </button>
            </form>
        </div>
    )
}
