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
                    <div className={"flex justify-center items-center cursor-pointer hover:opacity-50"}>
                        <img src={FacebookLogo} alt={"facebook-logo"} />
                    </div>
                    <div className={"flex justify-center items-center cursor-pointer hover:opacity-50"}>
                        <img src={TwitterLogo} alt={"twitter-logo"} />
                    </div>
                    <div className={"flex justify-center items-center cursor-pointer hover:opacity-50"}>
                        <img src={InstagramLogo} alt={"instagram-logo"} />
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default FooterSection;