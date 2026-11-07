import './Transactions.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {
    AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'

const dailySpending = [
    { day: 'Mon', amount: 450000 }, { day: 'Tue', amount: 320000 },
    { day: 'Wed', amount: 780000 }, { day: 'Thu', amount: 230000 },
    { day: 'Fri', amount: 920000 }, { day: 'Sat', amount: 1200000 },
    { day: 'Sun', amount: 650000 },
]
const monthlyIncomeExpense = [
    { month: 'Jun', income: 10000000, expense: 7200000 },
    { month: 'Jul', income: 10000000, expense: 8500000 },
    { month: 'Aug', income: 12000000, expense: 6900000 },
    { month: 'Sep', income: 10000000, expense: 9200000 },
    { month: 'Oct', income: 11000000, expense: 7800000 },
    { month: 'Nov', income: 10000000, expense: 4800000 },
]
const categoryData = [
    { name: 'Ăn uống', value: 3200000, color: '#2563eb' },
    { name: 'Di chuyển', value: 1500000, color: '#16a34a' },
    { name: 'Mua sắm', value: 2800000, color: '#d97706' },
    { name: 'Hóa đơn', value: 2400000, color: '#dc2626' },
    { name: 'Giải trí', value: 900000, color: '#7c3aed' },
]
const weeklyCount = [
    { week: 'W1', count: 12 }, { week: 'W2', count: 18 },
    { week: 'W3', count: 9 }, { week: 'W4', count: 22 },
    { week: 'W5', count: 15 }, { week: 'W6', count: 19 },
    { week: 'W7', count: 11 }, { week: 'W8', count: 25 },
]
const topCategories = [
    { name: 'Ăn uống', amount: 3200000 },
    { name: 'Hóa đơn', amount: 2400000 },
    { name: 'Mua sắm', amount: 2800000 },
    { name: 'Di chuyển', amount: 1500000 },
    { name: 'Giải trí', amount: 900000 },
]

export default function Transactions() {
    return (
        <>
            <div className="Tr-screen">
                <div className='Tr-functions'>
                    <div className='Tr-search'>
                        <span><FontAwesomeIcon icon={faMagnifyingGlass} className='Tr-icon' /></span>
                        <input type="text" className='Tr-search-box' placeholder='Search transactions...' />
                    </div>
                </div>
                <div className="Tr-card">
                    <table className="Tr-table">
                        <tr className="Tr-item">
                            <th className='item'>Category</th>
                            <th className='item'>Name</th>
                            <th className='item'>Type</th>
                            <th className='item'>Amount</th>
                            <th className='item'>Date</th>
                            <th className='item'>Status</th>
                        </tr>
                        <tr className='Tr-content'>
                            <td className='content'>Ăn uống</td>
                            <td className='content'>Ăn trưa</td>
                            <td className='content'>Expense</td>
                            <td className='content'>-45,000 VND</td>
                            <td className='content'>05/11/2026</td>
                            <td className='content'>Done</td>
                        </tr>
                        <tr className='Tr-content'>
                            <td className='content'>Thu nhập</td>
                            <td className='content'>Lương tháng 11</td>
                            <td className='content'>Income</td>
                            <td className='content'>+12,000,000 VND</td>
                            <td className='content'>01/11/2026</td>
                            <td className='content'>Done</td>
                        </tr>
                        <tr className='Tr-content'>
                            <td className='content'>Mua sắm</td>
                            <td className='content'>Siêu thị</td>
                            <td className='content'>Expense</td>
                            <td className='content'>-350,000 VND</td>
                            <td className='content'>03/11/2026</td>
                            <td className='content'>Done</td>
                        </tr>
                        <tr className='Tr-content'>
                            <td className='content'>Hóa đơn</td>
                            <td className='content'>Tiền nhà</td>
                            <td className='content'>Expense</td>
                            <td className='content'>-3,500,000 VND</td>
                            <td className='content'>01/11/2026</td>
                            <td className='content'>Done</td>
                        </tr>
                    </table>
                    <div className='Tr-Btn'>
                        <div className='Tr-Add'>
                            <button className='add-btn'>Add</button>
                        </div>
                        <div className='Tr-Edit'>
                            <button className='edit-btn'>Edit</button>
                        </div>
                        <div className='Tr-Delete'>
                            <button className='delete-btn'>Delete</button>
                        </div>
                        <div className='Tr-Export'>
                            <button className='export-btn'>Export</button>
                        </div>
                        <div className='Tr-Refresh'>
                            <button className='refresh-btn'>Refresh</button>
                        </div>
                    </div>
                </div>
                <div className="Tr-graph">
                    <div className='graph-card'>
                        <div className='graph'>
                            <div style={{ marginBottom: '8px', fontWeight: 600, fontSize: '14px', color: '#374151' }}>Chi tiêu theo ngày</div>
                            <ResponsiveContainer width="100%" height={200}>
                                <AreaChart data={dailySpending} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                                    <defs>
                                        <linearGradient id="colorDaily" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                    <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                                    <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                                    <Tooltip formatter={(v) => [`${Number(v).toLocaleString('vi-VN')} VND`, 'Chi tiêu']} />
                                    <Area type="monotone" dataKey="amount" stroke="#2563eb" strokeWidth={2} fill="url(#colorDaily)" dot={{ fill: '#2563eb', r: 3 }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='graph'>
                            <div style={{ marginBottom: '8px', fontWeight: 600, fontSize: '14px', color: '#374151' }}>Thu nhập vs Chi tiêu (6 tháng)</div>
                            <ResponsiveContainer width="100%" height={200}>
                                <BarChart data={monthlyIncomeExpense} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                    <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                                    <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000000).toFixed(0)}M`} />
                                    <Tooltip formatter={(v) => `${Number(v).toLocaleString('vi-VN')} VND`} />
                                    <Legend />
                                    <Bar dataKey="income" name="Thu nhập" fill="#16a34a" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="expense" name="Chi tiêu" fill="#dc2626" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='graph'>
                            <div style={{ marginBottom: '8px', fontWeight: 600, fontSize: '14px', color: '#374151' }}>Phân bổ danh mục</div>
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie data={categoryData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                                        {categoryData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(v) => `${Number(v).toLocaleString('vi-VN')} VND`} />
                                    <Legend formatter={(value) => <span style={{ fontSize: '12px', color: '#64748b' }}>{value}</span>} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='graph'>
                            <div style={{ marginBottom: '8px', fontWeight: 600, fontSize: '14px', color: '#374151' }}>Số giao dịch theo tuần</div>
                            <ResponsiveContainer width="100%" height={200}>
                                <LineChart data={weeklyCount} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                    <XAxis dataKey="week" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                                    <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                                    <Tooltip formatter={(v) => [`${v} giao dịch`, 'Số lượng']} />
                                    <Line type="monotone" dataKey="count" stroke="#7c3aed" strokeWidth={2} dot={{ fill: '#7c3aed', r: 4 }} activeDot={{ r: 6 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='graph'>
                            <div style={{ marginBottom: '8px', fontWeight: 600, fontSize: '14px', color: '#374151' }}>Top danh mục chi tiêu</div>
                            <ResponsiveContainer width="100%" height={200}>
                                <BarChart layout="vertical" data={topCategories} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
                                    <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
                                    <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} width={70} />
                                    <Tooltip formatter={(v) => `${Number(v).toLocaleString('vi-VN')} VND`} />
                                    <Bar dataKey="amount" name="Chi tiêu" fill="#2563eb" radius={[0, 4, 4, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
