import React from 'react';
import '../css/App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import LeftContent from './LeftContent';
import TopRightContent from './TopRightContent';
import About from './About';
import Works from './Works';
import Prize from './Prize';
import Blog from './Blog'
import Contact from './Contact';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      leftTitleName: 'Masahiro OKAZAKI',
    }
    this.onChangeName = this.onChangeName.bind(this);
  };

  render() { 
    return (
    <BrowserRouter>
      <div className='App'>
        <LeftContent
          titlename={ this.state.leftTitleName }
        />
        <Route
          exact path='/'
          render={()=> <TopRightContent contentname={ this.onChangeName }/>}
        />
        <Route
          path='/about'
          render={()=> <About contentname={ this.onChangeName }/>}
        />
        <Route
          path='/works'
          render={()=> <Works contentname={ this.onChangeName }/>}
        />
        <Route
          path='/prize'
          render={()=> <Prize contentname={ this.onChangeName }/>}
        />
        <Route
          path='/blog'
          render={()=> <Blog contentname={ this.onChangeName } app={ this.state.firebaseapps }/>}
        />
        <Route
          path='/contact'
          render={()=> <Contact contentname={ this.onChangeName }/>}
        />
      </div>
    </BrowserRouter>
    )};

  onChangeName(name) { //選択内容に応じてタイトルを変更
    this.setState({
      leftTitleName: name
    });
  }
}

export default App;
