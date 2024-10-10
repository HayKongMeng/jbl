import React from 'react';
import CollectionProduct from '@/app/components/CollectionProduct';
import SubscriptionSection from '@/app/components/Subscription';
import Banner from '@/app/components/Banner';
import { Accessorie } from '@/app/data/Accessorie';


export default function Accessories() {
    return (
        <>
        <Banner title="Accessories" subTitle="" classBg="im__009"/>
        <CollectionProduct collectionUrl={Accessorie}/>
            <SubscriptionSection/>
        </>
    );
}

