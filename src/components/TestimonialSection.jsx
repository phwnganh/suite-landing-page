import PatternCurvedLine2 from '../assets/pattern-curved-line-2.svg'
import JeremyLargeImg from '../assets/image-jeremy-large.png'

const TestimonialSection = () => {
    return (
        <section className={"mt-47.5 max-w-277.5 mx-auto"}>
            <div className={"bg-neutral-900 rounded-15 px-4 sm:py-16 sm:px-12 md:px-31.25 py-22 relative"}>
                <img src={JeremyLargeImg} alt={"jeremy-large"} className={"absolute bottom-0 z-0"}/>
                <img src={PatternCurvedLine2} alt={"pattern-curved-line2"} className={"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"}/>

                <div className={"flex items-center justify-end relative z-20 ml-115"}>
                    <div className={"flex flex-col gap-6 max-w-87.5 w-full"}>
                        <div className={"flex flex-col gap-8"}>
                            <p className={"text-neutral-0 text-preset-2"}>It just <span className={"text-preset-2-bold"}>works.</span></p>
                            <p className={"text-neutral-200 text-preset-3"}>“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”</p>
                        </div>
                        <div className={"flex flex-col"}>
                            <p className={"uppercase text-preset-4 text-neutral-0"}>jeremy robinson</p>
                            <p className={"uppercase text-neutral-200 text-preset-7"}>cmo, fylo</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default TestimonialSection;