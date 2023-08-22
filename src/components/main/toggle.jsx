import React, { useState } from 'react';


const ToggleSlider = ({tog}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className={tog.toggle_label}>
            <input type="checkbox" className={tog.toggle_input} checked={isChecked} onChange={handleToggle} />
            <span className={tog.toggle_slider}></span>
        </label>
    );
};

export default ToggleSlider;