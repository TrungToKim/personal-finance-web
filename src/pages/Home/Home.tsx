import './Home.css'
import {
    AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer
} from 'recharts'

// Mock data
const balanceTrend = [
    { v: 8500000 }, { v: 9200000 }, { v: 8800000 }, { v: 10100000 },
    { v: 9700000 }, { v: 10500000 }, { v: 10000000 }
]
const savingsTrend = [
    { v: 2000000 }, { v: 2200000 }, { v: 2400000 }, { v: 2600000 },
    { v: 2800000 }, { v: 2900000 }, { v: 2999999 }
]
const incomeTrend = [
    { v: 10000000 }, { v: 10000000 }, { v: 12000000 }, { v: 10000000 },
    { v: 10000000 }, { v: 11000000 }, { v: 300000 }
]
const expenseTrend = [
    { v: 5000000 }, { v: 6200000 }, { v: 4800000 }, { v: 7100000 },
    { v: 5500000 }, { v: 6800000 }, { v: 300000 }
]

const monthlySpending = [
    { month: 'Jan', amount: 7200000 },
    { month: 'Feb', amount: 8500000 },
    { month: 'Mar', amount: 6900000 },
    { month: 'Apr', amount: 9200000 },
    { month: 'May', amount: 7800000 },
    { month: 'Jun', amount: 8100000 },
]

const budgetVsActual = [
    { name: 'Food', budget: 3000000, actual: 2800000 },
    { name: 'Transport', budget: 1500000, actual: 1800000 },
    { name: 'Shopping', budget: 2000000, actual: 2500000 },
    { name: 'Bills', budget: 2500000, actual: 2400000 },
]

const recentTransactions = [
    { icon: '🍜', name: 'Ăn trưa', date: '05/11/2026', amount: -45000 },
    { icon: '💼', name: 'Lương tháng 11', date: '01/11/2026', amount: 12000000 },
    { icon: '🛒', name: 'Siêu thị', date: '03/11/2026', amount: -350000 },
    { icon: '🏠', name: 'Tiền nhà', date: '01/11/2026', amount: -3500000 },
    { icon: '☕', name: 'Cà phê', date: '04/11/2026', amount: -55000 },
]

function SparkLine({ data, color }: { data: { v: number }[], color: string }) {
    return (
        <ResponsiveContainer width="100%" height={60}>
            <AreaChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <defs>
                    <linearGradient id={`grad-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                        <stop offset="95%" stopColor={color} stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Area
                    type="monotone"
                    dataKey="v"
                    stroke={color}
                    strokeWidth={2}
                    fill={`url(#grad-${color.replace('#', '')})`}
                    dot={false}
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default function Home() {
    return (
        <>
            <div className='box-content'>
                <div className="box-content-1">
                    <h2>Financial Overview</h2>
                    <div className='box-item'>
                        <div className="box-item-1">
                            <div className="box-item-1-1">
                                <div className="box-item-1-text">
                                    <h2>Balance</h2>
                                    <h3>10,000,000 VND</h3>
                                    <h4>+15% ↑ this month</h4>
                                </div>
                                <div className="box-item-1-graph">
                                    <SparkLine data={balanceTrend} color="#2563eb" />
                                </div>
                            </div>
                            <div className="box-item-1-1">
                                <div className="box-item-1-text">
                                    <h2>Savings</h2>
                                    <h3>2,999,999 VND</h3>
                                    <h4>+20% ↑</h4>
                                </div>
                                <div className="box-item-1-graph">
                                    <SparkLine data={savingsTrend} color="#16a34a" />
                                </div>
                            </div>
                        </div>

                        <div className="box-item-1">
                            <div className="box-item-1-1">
                                <div className="box-item-1-text">
                                    <h2>Income</h2>
                                    <h3>300,000 VND</h3>
                                    <h4>+30% ↑</h4>
                                </div>
                                <div className="box-item-1-graph">
                                    <SparkLine data={incomeTrend} color="#d97706" />
                                </div>
                            </div>
                            <div className="box-item-1-1">
                                <div className="box-item-1-text">
                                    <h2>Expenses</h2>
                                    <h3>300,000 VND</h3>
                                    <h4>+30% ↓</h4>
                                </div>
                                <div className="box-item-1-graph">
                                    <SparkLine data={expenseTrend} color="#dc2626" />
                                </div>
                            </div>
                        </div>

                        <h2>Analytics</h2>
                        <div className="box-content-2">
                            <div className="box-item-2">
                                <div className="box-item-2-1">
                                    <span>Spending Overview</span>
                                    <ResponsiveContainer width="100%" height={200}>
                                        <BarChart data={monthlySpending} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                            <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                                            <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
                                            <Tooltip formatter={(v) => [`${Number(v).toLocaleString('vi-VN')} VND`, 'Chi tiêu']} />
                                            <Bar dataKey="amount" fill="#2563eb" radius={[4, 4, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="box-item-2-1">
                                    <span>Budget vs Actual</span>
                                    <ResponsiveContainer width="100%" height={200}>
                                        <BarChart data={budgetVsActual} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                                            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                                            <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
                                            <Tooltip formatter={(v) => `${Number(v).toLocaleString('vi-VN')} VND`} />
                                            <Legend />
                                            <Bar dataKey="budget" name="Ngân sách" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                                            <Bar dataKey="actual" name="Thực tế" fill="#2563eb" radius={[4, 4, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box-content-3">
                    <h2>My Wallet</h2>
                    <div className="box-item-3">
                        <div className="box-item-3-top">
                            <h2>My Cards</h2>
                            <div className="box-item-3-1" style={{ display: 'block', padding: '16px' }}>
                                <div style={{
                                    background: 'linear-gradient(135deg, #1e3a8a, #2563eb)',
                                    borderRadius: '16px',
                                    padding: '20px',
                                    color: 'white',
                                    minHeight: '140px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontWeight: 700, fontSize: '18px', letterSpacing: '1px' }}>BIDV</span>
                                        <span style={{ fontSize: '13px', opacity: 0.85 }}>● VISA</span>
                                    </div>
                                    <div style={{ fontSize: '16px', letterSpacing: '3px', textAlign: 'center', margin: '12px 0' }}>
                                        5495 •••• •••• 2321
                                    </div>
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', opacity: 0.85, marginBottom: '4px' }}>
                                            <span>Trung Kim</span>
                                            <span>09/31</span>
                                        </div>
                                        <div style={{ fontSize: '20px', fontWeight: 700 }}>10,000,000 VND</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-item-3-bottom">
                            <h2>Recent Transactions</h2>
                            <div className="box-item-3-2" style={{ display: 'block', padding: '16px' }}>
                                {recentTransactions.map((tx, i) => (
                                    <div key={i} style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '10px 0',
                                        borderBottom: i < recentTransactions.length - 1 ? '1px solid #f1f5f9' : 'none'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <span style={{ fontSize: '20px' }}>{tx.icon}</span>
                                            <div>
                                                <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>{tx.name}</div>
                                                <div style={{ fontSize: '11px', color: '#94a3b8' }}>{tx.date}</div>
                                            </div>
                                        </div>
                                        <span style={{
                                            fontSize: '13px',
                                            fontWeight: 700,
                                            color: tx.amount > 0 ? '#16a34a' : '#dc2626'
                                        }}>
                                            {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('vi-VN')} VND
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
