import React from 'react';

const StringInput = (props) => (
    <div className="component input">
        <label>
            <input
                name="skill"
                value={props.tasks}
                required
            />
        </label>
    </div>
);

export default StringInput;
