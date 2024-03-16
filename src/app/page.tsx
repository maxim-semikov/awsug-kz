import MainHeader from "@/widgets/MainHeader";
import Container from "@/shared/components/Container";
import Footer from "@/widgets/Footer";

export default function Home() {
    return (
        <Container>
            <MainHeader/>
            <main className="flex min-h-screen flex-col items-center justify-between">
                test
            </main>
            <Footer/>
        </Container>
    );
}
