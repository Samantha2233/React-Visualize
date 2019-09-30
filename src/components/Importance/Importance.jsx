import React from 'react';

const Importance = (props) => (
    <div className='component input' >
        <label>
            <span>Importance:</span>
            <select name="importance" value={props.importance}>
                <option value="1">1 - Red</option>
                <option value="2">2 - Orange</option>
                <option value="3">3 - Yellow</option>
            </select>
        </label>
    </div>
)

export default Importance;