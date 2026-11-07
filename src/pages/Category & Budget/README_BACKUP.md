# Backup – Categories & Budget (trước khi thay đổi UI)

> Tạo ngày: 2026-11-05  
> Lý do: Lưu code gốc trước khi áp dụng thay đổi UI theo yêu cầu mới

---

## Categories&Budget.tsx (gốc)

```tsx
import './Categories&Budget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {
    AreaChart, Area, LineChart, Line, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'

const balanceHistory = [
    { month: 'Jun', balance: 5500000 }, { month: 'Jul', balance: 4800000 },
    { month: 'Aug', balance: 7200000 }, { month: 'Sep', balance: 5000000 },
    { month: 'Oct', balance: 6800000 }, { month: 'Nov', balance: 8100000 },
]
const categorySpend = [
    { name: 'Ăn uống', value: 3200000, color: '#2563eb' },
    { name: 'Di chuyển', value: 1500000, color: '#16a34a' },
    { name: 'Mua sắm', value: 2800000, color: '#d97706' },
    { name: 'Hóa đơn', value: 2400000, color: '#dc2626' },
    { name: 'Giải trí', value: 900000, color: '#7c3aed' },
]
const sparkData = [
    { v: 5500000 }, { v: 4800000 }, { v: 7200000 },
    { v: 5000000 }, { v: 6800000 }, { v: 8100000 },
]

export default function Categories() {
    return (
        <>
            <div className="Ct-Bg-screen">
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
                                            10,000,000 VND
                                        </div>
                                        <div className='Total-Currency'>
                                            <p>Currency</p>
                                            VND / Việt Nam Đồng
                                        </div>
                                    </div>
                                    <div className='Total-status'>
                                        <div className='Graph'>
                                            <p>Graph</p>
                                            <ResponsiveContainer width="100%" height={80}>
                                                <AreaChart data={sparkData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                                                    <defs>
                                                        <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                                                            <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                    <Area
                                                        type="monotone"
                                                        dataKey="v"
                                                        stroke="#2563eb"
                                                        strokeWidth={2}
                                                        fill="url(#sparkGrad)"
                                                        dot={false}
                                                    />
                                                </AreaChart>
                                            </ResponsiveContainer>
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
                                                <div>Thu nhập thường xuyên</div>
                                                <div>10,000,000 VND</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='Regular-Payment'>
                                        <ul>
                                            <li>
                                                <div>Chi tiêu định kỳ</div>
                                                <div>3,500,000 VND</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='UpPayment'>
                                    <ul>
                                        <li>
                                            <div>Tiết kiệm tháng này</div>
                                            <div>1,500,000 VND</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='Budget-graph'>
                            <div className='Balance-graph'>
                                <div style={{ marginBottom: '8px', fontWeight: 600, fontSize: '14px', color: '#374151' }}>Lịch sử số dư</div>
                                <ResponsiveContainer width="100%" height={200}>
                                    <LineChart data={balanceHistory} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                        <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                                        <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
                                        <Tooltip formatter={(v) => [`${Number(v).toLocaleString('vi-VN')} VND`, 'Số dư']} />
                                        <Line type="monotone" dataKey="balance" stroke="#2563eb" strokeWidth={2} dot={{ fill: '#2563eb', r: 4 }} activeDot={{ r: 6 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='Category-graph'>
                                <div style={{ marginBottom: '8px', fontWeight: 600, fontSize: '14px', color: '#374151' }}>Chi tiêu theo danh mục</div>
                                <ResponsiveContainer width="100%" height={200}>
                                    <PieChart>
                                        <Pie data={categorySpend} cx="50%" cy="50%" innerRadius={45} outerRadius={75} paddingAngle={3} dataKey="value">
                                            {categorySpend.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip formatter={(v) => `${Number(v).toLocaleString('vi-VN')} VND`} />
                                        <Legend formatter={(value) => <span style={{ fontSize: '12px', color: '#64748b' }}>{value}</span>} />
                                    </PieChart>
                                </ResponsiveContainer>
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
```

---

## Categories&Budget.css (gốc)

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ===== PAGE WRAPPER ===== */
.Ct-Bg-screen {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: #f1f5f9;
    padding: 24px;
    gap: 20px;
}

