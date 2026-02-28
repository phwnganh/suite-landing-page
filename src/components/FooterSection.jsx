import Logo from '../assets/logo.svg'
import FacebookLogo from '../assets/icon-facebook.svg'
import TwitterLogo from '../assets/icon-twitter.svg'
import InstagramLogo from '../assets/icon-instagram.svg'
const FooterSection = () => {
    return (
        <footer className={"bg-neutral-200 pt-80 pb-20 relative -mt-60 sm:px-8 md:px-0"}>
            <div className={"max-w-277.5 mx-auto flex flex-col sm:flex-row gap-8 sm:gap-0 justify-between items-center"}>
                <img src={Logo} alt={"logo"} />
                <p className={"text-neutral-500 text-preset-8 leading-preset-8 tracking-preset-8"}>Copyright - Suite</p>
                <div className={"flex items-center gap-8"}>
                    <button aria-label="Visit our Facebook page" className={"w-9 h-9 flex justify-center items-center cursor-pointer rounded-2 hover:opacity-50 focus:outline-none focus:shadow-[inset_0_0_0_3px_#F3EDE7,inset_0_0_0_6px_#172339]"}>
                        <img src={FacebookLogo} alt={"facebook-logo"} className={"w-5 h-5"}/>
                    </button>
                    <button aria-label="Visit our Twitter page" className={"w-9 h-9 flex justify-center items-center cursor-pointer rounded-2 hover:opacity-50 focus:outline-none focus:shadow-[inset_0_0_0_3px_#F3EDE7,inset_0_0_0_6px_#172339]"}>
                        <img src={TwitterLogo} alt={"twitter-logo"} className={"w-5 h-5"}/>
                    </button>
                    <button aria-label="Visit our Instagram page" className={"w-9 h-9 flex justify-center items-center cursor-pointer rounded-2 hover:opacity-50 focus:outline-none focus:shadow-[inset_0_0_0_3px_#F3EDE7,inset_0_0_0_6px_#172339]"}>
                        <img src={InstagramLogo} alt={"instagram-logo"} className={"w-5 h-5"}/>
                    </button>
                </div>
            </div>

        </footer>
    );
};

export default FooterSection;