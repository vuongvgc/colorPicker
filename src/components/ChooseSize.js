import React from 'react';
function ChooseSize(props) {
    return(
        <div className="container border border-warning p-0">
            <div className="alert alert-warning">
                <h3>Size: {props.fontSize} px</h3>
            </div>
            <button className="btn btn-success m-2" value='increase' onClick={props.changeFs}>Increase</button>
            <button className="btn btn-success m-2" value='decrease' onClick={props.changeFs} >Decrease</button>
        </div>
    )
}
export default ChooseSize;