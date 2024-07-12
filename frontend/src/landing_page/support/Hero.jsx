function Hero() {
    return ( 
        <div>
            <section className="container-fluid" id="supportHero">
                <div className="p-5 mt-5 " id="supportWrapper">
                    <h4>Support Portal</h4>
                    <a href="#">Track Ticket</a>
                </div>
                <div className="row">
                    <div className="col p-5 mb-5">
                        <h3 className="fs-5 mb-4">Search for an answer or browse help topics to create a ticket</h3>
                        <input id="supportInput" type="text" placeholder="Eg. how do I activate F&O, why is my order getting rejected ..." className="mb-4" /><br />
                        <a href="#">Track account opening</a>
                        <a href="#">Track segment activation</a>
                        <a href="#">Intray margins</a>
                        <a href="#">Kite user manual</a>
                    </div>
                    <div className="col p-5 mb-5">
                        <h3 className="fs-5 mb-4">Featured</h3>
                        <p>Due to a system upgrade, HDFC Bank is experiencing a global downtime from 7 pm 12th July to 4:30 pm 13th July. HDFC UPI and net banking payments may not be available, and direct transfers using NEFT, IMPS, and RTGS may be delayed. Learn more.  <a href="">Learn More</a></p>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default Hero;