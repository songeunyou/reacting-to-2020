import React, {useEffect, useState} from 'react';
import {ReactComponent as Corona} from '../svg/coronavirus.svg';
import {ReactComponent as World} from '../svg/world-map.svg';
import {ReactComponent as Bacteria} from '../svg/bacteria.svg';

interface CoronaVisualProps {
    id: number
}

function CoronaVisual({id}: CoronaVisualProps) {
    const [isMutated, setIsMutated] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMutated(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, [])

    switch(id) {
        case 1:
            return (
                <div>
                    <World style={{transform: "scale(0.9)  translateY(50px)", bottom: "-20px"}}/>
                    <Corona className="corona" style={{position:"absolute", marginLeft:"-400px"}}/>
                </div>
            )
        case 2:
            return (
                <div>
                    <World style={{transform: "scale(0.9) translateY(50px)" }}/>
                    <Corona className="corona" style={{top:"80px", marginLeft:"-340px"}}/>
                    <Corona className="corona" style={{top:"-30px", marginLeft:"-340px"}}/>
                    <Corona className="corona" style={{marginLeft:"-380px"}}/>
                    <Corona className="corona" style={{top:"-10px", marginLeft:"-400px"}}/>

                    <Corona className="corona" style={{marginLeft:"-420px"}}/>
                    <Corona className="corona" style={{top:"50px", marginLeft:"-450px"}}/>

                    <Corona className="corona" style={{top:"70px", marginLeft:"-530px"}}/>
                    <Corona className="corona" style={{top:"-30px", marginLeft:"-510px"}}/>

                    <Corona className="corona" style={{top:"10px", marginLeft:"-580px"}}/>
                </div>
            )
        case 3:
            if (isMutated) {
                return <Bacteria className="coronamutate" style={{top:"100px"}}/>;

            } else {
                return (
                    <Corona className="coronamutate" style={{top:"100px"}}/>
                )
            }
        default:
            return (
                <World className="world"/>
            )
    }
}

export default CoronaVisual;
