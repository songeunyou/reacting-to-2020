import React from 'react';
import { ReactComponent as USA } from '../svg/united-states-of-america.svg';
import { ReactComponent as Fist } from '../svg/fist.svg';
import { ReactComponent as Protester } from '../svg/protester.svg';
import { ReactComponent as Noise } from '../svg/noise.svg';
import { ReactComponent as PicketSign } from '../svg/black-lives-matter.svg';


interface BLMVisualProps {
    id: number
}

function BLMVisual({id}: BLMVisualProps) {
    switch(id) {
        case 1:
            return (
                <div className="appear">
                    <Protester className="protester" style={{position:"relative", top:"40px"}}/>
                </div>
            )
        case 2:
            return (
                <div>
                <USA style={{transform:"scale(0.8)", position:"relative", top:"160px"}}/>
                <Noise className="noise" style={{position:"absolute", marginLeft:"-660px"}}/>
                <Noise className="noise" style={{position:"absolute", top:"100px", marginLeft:"-600px"}}/>

                <Noise className="noise" style={{position:"absolute", top:"50px", marginLeft:"-480px"}}/>
                <Noise className="noise" style={{position:"absolute", top:"200px", marginLeft:"-520px"}}/>

                <Noise className="noise" style={{position:"absolute", top:"50px", marginLeft:"-350px"}}/>
                <Noise className="noise" style={{position:"absolute", top:"160px", marginLeft:"-370px"}}/>
                </div>
            )
        case 3:
            return (
                <div>
                    <USA style={{position:"relative", top:"160px"}}/>
                    <Fist className="fist" style={{position:"absolute", marginLeft:"-700px"}}/>
                    <PicketSign className="sign" style={{position:"absolute", top:"-15px", marginLeft:"-700px"}}/>
                    <PicketSign className="sign" style={{position:"absolute", top:"150px", marginLeft:"-680px"}}/>

                    <Fist className="fist" style={{position:"absolute", top:"-10px", marginLeft:"-600px"}}/>
                    <PicketSign className="sign" style={{position:"absolute", top:"70px", marginLeft:"-600px"}}/>

                    <Fist className="fist" style={{position:"absolute", top:"200px", marginLeft:"-520px"}}/>
                    <Fist className="fist" style={{position:"absolute", marginLeft:"-480px"}}/>
                    <PicketSign className="sign" style={{position:"absolute", top:"-15px", marginLeft:"-430px"}}/>
                    <PicketSign className="sign" style={{position:"absolute", top:"150px", marginLeft:"-430px"}}/>

                    <PicketSign className="sign" style={{position:"absolute", top:"150px", marginLeft:"-430px"}}/>
                    <Fist className="fist" style={{position:"absolute", top:"50px", marginLeft:"-320px"}}/>
                    <Fist className="fist" style={{position:"absolute", top:"180px", marginLeft:"-340px"}}/>
                    <PicketSign className="sign" style={{position:"absolute", top:"-15px", marginLeft:"-290px"}}/>
                </div>
            )
        default:
            return (
                <div>
                    <USA style={{position:"relative", top:"120px"}}/>
                </div>

            )
    }
}


export default BLMVisual;
