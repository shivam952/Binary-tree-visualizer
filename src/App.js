import React, {Component} from 'react';
import './App.css';
import Canvas from './Canvas';

export default class App extends Component {
  constructor() {
    super();
    this.state = {input: [15, 25, 10, 7, 22, 17, 13, 5, 9, 27]};
    // [15,25,10,7,22,17,13,5,9,27]
  }
  handleAdd() {
    var data = document.querySelector('#add').value;
    const input = this.state.input;
    data=parseInt(data);
    if(!data)return
    input.push(parseInt(data));
    this.setState({input});
  }
  handleAddMultiple(){
    var str = document.querySelector('#addM').value;
    var input=str.split(' ')
    for(let i=0;i<input.length;i++)
    input[i]=parseInt(input[i]);
    this.setState({input});
  }
  render() {
    return (
      <div className="App">
        <div id="controls">
          <div>
            <input id="add" type="number"></input>
            <button onClick={(e) => this.handleAdd()} style={{
              borderTopRightRadius:7,
              borderBottomRightRadius:7
            }}>add</button>
          </div>
          <div>
            <input id="addM" type="text" defaultValue="15 25 10 7 22 17 13 5 9 27"/>
            <button onClick={(e) => this.handleAddMultiple()} style={{
              borderTopRightRadius:7,
              borderBottomRightRadius:7
            }} >add multiple</button>
          </div>
          <div>
            <button onClick={(e) => this.setState({input:[]})}>reset</button>
          </div>
        </div>

        <Canvas input={this.state.input} />
      </div>
    );
  }
}
