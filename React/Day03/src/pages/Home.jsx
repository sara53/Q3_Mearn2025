import { useContext } from "react";
import { Header } from "../components/Header";
import Products from "../components/Products";
import { ProductContext } from "../context/productContext";

export function Home() {



    return (

        <>
            <Header />
            <Products />

        </>
    )
}
