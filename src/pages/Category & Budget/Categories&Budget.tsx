import './Categories&Budget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function Categories() {
    return (
        <>
            <div className="Ct-screen">
                <div className='Ct-main'>
                    <div className='Ct-Budget'>
                        <div className='Ct-Wellets'>
                            <div className='Budget-card'>
                                <div className='My-Card'>
                                    <div className='Card'>
                                        <div className='Card-top'>
                                            <div className='bank-name'>
                                                <p>BIDV</p>
                                            </div>
                                            <div className='card-type'>
                                                <p>MATERCARD</p>
                                            </div>
                                        </div>
                                        <div className='Card-number'>
                                            <p> 5495 7381 3759 2321 </p>
                                        </div>
                                        <div className='Card-bottom'>
                                            <div className='own-name'>
                                                <p>Trung Kim</p>
                                            </div>
                                            <div className='card-expiry'>
                                                <p>09/31</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='Add-Card'>
                                        <button>Add</button>
                                    </div>
                                </div>
                                <div className='Total'>
                                    <div className='Total-info'>
                                        <div className='Total-Balance'>
                                            <p>Balance</p>
                                            250000
                                        </div>
                                        <div className='Total-Currency'>
                                            <p>Currency</p>
                                            USD/usd doller
                                        </div>
                                    </div>
                                    <div className='Total-status'>
                                        <div className='Graph'>
                                            <p>Graph</p>
                                            3214214124
                                        </div>
                                        <div className='Status'>
                                            <p>Status</p>
                                            Active
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='Budget-payment'>
                                <div className='My-Payment'>
                                    <div className='Payment'>
                                        <ul>
                                            <li>
                                                <div>7124</div>
                                                <div>2157</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='Regular-Payment'>
                                        <ul>
                                            <li>
                                                <div>3214</div>
                                                <div>5213</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='UpPayment'>
                                    <ul>
                                        <li>
                                            <div>1523</div>
                                            <div>6123</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='Budget-graph'>
                            <div className='Balance-graph'>
                                213123
                            </div>
                            <div className='Category-graph'>
                                321213313
                            </div>
                        </div>
                    </div>
                    <div className="Ct-functions">
                        <div className='Ct-search'>
                            <span><FontAwesomeIcon icon={faMagnifyingGlass} className='Ct-icon' /></span>
                            <input type="text" className='Ct-box' placeholder='Input here .......' />
                        </div>
                        <div className='Ct-Btn'>
                            <button>Add</button>
                        </div>
                    </div>
                    <div className="Ct-card">
                        <table className="Ct-table">
                            <tr className="Ct-item">
                                <th className='Item'>ID</th>
                                <th className='Item'>NAME</th>
                                <th className='Item'>TYPE</th>
                                <th className='Item'>ICON</th>
                                <th className='Item'>COLOR</th>
                                <th className='Item'>ACTIVE</th>
                            </tr>
                            <tr className='Ct-content'>
                                <td className='Content'>TEST 1</td>
                                <td className='Content'>TEST 2</td>
                                <td className='Content'>TEST 3</td>
                                <td className='Content'>TEST 4</td>
                                <td className='Content'>TEST 5</td>
                                <td className='Content'>TEST 6</td>
                            </tr>
                            <tr className='Ct-content'>
                                <td className='Content'>TEST 1</td>
                                <td className='Content'>TEST 2</td>
                                <td className='Content'>TEST 3</td>
                                <td className='Content'>TEST 4</td>
                                <td className='Content'>TEST 5</td>
                                <td className='Content'>TEST 6</td>
                            </tr>
                            <tr className='Ct-content'>
                                <td className='Content'>TEST 1</td>
                                <td className='Content'>TEST 2</td>
                                <td className='Content'>TEST 3</td>
                                <td className='Content'>TEST 4</td>
                                <td className='Content'>TEST 5</td>
                                <td className='Content'>TEST 6</td>
                            </tr>
                            <tr className='Ct-content'>
                                <td className='Content'>TEST 1</td>
                                <td className='Content'>TEST 2</td>
                                <td className='Content'>TEST 3</td>
                                <td className='Content'>TEST 4</td>
                                <td className='Content'>TEST 5</td>
                                <td className='Content'>TEST 6</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}