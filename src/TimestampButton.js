import React from 'react';

function TimestampButton(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <button type="submit">Click Here</button>
            </form>
        </div>
    );
}

export default TimestampButton;