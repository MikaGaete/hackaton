import {BracketForm} from "../components/BracketForm.jsx";

export const Landing = () => {
    return (
        <div className={'w-screen min-h-screen bg-[#292929] flex flex-col items-center gap-12 p-8'}>
            <h1 className={'open-sans-bold text-4xl text-white'}>Random Bracket Generator UChile</h1>
            <p className={'open-sans-light text-2xl text-white text-center w-[50%]'}>In this page you will be able to generate a tournament bracket given a certain amount of teams, in order to do so you just need to write the name of each team separated by a line break (in english, just hit enter 😉) and then you only have to click the &quot;Generate Bracket&quot; button.</p>
            <BracketForm/>
        </div>
    )
}