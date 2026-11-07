import './DataManagement.css'

export default function DataManagement() {
    return (
        <div className="data-mgmt-wrapper">
            <div>
                <p className="data-mgmt-title">📂 Data Management</p>
                <p className="data-mgmt-subtitle">Backup, restore, and export your financial data</p>
            </div>

            <div className="data-mgmt-grid">
                {/* Backup */}
                <div className="data-mgmt-card">
                    <span className="data-mgmt-card-icon">💾</span>
                    <p className="data-mgmt-card-title">Backup</p>
                    <p className="data-mgmt-card-desc">Create a backup of all your financial data</p>
                    <button
                        className="data-mgmt-btn-primary"
                        onClick={() => alert('Backup created!')}
                    >
                        Create Backup
                    </button>
                </div>

                {/* Restore */}
                <div className="data-mgmt-card">
                    <span className="data-mgmt-card-icon">🔄</span>
                    <p className="data-mgmt-card-title">Restore</p>
                    <p className="data-mgmt-card-desc">Restore data from a previous backup file</p>
                    <button
                        className="data-mgmt-btn-outlined"
                        onClick={() => alert('Select a backup file to restore.')}
                    >
                        Choose File &amp; Restore
                    </button>
                </div>

                {/* Export PDF */}
                <div className="data-mgmt-card">
                    <span className="data-mgmt-card-icon">📄</span>
                    <p className="data-mgmt-card-title">Export PDF</p>
                    <p className="data-mgmt-card-desc">Export your transactions as a PDF report</p>
                    <button
                        className="data-mgmt-btn-primary"
                        onClick={() => alert('Exporting PDF...')}
                    >
                        Export PDF
                    </button>
                </div>

                {/* Export Excel */}
                <div className="data-mgmt-card">
                    <span className="data-mgmt-card-icon">📊</span>
                    <p className="data-mgmt-card-title">Export Excel</p>
                    <p className="data-mgmt-card-desc">Export your data to Excel spreadsheet</p>
                    <button
                        className="data-mgmt-btn-primary"
                        onClick={() => alert('Exporting Excel...')}
                    >
                        Export Excel
                    </button>
                </div>
            </div>

            <div className="data-mgmt-warning">
                ⚠️ Backup and restore operations affect all your data. Please proceed with caution.
            </div>
        </div>
    )
}
