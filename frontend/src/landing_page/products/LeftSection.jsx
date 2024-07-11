/* eslint-disable react/prop-types */
function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return ( 
        <div>
            <div className="container p-5">
                <div className="row">
                    <div className="col-6">
                        <img src={imageURL} alt="" />
                    </div>

                    <div className="col-6">
                        <h1 className="mb-4">{productName}</h1>
                        <p>{productDescription}</p>
                        
                        <a href="#" style={{color:"#387ED1"}}>{tryDemo} &nbsp;&nbsp;<i className="fa fa-long-arrow-alt-right"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#" style={{color:"#387ED1"}}>{learnMore}&nbsp;&nbsp; <i className="fa fa-long-arrow-alt-right"></i></a>
                        <br /><br />
                        <a href={googlePlay}><img src="media/googlePlayBadge.svg" alt="" /></a>&nbsp;&nbsp;
                        <a href={appStore}><img src="media/appstoreBadge.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;