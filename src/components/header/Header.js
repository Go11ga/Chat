import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { routes, routesMap } from '@/router';

import { observer } from 'mobx-react';
import storesContext from '@/contexts/stores';

import IdStat from '@/components/idstat';

import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './styles.module.css';

export default observer(function(){
    let { auth: authStore } = useContext(storesContext);
    let { authValid, logOut } = authStore;

    return <header className="mb-3">
                <Container>
                    <Row className={styles.header__box}>
                        <Col className="align-self-center col-1">
                            <div>
                                <Button variant="outline-primary">
                                    <Link to={routesMap.work}>Работа</Link>
                                </Button>
                            </div>
                        </Col>
                        <Col className="align-self-center col-1 ml-2">
                            <div>
                                <Button variant="outline-primary" to={routesMap.chat}>
                                    <Link to={routesMap.chat}>Общение</Link>
                                </Button>
                            </div>
                        </Col>
                        <Col className="align-self-center col-4 ml-auto">
                            <div>
                                <IdStat/>
                            </div>
                        </Col>
                        <Col className="align-self-center col-1 ml-auto">
                            <div>
                                <Link onClick={logOut} to={routesMap.authorization}>Выйти</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
});
