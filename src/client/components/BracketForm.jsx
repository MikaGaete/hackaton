import {useState} from "react";
import axios from "axios";
import {Spinner} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";

export const BracketForm = () => {
    const [teams, setTeams] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        event.preventDefault();
        setTeams(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const {data} = await axios.post('http://127.0.0.1:5000/fixture', teams, {});
            const {pulse, original, fixture} = data;
            setLoading(false);

            navigate(`/brackets/:${crypto.randomUUID()}`, {state: { data: fixture, pulse, original }});
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={'w-[50%] h-full flex flex-col items-center gap-6'}>
            <textarea className={'w-full h-[50vh] bg-[#B5DEAD] p-5 rounded-lg open-sans-regular placeholder:text-gray-600 resize-none'} value={teams} onChange={handleChange} placeholder={'Team 1\nTeam 2\n...'}/>
            <button className={'w-full h-14 bg-[#809848] rounded-lg text-white open-sans-semibold flex justify-center items-center gap-4'} onClick={handleSubmit}>{loading && <Spinner color="default"/>}{loading ? "Generating Bracket..." : "Generate Bracket"} </button>
        </div>
    )
}