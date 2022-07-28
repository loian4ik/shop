import React from "react";
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      items:[
        {
         id: 1,
         title: 'Chair',
         img: 'chair-grey.jpg',
         desc: 'Lorem ipsum dolor sit amet',
         category: 'chairs',
         price: '48.99'
       },
       {
        id: 2,
        title: 'Table',
        img: 'table.jpg',
        desc: 'Lorem ipsum dolor sit amet',
        category: 'tables',
        price: '127.99'
      },

      {
        id: 3,
        title: 'Sofa',
        img: 'sofa.jpg',
        desc: 'Lorem ipsum dolor sit amet',
        category: 'tables',
        price: '179.99'
      },


      ]
    }
  }
//items that array which keep data from our site
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Items items={this.state.items}/>
        <Footer/>
      </div>
     
      )
    }
   }

export default App;
