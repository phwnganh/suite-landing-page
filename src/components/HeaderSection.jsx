import React from 'react';
import Logo from '../assets/logo.svg'
import CustomButton from "./ui/CustomButton.jsx";
const HeaderSection = () => {
    return (
        <section className={"flex justify-between items-center"}>
            <img src={Logo} alt={"logo"} />
            <CustomButton className={"text-neutral-900 border-neutral-900 hover:bg-neutral-900 hover:text-neutral-0"}>Request Beta Access</CustomButton>
        </section>
    );
};

export default HeaderSection;