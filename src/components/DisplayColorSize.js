import React from 'react';
class DisplayColorSize extends React.Component {
    render(){
        return(
            <div className="container">
                <h3>Color: Red - FontSize: 12px</h3>
                <div className="border border-danger">
                    <p>Please fill input</p>
                </div>
            </div>
        )
    }
}
export default DisplayColorSize;