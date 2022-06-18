import Navbar from './navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div style={{ padding: "0 var(--main-padding)" }}>
                {children}
            </div>
            <Footer />
        </>
    )
}