import { useEffect } from "react";
import Navigation from "../components/navigation";
import { useAppSelector } from "../store/hooks";

const Home: React.FC = () => {
    const user = useAppSelector(state => state.user);

    return (
        <main>
            <Navigation />

            <section className="row row-hcenter">
                <div className="col-auto mt-8">
                    <div className="card card--primary">

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;