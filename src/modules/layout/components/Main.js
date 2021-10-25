import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
const Main = () => (
  <>
    <div className='main-content'>
      <div class='container'>
        <header>
          <h1>Jogo Da Memória</h1>
        </header>

        <section class='score-panel'>
          <ul class='stars'>
            <li>
              <i class='fa fa-star'></i>
            </li>
            <li>
              <i class='fa fa-star'></i>
            </li>
            <li>
              <i class='fa fa-star'></i>
            </li>
          </ul>
          <span class='moves'>0</span> Moves |<span id='timer'>0</span>s
          <div class='restart'>
            <i class='fa fa-repeat'></i>
          </div>
        </section>

        <ul class='deck'>
          <li class='card'>
            <i class='fa fa-diamond'></i>
          </li>
          <li class='card'>
            <i class='fa fa-paper-plane-o'></i>
          </li>
          <li class='card'>
            <i class='fa fa-anchor'></i>
          </li>
          <li class='card'>
            <i class='fa fa-bolt'></i>
          </li>
          <li class='card'>
            <i class='fa fa-cube'></i>
          </li>
          <li class='card'>
            <i class='fa fa-anchor'></i>
          </li>
          <li class='card'>
            <i class='fa fa-leaf'></i>
          </li>
          <li class='card'>
            <i class='fa fa-bicycle'></i>
          </li>
          <li class='card'>
            <i class='fa fa-diamond'></i>
          </li>
          <li class='card'>
            <i class='fa fa-bomb'></i>
          </li>
          <li class='card'>
            <i class='fa fa-leaf'></i>
          </li>
          <li class='card'>
            <i class='fa fa-bomb'></i>
          </li>
          <li class='card'>
            <i class='fa fa-bolt'></i>
          </li>
          <li class='card'>
            <i class='fa fa-bicycle'></i>
          </li>
          <li class='card'>
            <i class='fa fa-paper-plane-o'></i>
          </li>
          <li class='card'>
            <i class='fa fa-cube'></i>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default Main;
