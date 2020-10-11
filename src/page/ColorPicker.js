import React from 'react';
import ChooseColor from '../components/ChooseColor';
import ChooseSize from '../components/ChooseSize';
import DisplayColorSize from '../components/DisplayColorSize';
class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="container">
                <header className="p-5">
                    <h1 className="alert alert-success">Color Picker</h1>
                </header>
                <div className="row my-3">
                    <div className="col-6">
                        <ChooseColor />
                    </div>
                    <div className="col-6">
                        <ChooseSize />
                    </div>
                </div>
                <button className="btn btn-info">Reset</button>
                <div className="container">
                    <div>
                        <DisplayColorSize />
                    </div>
                </div>
            </div>
          );
        }
    }

export default ColorPicker;
