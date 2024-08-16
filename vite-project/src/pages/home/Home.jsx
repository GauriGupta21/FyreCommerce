import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import Footer from "../../components/footer/Footer";

function Home() {
  const context = useContext(myContext);
  console.log(context); // {name: 'Kamal Nayan', class: '9 C'}
  // Destructure
  // const { name } = context;
  // const { rollno } = context;

  console.log(name); // Kamal Nayan
  return (
    <Layout>
      {/* <h1>Name : {name}</h1>
      
      <h1>Roll No. : {rollno}</h1> */}
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
      
    </Layout>
  );
}

export default Home;
