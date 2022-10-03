import React, {useContext} from 'react';
import {Context} from "../index";
import {Nav, Navbar, Button, Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";

const NavBar =observer( () => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut= () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink style={{color:'gold',textDecoration: 'none', fontFamily: 'sans serif' }} to={SHOP_ROUTE}><h1>GOOD DEVICE</h1></NavLink>
            {user.isAuth ?
                <Nav className="ml-auto" style={{color:'cyan'}} >
                    <Button
                        variant={"outline-light"}
                        onClick={()=> history.push(ADMIN_ROUTE)} >
                        Админ панел
                    </Button>
                    <Button
                        variant={"outline-light"}
                        onClick={()=> logOut()}
                        className="ml-2" >
                        Выйти
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color:'cyan'}} >
                    <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)} > Авторизация</Button>
                </Nav>

            }

            </Container>
        </Navbar>
    );
})

export default NavBar;