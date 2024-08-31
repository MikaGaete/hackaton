import {Card, CardBody, CardHeader} from "@nextui-org/react";
import PropTypes from "prop-types";
import {MatchCard} from "./MatchCard.jsx";

export const PhaseTable = ({id, matches}) => {
    return (
        <Card className={'w-full bg-[#B5DEAD]'}>
            <CardHeader>
                <h1 className={'open-sans-bold text-xl'}>Phase: {id}</h1>
            </CardHeader>
            <CardBody>
                <div className={'grid grid-cols-2 gap-4'}>
                    {matches.map((match) => <MatchCard key={match.id} {...match}/>)}
                </div>
            </CardBody>
        </Card>
    )
}

PhaseTable.propTypes = {
    id: PropTypes.string.isRequired,
    matches: PropTypes.array.isRequired
}