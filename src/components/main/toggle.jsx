import React, { useState } from 'react';
import tog from '../../assets/styles/components/main/toggle.module.scss'


const ToggleSlider = () => {
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