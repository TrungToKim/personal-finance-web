import './Transactions.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function Transactions() {
    return (
        <>
            <div className="Tr-screen">
                <div className='Tr-functions'>
                    <div className='Tr-search'>
                        <span><FontAwesomeIcon icon={faMagnifyingGlass} className='Tr-icon' /></span>
                        <input type="text" className='Tr-search-box' placeholder='Input here .......' />
                    </div>
                </div>
                <div className="Tr-card">
                    <table className="Tr-table">
                        <tr className="Tr-item">
                            <th className='item'>CATEGORY ID</th>
                            <th className='item'>NAME</th>
                            <th className='item'>TYPE</th>
                            <th className='item'>AMOUNT</th>
                            <th className='item'>DATE</th>
                            <th className='item'>ACTIVE</th>
                        </tr>
                        <tr className='Tr-content'>
                            <td className='content'>TEST 1</td>
                            <td className='content'>TEST 2</td>
                            <td className='content'>TEST 3</td>
                            <td className='content'>TEST 4</td>
                            <td className='content'>TEST 5</td>
                            <td className='content'>TEST 6</td>
                        </tr>
                        <tr className='Tr-content'>
                            <td className='content'>TEST 1</td>
                            <td className='content'>TEST 2</td>
                            <td className='content'>TEST 3</td>
                            <td className='content'>TEST 4</td>
                            <td className='content'>TEST 5</td>
                            <td className='content'>TEST 6</td>
                        </tr>
                        <tr className='Tr-content'>
                            <td className='content'>TEST 1</td>
                            <td className='content'>TEST 2</td>
                            <td className='content'>TEST 3</td>
                            <td className='content'>TEST 4</td>
                            <td className='content'>TEST 5</td>
                            <td className='content'>TEST 6</td>
                        </tr>
                        <tr className='Tr-content'>
                            <td className='content'>TEST 1</td>
                            <td className='content'>TEST 2</td>
                            <td className='content'>TEST 3</td>
                            <td className='content'>TEST 4</td>
                            <td className='content'>TEST 5</td>
                            <td className='content'>TEST 6</td>
                        </tr>
                    </table>
                    <div className='Tr-Btn'>
                        <div className='Tr-Add'>
                            <button>Add</button>
                        </div>
                        <div className='Tr-Edit'>
                            <button>Edit</button>
                        </div>
                        <div className='Tr-Delete'>
                            <button>Delete</button>
                        </div>
                        <div className='Tr-Export'>
                            <button>Export</button>
                        </div>
                        <div className='Tr-Refresh'>
                            <button>Refresh</button>
                        </div>
                    </div>
                </div>
                <div className="Tr-graph">
                    <div className='graph-card'>
                        <div className='graph'>
                            TEST 1
                        </div>
                        <div className='graph'>
                            TEST 2
                        </div>
                        <div className='graph'>
                            TEST 3
                        </div>
                        <div className='graph'>
                            TEST 4
                        </div>
                        <div className='graph'>
                            TEST 5
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}