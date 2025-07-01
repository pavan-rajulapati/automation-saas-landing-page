import { services } from "../../utils/services"
import Service from "../cards/Service"
import Container from "../shared/Container"
import Paragraph from "../shared/Paragraph"
import Title from "../shared/Title"

const Services = () => {
    return (
        <section id="services">
            <Container className="space-y-10 md:space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <Title>Our Services</Title>
                    <Paragraph>
                        We offer a suite of intelligent automation tools designed to streamline your business operations.
                        From smart email replies and content creation to hands-free social media management,
                        each feature is built to reduce manual work and help your team stay focused on what matters most.
                    </Paragraph>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
                    {services.map((item, key) => (
                        <div key={key} className="h-full">
                            <Service title={item.title} description={item.description} icon={item.logo} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Services