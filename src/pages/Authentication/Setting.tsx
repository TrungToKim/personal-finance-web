import ReactImg from '/home/gigabyte/Code/FinacerManagerWeb/src/assets/react.svg'
import './Setting.css'
export default function Setting() {
    return (
        <>
            <div className="setting-secreen">
                <div className="setting-title">
                    <h2>Setting</h2>
                    <p>Accounts</p>
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
                            <div className='profile'>
                                <button>2</button>
                            </div>
                            <div className='password'>
                                <button>3</button>
                            </div>
                            <div className='store'>
                                <button>4</button>
                            </div>
                        </div>
                    </div>
                    <div className='setting-right'>
                        <div className='setting-avata'>
                            1
                        </div>
                        <div className='setting-profile'>
                            2
                        </div>
                        <div className='setting-password'>
                            3
                        </div>
                        <div className='setting-store'>
                            4
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}