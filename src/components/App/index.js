import React, { Component } from 'react';
import Home from '../Home'

class App extends Component {
  render() {
    return (
      <React.Fragment>{/** <></> 형태의 빈 태그로 대체해서 쓸 수 있음. 
                           그러나 이걸 support해주지 않는 툴이 아직 있으니 사용에 유의할 것. */}
        <Home />
      </React.Fragment>
    );
  }
}

export default App;