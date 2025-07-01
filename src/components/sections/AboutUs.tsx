import Info from "../cards/Info"
import Container from "../shared/Container"
import Paragraph from "../shared/Paragraph"
import Title from "../shared/Title"
import { SiTransmission } from "react-icons/si";

const AboutUs = () => {
  return (
    <section id="about-us" >
        <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
            <div className="w-full md:w-5/12 lg:w-1/2">
            <div className="w-full h-80 sm:h-96 relative">
                <img src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Home_Sales_d1992221c7.webp" alt="About Image" 
                    className="w-full h-full object-contain shadow-lg relative z-10"
                />
            </div>
            </div>
            <div className="w-full md:w-7/12 lg:1/2 flex flex-col">
                <Title>{'About Our Automations'}</Title>
                <Paragraph className="mt-2">    
                    We help businesses save time and grow faster by automating tasks like booking, email replies, content creation, and social media management all powered by AI. Our goal is to simplify your workflow and boost productivity with smart, easy-to-use tools.
                </Paragraph>
                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                    <Info title="Mission" description="Save time through smart AI automation."><SiTransmission /></Info>
                    <Info title="Vision" description="Automation for every business."><SiTransmission /></Info>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default AboutUs