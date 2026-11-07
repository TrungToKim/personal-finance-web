import './Report&Analytics.css'
import {
    AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'

const incomeData = [
    { month: 'Jun', income: 10000000 }, { month: 'Jul', income: 10000000 },
    { month: 'Aug', income: 12000000 }, { month: 'Sep', income: 10000000 },
    { month: 'Oct', income: 11000000 }, { month: 'Nov', income: 10000000 },
]
const expenseData = [
    { month: 'Jun', expense: 7200000 }, { month: 'Jul', expense: 8500000 },
    { month: 'Aug', expense: 6900000 }, { month: 'Sep', expense: 9200000 },
    { month: 'Oct', expense: 7800000 }, { month: 'Nov', expense: 4800000 },
]
const balanceTrendData = [
    { month: 'Jun', balance: 5500000 }, { month: 'Jul', balance: 4800000 },
    { month: 'Aug', balance: 7200000 }, { month: 'Sep', balance: 5000000 },
    { month: 'Oct', balance: 6800000 }, { month: 'Nov', balance: 8100000 },
]
const categoryBreakdown = [
    { name: 'Ăn uống', value: 3200000, color: '#2563eb' },
    { name: 'Di chuyển', value: 1500000, color: '#16a34a' },
    { name: 'Mua sắm', value: 2800000, color: '#d97706' },
    { name: 'Hóa đơn', value: 2400000, color: '#dc2626' },
    { name: 'Giải trí', value: 900000, color: '#7c3aed' },
]

export default function Reports() {
    return (
        <>
            <div className="Rp-Al-screen">
                <div className="Rp-screen">
                    <div className="top-screen">
                        <div className='title'>
                            <h1>Report &amp; Analytics</h1>
                            <p>Báo cáo và thống kê</p>
                        </div>
                        <div className='filter'>
                            <div className="filter-monthly">
                                <select className='monthly'>
                                    <option value="">Month</option>
                                </select>
                            </div>
                            <div className="filter-year">
                                <select className='year'>
                                    <option value="">Year</option>
                                </select>
                            </div>
                            <div className="export-pdf-btn">
                                <button className='export'>📄 Export PDF</button>
                            </div>
                            <div className="export-csv-btn">
                                <button className='export'>📊 Export CSV</button>
                            </div>
                        </div>
                    </div>
                    <div className="Cards">
                        <div className='Cards-titel'>
                            <h1>Financial Summary</h1>
                        </div>
                        <div className='Cards-items'>
                            <div className="items">
                                <div className='items-icon'>
                                    💰
                                </div>
                                <div className='items-text'>
                                    <div style={{ fontSize: '12px', color: '#64748b' }}>Total Income</div>
                                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#16a34a' }}>10,000,000 VND</div>
                                </div>
                            </div>
                            <div className="items">
                                <div className='items-icon'>
                                    📊
                                </div>
                                <div className='items-text'>
                                    <div style={{ fontSize: '12px', color: '#64748b' }}>Total Expense</div>
                                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#dc2626' }}>7,800,000 VND</div>
                                </div>
                            </div>
                            <div className="items">
                                <div className='items-icon'>
                                    💳
                                </div>
                                <div className='items-text'>
                                    <div style={{ fontSize: '12px', color: '#64748b' }}>Net Balance</div>
                                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#2563eb' }}>2,200,000 VND</div>
                                </div>
                            </div>
                            <div className="items">
                                <div className='items-icon'>
                                    📈
                                </div>
                                <div className='items-text'>
                                    <div style={{ fontSize: '12px', color: '#64748b' }}>Savings Rate</div>
                                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#d97706' }}>22%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Al-screen">
                    <h1>Charts &amp; Analytics</h1>
                    <div className="Al-graph">
                        <div className="Graph-1">
                            <div className='Graph-items'>
                                <div style={{ marginBottom: '8px', fontWeight: 600, fontSize: '14px', color: '#374151' }}>Thu nhập hàng tháng</div>
                                <ResponsiveContainer width="100%" height={200}>
                                    <BarChart data={incomeData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                        <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                                        <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000000).toFixed(0)}M`} />
                                        <Tooltip formatter={(v) => [`${Number(v).toLocaleString('vi-VN')} VND`, 'Thu nhập']} />
                                        <Bar dataKey="income" name="Thu nhập" fill="#16a34a" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='Graph-items'>
                                <div style={{ marginBottom: '8px', fontWeight: 600, fontSize: '14px', color: '#374151' }}>Chi tiêu hàng tháng</div>
                                <ResponsiveContainer width="100%" height={200}>
                                    <BarChart data={expenseData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                        <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                                        <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000000).toFixed(0)}M`} />
                                        <Tooltip formatter={(v) => [`${Number(v).toLocaleString('vi-VN')} VND`, 'Chi tiêu']} />
                                        <Bar dataKey="expense" name="Chi tiêu" fill="#dc2626" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="Graph-1">
                            <div className='Graph-items'>
                                <div style={{ marginBottom: '8px', fontWeight: 600, fontSize: '14px', color: '#374151' }}>Xu hướng số dư</div>
                                <ResponsiveContainer width="100%" height={200}>
                                    <AreaChart data={balanceTrendData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                                        <defs>
                                            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                        <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                                        <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
                                        <Tooltip formatter={(v) => [`${Number(v).toLocaleString('vi-VN')} VND`, 'Số dư']} />
                                        <Area type="monotone" dataKey="balance" stroke="#2563eb" strokeWidth={2} fill="url(#colorBalance)" dot={{ fill: '#2563eb', r: 3 }} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='Graph-items'>
                                <div style={{ marginBottom: '8px', fontWeight: 600, fontSize: '14px', color: '#374151' }}>Phân bổ danh mục</div>
                                <ResponsiveContainer width="100%" height={200}>
                                    <PieChart>
                                        <Pie data={categoryBreakdown} cx="50%" cy="50%" innerRadius={45} outerRadius={75} paddingAngle={3} dataKey="value">
                                            {categoryBreakdown.map((entry, index) => (
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
                    <div className="Al-report">
                        <h1>Monthly Report</h1>
                        <table className='Al-table'>
                            <tr className='Al-type'>
                                <th className='Al-items'>Monthly</th>
                                <th className='Al-items'>Income</th>
                                <th className='Al-items'>Expense</th>
                                <th className='Al-items'>Balance</th>
                                <th className='Al-items'>Category</th>
                            </tr>
                            <tr className='Al-content'>
                                <td className='items-content'>Jan</td>
                                <td className='items-content'>10,000,000</td>
                                <td className='items-content'>7,200,000</td>
                                <td className='items-content'>2,800,000</td>
                                <td className='items-content'>Ăn uống</td>
                            </tr>
                            <tr className='Al-content'>
                                <td className='items-content'>Feb</td>
                                <td className='items-content'>10,000,000</td>
                                <td className='items-content'>8,500,000</td>
                                <td className='items-content'>1,500,000</td>
                                <td className='items-content'>Mua sắm</td>
                            </tr>
                            <tr className='Al-content'>
                                <td className='items-content'>Mar</td>
                                <td className='items-content'>12,000,000</td>
                                <td className='items-content'>6,900,000</td>
                                <td className='items-content'>5,100,000</td>
                                <td className='items-content'>Di chuyển</td>
                            </tr>
                            <tr className='Al-content'>
                                <td className='items-content'>Apr</td>
                                <td className='items-content'>10,000,000</td>
                                <td className='items-content'>9,200,000</td>
                                <td className='items-content'>800,000</td>
                                <td className='items-content'>Hóa đơn</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
