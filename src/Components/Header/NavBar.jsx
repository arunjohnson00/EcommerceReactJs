import React ,{useState,useRef} from 'react'
import { Container,Navbar,NavDropdown,Nav,Popover,Overlay} from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import Search from './Search';
import Cart from './Cart';
import CartCounter from './CartCounter';
import { useSelector } from 'react-redux';
 import {Link} from 'react-router-dom'

function NavBar() {

  const ProductValue=useSelector((proDetails)=>{
    return proDetails;
 
      });

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };


  return (
    <Navbar collapseOnSelect expand="lg" className='NavBar' variant="dark" fixed="top" >
    <Container>
    <Navbar.Brand ><Link to="/">OnCOM</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link > <Link to="/">Home</Link></Nav.Link>
        <Nav.Link> <Link to="/shop">Shop</Link></Nav.Link>
 <NavDropdown title="Category" id="collasible-nav-dropdown">

   {

[...new Set(ProductValue.productDetails.map((e)=>{return e.category}))].map((category)=>{return< NavDropdown.Item >
  
  {
 <Link to={`/${category}`} >{category.charAt(0).toUpperCase() + category.slice(1)}</Link> 
  
  }
  
  </NavDropdown.Item>})
   }
          
     
          <NavDropdown.Divider />
          <NavDropdown.Item >Separated link</NavDropdown.Item>
        
        </NavDropdown>
        <Search/>
      </Nav>
      <Nav>
        <Nav.Link >More deets</Nav.Link>
        
        


        <div ref={ref}>
     
      <Nav.Link  onClick={handleClick} className="d-flex">
       
       <FiShoppingCart/>
       <CartCounter/>
      
       </Nav.Link>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained" style={{minWidth:'350px'}}>
          <Popover.Header as="h3">Your Cart</Popover.Header>
          <Popover.Body>
          <Cart/>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar