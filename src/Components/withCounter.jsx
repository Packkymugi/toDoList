import React from "react";

function withCounter(WrappedComponent) {

    class withCounter extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                count: 0,
            }

        }
        incrementCount = () => {
            this.setState({ count: this.state.count + 1 });
        }

        render() {
            console.log('Click Counter', this.props)
            return (
                <WrappedComponent {...this.props}
                    incrementCount = {this.incrementCount}
                    count = {this.state.count}>
                </WrappedComponent>
            );
        }
    }

    return withCounter;
}

export default withCounter;