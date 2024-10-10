import React from 'react';
import CollectionProduct from '@/app/components/CollectionProduct';
import SubscriptionSection from '@/app/components/Subscription';
import Banner from '@/app/components/Banner';
import ProductRow from '@/app/components/ProductRow';
import Filter from '@/app/components/Filter';
import { Headphones } from '@/app/data/Headphones';


export default function InEarHeadphones() {
    const inEarHeadphones = Headphones.find(item => item.title === "หูฟัง In-Ear");
    const products = inEarHeadphones?.productlist || [];
    return (
        <>
            <Banner title="ลำโพงบลูทูธพกพา" subTitle="ด้วยอายุแบตเตอรี่ที่ยาวนานและเทคโนโลยีบลูทูธ ลำโพงไร้สายพกพาจาก JBL จึงให้คุณ เพลิดเพลินไปกับเพลง ได้แม้อยู่ไกลบ้าน" classBg="im__005"/>
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

