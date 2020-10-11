import React from 'react';
class ChooseColor extends React.Component {
    render(){
        return(
            <div className="container border border-primary p-0">
                <div className="container-fluid alert alert-primary">
                    <h3>Choose Color</h3>
                </div>
                <div className="container p-3">
                    <div className="row">
                        <div className="col-1 bg-danger mr-2">
                            1
                        </div>
                        <div className="col-1 bg-warning  mr-2">
                            2
                        </div>
                        <div className="col-1 bg-info  mr-2">
                            3
                        </div>
                        <div className="col-1 bg-secondary  mr-2">
                            4
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ChooseColor;