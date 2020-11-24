import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes, routesMap } from '@/router';

import userSettingContext from '@/contexts/userSettings';
import { observer } from 'mobx-react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import '@/styles/styles.css';

class App extends React.Component{
    render(){
        return <BrowserRouter>
            <Container>
                <Row>
                    <Col className="col-10 ml-auto mr-auto">
                        <Switch>
                            { routes.map(route => (
                            <Route
                                key={route.path}
                                path={route.path}
                                component={route.component}
                                exact={'exact' in route ? route.exact : true}
                            /> ))}
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    }
}
export default observer(App);
