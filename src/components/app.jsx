import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import Todos from './todos'

class App extends React.Component {

    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <Todos/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App;