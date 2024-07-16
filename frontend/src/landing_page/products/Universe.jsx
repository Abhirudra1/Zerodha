function Universe() {
    return ( 
        <div>
            <div className="container text-center text-muted">
                <div className="row">
                    <h2 className="mb-4">The Zerodha Universe</h2>
                    <p className="mb-4">Extend your trading and investment experience even further with our partner platforms</p>

                    <div className="row">
                        <div className="col-4 p-3">
                            <img src="media/smallcaseLogo.png" alt="" />
                            <p className="text-muted text-small">Thermatic investment platform</p>
                        </div>
                        <div className="col-4 p-3">
                            <img src="media/streakLogo.png"  style={{width:"120px", marginBottom:"5px"}} alt="" />
                            <p className="text-muted text-small">Algo & strategy platform</p>
                        </div>
                        <div className="col-4 p-3">
                            <img src="media/sensibullLogo.svg" style={{width:"120px", marginBottom:"5px"}} alt="" />
                            <p className="text-muted text-small">Options trading platform</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 p-3">
                                <img src="media/zerodhaFundhouse.png" style={{width:"120px", marginBottom:"5px"}} alt="" />
                                <p className="text-muted text-small">Asset management</p>
                        </div>
                        <div className="col-4 p-3">
                                <img src="media/smallcaseLogo.png" alt="" />
                                <p className="text-muted text-small">Fundamental research platform</p>
                        </div>
                        <div className="col-4 p-3">
                                <img src="media/dittoLogo.png" style={{width:"120px", marginBottom:"5px"}} alt="" />
                                <p className="text-muted text-small">Insurance</p>
                        </div>
                    </div>
                    <button className="p-2 btn btn-primary fs-5 mb-5 mt-3" style={{width:"28%", margin: "0 auto"}}>Signup Now</button>
                </div>
            </div>
        </div>
     );
}

export default Universe;