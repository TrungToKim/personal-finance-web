import { useState } from 'react'
import './Security.css'

interface LoginEntry {
    icon: string
    device: string
    location: string
    time: string
    badge: 'current' | 'new'
}

const mockHistory: LoginEntry[] = [
    { icon: '💻', device: 'Chrome on Windows', location: 'Hanoi, VN', time: 'Today 08:30', badge: 'current' },
    { icon: '📱', device: 'Safari on iPhone', location: 'Ho Chi Minh, VN', time: 'Yesterday 21:15', badge: 'new' },
    { icon: '💻', device: 'Firefox on Linux', location: 'Da Nang, VN', time: '3 days ago', badge: 'new' },
]

export default function Security() {
    // Section A - Change Password
    const [currentPw, setCurrentPw] = useState('')
    const [newPw, setNewPw] = useState('')
    const [confirmPw, setConfirmPw] = useState('')
    const [showCurrent, setShowCurrent] = useState(false)
    const [showNew, setShowNew] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    // Section B - OTP
    const [otpType, setOtpType] = useState('email')
    const [otpCode, setOtpCode] = useState('')

    // Section C - Notifications
    const [notifyNewDevice, setNotifyNewDevice] = useState(true)

    return (
        <div className="security-wrapper">

            {/* ===== Section A: Change Password ===== */}
            <div className="security-section">
                <div className="security-section-header">
                    <p className="security-section-title">🔒 Đổi mật khẩu</p>
                    <p className="security-section-desc">Cập nhật mật khẩu để bảo vệ tài khoản của bạn</p>
                </div>

                <div className="security-form-group">
                    <label className="security-form-label" htmlFor="currentPw">Current Password</label>
                    <div className="security-input-wrapper">
                        <input
                            id="currentPw"
                            type={showCurrent ? 'text' : 'password'}
                            className="security-form-input"
                            value={currentPw}
                            onChange={(e) => setCurrentPw(e.target.value)}
                            placeholder="Enter current password"
                        />
                        <button
                            type="button"
                            className="security-eye-toggle"
                            onClick={() => setShowCurrent(!showCurrent)}
                            title={showCurrent ? 'Hide' : 'Show'}
                        >
                            {showCurrent ? '🙈' : '👁'}
                        </button>
                    </div>
                </div>

                <div className="security-form-group">
                    <label className="security-form-label" htmlFor="newPw">New Password</label>
                    <div className="security-input-wrapper">
                        <input
                            id="newPw"
                            type={showNew ? 'text' : 'password'}
                            className="security-form-input"
                            value={newPw}
                            onChange={(e) => setNewPw(e.target.value)}
                            placeholder="Enter new password"
                        />
                        <button
                            type="button"
                            className="security-eye-toggle"
                            onClick={() => setShowNew(!showNew)}
                            title={showNew ? 'Hide' : 'Show'}
                        >
                            {showNew ? '🙈' : '👁'}
                        </button>
                    </div>
                </div>

                <div className="security-form-group">
                    <label className="security-form-label" htmlFor="confirmPw">Confirm New Password</label>
                    <div className="security-input-wrapper">
                        <input
                            id="confirmPw"
                            type={showConfirm ? 'text' : 'password'}
                            className="security-form-input"
                            value={confirmPw}
                            onChange={(e) => setConfirmPw(e.target.value)}
                            placeholder="Confirm new password"
                        />
                        <button
                            type="button"
                            className="security-eye-toggle"
                            onClick={() => setShowConfirm(!showConfirm)}
                            title={showConfirm ? 'Hide' : 'Show'}
                        >
                            {showConfirm ? '🙈' : '👁'}
                        </button>
                    </div>
                </div>

                <button
                    className="security-btn-primary"
                    onClick={() => alert('Password updated!')}
                >
                    Update Password
                </button>
            </div>

            {/* ===== Section B: OTP Verification ===== */}
            <div className="security-section">
                <div className="security-section-header">
                    <p className="security-section-title">📲 Verify / Update Contact Info</p>
                    <p className="security-section-desc">Enter OTP to verify email, phone number, or change contact details</p>
                </div>

                <div className="security-otp-row">
                    <div className="security-form-group">
                        <label className="security-form-label" htmlFor="otpType">OTP Type</label>
                        <select
                            id="otpType"
                            className="security-otp-select"
                            value={otpType}
                            onChange={(e) => setOtpType(e.target.value)}
                        >
                            <option value="email">📧 Email OTP</option>
                            <option value="phone">📱 Phone OTP</option>
                        </select>
                    </div>
                    <button
                        className="security-btn-outlined"
                        onClick={() => alert(`OTP sent via ${otpType}!`)}
                    >
                        Send OTP
                    </button>
                </div>

                <div className="security-otp-verify-row">
                    <div className="security-form-group">
                        <label className="security-form-label" htmlFor="otpCode">OTP Code (6 digits)</label>
                        <input
                            id="otpCode"
                            type="text"
                            className="security-form-input"
                            value={otpCode}
                            onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                            placeholder="Enter 6-digit OTP"
                            maxLength={6}
                        />
                    </div>
                    <button
                        className="security-btn-primary"
                        onClick={() => alert('OTP verified!')}
                    >
                        Verify OTP
                    </button>
                </div>
            </div>

            {/* ===== Section C: Login History ===== */}
            <div className="security-section">
                <div className="security-section-header">
                    <p className="security-section-title">🕐 Login History &amp; Notifications</p>
                </div>

                <div className="security-toggle-row">
                    <span className="security-toggle-label">Notify me when logged in from a new device</span>
                    <label className="security-toggle">
                        <input
                            type="checkbox"
                            checked={notifyNewDevice}
                            onChange={(e) => setNotifyNewDevice(e.target.checked)}
                        />
                        <span className="security-toggle-slider" />
                    </label>
                </div>

                <div className="security-history-list">
                    {mockHistory.map((entry, idx) => (
                        <div key={idx} className="security-history-entry">
                            <span className="security-history-icon">{entry.icon}</span>
                            <div className="security-history-info">
                                <span className="security-history-device">{entry.device}</span>
                                <span className="security-history-meta">{entry.location} · {entry.time}</span>
                            </div>
                            <span className={`security-badge ${entry.badge === 'current' ? 'security-badge-current' : 'security-badge-new'}`}>
                                {entry.badge === 'current' ? 'Current' : 'New Device'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
