const TitleComponent = ({ label = "Title" }) => (
    <nav className="h-[90px] flex items-end mb-6 gap-3">
        <nav className="flex flex-col h-full gap-1">
            <p className="h-5/6 w-[30px] bg-sky-500"></p>
            <p className="h-1/6 w-[30px] bg-neutral-900"></p>
        </nav>
        <h4 className="font-medium text-3xl uppercase" id="skills">{label}</h4>
    </nav>
)

export default TitleComponent;