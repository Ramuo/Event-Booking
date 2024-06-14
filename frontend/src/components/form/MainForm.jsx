import { useState } from "react";
import General from "./General";
import Location from "./Location";
import Media from "./Media";
import Tickets from "./Tickets";
import { Steps } from "antd";



const MainForm = () => {
    const [currentStep, setCurrentStep] = useState(0)
    const stepsData=[
        {
            name: "General",
            component: <General/>
        },
        {
            name: "Location",
            component: <Location/>
        },
        {
            name: "Media",
            component: <Media/>
        },
        {
            name: "Tickets",
            component: <Tickets/>
        },
    ];

    return (
        <div>
            <Steps
            current={currentStep}
            onChange={(step) => setCurrentStep(step)}
            >
                {stepsData.map((step, index) => (
                    <Steps.Step key={index} title={step.name}/>
                ))}
            </Steps>
            <div className="mt-5">{stepsData[currentStep].component}</div>
        </div>
    )
}

export default MainForm