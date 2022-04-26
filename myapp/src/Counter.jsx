import React ,{Component}from 'react'
import './counter.css'

class Counter extends Component{
    render()
    {
        return(
            <div className="counter">
                <CounterButton by ={1} incrementMethod={this.increment} />
                <CounterButton by ={5}   incrementMethod={this.increment}  />
                <CounterButton by ={10}  incrementMethod={this.increment}/>
                <span className="count" style ={{fontSize :"50px"}}>{this.state.counter}</span>
                </div>
        )
    }
    constructor()
    {
        super();
        this.state={
            counter : 0
        }
        this.increment=this.increment.bind(this);
    }
    increment(by)
    {
        console.log(`increment from child -${by}`);
        this.setState(
            {
                counter :this.state.counter+by
            }
        );
    }
}
class  CounterButton extends Component

{
  constructor()
  {
      super();
      this.state={
          counter: 0
      }
      this.increment=this.increment.bind(this);
  }

    render()
    {
    return (
        <div className="counter">
            <button onClick={this.increment}>+{this.props.by}</button>
            
        </div>
    )
    }
    increment()
{
    
    this.setState(
        {
            counter: this.state.counter+this.props.by
        }
    )
    console.log("increment");

    this.props.incrementMethod(this.props.by);
}
}


export default Counter