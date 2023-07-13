import React ,{useState}from 'react';
// /import Footer from './Footer';
// import Header from './Header';
// import Main from './Main';
// import './app.css';
// import Design from './Design';
// import Component from './component';


function App() {
  // var load=true;
  let [state,setState]=useState(0);
  return (
    <div>
      <h1>{state}</h1>
      <button
      onClick={
        function name(params) {
          setState(state+1)
        }
      }
      >increment</button>
      <button 
      onClick={
        function name(params) {
          setState(state-1)
        }
      }>decrement</button>
    </div>
  )
  }
  
     // {
     // load?
      //<div id="one">
      //  <h1>hello world</h1>
     // </div>:
     // <div>
      //  <h1>hii how are you</h1>
     // </div>

    //  }
    //</div>
   // <div className='first'>
    {/* <Header/> */}
     {/* <Main/> */}
      {/* <Footer/> */}
    {/* <Component title="dft"/> */}
//     // <div className='cd'>
// <Design
// img="https://media.discordapp.net/attachments/1103207862521561162/1126755241371635732/reusable-banners-card-1-bg-1.png?width=1116&height=300"
//  name="The seasons latest"
//  desc="Get the seasons all least in a file of your"
//  button="show more"
//  color="clr1"
//  radius="border"
// /></div>
// <div className='cms'>
// <Design
// img="https://media.discordapp.net/attachments/1103207862521561162/1126755241749135380/reusable-banners-card-2-bg-1.png?width=1440&height=387"
// name="Our New Designs"
// desc="Get the designs developed by our in-house team all for yourself"
// button="show more"
// color="clr2"
// />
// </div>
// <div className='sd'>
//   <Design
//   img="https://media.discordapp.net/attachments/1103207862521561162/1126755242210492426/reusable-banners-card-3-bg-1.png?width=1440&height=387"
//   name="Insiders"
//   desc="Get the top class products for yourself with an extra off"
//   button="show more"
//   color="clr3"
  
//  /div>

 

export default App;
