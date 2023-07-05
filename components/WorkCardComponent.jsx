const WorkCardComponent = () => (
    <div className="flex md:flex-row flex-col border-b border-neutral-100 pb-3 gap-6">
        <nav className="md:w-7/12 w-full">
            <nav className="bg-white hover:shadow-lg rounded-lg px-4 py-8 transition w-auto">
                <small>2020-2021</small>
                <h1 className="text-xl">Frontend developer</h1>
            </nav>
        </nav>
        <nav className="md:w-5/12 w-full">
            <h2 className="uppercase text-neutral-800 text-2xl font-bold leading-tight">Facebook</h2>
            <p className="mt-5 text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero corrupti consequatur ab explicabo labore consequuntur ea fugit, culpa voluptatibus! Minima dignissimos distinctio ea architecto hic suscipit assumenda laborum voluptatem neque.
            </p>
        </nav>
    </div>
)


export default WorkCardComponent;