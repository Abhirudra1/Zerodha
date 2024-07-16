/* eslint-disable react/prop-types */
function RightSection({imageURL, productName, productDescription, tryDemo }) {
    return ( 
        <div>
            <div className="container p-5 mb-3">
                <div className="row">
                    <div className="col-6 ">
                            <h1 className="mb-4">{productName}</h1>
                            <p>{productDescription}</p>
                            <a href="#" style={{color:"#387ED1"}}>{tryDemo}&nbsp;&nbsp;<i className="fa fa-long-arrow-alt-right"></i></a> 
                    </div>
                    <div className="col-6">
                        <img src={imageURL} alt="" />
                    </div>
                </div>    
            </div>
        </div>
     );
}

export default RightSection;