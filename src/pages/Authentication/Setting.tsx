import ReactImg from '../../assets/react.svg'
import { useState } from 'react'
import './Setting.css'
import ProfileSecurity from '../../components/ProfileSecurity'
import DataManagement from '../../components/DataManagement'
import Preferences from '../../components/Preferences'

export default function Setting() {
    const [actives, SetActives] = useState('profile')
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
                                    className={actives === 'profile' ? 'active' : ''}
                                    onClick={() => SetActives('profile')}
                                >👤 Profile &amp; Security</button>
                            </div>
                            <div className='setting-btn'>
                                <button
                                    className={actives === 'prefer' ? 'active' : ''}
                                    onClick={() => SetActives('prefer')}
                                >⚙️ Preferences</button>
                            </div>
                            <div className='setting-btn'>
                                <button
                                    className={actives === 'data' ? 'active' : ''}
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
