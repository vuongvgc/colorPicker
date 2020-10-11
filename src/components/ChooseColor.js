import React from 'react';
function ColorItem(props) {
    const styleButton = {
        width: '60px',
        height: '60px',
        textAlign: 'center',
        backgroundColor: props.color
    }
    return(
        <div className="col-2 mr-2">
            <button style={styleButton} value={props.color} onClick={() => props.changeColor(props.color)}></button>
        </div>
    )
}
function ChooseColor(props) {
    const renderColor = props.colorList.map((el, index) => 
        <ColorItem changeColor={(b) => props.changeColorCurrent(b)} color={el} key={index}/>
    )
    return(
        <div className="container border border-primary p-0">
            <div className="container-fluid alert alert-primary">
                <h3>Choose Color</h3>
            </div>
            <div className="container p-3">
                <div className="row">
                    {renderColor}
                </div>
            </div>
        </div>
    )
}
export default ChooseColor;