import React from "react";

const styles = {
  container: {
    marginLeft: "5%",
    width: "90%",
    marginBottom: "40px",
    height: "300px",
    display: "flex",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)",
    backgroundColor: "white",
  },
  leftdiv: {
    width: "50%",
    heigth: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "Center",
    borderRight: " 2px solid #efefef",
  },
  rightdiv: {
    width: "50%",
    padding: "40px",
  },
  img: {
    width: "90%",
    height: "280px",
  },
  h1: {
    color: "#515151",
    fontWeight: "400",
    paddingTop: "15px",
    margin: "0",
    fontSize: window.innerWidth > 800 ? "35px" : "24px",
  },
  h2: {
    color: "#515151",
    margin: "0",
    fontWeight: "500",
    fontSize: window.innerWidth > 800 ? "25px" : "18px",
    paddingTop: "5px",
  },
  h4: {
    margin: "0",
    color: "#727272",
    fontWeight: "500",
    fontSize: window.innerWidth > 800 ? "12px" : "9px",
  },
  p: {
    fontSize: window.innerWidth > 800 ? "12px" : "9px",
    lineHeight: "20px",
    color: "#727272",
    padding: "15px 0",
    margin: "0",
  },
};

function ProductCard(props: ProductProps) {
  return (
    <div style={styles.container}>
      <div style={styles.leftdiv}>
        <img style={styles.img} src={props.data.thumbnail.toString()}></img>
      </div>
      <div style={{ width: "50%", padding: "40px", textAlign: "left" }}>
        <h1 style={styles.h1}>
          {props.data.title.length > 15
            ? props.data.title.substring(0, 15) + "..."
            : props.data.title}
        </h1>
        <h4 style={styles.h4}>{props.data.brand}</h4>
        <h2 style={styles.h2}>{"$" + props.data.price}</h2>
        <p style={styles.p}>
          {props.data.description.length > 60
            ? props.data.description.substring(0, 60) + "..."
            : props.data.description}
        </p>
      </div>
    </div>
  );
}

interface ProductProps {
  data: product;
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
export default ProductCard;
