import React from 'react';
import ReactDOM from 'react-dom';
import myAlert from './myAlert';

const element = (
    <div>
        <myAlert show={true} color="red" text="Error Text" />
        <myAlert show={true} text="Alert Message Text" />
        <myAlert show={false} color="green" text="Alert Message Text" />
        <myAlert text="Alert Message Text" />
    </div>
);

ReactDOM.render(element, document.getElementById('root'));