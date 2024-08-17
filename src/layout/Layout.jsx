import React from "react"
import { Helmet } from "react-helmet"
import Header from './Header';
import Footer from "./Footer";

const Layout = ({ children, title = `Shop Now`, description = `An Integrated AI Platform for Stock Analysis`, keywords = `Stock analysis`, author = `Pratham Asrani` }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
            </Helmet>
            <Header />
            <main style={{ minHeight: "80vh" }}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout