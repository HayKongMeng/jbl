"use client";
import React from 'react'
import Link from 'next/link'
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const options = {
    items:1,
    margin: 20,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true, 
    autoplayTimeout: 3000,
};

export default function MainSlide() {
    return (
        <>
            <div className="row_main_slide">
                <div className="main_slide">
                    <OwlCarousel className="owl-theme" loop {...options}>
                        <div className="item">
                            <div className="item__content">
                                <Link className="slide_link" href="https://jblthailand.com/collections/partybox-speakers">
                                    <img className="slide_item" src="https://ucarecdn.com/3f0103a3-80f2-4c9e-bb72-b9d3196ddd50/-/format/auto/-/preview/3000x3000/-/quality/lighter/JBL%20TH%20Talk%20&%20MIC%2002%20_1400x680.jpg" alt="Image 1" />
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__content">
                                <Link className="slide_link" href="https://jblthailand.com/collections/partybox-speakers">
                                    <img className="slide_item" src="https://ucarecdn.com/83dfffc0-6a5c-4019-9577-044706ac6d4a/-/format/auto/-/preview/3000x3000/-/quality/lighter/JBL%20TH%20Talk%20&%20MIC_1400x680.jpg" alt="Image 1" />
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__content">
                                <Link className="slide_link" href="https://jblthailand.com/collections/partybox-speakers">
                                    <img className="slide_item" src="https://ucarecdn.com/12165a76-c752-4e91-9993-ce498e49765c/-/format/auto/-/preview/3000x3000/-/quality/lighter/JBL%20TH_1400x680.jpg" alt="Image 1" />
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__content">
                                <Link className="slide_link" href="https://jblthailand.com/collections/partybox-speakers">
                                    <img className="slide_item" src="https://ucarecdn.com/99c80b1d-e747-4248-936b-fc4c71abc537/-/format/auto/-/preview/3000x3000/-/quality/lighter/2023A0708%20AW%20New%20Product%20Livegen3_1400x680.jpg" alt="Image 1" />
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__content">
                                <Link className="slide_link" href="https://jblthailand.com/collections/partybox-speakers">
                                    <img className="slide_item" src="https://ucarecdn.com/b3cec64e-8887-4f5f-8924-e4f363424f3e/-/format/auto/-/preview/3000x3000/-/quality/lighter/Partybox%20CLUB%20120_1400x680.jpg" alt="Image 1" />
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__content">
                                <Link className="slide_link" href="https://jblthailand.com/collections/partybox-speakers">
                                    <img className="slide_item" src="https://ucarecdn.com/b3cec64e-8887-4f5f-8924-e4f363424f3e/-/format/auto/-/preview/3000x3000/-/quality/lighter/Partybox%20CLUB%20120_1400x680.jpg" alt="Image 1" />
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__content">
                                <Link className="slide_link" href="https://jblthailand.com/collections/partybox-speakers">
                                    <img className="slide_item" src="https://ucarecdn.com/36a7a4a9-2a75-4af9-af49-6037e4a1f44e/-/format/auto/-/preview/3000x3000/-/quality/lighter/Partybox%20Stage%20320_1400x680.jpg" alt="Image 1" />
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__content">
                                <Link className="slide_link" href="https://jblthailand.com/collections/partybox-speakers">
                                    <img className="slide_item" src="https://ucarecdn.com/a4da8a9f-b94b-42a3-acfe-93d2de17927b/-/format/auto/-/preview/3000x3000/-/quality/lighter/JBLTH_Partybox%20Wireless%20Mic_1400x680.jpg" alt="Image 1" />
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__content">
                                <Link className="slide_link" href="https://jblthailand.com/collections/partybox-speakers">
                                    <img className="slide_item" src="https://ucarecdn.com/a4da8a9f-b94b-42a3-acfe-93d2de17927b/-/format/auto/-/preview/3000x3000/-/quality/lighter/JBLTH_Partybox%20Wireless%20Mic_1400x680.jpg" alt="Image 1" />
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__content">
                                <Link className="slide_link" href="https://jblthailand.com/collections/partybox-speakers">
                                    <img className="slide_item" src="https://ucarecdn.com/39e6b98b-c569-4117-bb87-20ded78d7724/-/format/auto/-/preview/3000x3000/-/quality/lighter/Partybox%20On%20The%20Go_1400x680.jpg" alt="Image 1" />
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item__content">
                                <Link className="slide_link" href="https://jblthailand.com/collections/partybox-speakers">
                                    <img className="slide_item" src="https://ucarecdn.com/c279cc2b-72cc-4e7b-9847-653f579463bc/-/format/auto/-/preview/3000x3000/-/quality/lighter/Banner-Makes-Earbuds-2.jpeg" alt="Image 1" />
                                </Link>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}