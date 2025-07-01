import Paragraph from "../shared/Paragraph";

interface ServiceProps {
    title : string;
    description : string;
    icon : React.ReactNode
}

const Service = ({title, description, icon} : ServiceProps) => {
  return (
    <div className="h-full p-5 sm:p-6 lg:p-8 rounded-3xl border bg-box border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden">
        <div className="w-8">
            <span className="text-heading-1">{icon}</span>
        </div>
        <div className="mt-2 space-y-2 relative">
            <h2 className="text-lg md:text-xl font-semibold text-heading-2">{title}</h2>
            <Paragraph>
                {description}
            </Paragraph>
        </div>
    </div>
  )
}

export default Service