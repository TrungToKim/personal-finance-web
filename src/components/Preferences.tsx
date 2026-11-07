import { useState } from 'react'
import './Preferences.css'

type Theme = 'light' | 'dark' | 'system'
type Currency = 'VND' | 'USD'
type Language = 'vi' | 'en'

export default function Preferences() {
    // Section A
    const [theme, setTheme] = useState<Theme>('light')

    // Section B
    const [currency, setCurrency] = useState<Currency>('VND')

    // Section C
    const [language, setLanguage] = useState<Language>('vi')

    // Section D
    const [notifySms, setNotifySms] = useState(false)
    const [notifyEmail, setNotifyEmail] = useState(false)
    const [notifyApp, setNotifyApp] = useState(true)

    return (
        <div className="preferences-wrapper">

            {/* ===== Section A: Theme ===== */}
            <div className="preferences-section">
                <p className="preferences-section-title">🎨 Appearance</p>
                <div className="preferences-theme-cards">
                    {([
                        { value: 'light', emoji: '☀️', label: 'Light' },
                        { value: 'dark', emoji: '🌙', label: 'Dark' },
                        { value: 'system', emoji: '💻', label: 'System' },
                    ] as { value: Theme; emoji: string; label: string }[]).map((t) => (
                        <button
                            key={t.value}
                            className={`preferences-theme-card ${theme === t.value ? 'active' : ''}`}
                            onClick={() => setTheme(t.value)}
                        >
                            <span>{t.emoji}</span>
                            <span>{t.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* ===== Section B: Currency ===== */}
            <div className="preferences-section">
                <p className="preferences-section-title">💱 Currency</p>
                <div className="preferences-pill-row">
                    <button
                        className={`preferences-pill ${currency === 'VND' ? 'active' : ''}`}
                        onClick={() => setCurrency('VND')}
                    >
                        🇻🇳 VND
                    </button>
                    <button
                        className={`preferences-pill ${currency === 'USD' ? 'active' : ''}`}
                        onClick={() => setCurrency('USD')}
                    >
                        🇺🇸 USD
                    </button>
                </div>
            </div>

            {/* ===== Section C: Language ===== */}
            <div className="preferences-section">
                <p className="preferences-section-title">🌐 Language</p>
                <div className="preferences-pill-row">
                    <button
                        className={`preferences-pill ${language === 'vi' ? 'active' : ''}`}
                        onClick={() => setLanguage('vi')}
                    >
                        🇻🇳 Tiếng Việt
                    </button>
                    <button
                        className={`preferences-pill ${language === 'en' ? 'active' : ''}`}
                        onClick={() => setLanguage('en')}
                    >
                        🇬🇧 English
                    </button>
                </div>
            </div>

            {/* ===== Section D: Notification Preferences ===== */}
            <div className="preferences-section">
                <p className="preferences-section-title">🔔 Notification Methods</p>
                <div className="preferences-notify-list">
                    {/* SMS */}
                    <div className="preferences-notify-row">
                        <div className="preferences-notify-info">
                            <span className="preferences-notify-label">📱 SMS / Text Message</span>
                            <span className="preferences-notify-desc">Receive alerts via phone number</span>
                        </div>
                        <label className="preferences-toggle">
                            <input
                                type="checkbox"
                                checked={notifySms}
                                onChange={(e) => setNotifySms(e.target.checked)}
                            />
                            <span className="preferences-toggle-slider" />
                        </label>
                    </div>

                    {/* Email */}
                    <div className="preferences-notify-row">
                        <div className="preferences-notify-info">
                            <span className="preferences-notify-label">📧 Email Notification</span>
                            <span className="preferences-notify-desc">Receive alerts via email</span>
                        </div>
                        <label className="preferences-toggle">
                            <input
                                type="checkbox"
                                checked={notifyEmail}
                                onChange={(e) => setNotifyEmail(e.target.checked)}
                            />
                            <span className="preferences-toggle-slider" />
                        </label>
                    </div>

                    {/* In-App */}
                    <div className="preferences-notify-row">
                        <div className="preferences-notify-info">
                            <span className="preferences-notify-label">🔔 In-App Notification</span>
                            <span className="preferences-notify-desc">Receive alerts within the application</span>
                        </div>
                        <label className="preferences-toggle">
                            <input
                                type="checkbox"
                                checked={notifyApp}
                                onChange={(e) => setNotifyApp(e.target.checked)}
                            />
                            <span className="preferences-toggle-slider" />
                        </label>
                    </div>
                </div>

                <button
                    className="preferences-save-btn"
                    onClick={() => alert('Preferences saved!')}
                >
                    💾 Save Preferences
                </button>
            </div>

        </div>
    )
}
