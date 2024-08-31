import {Card, CardBody, CardHeader} from "@nextui-org/react";
import PropTypes from "prop-types";

export const MatchCard = ({id, t0, t1}) => {
    return (
        <Card className={'bg-[#809848]'}>
            <CardHeader>
                <h1 className={'open-sans-semibold text-xl'}>{id}</h1>
            </CardHeader>
            <CardBody>
                <div className={'flex gap-2'}>
                    <Card className={'bg-[#292929] text-white'}>
                        <CardBody>{t0}</CardBody>
                    </Card>
                    <Card>
                        <CardBody>{t1}</CardBody>
                    </Card>
                </div>
            </CardBody>
        </Card>
    )
}

MatchCard.propTypes = {
    id: PropTypes.string.isRequired,
    t0: PropTypes.string.isRequired,
    t1: PropTypes.string.isRequired
}