import React from 'react';
import ChooseColor from '../components/ChooseColor';
import ChooseSize from '../components/ChooseSize';
import DisplayColorSize from '../components/DisplayColorSize';
class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorList: this.props.color,
            fontSize: this.props.fontSize,
            colorCurrent: 'Red'
        }
    }
    changeColor = (value) => {
        console.log(value)
        this.setState({
            colorCurrent: value
        })
    }
    changeFontSize = (event) => {
        if(this.state.fontSize < 10) {
            this.setState({
                fontSize: 10
            })

        }else if(9 <= this.state.fontSize && this.state.fontSize <= 29) {
            this.setState({
                fontSize: event.target.value === 'increase' ? this.state.fontSize + 1 : this.state.fontSize - 1
            })
        }else if(this.state.fontSize > 30) {
            this.setState({
                fontSize: 30
            })

        }
    }
    render(){
        const color = this.state.colorList;
        const colorCurrent = this.state.colorCurrent;
        const fs = this.state.fontSize;
        return (
            <div className="container">
                <header className="p-5">
                    <h1 className="alert alert-success">Color Picker</h1>
                </header>
                <div className="row my-3">
                    <div className="col-6">
                        <ChooseColor colorList={color} changeColorCurrent={this.changeColor} />
                    </div>
                    <div className="col-6">
                        <ChooseSize fontSize={fs} changeFs ={this.changeFontSize}/>
                    </div>
                </div>
                <button className="btn btn-info">Reset</button>
                <div className="container">
                    <div>
                        <DisplayColorSize colorPick={colorCurrent} fontSize={fs} />
                    </div>
                </div>
            </div>
          );
        }
    }

export default ColorPicker;