/* ===== BUDGET TOP GRID ===== */
.Ct-Budget {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.Budget-card {
    display: grid;
    grid-template-rows: auto auto;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
    padding: 20px;
    gap: 16px;
}

.Budget-graph {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
    padding: 20px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 16px;
}

.Balance-graph {
    background-color: #f8fafc;
    border-radius: 8px;
    padding: 16px;
    border: 1px solid #e2e8f0;
}

.Category-graph {
    background-color: #f8fafc;
    border-radius: 8px;
    padding: 16px;
    border: 1px solid #e2e8f0;
}

/* ===== WALLETS SECTION ===== */
.Ct-Wellets {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 16px;
}

/* ===== CARD WIDGET ===== */
.My-Card {
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 12px;
}

.Card {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;
    gap: 10px;
    height: 180px;
    color: white;
    justify-content: space-evenly;
    background-image: url(/home/gigabyte/Code/FinacerManagerWeb/src/assets/card.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    position: relative;
}

.Card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.1);
}

.Card > * {
    position: relative;
    z-index: 1;
}

.Card-top {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 4px 8px;
}

.Card-top p {
    padding-left: 4px;
    font-size: 18px;
    font-weight: 600;
}

.Card-number {
    padding: 4px 8px;
}

.Card-number p {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
}

.Card-bottom {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 4px 8px;
}

.Card-bottom p {
    font-size: 16px;
}

.Add-Card {
    display: flex;
    align-items: center;
    justify-content: center;
}

.Add-Card button {
    height: 100%;
    width: 100%;
    background-color: #2563eb;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    padding: 12px;
}

.Add-Card button:hover {
    background-color: #1d4ed8;
}

/* ===== TOTAL SECTION ===== */
.Total {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 16px;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    gap: 12px;
}

.Total-info {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 8px;
}

.Total-Balance {
    padding: 12px;
    background-color: #f8fafc;
    border-radius: 8px;
}

.Total-Currency {
    padding: 12px;
    background-color: #f8fafc;
    border-radius: 8px;
}

.Total-status {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 8px;
}

.Status,
.Graph {
    padding: 12px;
    background-color: #f8fafc;
    border-radius: 8px;
}

/* ===== PAYMENT SECTION ===== */
.Budget-payment {
    display: grid;
    grid-template-rows: 1fr 1fr;
    padding: 12px;
    gap: 10px;
}

.Budget-payment ul {
    height: 100%;
    padding: 0;
}

.Budget-payment ul li {
    list-style: none;
    padding: 10px 12px;
    border-bottom: 1px solid #e2e8f0;
    display: grid;
    grid-template-columns: 2fr 1fr;
    font-size: 14px;
    color: #374151;
    transition: background-color 0.15s ease;
}

.Budget-payment ul li:hover {
    background-color: #f8fafc;
}

.Budget-payment ul li:last-child {
    border-bottom: none;
}

.My-Payment {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 12px;
    gap: 10px;
}

.UpPayment {
    padding: 12px;
    background-color: #f8fafc;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
}

/* ===== MAIN CONTENT AREA ===== */
.Ct-main {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* ===== SEARCH + BUTTON ROW ===== */
.Ct-functions {
    display: grid;
    grid-template-columns: 3fr 1fr;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
    padding: 16px;
    gap: 12px;
}

.Ct-search {
    display: flex;
    align-items: center;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 10px 16px;
    background-color: #f8fafc;
    transition: border-color 0.2s ease;
}

.Ct-search:focus-within {
    border-color: #2563eb;
}

.Ct-icon {
    color: #94a3b8;
    font-size: 1rem;
    margin-right: 10px;
    flex-shrink: 0;
}

.Ct-box {
    border: none;
    outline: none;
    background: transparent;
    font-size: 15px;
    color: #0f172a;
    flex: 1;
    width: 100%;
}

.Ct-box::placeholder {
    color: #94a3b8;
}

.Ct-Btn {
    display: flex;
    align-items: stretch;
}

.Ct-Btn button {
    background-color: #2563eb;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100%;
    height: 100%;
    padding: 10px 16px;
}

.Ct-Btn button:hover {
    background-color: #1d4ed8;
}

/* ===== CATEGORY TABLE ===== */
.Ct-card {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
    overflow: hidden;
}

.Ct-table {
    width: 100%;
    border-collapse: collapse;
}

.Ct-item {
    background-color: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
}

.Item {
    padding: 14px 16px;
    font-size: 12px;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-align: left;
    border: none;
}

.Ct-content {
    border-bottom: 1px solid #e2e8f0;
    transition: background-color 0.15s ease;
}

.Ct-content:hover {
    background-color: #f8fafc;
}

.Ct-content:last-child {
    border-bottom: none;
}

.Content {
    padding: 14px 16px;
    font-size: 14px;
    color: #374151;
    text-align: left;
    border: none;
}

@media (max-width: 900px) {
    .Ct-Budget {
        grid-template-columns: 1fr;
    }
    .Ct-Wellets {
        grid-template-columns: 1fr;
    }
    .Ct-functions {
        grid-template-columns: 1fr;
    }
    .My-Payment {
        grid-template-columns: 1fr;
    }
}
```
