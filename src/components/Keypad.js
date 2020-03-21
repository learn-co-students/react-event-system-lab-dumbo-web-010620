// Code Keypad Component Here
import React, { Component } from "react"

class Keypad extends Component {

    key = () => {
        console.log("Entering password...")
    }

    render(){
        return(
            <div>
                <input onKeyUp={this.key} type="password" placeholder="******"></input>
            </div>
        )
    }
}


export default Keypad