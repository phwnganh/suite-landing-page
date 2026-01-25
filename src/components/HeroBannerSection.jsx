import PatternCurveLine1 from '../assets/pattern-curved-line-1.svg'
import CustomButton from "./ui/CustomButton.jsx";
import HeroPotraitImg from '../assets/image-hero-portrait.png'
import HeroPotraitMobile from '../assets/image-hero-landscape.png'
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
        <section className={"flex flex-col md:flex-row gap-16 sm:gap-20 w-full items-center relative"}>

                <img src={PatternCurveLine1} alt={"pattern-curve-line-1"} className={"sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-10 z-30"} />

                <div className={"flex flex-col gap-10 sm:gap-12 md:gap-16 max-w-158.75 sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2 z-20"}>
                    <div className={"flex flex-col gap-10"}>
                        <h1 className={"text-preset-1-mobile leading-preset-1 tracking-preset-1 sm:text-preset-1-tablet md:text-preset-1 text-neutral-900"}>A <span className={"font-bold"}>super solution</span> for your <span className={"font-bold"}>business.</span></h1>
                        <p className={"text-neutral-500 text-preset-5 leading-preset-5 tracking-preset-5"}>Our marketing and sales automations help you scale your outreach to get more leads for your company. </p>
                    </div>
                    <CustomButton className={"text-neutral-0 border-neutral-900 bg-neutral-900 w-58 hover:bg-[linear-gradient(135deg,#A060FF_0%,#CB30E3_49.21%,#FFA84E_100%)] hover:border-light-gradient focus:bg-neutral-900 focus:outline-none focus:shadow-[inset_0_0_0_3px_#FAF8F6,inset_0_0_0_6px_#172339]"}>Request Beta Access</CustomButton>
                </div>

                <img src={HeroPotraitImg} alt={"hero-portrait-img"} className={"relative z-10 ml-auto hidden sm:block"}/>
                <img src={HeroPotraitMobile} alt={"hero-potrait-mobile"} className={"block sm:hidden w-full"}/>


                <div className={"flex flex-col sm:flex-row md:flex-col gap-16"}>
                        {HERO_BANNER_STATISTICS.map(item => (
                            <div className={"flex flex-col gap-1"} key={item.key}>
                                <h1 className={"text-neutral-900 text-preset-2 font-bold tracking-preset-2 leading-preset-2"}>{item.title}</h1>
                                <p className={"uppercase text-neutral-500 text-preset-7 leading-preset-7 tracking-preset-7"}>{item.description}</p></div>
                        ))}

                </div>

        </section>
    );
};

export default HeroBannerSection;