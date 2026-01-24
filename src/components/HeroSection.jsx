import HeaderSection from "./HeaderSection.jsx";
import HeroBannerSection from "./HeroBannerSection.jsx";

const HeroSection = () => {
    return (
        <div className={"max-w-277.5 mx-auto flex flex-col gap-16 sm:gap-20 mt-12.5 p-4 sm:p-8 md:p-0"}>
            <HeaderSection/>
            <HeroBannerSection/>
        </div>
    );
};

export default HeroSection;