import React from 'react';
import FirstSection from "@/app/_components/MainPage/FirstSection/FirstSection";
import WhoWeAreSection from "@/app/_components/MainPage/WhoWeAreSection/WhoWeAreSection";
import EventsSection from "@/app/_components/MainPage/EventsSection/EventsSection";
import NewsSection from "@/app/_components/MainPage/NewsSection/NewsSection";
import FormSection from "@/app/_components/MainPage/FormSection/FormSection";

const Page = () => {
    return (
        <div>
            <FirstSection/>
            <WhoWeAreSection/>
            <EventsSection/>
            <NewsSection/>
            <FormSection/>
        </div>
    );
};

export default Page;