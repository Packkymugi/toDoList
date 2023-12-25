import React from "react";

function Welcome(props) {
    //return <h1>Welcome~~</h1>;
    return (
        <div>
            <h2>Welcome {props.name}</h2>
        </div>
    );
}

//const Welcome3 = () => <h2>Welcome 5 </h2>
/*
class Welcome extends React.Component {
    render() {
        return (
            <>
                <h2> Welcome from class{this.props.name} weight is {this.props.weight}</h2>
                <button>+</button>
            </>
        );
    }
}

export default Welcome;
*/
