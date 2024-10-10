import React from 'react';
import CollectionProduct from '@/app/components/CollectionProduct';
import SubscriptionSection from '@/app/components/Subscription';
import Banner from '@/app/components/Banner';
import ProductRow from '@/app/components/ProductRow';
import Filter from '@/app/components/Filter';
import { Headphones } from '@/app/data/Headphones';


export default function Sport() {
    const inEarHeadphones = Headphones.find(item => item.title === "หูฟัง Sport");
    const products = inEarHeadphones?.productlist || [];
    return (
        <>
        <Banner title="SPORT" subTitle="" classBg="im__006"/>
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

