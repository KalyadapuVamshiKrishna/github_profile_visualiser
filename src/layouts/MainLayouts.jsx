import Navbar from '../components/Navbar'

const MainLayouts = ({children}) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <main >{children}</main>
    </div>
  )
}

export default MainLayouts