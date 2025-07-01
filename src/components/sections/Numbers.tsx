import Container from "../shared/Container"

const Numbers = () => {
  return (
    <section className="relative mt-12 md:mt-16">   
        <Container className="flex justify-center align-center">
                <div className="bg-box mx-auto lg:mx-0 p-5 sm:p-4 max-w-5xl rounded-3xl bg-box-bg border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3">
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">100+</h2>
                        <p className="mt-2 text-heading-3">AI Workflows Implemented</p>
                    </div>
                    <div className="text-center px-5 ">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">250+</h2>
                        <p className="mt-2 text-heading-3">Businesses Automated</p>
                    </div>
                    <div className="text-center px-5 ">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">99.4%</h2>
                        <p className="mt-2 text-heading-3">Task Accuracy Rate</p>
                    </div>
                </div>
        </Container>
    </section>
  )
}

export default Numbers