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
                    <World style={{transform: "scale(0.9)"}}/>
                    <Corona className="corona" style={{position:"absolute", marginLeft:"-400px"}}/>
                </div>
            )
        case 2:
            return (
                <div>
                    <World style={{transform: "scale(0.9)"}}/>
                    <Corona className="corona" style={{top:"160px", marginLeft:"-360px"}}/>
                    <Corona className="corona" style={{top:"15px", marginLeft:"-380px"}}/>
                    <Corona className="corona" style={{marginLeft:"-400px"}}/>
                    <Corona className="corona" style={{top:"40px", marginLeft:"-430px"}}/>

                    <Corona className="corona" style={{marginLeft:"-450px"}}/>
                    <Corona className="corona" style={{top:"50px", marginLeft:"-480px"}}/>

                    <Corona className="corona" style={{top:"130px", marginLeft:"-490px"}}/>
                    <Corona className="corona" style={{top:"100px", marginLeft:"-530px"}}/>
                    <Corona className="corona" style={{top:"10px", marginLeft:"-560px"}}/>

                    <Corona className="corona" style={{top:"150px", marginLeft:"-600px"}}/>
                    <Corona className="corona" style={{top:"70px", marginLeft:"-640px"}}/>
                    <Corona className="corona" style={{top:"30px", marginLeft:"-660px"}}/>
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