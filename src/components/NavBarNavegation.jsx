import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const NavBarNavegation = () => {
  const userLocalStorage = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()

  const handleExit = () => {
    navigate('/signin')
    localStorage.clear()
  }

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Nav.Link as={Link} to={'/'} className='fw-bold'>Home</Nav.Link>
          </Navbar.Brand>

          <Nav className="me-auto">
            {userLocalStorage ?
              <>
                <Nav.Link as={Link} to={'/cartoes'}>Cartões</Nav.Link>
                <Nav.Link as={Link} to={'/transacoes'}>Transações</Nav.Link>
                <Nav.Link as={Link} to={'/categorias'} disabled>Categorias</Nav.Link>
              </>
              :
              null
            }
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {userLocalStorage ?
                <Button variant='link' onClick={handleExit}>Sair</Button>
                :
                <Nav.Link as={Link} to={'/signin'}>Login</Nav.Link>
              }
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarNavegation;
