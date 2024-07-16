function CreateTicket() {
    return ( 
        <div>
            <div className="container">
                <div className="row p-5 mt-5 ">
                    <h1 className="fs-3 text-left" style={{fontWeight:"400"}}>
                        To create a ticket, select a relevant topic
                    </h1>

                    <div className="col-4 p-3 mt-5 ">
                        <h5 style={{fontWeight:"400"}}><i className="fa fa-plus-circle" aria-hidden="true"></i> &nbsp;Account Opening</h5>      
                        <div className="mt-3" style={{textDecoration:"none", lineHeight:"2", }}>
                               <a href="#" style={{color:"#387ED1"}}>Getting started</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Online</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Offline</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Charges</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Company, Partnership and HUF</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Non Resident Indian (NRI)</a> <br />
                        </div>
                    </div>

                    <div className="col-4 p-3 mt-5 ">
                        <h5 style={{fontWeight:"400"}}><i className="fa-solid fa-user"></i>&nbsp; Your Zerodha Account</h5>      
                        <div className="mt-3" style={{textDecoration:"none", lineHeight:"2", }}>
                               <a href="#" style={{color:"#387ED1"}}>Login credentials</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Your Profile</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Account modification and segment addition</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>CMR & DP ID</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Nomination</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Transfer and conversion of shares</a> <br />
                        </div>
                    </div>

                    <div className="col-4 p-3 mt-5 ">
                        <h5 style={{fontWeight:"400"}}><i className="fa-solid fa-chart-column"></i> &nbsp;Trading and Markets</h5>      
                        <div className="mt-3" style={{textDecoration:"none", lineHeight:"2", }}>
                               <a href="#" style={{color:"#387ED1"}}>Trading FAQs</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Kite</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Margins</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Product and order types</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Corporate actions</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Kite features</a> <br />
                        </div>
                    </div>
                </div>
                <div className="row p-5 ">
                <div className="col-4 p-3  mb-5">
                        <h5 style={{fontWeight:"400"}}><i className="fa-solid fa-wallet"></i> &nbsp; Funds</h5>      
                        <div className="mt-3" style={{textDecoration:"none", lineHeight:"2", }}>
                               <a href="#" style={{color:"#387ED1"}}>Fund withdrawal</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Adding funds</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Adding bank accounts</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>eMandates</a> <br />
                        </div>
                    </div>

                    <div className="col-4 p-3  mb-5">
                        <h5 style={{fontWeight:"400"}}><i className="fa-sharp fa-regular fa-circle"></i>&nbsp; Console</h5>      
                        <div className="mt-3" style={{textDecoration:"none", lineHeight:"2", }}>
                               <a href="#" style={{color:"#387ED1"}}>IPO</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Portfolio</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Funds statement</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Profile</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Reports</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Referral program</a> <br />
                        </div>
                    </div>

                    <div className="col-4 p-3  mb-5">
                        <h5 style={{fontWeight:"400"}}><i className="fa-solid fa-bomb"></i> &nbsp;Coin</h5>      
                        <div className="mt-3" style={{textDecoration:"none", lineHeight:"2", }}>
                               <a href="#" style={{color:"#387ED1"}}>Understanding mutual funds and Coin</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Coin app</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Coin web</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>Transactions and reports</a> <br />
                               <a href="#" style={{color:"#387ED1"}}>National Pension Scheme (NPS)</a> <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;