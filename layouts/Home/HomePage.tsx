import { Carousel } from "./components/Carousel";
import { Intro } from "./components/Intro";
import { Services } from "./components/Services";
import { ViewProducts } from "./components/ViewProducts";

export const HomePage = () => {
    return (
        <> {/*Return as a single element, not exactly a div */}
            <ViewProducts />
            <Carousel />
            <Intro />
            <Services />
        </>

    );
 
}