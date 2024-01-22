import React, { Component } from 'react'
import { Link } from 'gatsby';
import "../layout.css";
import logo from '../../images/logo.png';


export default class extends Component {
  state = {
    navbarState: false,
    navbarClass: 'collapse navbar-collapse',
    menu: [
      {
        id: 1,
        Text: "Home",
        url: '/',
      }, 
      {
        id: 2, 
        Text: "Courses",
        url: '/courses',
      },
      {
        id: 2,
        Text: "About Us",
        url: '/about',
      },
      // {
      //   id: 3,
      //   Text: "Services",
      //   url: '/services',
      // },
      // {
      //   id: 4,
      //   Text: "Cart",
      //   url: "/cart"
      // },
      {
        id: 5,
        Text: "Contact Us",
        url: '/contact',
      },
      // {
      //   id:6,
      //   Text:"Quiz",
      //   url:'./quiz'
      // }
      
    ]
  };

  myToggler = () => {
    this.state.navbarState
      ? this.setState({
        navbarState: false,
        navbarClass: 'collapse navbar-collapse',
      })
      : this.setState({
        navbarState: true,
        navbarClass: 'collapse navbar-collapse show',
      })
  };

  render() {
    return (
      <nav className='navbar navbar-expand-sm px-5 py-4'>

        <Link to="/" className='navbar-brand ml-5'>
          <img src={logo} alt='app-logo' height='50px' />
        </Link>

        <button className='navbar-toggler' type='button' onClick={this.myToggler}>
          <span className='text-white'>Menu</span>
        </button>

        <div className={this.state.navbarClass}>
          <ul className='navbar-nav ml-auto mr-5'>
            {this.state.menu.map(
              menu => {
                return (
                  <li key={menu.id} className='nav-item mx-3'>
                    <Link to={menu.url} className='nav-link  font-weight-bold'
                     style={{color:"#F47B3A"}}>
                      {menu.Text}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </nav>
    )
  }
}
