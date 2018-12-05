import React from 'react';

function TimestampButton(props) {
    return (
        <div>
            {/* <button onClick={props.onClick}>Click Me for Timestamp</button> */}
            <form>
                <button type="submit" onClick={props.onClick}></button>
                <input></input>
            </form>
        </div>
    );
}

export default TimestampButton;