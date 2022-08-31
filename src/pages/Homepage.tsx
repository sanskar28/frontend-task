import React, { useEffect } from "react";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../components/ProductCard";
//import InfiniteScroll from "react-infinite-scroller";

const styles = {
  container: {
    maxWidth: "1000px",
    width: "90%",
  },
  flexbox: {
    display: "flex",
    justifyContent: "center",
  },
};

function HomePage() {
  const [Categories, setCategories] = useState<[String]>([""]);
  const [SelectedCategory, setSelectedCategory] =
    useState<String>("smartphones");
  const [data, setdata] = useState<product[]>([]);
  const fetchCategories = async () => {
    const res = await fetch("https://dummyjson.com/products/categories");
    const json = await res.json();
    setCategories(json);
  };

  const fetchData = async () => {
    console.log(SelectedCategory);
    const res = await fetch(
      `https://dummyjson.com/products/category/${SelectedCategory}?limit=5&select=id,title,price,description,category,thumbnail,brand`
    );
    const json = await res.json();
    setdata(data.concat(json.products));
  };

  const categoryChange = async () => {
    setdata([]);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchData();
  }, [SelectedCategory]);

  return (
    <div style={styles.flexbox}>
      <div style={styles.container}>
        <div style={{ margin: "50px 0" }}>
          <Dropdown
            setSelectedCategory={setSelectedCategory}
            categories={Categories}
            categoryChange={categoryChange}
          />
        </div>
        <InfiniteScroll
          dataLength={data.length} //This is important field to render the next data
          next={() => {
            fetchData();
          }}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>These are all the items available in the category</b>
            </p>
          }>
          {data?.map((e) => (
            <ProductCard data={e} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

interface product {
  id: Number;
  title: String;
  description: String;
  category: String;
  thumbnail: String;
  price: Number;
  brand: String;
}

export default HomePage;
