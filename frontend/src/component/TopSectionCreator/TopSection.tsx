import Content from "./Content"
import Header from "./Header"


function TopSectionCreator() {
  return (
    <div style={{backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(180deg, #181718 0%, #2F2144 50%, #5C439F 100%)'}} className="">
        <Header/>
        <Content/>
    </div>
  )
}

export default TopSectionCreator


// bg-[#000000] 