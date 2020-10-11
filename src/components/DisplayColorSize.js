import React from 'react';
function DisplayColorSize(props) {
    const styleEl = {
        fontSize: props.fontSize,
        border: '3px solid',
        borderColor: 'props.colorPick',
        color: props.colorPick
    }
    return(
        <div className="container">
            <h3>Color: {props.colorPick}  - FontSize: {props.fontSize} px</h3>
            <div style={styleEl}>
                <p>Please fill input</p>
            </div>
        </div>
    )
}
export default DisplayColorSize;