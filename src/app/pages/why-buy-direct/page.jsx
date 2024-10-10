import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
export default function page() {
    return (
        <>
            <div className={style.banner}>
                <div className={style.overlay}>
                    <h1>Why buy direct <br /> from JBLThailand.com?</h1>
                </div>
                <Image
                    src="https://www.jbl.com/on/demandware.static/-/Library-Sites-SharedLibrary-JB/default/dwc1322dd9/glp/why-buy-direct/images/visual-large.jpg"
                    alt="JBL Banner"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className={style.maindiv}>
                <div className='flex flex-wrap'>
                    <div className={style.container}>
                        <div className={style.icon}>
                            <Image
                                src="https://www.jbl.com/on/demandware.static/-/Library-Sites-SharedLibrary-JB/default/dwaea53257/glp/why-buy-direct/images/icon-1.png"
                                alt="Free Shipping Icon"
                                width={94.05}
                                height={94.05}
                            />
                        </div>
                        <div className={style.text}>
                            <h2>จัดส่งฟรี</h2>
                            <p>
                                จัดส่งฟรี ภายในประเทศ ดูรายละเอียดนโยบายการจัดส่งฉบับเต็มด้านล่าง
                            </p>
                            <a href="#" className={style.link}>
                                คลิกที่นี่เพื่อดูรายละเอียดนโยบายการจัดส่ง
                            </a>
                        </div>
                    </div>
                    <div className={style.container}>
                        <div className={style.icon}>
                            <Image
                                src="https://www.jbl.com/on/demandware.static/-/Library-Sites-SharedLibrary-JB/default/dw7f2d213f/glp/why-buy-direct/images/icon-5.png"
                                alt="Free Shipping Icon"
                                width={94.05}
                                height={94.05}
                            />
                        </div>
                        <div className={style.text}>
                            <h2>จัดส่งฟรี</h2>
                            <p>
                                จัดส่งฟรี ภายในประเทศ ดูรายละเอียดนโยบายการจัดส่งฉบับเต็มด้านล่าง
                            </p>

                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    <div className={style.container}>
                        <div className={style.icon}>
                            <Image
                                src="https://www.jbl.com/on/demandware.static/-/Library-Sites-SharedLibrary-JB/default/dw5321507a/glp/why-buy-direct/images/icon-2.png"
                                alt="Free Shipping Icon"
                                width={94.05}
                                height={94.05}
                            />
                        </div>
                        <div className={style.text}>
                            <h2>จัดส่งฟรี</h2>
                            <p>
                                จัดส่งฟรี ภายในประเทศ ดูรายละเอียดนโยบายการจัดส่งฉบับเต็มด้านล่าง
                            </p>

                        </div>
                    </div>
                    <div className={style.container}>
                        <div className={style.icon}>
                            <Image
                                src="https://www.jbl.com/on/demandware.static/-/Library-Sites-SharedLibrary-JB/default/dwdcd84729/glp/why-buy-direct/images/icon-6.png"
                                alt="Free Shipping Icon"
                                width={94.05}
                                height={94.05}
                            />
                        </div>
                        <div className={style.text}>
                            <h2>จัดส่งฟรี</h2>
                            <p>
                                จัดส่งฟรี ภายในประเทศ ดูรายละเอียดนโยบายการจัดส่งฉบับเต็มด้านล่าง
                            </p>

                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-start'>
                    <div className={style.container}>
                        <div className={style.icon}>
                            <Image
                                src="https://www.jbl.com/on/demandware.static/-/Library-Sites-SharedLibrary-JB/default/dw31f64a56/glp/why-buy-direct/images/icon-3.png"
                                alt="Free Shipping Icon"
                                width={94.05}
                                height={94.05}
                            />
                        </div>
                        <div className={style.text}>
                            <h2>จัดส่งฟรี</h2>
                            <p>
                                จัดส่งฟรี ภายในประเทศ ดูรายละเอียดนโยบายการจัดส่งฉบับเต็มด้านล่าง
                            </p>

                        </div>
                    </div>
                     <div className={style.container}>
                    </div>
                </div>
            </div>
        </>
    )
}
