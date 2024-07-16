function Team() {
    return ( 
        <div>
            <div className="container">
                <div className="row text-center text-muted border-top " >
                    <h2 className="mt-5">People</h2>
                </div>
                <div className="row p-5">
                    <div className="col text-center text-muted">
                        <img src="media/nithinKamath.jpg" alt="" style={{borderRadius:"100%", width:"50%"}} />
                        <h4 className="mt-3">Nithin Kamath</h4>
                        <h5>Founder, CEO</h5>
                    </div>
                    <div className="col">
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>Playing basketball is his zen.</p>
                        <p>Connect on <a href="" style={{color:"skyblue"}}> Homepage / TradingQnA / Twitter</a></p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Team;