import Sidebar from "./Sidebar"

impor

const PageStarter
 = () => {
    return (
        <div className="flex lg:flex-row flex-col gap-5 h-screen">
            <Sidebar/>
            <div className="flex-1">
                <div className="hello">Hello</div>
            </div>
        </div>
    )
}

export default PageStarter
