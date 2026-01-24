import HeroSection from "./components/HeroSection.jsx";
import TestimonialSection from "./components/TestimonialSection.jsx";
import FooterSection from "./components/FooterSection.jsx";
const MainPage = () => {
    return (
        <main className={""}>
            <HeroSection/>
            <div className={"relative z-10 -mb-60"}>
                <TestimonialSection/>

            </div>
            <div className={""}>
                <FooterSection/>

            </div>

        </main>
    );
};

export default MainPage;