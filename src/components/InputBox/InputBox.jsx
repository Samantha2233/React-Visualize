import React from 'react';
import StringInput from '../StringInput/StringInput';
import Time from '../Time/Time';
import Importance from '../Importance/Importance';

const InputBox = (props) => (
    <div className="component new-task-input-box">
        < StringInput
            task={props.tasks}
        />
        < Time />
        < Importance importance={props.tasks[2]} />
    </div>
);

export default InputBox;