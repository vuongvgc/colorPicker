import React from 'react';
class ChooseSize extends React.Component {
    render(){
        return(
            <div className="container border border-warning p-0">
                <div className="alert alert-warning">
                    <h3>Size: 12px</h3>
                </div>
                <button className="btn btn-success m-2">Increase</button>
                <button className="btn btn-success m-2">Decrease</button>
            </div>
        )
    }
}
export default ChooseSize;