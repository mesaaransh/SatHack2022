import React from "react";
function Rank1(props) {
    return (
        <>
            <div className="rank">
                <h5 className="rankhead">{props.department}</h5>
                <h5>
                    <i class="bi bi-star-half"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                </h5>
                <h5>Reports: {props.reports}</h5>
            </div>
        </>
    );
}

export default Rank1;