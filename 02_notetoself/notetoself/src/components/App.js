import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import Note from "./Note";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

const cookie_key = "NOTES";

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: "",
      notes: []
    };
  }

  componentDidMount() {
    //    const notes = read_cookie(cookie_key);
    //    this.setState({ notes }) ** These twon lines are equivolent to the line below:
    this.setState({ notes: read_cookie(cookie_key) });
  }

  submit() {
    // const notes = this.state.notes; ** This is functionally equivalent to the destructuring syntax below.
    const { notes, text } = this.state;
    // const newNote = { text: this.state.text }; ** Using the same logic we now have access to 2 constants: One called 'notes' and one called 'text' both containing the data contained in the variables destructured from 'state'
    // const newNote = { text }; ** There is no need to create a new constant to hold the 'text' value. Since 'text' is already a constant which has been destructured from state, we can directly input the 'text' constant into the push.
    // notes.push(newNote); ** this is the way using the 'newNote' constant as a store.
    notes.push({ text });
    this.setState({ notes });
    bake_cookie(cookie_key, this.state.notes);
  }

  clear() {
    delete_cookie(cookie_key);
    this.setState({ notes: [] });
  }

  render() {
    return (
      <div>
        <h2>Note To Self</h2>
        <Form inline>
          <FormControl
            onChange={event =>
              this.setState({
                text: event.target.value
              })}
          />{" "}
          <Button onClick={() => this.submit()}>Submit</Button>
        </Form>
        <div>{this.state.text}</div>
        {this.state.notes.map((note, index) => {
          return <Note key={index} note={note} />;
        })}
        <hr />
        <Button onClick={() => this.clear()}>Clear Notes</Button>
      </div>
    );
  }
}

export default App;
