import {Link, useLocation} from "react-router-dom";
import {Bracket, Seed, SeedItem, SeedTeam} from "react-brackets";
import {Divider} from "@nextui-org/react";
import axios from "axios";

export const BracketPage = () => {
    const {data, original, pulse} = useLocation().state;

    const customSeed = ({seed}) => (
        <Seed>
            <SeedItem >
                <div className={'bg-[#FFB140] rounded-lg text-black w-[12vw] h-[12vh] flex flex-col justify-between text-medium'}>
                    <div className={'h-full flex flex-col justify-center'}>
                        <SeedTeam>{seed.teams[0]?.name || 'NO TEAM '}</SeedTeam>
                    </div>
                    <Divider />
                    <div className={'h-full flex flex-col justify-center'}>
                        <SeedTeam>{seed.teams[1]?.name || 'NO TEAM '}</SeedTeam>
                    </div>
                </div>
            </SeedItem>
        </Seed>
    );

    const handleVerify = async (event) => {
        event.preventDefault();

        try {
            const {data} = await axios.post('http://127.0.0.1:5000/verify', {pindex: pulse, lteams: original}, {});
            const {response} = data;

            alert(response);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={'w-screen min-h-screen bg-[#292929] flex flex-col items-center gap-12 p-8'}>
            <h1 className={'open-sans-bold text-4xl text-white'}>Random Generated Bracket</h1>
            <p className={'open-sans-light text-2xl text-white text-center w-[50%]'}>Your desired bracket has been generated successfully!</p>
            <div className={'w-[90%] flex flex-col items-center gap-4'}>
                <Bracket rounds={data} renderSeedComponent={customSeed} roundTitleComponent={(title) => <div className={'text-center text-white text-xl'}>{title}</div>}/>
            </div>
            <div className={'flex flex-col items-center w-full'}>
                <p className={'open-sans-light text-2xl text-white text-center w-[50%]'}>This bracket was generated with the following index to ensure randomness: </p>
                <p className={'open-sans-light text-2xl text-warning text-center w-[50%] cursor-pointer'} onClick={handleVerify}>{pulse}</p>
                <Link to={'/learn'} className={'open-sans-light text-2xl text-warning text-center w-[50%]'}>Here you can learn more</Link>
            </div>
        </div>
)
}