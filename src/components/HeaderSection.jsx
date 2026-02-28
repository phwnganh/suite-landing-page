import React from 'react';
import Logo from '../assets/logo.svg'
import CustomButton from "./ui/CustomButton.jsx";
const HeaderSection = () => {
    return (
        <section className={"flex justify-between items-center"}>
            <img src={Logo} alt={"logo"} />
            <CustomButton ariaLabel={"Request Beta Access for Newsletter"} className={"text-neutral-900 border-neutral-900 hover:bg-neutral-900 hover:text-neutral-0 focus:outline-none focus:shadow-[inset_0_0_0_3px_#FAF8F6,inset_0_0_0_6px_#172339]"}>Request Beta Access</CustomButton>
        </section>
    );
};

export default HeaderSection;