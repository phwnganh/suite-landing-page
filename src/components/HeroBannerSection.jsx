import PatternCurveLine1 from '../assets/pattern-curved-line-1.svg'
import CustomButton from "./ui/CustomButton.jsx";
import HeroPotraitImg from '../assets/image-hero-portrait.png'
const HeroBannerSection = () => {
    const HERO_BANNER_STATISTICS = [
        {
            key: 1,
            title: "2K+",
            description: "companies"
        },
        {
            key: 2,
            title: "8",
            description: "languages"
        },
        {
            key: 3,
            title: "1.2M",
            description: "leads"
        }
    ]
    return (
        <section className={"flex flex-col md:flex-row justify-between items-center"}>
            <div className={"relative flex items-center w-full pr-24"}>

                <img src={PatternCurveLine1} alt={"pattern-curve-line-1"} className={"absolute left-1/2 -translate-x-1/2 top-10 z-30"} />

                <div className={"flex flex-col gap-16 max-w-158.75 absolute left-0 top-1/2 -translate-y-1/2 z-20"}>
                    <div className={"flex flex-col gap-10"}>
                        <h1 className={"text-preset-1 text-neutral-900"}>A <span className={"text-preset-1-bold"}>super solution</span> for your <span className={"text-preset-1-bold"}>business.</span></h1>
                        <p className={"text-neutral-500 text-preset-5"}>Our marketing and sales automations help you scale your outreach to get more leads for your company. </p>
                    </div>
                    <CustomButton className={"text-neutral-0 border-neutral-900 bg-neutral-900 w-58"}>Request Beta Access</CustomButton>
                </div>

                <img src={HeroPotraitImg} alt={"hero-portrait-img"} className={"relative z-10 ml-auto"}/>


            </div>

                <div className={"flex flex-row md:flex-col gap-16"}>
                        {HERO_BANNER_STATISTICS.map(item => (
                            <div className={"flex flex-col gap-1"} key={item.key}>
                                <h1 className={"text-neutral-900 text-preset-2-bold"}>{item.title}</h1>
                                <p className={"uppercase text-neutral-500 text-preset-7"}>{item.description}</p></div>
                        ))}

                </div>

        </section>
    );
};

export default HeroBannerSection;