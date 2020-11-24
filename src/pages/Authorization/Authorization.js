import React, { useContext } from 'react';

import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { routes, routesMap } from '@/router';

import storesContext from '@/contexts/stores';
import { observer } from 'mobx-react';

import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from './styles.module.css';

function Auth(){
    let { auth: authStore } = useContext(storesContext);
    let { incData, changeIncData, checkAuth, authValid, authError } = authStore;

    return <div className={!authValid ? styles.show__auth : styles.hide__auth}>
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center mt-3">Добро пожаловать в корпоративную сеть!</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} className="ml-auto mr-auto mt-5">
                        <Form>
                            <Form.Group key="login">
                                <Form.Label>Логин</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={ incData.login }
                                    onChange={(e) => changeIncData('login', e.target.value.trim())}
                            />
                            </Form.Group>
                            <Form.Group key="password">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={ incData.password }
                                    onChange={(e) => changeIncData('password', e.target.value.trim())}
                            />
                            </Form.Group>
                        </Form>
                        <p className="text-danger">{ authError && 'Логин или пароль указаны не верно'}</p>
                        <Button variant="primary" className="mt-3" onClick={checkAuth}>
                            {authValid
                             ? <Redirect to={routesMap.work}/>
                             : null}
                            Войти
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>

}

export default observer(Auth);




