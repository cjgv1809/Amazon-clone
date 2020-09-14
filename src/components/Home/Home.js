import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home-image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home-row">
        <Product
          id="12345687"
          title="Teléfono desbloqueado de fábrica Samsung Galaxy, S10 Lite, Negro"
          price={649.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61TVfRPlcdL._AC_UY218_.jpg"
        />
        <Product
          id="12345688"
          title="Samsung QN32Q50RAFXZA Flat 32 pulgadas QLED 4K 32Q50 Series Smart TV"
          price={497.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UY218_.jpg"
        />
      </div>

      <div className="home-row">
        <Product
          id="12345689"
          title="Reloj inteligente, reloj inteligente con Bluetooth, pantalla táctil, reloj deportivo de fitness, seguimiento de actividad con frecuencia cardíaca, monitor de presión arterial, IP67"
          price={29.41}
          rating={4}
          image="https://m.media-amazon.com/images/I/71vDK3sx5BL._AC_UY218_.jpg"
        />
        <Product
          id="12345690"
          title="Acer Aspire 5 Slim Laptop, 15.6 pulgadas Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4 GB DDR4, 128 GB SSD, teclado retroiluminado, Windows 10 en modo S, A515-43-R19L, Plata"
          price={349.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
        />
        <Product
          id="12345691"
          title="2019 Samsung Galaxy Tab A 10.1 pulgadas Pantalla táctil (1920x1200) Wi-Fi Tablet Bundle, Exynos 7904A procesador, 3GB RAM, 128GB Memoria, Bluetooth, Tigology Case"
          price={299.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/71demZQnCmL._AC_UY218_.jpg"
        />
      </div>

      <div className="home-row">
        <Product
          id="12345692"
          title="HP 4NN56AA#ABA Pavilion PC todo en uno de 24 pulgadas, Intel Core i5-9400T, 12 GB de RAM, 512 GB de unidad de estado sólido, Windows 10 (24 x a0032, negro)"
          price={914.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71UGHMTRYcL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
