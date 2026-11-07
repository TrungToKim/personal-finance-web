# Settings Page - Original Source Backup

> This file contains verbatim copies of the original source files before the Settings UI rewrite.

---

## 1. `Setting.tsx`

```tsx
import ReactImg from '/home/gigabyte/Code/FinacerManagerWeb/src/assets/react.svg'
import { useState } from 'react'
import './Setting.css'
import ProfileSecurity from '../../components/ProfileSecurity'
import DataManagement from '../../components/DataManagement'
import Preferences from '../../components/Preferences'
export default function Setting() {
    const [actives, SetActives] = useState('1')
    return (
        <>
            <div className="setting-secreen">
                <div className="setting-title">
                    <h2>Settings</h2>
                    <p>Manage your account preferences and security</p>
                </div>
                <div className='setting-information'>
                    <div className='setting-left'>
                        <div className='setting-left-avata'>
                            <div className='avata-setting'>
                                <div className='avata'>
                                    <img src={ReactImg} alt="#" />
                                </div>
                                <div className='profile-information'>
                                    <p className='Username'>Trung</p>
                                    <p className='Useremail'>trung@gmail.com</p>
                                    <p className='Userrole'>Admin</p>
                                </div>
                            </div>
                        </div>
                        <div className='setting-left-function'>
                            <div className='setting-btn'>
                                <button
                                    onClick={() => SetActives('profile')}
                                >👤 Profile & Security</button>
                            </div>
                            <div className='setting-btn'>
                                <button
                                    onClick={() => SetActives('prefer')}
                                >⚙️ Preferences</button>
                            </div>
                            <div className='setting-btn'>
                                <button
                                    onClick={() => SetActives('data')}
                                >📊 Data Management</button>
                            </div>
                        </div>
                    </div>
                    <div className='setting-content'>
                        {actives === 'profile' && <ProfileSecurity />}
                        {actives === 'prefer' && <Preferences />}
                        {actives === 'data' && <DataManagement />}
                    </div>
                </div>
            </div>
        </>
    )
}
```

---

## 2. `Setting.css`

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ===== PAGE WRAPPER ===== */
.setting-secreen {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    min-height: 100vh;
    background-color: #f1f5f9;
    padding: 24px;
}

/* ===== PAGE TITLE ===== */
.setting-title {
    padding-bottom: 16px;
    border-bottom: 1px solid #e2e8f0;
}

.setting-title h2 {
    font-size: 24px;
    font-weight: 700;
    color: #0f172a;
}

.setting-title p {
    color: #64748b;
    font-size: 14px;
    margin-top: 4px;
}

/* ===== TWO-COLUMN LAYOUT ===== */
.setting-information {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 20px;
    align-items: start;
}

/* ===== LEFT SIDEBAR ===== */
.setting-left {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

/* ===== AVATAR ROW ===== */
.avata-setting {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    padding: 16px;
    background-color: #f8fafc;
    border-radius: 10px;
}

.avata img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #2563eb;
}

.profile-information {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.profile-information p {
    color: #64748b;
    font-size: 14px;
}

.Username {
    color: #0f172a !important;
    font-weight: 600 !important;
    font-size: 16px !important;
}

/* ===== NAV BUTTONS ===== */
.setting-left-function {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.setting-btn {
    width: 100%;
}

.setting-left button {
    width: 100%;
    padding: 12px 16px;
    text-align: left;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: #374151;
    border-radius: 8px;
    transition: all 0.2s ease;
}

.setting-left button:hover {
    background-color: #f1f5f9;
    color: #2563eb;
}

/* ===== RIGHT CONTENT AREA ===== */
.setting-content {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.setting-content div {
    width: 100%;
    padding: 0;
    border: none;
    margin: 0;
}

@media (max-width: 768px) {
    .setting-information {
        grid-template-columns: 1fr;
    }
}
```

---

## 3. `ProfileSecurity.tsx`

```tsx
import './ProfileSecurity.css'
import { useState } from 'react'
import Profile from './Profile'
import Security from './Security'
export default function ProfileSecurity() {
    const [actives, setActives] = useState('Profile')
    return (
        <>
            <div className='Profile-Screen'>
                <button
                    className='Profile-Btn'
                    onClick={() => setActives('Profile')}
                >
                    Profile</button>
                <button
                    className='Security-Btn'
                    onClick={() => setActives('Security')}
                >
                    Security</button>
            </div>
            <div className='Profile-Content'>
                {actives === 'Profile' && <Profile />}
                {actives === 'Security' && <Security />}
            </div>
        </>
    )
}
```

---

## 4. `ProfileSecurity.css`

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ===== TAB BUTTONS ===== */
.Profile-Screen {
    display: flex;
    flex-direction: row;
    gap: 8px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e2e8f0;
}

.Profile-Btn,
.Security-Btn {
    padding: 10px 20px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background-color: #ffffff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #64748b;
    transition: all 0.2s ease;
}

.Profile-Btn:hover,
.Security-Btn:hover {
    background-color: #eff6ff;
    color: #2563eb;
    border-color: #2563eb;
}

.Profile-Btn.active,
.Security-Btn.active {
    background-color: #2563eb;
    color: #ffffff;
    border-color: #2563eb;
}

/* ===== CONTENT AREA ===== */
.Profile-Content {
    padding-top: 16px;
}
```

---

## 5. `Profile.tsx`

```tsx
export default function Profile() {
    return (
        <>
        </>
    )
}
```

---

## 6. `Security.tsx`

```tsx
export default function Security() {
    return (
        <>
            <div>Hello Security</div>
        </>
    )
}
```

---

## 7. `Preferences.tsx`

```tsx
export default function Preferences() {
    return (
        <>
            <div>Hello 2</div>
        </>
    )
}
```

---

## 8. `DataManagement.tsx`

```tsx
export default function DataManagement() {
    return (
        <>
            <div>Hello 3</div>
        </>
    )
}
```
