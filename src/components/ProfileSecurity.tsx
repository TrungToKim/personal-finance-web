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
                    className={actives === 'Profile' ? 'Profile-Btn active' : 'Profile-Btn'}
                    onClick={() => setActives('Profile')}
                >
                    Profile
                </button>
                <button
                    className={actives === 'Security' ? 'Security-Btn active' : 'Security-Btn'}
                    onClick={() => setActives('Security')}
                >
                    Security
                </button>
            </div>
            <div className='Profile-Content'>
                {actives === 'Profile' && <Profile />}
                {actives === 'Security' && <Security />}
            </div>
        </>
    )
}
