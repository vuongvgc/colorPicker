import React from 'react';
function DisplayColorSize(props) {
    return(
        <div className="container">
            <h3>Color: {props.colorPick}  - FontSize: {props.fontSize} px</h3>
            <div className="border border-danger">
                <p>Please fill input</p>
            </div>
        </div>
    )
}
export default DisplayColorSize;