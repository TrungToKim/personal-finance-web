import './Categories&Budget.css'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPlus, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import {
    LineChart, Line, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'

// ===== MOCK DATA =====
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

const mockCards = [
    { id: 1, bank: 'BIDV', type: 'MASTERCARD', number: '5495 7381 3759 2321', owner: 'Trung Kim', expiry: '09/31', balance: 10000000, currency: 'VND' },
    { id: 2, bank: 'VCB', type: 'VISA', number: '4012 8888 8888 1881', owner: 'Trung Kim', expiry: '12/28', balance: 5500000, currency: 'VND' },
    { id: 3, bank: 'ACB', type: 'MASTERCARD', number: '5100 2900 2900 2909', owner: 'Trung Kim', expiry: '03/27', balance: 2000000, currency: 'VND' },
]

// ===== PAYMENT MOCK DATA =====
const regularPayments = [
    { id: 'rp1', name: 'Netflix', amount: 260000, dueDay: 15, icon: '📺', category: 'Giải trí', color: '#7c3aed' },
    { id: 'rp2', name: 'Spotify', amount: 59000, dueDay: 20, icon: '🎵', category: 'Giải trí', color: '#7c3aed' },
    { id: 'rp3', name: 'Điện', amount: 800000, dueDay: 10, icon: '⚡', category: 'Hóa đơn', color: '#dc2626' },
    { id: 'rp4', name: 'Internet', amount: 220000, dueDay: 5, icon: '🌐', category: 'Hóa đơn', color: '#dc2626' },
]

const upcomingPayments = [
    { id: 'up1', name: 'Học phí', amount: 3500000, dueDate: '2026-11-10', icon: '📚', category: 'Học tập', color: '#0891b2', urgent: true },
    { id: 'up2', name: 'Bảo hiểm xe', amount: 1200000, dueDate: '2026-11-08', icon: '🚗', category: 'Di chuyển', color: '#16a34a', urgent: true },
    { id: 'up3', name: 'Thuê nhà', amount: 5000000, dueDate: '2026-11-30', icon: '🏠', category: 'Nhà ở', color: '#d97706', urgent: false },
]

// ===== TABLE DATA =====
const tablePayments = [
    { id: 'tb1', name: 'Netflix', time: '15:00', date: '2026-11-01', category: 'Giải trí', icon: '📺', color: '#7c3aed', amount: '260,000 VND' },
    { id: 'tb2', name: 'Điện tháng 10', time: '09:30', date: '2026-10-10', category: 'Hóa đơn', icon: '⚡', color: '#dc2626', amount: '800,000 VND' },
    { id: 'tb3', name: 'Internet', time: '08:00', date: '2026-10-05', category: 'Hóa đơn', icon: '🌐', color: '#dc2626', amount: '220,000 VND' },
    { id: 'tb4', name: 'Học phí', time: '10:00', date: '2026-09-10', category: 'Học tập', icon: '📚', color: '#0891b2', amount: '3,500,000 VND' },
    { id: 'tb5', name: 'Bảo hiểm xe', time: '14:00', date: '2026-09-08', category: 'Di chuyển', icon: '🚗', color: '#16a34a', amount: '1,200,000 VND' },
    { id: 'tb6', name: 'Spotify', time: '12:00', date: '2026-11-01', category: 'Giải trí', icon: '🎵', color: '#7c3aed', amount: '59,000 VND' },
]

// ===== STORAGE KEY =====
const PAID_KEY = 'cb_paid_payments'

function getStoredPaid(): Record<string, boolean> {
    try {
        const raw = localStorage.getItem(PAID_KEY)
        return raw ? JSON.parse(raw) : {}
    } catch { return {} }
}

function daysUntil(dateStr: string) {
    const today = new Date()
    const target = new Date(dateStr)
    return Math.ceil((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
}

// ===== COMPONENT =====
export default function Categories() {
    const [activeCardIndex, setActiveCardIndex] = useState(0)
    const [paidMap, setPaidMap] = useState<Record<string, boolean>>(getStoredPaid)

    // Persist paid state
    useEffect(() => {
        localStorage.setItem(PAID_KEY, JSON.stringify(paidMap))
    }, [paidMap])

    const togglePaid = (id: string) => {
        setPaidMap(prev => ({ ...prev, [id]: !prev[id] }))
    }

    const activeCard = mockCards[activeCardIndex]

    return (
        <>
            <div className="Ct-Bg-screen">
                <div className='Ct-main'>

                    {/* ===== TOP ROW: LEFT panel + RIGHT panel ===== */}
                    <div className='Ct-Budget'>

                        {/* ===== LEFT: Cards + Info ===== */}
                        <div className='Budget-left-panel'>

                            {/* Top half: Card stack + dots */}
                            <div className='Card-top-section'>
                                <div className='Card-stack-wrapper'>
                                    <div className='Card-stack'>
                                        {mockCards.map((card, idx) => {
                                            const offset = idx - activeCardIndex
                                            return (
                                                <div
                                                    key={card.id}
                                                    className={`Card-stack-item ${idx === activeCardIndex ? 'active' : ''}`}
                                                    style={{
                                                        zIndex: mockCards.length - Math.abs(offset),
                                                        transform: `translateY(${offset * 18}px) scale(${1 - Math.abs(offset) * 0.05})`,
                                                        filter: idx === activeCardIndex ? 'none' : `blur(${Math.abs(offset) * 1.5}px)`,
                                                        opacity: idx === activeCardIndex ? 1 : 0.6,
                                                        cursor: idx !== activeCardIndex ? 'pointer' : 'default',
                                                    }}
                                                    onClick={() => idx !== activeCardIndex && setActiveCardIndex(idx)}
                                                >
                                                    <div className='Card-inner'>
                                                        <div className='Card-top'>
                                                            <div className='bank-name'><p>{card.bank}</p></div>
                                                            <div className='card-type'><p>{card.type}</p></div>
                                                        </div>
                                                        <div className='Card-number'><p>{card.number}</p></div>
                                                        <div className='Card-bottom'>
                                                            <div className='own-name'><p>{card.owner}</p></div>
                                                            <div className='card-expiry'><p>{card.expiry}</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    {/* Add card button */}
                                    <button className='Add-Card-btn'>
                                        <FontAwesomeIcon icon={faPlus} /> Add Card
                                    </button>
                                </div>

                                {/* Card dots indicator */}
                                <div className='Card-dots'>
                                    {mockCards.map((_, idx) => (
                                        <span
                                            key={idx}
                                            className={`Card-dot ${idx === activeCardIndex ? 'active' : ''}`}
                                            onClick={() => setActiveCardIndex(idx)}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Bottom half: Active card info */}
                            <div className='Total'>
                                <div className='Total-info'>
                                    <div className='Total-Balance'>
                                        <p>Balance</p>
                                        <span>{activeCard.balance.toLocaleString('vi-VN')} VND</span>
                                    </div>
                                    <div className='Total-Currency'>
                                        <p>Currency</p>
                                        <span>{activeCard.currency} / Việt Nam Đồng</span>
                                    </div>
                                </div>
                                <div className='Total-status'>
                                    <div className='Total-card-icon'>
                                        <FontAwesomeIcon icon={faCreditCard} />
                                        <span>{activeCard.bank}</span>
                                    </div>
                                    <div className='Status'>
                                        <span className='status-dot' />
                                        Active
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ===== RIGHT: Graphs (smaller) + Payment panels ===== */}
                        <div className='Budget-right-panel'>

                            {/* Mini graphs row */}
                            <div className='Mini-graphs-row'>
                                <div className='Mini-graph-box'>
                                    <div className='Mini-graph-title'>Lịch sử số dư</div>
                                    <div className='Mini-graph-chart'>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={balanceHistory} margin={{ top: 4, right: 8, left: -20, bottom: 4 }}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                            <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                            <YAxis tick={{ fontSize: 9, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000000).toFixed(0)}M`} />
                                            <Tooltip formatter={(v) => [`${Number(v).toLocaleString('vi-VN')} VND`, 'Số dư']} />
                                            <Line type="monotone" dataKey="balance" stroke="#2563eb" strokeWidth={2} dot={{ fill: '#2563eb', r: 2 }} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                    </div>
                                </div>
                                <div className='Mini-graph-box'>
                                    <div className='Mini-graph-title'>Chi theo danh mục</div>
                                    <div className='Mini-graph-chart'>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie data={categorySpend} cx="50%" cy="50%" innerRadius={28} outerRadius={48} paddingAngle={3} dataKey="value">
                                                {categorySpend.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                            <Tooltip formatter={(v) => `${Number(v).toLocaleString('vi-VN')} VND`} />
                                            <Legend formatter={(value) => <span style={{ fontSize: '10px', color: '#64748b' }}>{value}</span>} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>

                            {/* Payment panels */}
                            <div className='Payment-panels'>

                                {/* Panel 1: Các khoản cần thanh toán */}
                                <div className='Payment-panel'>
                                    <div className='Payment-panel-header'>
                                        <span className='Payment-panel-icon'>💳</span>
                                        <span className='Payment-panel-title'>Cần Thanh Toán</span>
                                    </div>
                                    <ul className='Payment-list'>
                                        {upcomingPayments.map(p => (
                                            <li key={p.id} className='Payment-item'>
                                                <span className='Payment-item-icon' style={{ background: p.color + '22', color: p.color }}>{p.icon}</span>
                                                <div className='Payment-item-info'>
                                                    <span className='Payment-item-name'>{p.name}</span>
                                                    <span className='Payment-item-cat' style={{ color: p.color }}>{p.category}</span>
                                                </div>
                                                <div className='Payment-item-right'>
                                                    <span className='Payment-item-amount'>{p.amount.toLocaleString('vi-VN')} VND</span>
                                                    <span className={`Payment-item-due ${p.urgent ? 'urgent' : ''}`}>
                                                        {daysUntil(p.dueDate) <= 0 ? 'Quá hạn' : `Còn ${daysUntil(p.dueDate)} ngày`}
                                                    </span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Panel 2: Thanh toán định kỳ */}
                                <div className='Payment-panel'>
                                    <div className='Payment-panel-header'>
                                        <span className='Payment-panel-icon'>🔄</span>
                                        <span className='Payment-panel-title'>Định Kỳ Hàng Tháng</span>
                                    </div>
                                    <ul className='Payment-list'>
                                        {regularPayments.map(p => (
                                            <li key={p.id} className='Payment-item'>
                                                <span className='Payment-item-icon' style={{ background: p.color + '22', color: p.color }}>{p.icon}</span>
                                                <div className='Payment-item-info'>
                                                    <span className='Payment-item-name'>{p.name}</span>
                                                    <span className='Payment-item-cat' style={{ color: p.color }}>{p.category}</span>
                                                </div>
                                                <div className='Payment-item-right'>
                                                    <span className='Payment-item-amount'>{p.amount.toLocaleString('vi-VN')} VND</span>
                                                    <span className='Payment-item-due'>Ngày {p.dueDay} hàng tháng</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Panel 3: Khoản bổ sung + Gần hết hạn */}
                                <div className='Payment-panel'>
                                    <div className='Payment-panel-header'>
                                        <span className='Payment-panel-icon'>⚠️</span>
                                        <span className='Payment-panel-title'>Bổ Sung & Sắp Hết Hạn</span>
                                    </div>
                                    <ul className='Payment-list'>
                                        {upcomingPayments.filter(p => p.urgent || daysUntil(p.dueDate) <= 7).map(p => (
                                            <li key={p.id} className='Payment-item'>
                                                <span className='Payment-item-icon' style={{ background: '#fee2e2', color: '#dc2626' }}>{p.icon}</span>
                                                <div className='Payment-item-info'>
                                                    <span className='Payment-item-name'>{p.name}</span>
                                                    <span className='Payment-item-cat' style={{ color: '#dc2626' }}>Sắp hết hạn</span>
                                                </div>
                                                <div className='Payment-item-right'>
                                                    <span className='Payment-item-amount'>{p.amount.toLocaleString('vi-VN')} VND</span>
                                                    <span className='Payment-item-due urgent'>
                                                        {daysUntil(p.dueDate) <= 0 ? 'Quá hạn!' : `Còn ${daysUntil(p.dueDate)} ngày`}
                                                    </span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* ===== SEARCH + ADD ===== */}
                    <div className="Ct-functions">
                        <div className='Ct-search'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='Ct-icon' />
                            <input type="text" className='Ct-box' placeholder='Tìm kiếm khoản thanh toán...' />
                        </div>
                        <div className='Ct-Btn'>
                            <button><FontAwesomeIcon icon={faPlus} /> Thêm mới</button>
                        </div>
                    </div>

                    {/* ===== PAYMENTS TABLE ===== */}
                    <div className="Ct-card">
                        <div className='Ct-table-header'>
                            <h2>Tất Cả Khoản Thanh Toán</h2>
                            <span className='Ct-table-subtitle'>Tích vào ô để đánh dấu đã thanh toán (lưu tự động)</span>
                        </div>
                        <table className="Ct-table">
                            <thead>
                                <tr className="Ct-item">
                                    <th className='Item'>Tên</th>
                                    <th className='Item'>Danh mục</th>
                                    <th className='Item'>Icon</th>
                                    <th className='Item'>Màu</th>
                                    <th className='Item'>Thời gian</th>
                                    <th className='Item'>Ngày tạo</th>
                                    <th className='Item'>Số tiền</th>
                                    <th className='Item'>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tablePayments.map(row => {
                                    const paid = !!paidMap[row.id]
                                    return (
                                        <tr key={row.id} className={`Ct-content ${paid ? 'paid-row' : ''}`}>
                                            <td className='Content'>
                                                <span className='table-name'>{row.name}</span>
                                            </td>
                                            <td className='Content'>
                                                <span className='table-category-badge' style={{ background: row.color + '22', color: row.color }}>
                                                    {row.category}
                                                </span>
                                            </td>
                                            <td className='Content'>
                                                <span className='table-icon-cell'>{row.icon}</span>
                                            </td>
                                            <td className='Content'>
                                                <span className='table-color-swatch' style={{ background: row.color }} title={row.color} />
                                            </td>
                                            <td className='Content'>{row.time}</td>
                                            <td className='Content'>{row.date}</td>
                                            <td className='Content'>
                                                <span className='table-amount'>{row.amount}</span>
                                            </td>
                                            <td className='Content'>
                                                <label className='checkbox-label'>
                                                    <input
                                                        type="checkbox"
                                                        checked={paid}
                                                        onChange={() => togglePaid(row.id)}
                                                        className='paid-checkbox'
                                                    />
                                                    <span className={`paid-text ${paid ? 'paid' : 'unpaid'}`}>
                                                        {paid ? '✓ Đã thanh toán' : 'Chưa thanh toán'}
                                                    </span>
                                                </label>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}
