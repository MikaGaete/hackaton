import {useLocation} from "react-router-dom";
import {PhaseTable} from "../components/PhaseTable.jsx";

export const Bracket = () => {
    const {data} = useLocation().state;

    return (
        <div className={'w-screen min-h-screen bg-[#292929] flex flex-col items-center gap-12 p-8'}>
            <h1 className={'open-sans-bold text-4xl text-white'}>Random Generated Bracket</h1>
            <div className={'w-[80%] flex flex-col items-center gap-4'}>
                {data.map((phase) => <PhaseTable key={phase.id} {...phase}/>)}
            </div>
        </div>
    )
}