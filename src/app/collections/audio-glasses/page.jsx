import React from 'react';
import SubscriptionSection from '@/app/components/Subscription';
import Banner from '@/app/components/Banner';
import Filter from '@/app/components/Filter';
import ProductRow from '@/app/components/ProductRow';
import { Accessorie } from '@/app/data/Accessorie';


export default function AudioHome() {
    const inEarHeadphones = Accessorie.find(item => item.title === "Audio Glasses");
    const products = inEarHeadphones?.productlist || [];
    return (
        <>
         <Banner title="Audio Glasses" subTitle="" classBg="im__008" />
         <div className="content">
                <div className="sq-app sq-p --grid-view">
                    <Filter/>
                    <ProductRow products={products}/>
                </div>
            </div>
            <SubscriptionSection/>
        </>
    );
}

