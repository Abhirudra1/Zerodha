function Hero() {
    return ( 
        <div>
            <div className="container text-center border-bottom" style={{padding:"7rem", color:"#424242"}}>
                <h1 className="fs-1 mb-3">Pricing</h1>
                <p style={{fontSize:"1.5rem"}}>Free equity investments and flat ₹20 intraday and F&O trades</p>
            </div>

            <div className="row p-5 mt-5 text-center">
                <div className="col-4 p-5">
                    <img src="media/pricingEquity.svg" alt="" />
                    <h1 className="fs-2">Free equity delivery</h1>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/intradayTrades.svg" alt="" />
                    <h1 className="fs-2">Intraday and F&O trades</h1>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/pricingEquity.svg" alt="" />
                    <h1 className="fs-2">Free direct MF</h1>
                    <p className="text-muted">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;