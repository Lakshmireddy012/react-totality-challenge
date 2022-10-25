import { React } from 'react'

import './Home.css'

export default function Home() {
    return (
        <div>
            <div class="img-container">
                <img class="img-auto" src="/images/ipad.jpeg" alt="ipad"></img>
                <div class="img-centered-text text-dark">
                    <h1>iPad</h1>
                    <h3 role="presentation">Lovable. Drawable. Magical.</h3>
                    <p class="avail" aria-label="Available starting October twenty-sixth" role="text">Available starting 10.26</p>
                    <div class="cta-links">
                        <a class="icon icon-after icon-chevronright" href="/ipad-10.9/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="Learn more about iPad" aria-label="Learn more about iPad">Learn more</a>
                        <a class="icon icon-after icon-chevronright" href="/us/shop/goto/buy_ipad/ipad" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="Order iPad now" aria-label="Order iPad now">Order now</a>
                    </div>
                </div>
            </div>
            <div class="img-container">
                <img class="img-auto" src="/images/iphone14pro.jpeg" alt="iphone 14 pro"></img>
                <div class="iphone-text">
                    <h1 class="text-white headline">iPhone 14 Pro</h1>
                    <h3 class="text-white subhead" role="presentation">Pro. Beyond.</h3>

                    <div class="cta-links">
                        <a class="icon icon-after icon-chevronright" href="/iphone-14-pro/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="Learn more about iPhone 14 Pro" aria-label="Learn more about iPhone 14 Pro">Learn more</a>
                        <a class="icon icon-after icon-chevronright" href="/us/shop/goto/buy_iphone/iphone_14_pro" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="Buy iPhone 14 Pro" aria-label="Buy iPhone 14 Pro">Buy</a>
                    </div>
                </div>
            </div>
            <div class="img-container">
                <img class="img-auto" src="/images/apple-fitness.jpeg" alt="ipad"></img>
                <div class="iphone-text text-dark">
                <h1 class="logo-image logo-image-apple-fitness-plus-iphone-hero-logo-fitness-plus-iphone headline"><span class="visuallyhidden">Apple Fitness+</span></h1>
                            <h3 class="subhead" role="presentation">Fitness for everyone. Now&nbsp;all&nbsp;you&nbsp;need&nbsp;is&nbsp;iPhone.</h3>
                            <div class="cta-links">
                                <a class="icon icon-after icon-chevronright" href="/apple-fitness-plus/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="Learn more about Apple Fitness Plus" aria-label="Learn more about Apple Fitness Plus">Learn more</a>
                                <a href="https://fitness.apple.com/subscribe?itscg=10000&amp;itsct=fit-promo-hp_tile-apl-evg-201111" data-analytics-title="Try Apple Fitness plus free" data-rid-relay="{&quot;299&quot;:&quot;itsct&quot;}" data-analytics-exit-link="" data-analytics-region="learn more" aria-label="Try Apple Fitness plus free">Try it free</a><sup class="fitness-plus-sup-1"></sup><span class="icon icon-after icon-external"></span>
                            </div>
                </div>
            </div>
        </div>
    )
}