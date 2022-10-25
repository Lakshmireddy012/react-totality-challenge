import { React } from 'react'

import './Header.css'

export default function Header() {
    return (
        <header>
  <div class="container">
    <i id="logo" class="fa fa-apple" aria-hidden="true"></i>
    <nav class='nav'>
      <a href="">Store</a>
      <a href="">Mac</a>
      <a href="">iPad</a>
      <a href="">iPhone</a>
      <a href="">Watch</a>
      <a href="">TV & Home</a>
      <a href="">Music</a>
      <a href="">Support</a>
      <a href=""><i class="fa fa-search" aria-hidden="true"></i></a>
      <a href=""><i class="fa fa-shopping-bag" aria-hidden="true"></i></a>
    </nav>
  </div>
</header>
    )
}