import React, {
    Component
} from 'react';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: initialMessage
        }
    }

    filter = (criteria) => {
        let updateList = this.state.data.filter((item) => {

        })
    }

    render() {
        return (<div>
                <h1> {
                    this.state.message
                } </h1>
            </div>
        );
    }
}

const initialMessage = 'testing shit';
const data = [
    '1',
    '2',
    '3'
];
export default App;