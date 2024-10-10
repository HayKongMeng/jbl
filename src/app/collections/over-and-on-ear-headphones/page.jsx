import React from 'react';
import CollectionProduct from '@/app/components/CollectionProduct';
import SubscriptionSection from '@/app/components/Subscription';
import Banner from '@/app/components/Banner';
import Filter from '@/app/components/Filter';
import ProductRow from '@/app/components/ProductRow';
import { Headphones } from '@/app/data/Headphones';


export default function OverAndOnEarHeadphones() {
    const products = Headphones[0].productlist;
    return (
        <>
            <Banner title="ลำโพงบลูทูธพกพา" subTitle="ด้วยอายุแบตเตอรี่ที่ยาวนานและเทคโนโลยีบลูทูธ ลำโพงไร้สายพกพาจาก JBL จึงให้คุณ เพลิดเพลินไปกับเพลง ได้แม้อยู่ไกลบ้าน" classBg="im__004"/>
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

