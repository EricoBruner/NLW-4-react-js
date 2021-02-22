import { useState } from 'react';

export function ExperienceBar() {
    const [ experience, setExperience ] = useState(0);

    function CreateCurrentExperience(value: number) {
        if (value > 0 && value < 600) {
            return <span className="current-experience" style={{ left: (experience*100)/600+"%"}}>{experience} xp</span>
        }
    };

    function addExperience() {
        setExperience(experience +30);
    };

    function removeExperience() {
        setExperience(experience -30);
    };

    return (
        <>
        <header className="experience-bar">
            <span>0 xp</span>
            <div>
                <div style={{ width: (experience*100)/600+"%" }} />
                {CreateCurrentExperience(experience)}
            </div>
            <span>600 xp</span>
        </header>   
        <div className="BTNs">
            <button className="BTN" type="button" onClick={removeExperience}>- 30</button>
            <button className="BTN" type="button" onClick={addExperience}>+ 30</button>
        </div>
        </>
    );
}