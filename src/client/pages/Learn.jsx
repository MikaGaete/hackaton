import {Link} from "react-router-dom";

export const Learn = () => {
    return (
        <div className={'w-screen min-h-screen bg-[#292929] flex flex-col items-center gap-12 p-8'}>
            <h1 className={'open-sans-bold text-4xl text-white'}>How can I verify that the brackets were randomly generated?</h1>
            <div className={'w-[50%] open-sans-light text-2xl text-white text-center flex flex-col gap-8'}>
                <p>The pulse index that the application gives you can be used to verify that the
                    process
                    was truly random. This application uses a beacon of random values from random.uchile. A beacon is the source of random values that are used later to
                    generate the brackets.</p>
                <p>To verify that these brackets are truly random, you can input the pulse index
                    that
                    the application gives you along with the associated input and output, and the application will generate the same result each time, confirming that the
                    generated result matches the given output. Additionally, you can view the source code in the <Link className={'text-warning'} to={'https://github.com/MikaGaete/hackaton'}>GitHub repository</Link>.
                </p>
                <p>In concise terms, the algorithm uses the seed provided by random.uchile to decide
                    which teams are going to be placed first in the brackets and which will be placed later. It is quite similar to a lottery algorithm.</p>
                <p>When the number of teams is not a power of 2, some teams will automatically
                    advance
                    to the second phase.</p>
                <p>You can learn more about verifiable randomness <Link className={'text-warning'} to={'https://random.uchile.cl/about'}>here</Link>.</p>
            </div>
        </div>
    )
}