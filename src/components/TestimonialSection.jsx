import PatternCurvedLine2 from '../assets/pattern-curved-line-2.svg'
import JeremyLargeImg from '../assets/image-jeremy-large.png'

const TestimonialSection = () => {
    return (
        <section className={"mt-47.5 max-w-277.5 mx-auto sm:px-8 md:px-0"}>
            <div className={"bg-neutral-900 rounded-15 px-4 sm:py-16 sm:px-12 md:px-31.25 py-22 relative z-10 flex flex-col items-center lg:block"}>
                <img src={JeremyLargeImg} alt={"jeremy-large"} className={"mx-auto -mt-32 lg:absolute lg:bottom-0 lg:mt-0"}/>
                <img src={PatternCurvedLine2} alt={"pattern-curved-line2"} className={"my-9 lg:my-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10"}/>

                <div className={"flex items-center justify-end relative z-20 lg:ml-115 text-center lg:text-left"}>
                    <div className={"flex flex-col gap-6 max-w-87.5 w-full"}>
                        <div className={"flex flex-col gap-8"}>
                            <p className={"text-neutral-0 text-preset-2 leading-preset-2 tracking-preset-2"}>It just <span className={"font-bold"}>works.</span></p>
                            <p className={"text-neutral-200 text-preset-3 leading-preset-3 tracking-preset-3"}>“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”</p>
                        </div>
                        <div className={"flex flex-col"}>
                            <p className={"uppercase text-preset-4 leading-preset-4 tracking-preset-4 text-neutral-0"}>jeremy robinson</p>
                            <p className={"uppercase text-neutral-200 text-preset-7 leading-preset-7 tracking-preset-7"}>cmo, fylo</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default TestimonialSection;