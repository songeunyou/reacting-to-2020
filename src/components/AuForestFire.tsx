import React from 'react';
import Fire from '../components/Fire';
import { ReactComponent as Sailboat } from '../svg/sailboat.svg';
import { ReactComponent as Australia } from '../svg/australia.svg';
import { ReactComponent as Park } from '../svg/national-park.svg';

interface AuForestFireProps {
    id: number
}


function AuForestFire({id}: AuForestFireProps) {
    switch(id) {
        case 1:
            return (
                <div>
                    <h1 className="wollemi-welcome appear">Welcome to Wollemi National Park</h1>
                    <Park className="protester" style={{position: "relative", bottom: "40px"}}/>
                </div>
            )
        case 2:
            return (
                <div>
                    <Australia style={{position: "relative", transform: "scale(0.6)", bottom: "-20px"}}/>
                    <Fire style={{top: "380px", marginLeft: "430px"}}/>
                </div>
            )
        case 3:
            return (
                <div>
                    <Australia style={{position: "relative", transform: "scale(0.6)", bottom: "-20px"}}/>
                    <Fire style={{top: "380px", marginLeft: "430px"}}/>
                    <Fire style={{top: "280px", marginLeft: "430px"}}/>
                    <Fire style={{top: "230px", marginLeft: "310px"}}/>
                    <Fire style={{top: "330px", marginLeft: "310px"}}/>
                    <Fire style={{top: "360px", marginLeft: "190px"}}/>
                    <Fire style={{top: "270px", marginLeft: "190px"}}/>
                </div>
            )
        case 4:
            return (
                <div>
                    <Australia style={{position: "relative", transform: "scale(0.6)", bottom: "-20px"}}/>
                    <Fire style={{top: "380px", marginLeft: "430px"}}/>
                    <Fire style={{top: "280px", marginLeft: "430px"}}/>
                    <Fire style={{top: "230px", marginLeft: "310px"}}/>
                    <Fire style={{top: "330px", marginLeft: "310px"}}/>
                    <Fire style={{top: "360px", marginLeft: "190px"}}/>
                    <Fire style={{top: "270px", marginLeft: "190px"}}/>
                    <Sailboat className="boat" style={{position: "absolute", top: "200px", marginLeft: "-800px"}}/>
                </div>
            )
        case 5:
            return (
                <div>
                    <Australia style={{position: "relative", transform: "scale(0.6)", bottom: "-20px"}}/>
                    <Fire style={{top: "380px", marginLeft: "460px"}}/>
                    <Fire style={{top: "280px", marginLeft: "460px"}}/>
                    <Fire style={{top: "230px", marginLeft: "340px"}}/>
                    <Fire style={{top: "330px", marginLeft: "340px"}}/>
                    <Fire style={{top: "360px", marginLeft: "220px"}}/>
                    <Fire style={{top: "270px", marginLeft: "220px"}}/>
                    <Sailboat className="boat" style={{position: "absolute", top: "200px", marginLeft: "-800px"}}/>
                </div>
            )
        default:
            return (
                <Australia style={{position: "relative", transform: "scale(0.6)", bottom: "30px"}}/>
            )
    }
}

export default AuForestFire;
