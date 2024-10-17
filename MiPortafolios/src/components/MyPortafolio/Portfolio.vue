<template>
  <article class="portfolio" data-page="portfolio">
    <header>
      <h2 class="h2 article-title">Portfolio</h2>
    </header>

    <section class="projects">
      <ul class="filter-list has-scrollbar">
        <li class="filter-item">
          <button class="active" data-filter-btn>All</button>
        </li>

        <li class="filter-item">
          <button data-filter-btn>Web design</button>
        </li>

        <li class="filter-item">
          <button data-filter-btn>Web development</button>
        </li>

        <li class="filter-item">
          <button data-filter-btn>Econometric Modeling</button>
        </li>

        <li class="filter-item">
          <button data-filter-btn>backend developer</button>
        </li>
        <!-- 
    <li class="filter-item">
      <button data-filter-btn>Machine Learning</button>
    </li> 
-->
        <li class="filter-item">
          <button data-filter-btn>Data Visualization</button>
        </li>

        <li class="filter-item">
          <button data-filter-btn>Time Series</button>
        </li>

        <li class="filter-item">
          <button data-filter-btn>Pipelines</button>
        </li>
      </ul>

      <div class="filter-select-box">
        <button class="filter-select" data-select>
          <div class="select-value" data-selecct-value>Select category</div>

          <div class="select-icon">
            <ion-icon name="chevron-down"></ion-icon>
          </div>
        </button>

        <ul class="select-list">
          <li class="select-item">
            <button data-select-item>All</button>
          </li>

          <li class="select-item">
            <button data-select-item>Web design</button>
          </li>

          <li class="select-item">
            <button data-select-item>Web development</button>
          </li>

          <li class="select-item">
            <button data-select-item>Econometric Modeling</button>
          </li>

          <li class="select-item">
            <button data-select-item>backend developer</button>
          </li>
          <!--               
      <li class="select-item">
        <button data-select-item>Machine Learning</button>
      </li>
-->
          <li class="select-item">
            <button data-select-item>Data Visualization</button>
          </li>

          <li class="select-item">
            <button data-select-item>Time Series</button>
          </li>

          <li class="select-item">
            <button data-select-item>Pipelines</button>
          </li>
        </ul>
      </div>

      <ul class="project-list">
        <li
          class="project-item active"
          data-filter-item
          data-category="time series"
        >
          <a href="https://github.com/OugMontiel/ModeloARIMA-Fase-2">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-time-series-1.webp"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">Tecnicas de pronostico</h3>

            <p class="project-category">Time Series</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="backend developer"
        >
          <a href="https://github.com/OugMontiel/projectTeamSoccer-Campus">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-backend-developer-1.webp"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">
              Control and registration oof all teams that are participation in
              the BetPlay League.
            </h3>

            <p class="project-category">backend developer</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="pipelines"
        >
          <a href="https://github.com/OugMontiel/Pragma">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-pipelines-1.webp"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">Ingeneria de datos</h3>

            <p class="project-category">Pipelines</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="backend developer"
        >
          <a href="https://github.com/OugMontiel/proyectoPython-campus">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-1.jpg"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">Sistema Gestion Campus</h3>

            <p class="project-category">backend developer</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="backend developer"
        >
          <a href="https://github.com/OugMontiel/examenPython-campus">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-1.jpg"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">
              Sistema gestor de peliculas BlockBuster
            </h3>

            <p class="project-category">backend developer</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web design"
        >
          <a href="https://github.com/OugMontiel/shoeWebsite-campus">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-1.jpg"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">shoe Website</h3>

            <p class="project-category">Web design</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web design"
        >
          <a href="https://github.com/OugMontiel/identificacionCajas-campus">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-1.jpg"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">Mis primeros Diseños</h3>

            <p class="project-category">Web design</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web design"
        >
          <a href="https://github.com/OugMontiel/foodLover-campus">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-1.jpg"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">Food Lover</h3>

            <p class="project-category">Web design</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web design"
        >
          <a href="https://github.com/OugMontiel/gripBasico-campus">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-1.jpg"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">Grip Basico</h3>

            <p class="project-category">Web design</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web design"
        >
          <a href="https://github.com/OugMontiel/landigPages-campus">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-1.jpg"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">Landing pages</h3>

            <p class="project-category">Web design</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web design"
        >
          <a href="https://github.com/OugMontiel/virtualWallet-campus">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-1.jpg"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">Virtual Wallet</h3>

            <p class="project-category">Web design</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web design"
        >
          <a href="https://github.com/OugMontiel/examenHTMLyCSS-campus">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-1.jpg"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">Carrillo de compras</h3>

            <p class="project-category">Web design</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="backend developer"
        >
          <a href="https://github.com/OugMontiel/disenoDeAlgoritmos-campus">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-1.jpg"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">Diseño de algoritmos</h3>

            <p class="project-category">backend developer</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web development"
        >
          <a href="https://github.com/OugMontiel/spaceX">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-1.jpg"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">SpaceX-API</h3>

            <p class="project-category">Web development</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web development"
        >
          <a href="https://github.com/OugMontiel/Spotfy">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-1.jpg"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">Spotfy</h3>

            <p class="project-category">Web development</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="econometric modeling"
        >
          <a href="https://github.com/OugMontiel/AnalisisUnivariado-Fase-4">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-1.jpg"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">Páneles de Datos</h3>

            <p class="project-category">Econometric Modeling</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="econometric modeling"
        >
          <a href="https://github.com/OugMontiel/AnalisisMultivariado-Fase-5">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-1.jpg"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">panel de datos</h3>

            <p class="project-category">Econometric Modeling</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="backend developer"
        >
          <a href="https://github.com/OugMontiel/Juegos----POO">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-1.jpg"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">Mis primeros Juegos</h3>

            <p class="project-category">backend developer</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="web development"
        >
          <a href="https://github.com/OugMontiel/examenEncriptador">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-1.jpg"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">Encriptador</h3>

            <p class="project-category">Web development</p>
          </a>
        </li>

        <li
          class="project-item active"
          data-filter-item
          data-category="data visualization"
        >
          <a href="https://github.com/OugMontiel/BetrMedia">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img
                src="./assets/images/project-1.jpg"
                alt="finance"
                loading="lazy"
              />
            </figure>

            <h3 class="project-title">datos de Youtube</h3>

            <p class="project-category">Data Visualization</p>
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  name: 'PortfolioMyPortafolio',
}
</script>
