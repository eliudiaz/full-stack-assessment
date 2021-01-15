import React from 'react';
import {connect} from "react-redux";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {Card, Form, FormControl, ListGroup, Navbar} from 'react-bootstrap';
import {testWord} from "./redux/Words/words.actions";

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            words: [],
            word: ""
        }
    }

    wordInputChange(event) {
        const {name, value} = event.target;
        this.setState({word: value})
    };

    addWord() {
        const {words, word} = this.state;
        words.push(this.state.word);
        this.setState(words);
        this.props.testWord(word);
    };

    render() {
        const {words, testing} = this.props;

        return <>
            <Navbar bg="dark" expand="lg">
                <Form inline>

                    <FormControl type="text" placeholder="Word" value={this.state.word} className="mr-ms-2"
                                 onChange={this.wordInputChange.bind(this)}/>
                    <Button variant={"outline-success"} onClick={this.addWord.bind(this)}>Send</Button>
                </Form>
            </Navbar>
            <Container className="p-3">
                <Card style={{width: '50%'}}>
                    <Card.Body>
                        <Card.Title>Results: ({testing}) </Card.Title>
                        <ListGroup>
                            {
                               words && words.length > 0 ?
                                    words.map((w, i) => <ListGroup.Item key={i}>{w}</ListGroup.Item>)
                                    : <ListGroup.Item key={0}>No results yet!</ListGroup.Item>
                            }
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Container>
        </>
    }
};


const mapStateToProps = state => {
    return {testing: state.testing, result: state.result, error: state.error}
};

export default connect(mapStateToProps, {
    testWord
})(App);
