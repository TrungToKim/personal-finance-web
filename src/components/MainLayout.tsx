import './MainLayout.css'
import { NavLink, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser, faHouse, faMoneyBillTransfer, faTags, faChartLine, faGear, faMagnifyingGlass,
    faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

export default function MainLayout() {
    function closeNav() {
        const sidenav = document.getElementById('SideNav')
        if (sidenav) {
            sidenav.style.width = '0px'
        }
        const main = document.getElementById('Main')
        if (main) {
            main.style.marginLeft = '0px'
        }
    }

    function openNav() {
        const sidenav = document.getElementById('SideNav')
        if (sidenav) {
            sidenav.style.width = '300px'
        }
        const main = document.getElementById('Main')
        if (main) {
            main.style.marginLeft = '300px'
        }
    }
    return (
        <>
            <div id='SideNav' className='SideNav'>
                <span className="closebtn" onClick={closeNav}><FontAwesomeIcon icon={faChevronLeft} /></span>
                <NavLink to="/home"><FontAwesomeIcon icon={faHouse} /> Home</NavLink>
                <NavLink to="/transactions"><FontAwesomeIcon icon={faMoneyBillTransfer} /> Transactions</NavLink>
                <NavLink to="/categories"><FontAwesomeIcon icon={faTags} /> Categories & Budget</NavLink>
                <NavLink to="/reports"><FontAwesomeIcon icon={faChartLine} /> Reports & Analytics</NavLink>
                <NavLink to="/setting"><FontAwesomeIcon icon={faGear} /> Setting</NavLink>
            </div>
            <div id='Main' className='MainScreen'  >
                <div className='MainNav'>
                    <span className='openbtn' onClick={openNav}>&#9776;</span>
                    <div className='MainContent'>
                        <div className='MainSearchBox'>
                            <input type="text" className='SearchBox' placeholder='Search...' />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='icon-search' />
                        </div>
                        <NavLink to="/accounts"><FontAwesomeIcon icon={faUser} /></NavLink>
                    </div>
                </div>
                <div className='PageContent'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}