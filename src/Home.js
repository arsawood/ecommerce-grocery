import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}
      </div>
      <div className="home__row">
        <Product
          id="1001"
          title="Aashirvaad aata - 10kg"
          price={15.66}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/0173/7644/4470/products/40127505-1_15ac0165-8ca1-4b7d-ab12-92106561acf1_1024x1024.jpg?v=1626069913"
        />
        <Product
          id="1002"
          title="The Lean Startup: How Constant "
          price={36.48}
          rating={4}
          image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR9vXtbOXcijXWkIMWbRImljYEjO0bs64ieDBslSjsYTeDozVFcB_YzWSKmLiR9d1dTPAeSuTSTvH992EpovoToglJ1xNeBYnFq7WTpH-A&usqp=CAc"
        />
        <Product
          id="1003"
          title="The Lean Startup: How Constant "
          price={44.68}
          rating={2}
          image="https://www.kinder.com/in/sites/kinder_in/files/documents/16871047/22803799/kinder-39-Sugar-final-header.jpg?t=1623490499"
        />
        <Product
          id="1004"
          title="The Lean Startup: How Constant "
          price={11.96}
          rating={4}
          image="https://rukminim1.flixcart.com/image/612/612/jyq5oy80/tea/t/5/u/500-na-regular-tea-taj-mahal-powder-original-imaf6ect9ykqfech.jpeg?q=70"
        />
        <hr/>
      </div>
      <div className="home__row">
        <Product
          id="1005"
          title="The Smart Watch for Men"
          price={22.98}
          rating={3}
          image="https://duboristore.in/wp-content/uploads/2020/07/Kabuli-Boot-big.jpg"
        />
        <Product
          id="1006"
          title="The Lean Startup"
          price={20.18}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRit3MwnrwfBIC6GT28WpSc_cTYfD26C7xOfa7SPpU-WlWmiE2csQZo3fFWcnJDkSkDdQjAIIluunpMeoyEmuj10avY3ymxdcpbHfTQL6qN&usqp=CAc"
        />
        <Product
          id="1007"
          title="The Lean Startup: "
          price={19.16}
          rating={2}
          image="https://5.imimg.com/data5/KX/VT/MY-427518/zeera-500x500-500x500.jpg"
        />
        <Product
          id="1008"
          title="The Lean Startup: "
          price={44.68}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq9o52RRWFU-enEBmRJcJtCyt5zY_XOzgdsQ&usqp=CAU"
        />
      </div>
      <div className="home__row">
        <Product
          id="1009"
          title="The Lean Startup: "
          price={65.31}
          rating={3}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrFhVWopg9MIInLe9_ThQ4thL1Y46cB3l82e7jsY6wsISViz4pETasi6uDUsqbppP0dFk&usqp=CAU"
        />
        <Product
          id="1009"
          title="The Lean Startup: "
          price={56.55}
          rating={1}
          image="https://5.imimg.com/data5/EL/TD/MY-38203100/red-chilli-powder-500x500.jpg"
        />
      </div>
    </>
  );
}
export default Home;
