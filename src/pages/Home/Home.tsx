import './Home.css'

export default function Home() {
    return (
        <> 
            <div className='box-content'>
                <div className="box-content-1">
                    <h2>TEST BOX 1</h2>
                    <div className='box-item'>
                        <div className="box-item-1">
                            <div className="box-item-1-1">
                                <div className="box-item-1-text">
                                    <h2>Balance</h2>
                                    <h3>10000000</h3>
                                    <h4>15%</h4>
                                </div>
                                <div className="box-item-1-graph">
                                    <h1>232132</h1>
                                </div>
                            </div>
                            <div className="box-item-1-1">
                                <div className="box-item-1-text">
                                    <h2>Savings</h2>
                                    <h3>2999999</h3>
                                    <h4>20%</h4>
                                </div>
                                <div className="box-item-1-graph">
                                    <h1>3213213</h1>
                                </div>
                            </div>
                        </div>

                        <div className="box-item-1">
                            <div className="box-item-1-1">
                                <div className="box-item-1-text">
                                    <h2>Income</h2>
                                    <h3>300000</h3>
                                    <h4>30%</h4>
                                </div>
                                <div className="box-item-1-graph">
                                    <h1>321321</h1>
                                </div>
                            </div>
                            <div className="box-item-1-1">
                                <div className="box-item-1-text">
                                    <h2>Expenses</h2>
                                    <h3>300000</h3>
                                    <h4>30%</h4>
                                </div>
                                <div className="box-item-1-graph">
                                    <h1>3213213</h1>
                                </div>
                            </div>
                        </div>

                        <h2>TEST BOX 2</h2>
                        <div className="box-content-2">
                            <div className="box-item-2">
                                <div className="box-item-2-1">TEST 1</div>
                                <div className="box-item-2-1">TEST 2</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box-content-3">
                    <h2>TEST BOX 3</h2>
                    <div className="box-item-3">
                        <div className="box-item-3-top">
                            <h2>MyCard</h2>
                            <div className="box-item-3-1">
                                TEST 1
                            </div>
                        </div>
                        <div className="box-item-3-bottom">
                            <h2>Last Transition</h2>
                            <div className="box-item-3-2">
                                TEST 2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}