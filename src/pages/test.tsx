import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design/button/button";

export default function Test() {
    return (
        <>
        <div className="flex flex-col gap-5 mt-5">
            <Container >
                    <Button variant="primary">coucou</Button>
            </Container>
            <Container >
                    <Button variant="primary">coucou</Button>
            </Container>
        </div>
        </>
    )
}