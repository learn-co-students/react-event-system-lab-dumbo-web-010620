import React from 'react';

class Keypad extends React.Component {

  handleInputPassword = () => console.log('Entering password...')

  render() {
    return (
      <div>
        <input 
          type="password"
          onKeyUp={this.handleInputPassword} 
        />
      </div>
    )
  }
}

export default Keypad;

// import React, {Component} from 'react'


// class Keypad extends React.Component {


//     render(){
//         return(

//         )
//     }
// }

// export default 