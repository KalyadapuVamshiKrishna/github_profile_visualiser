import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="flex flex-col justify-center items-center bg-slate-900 h-screen px-4">
    <img
      src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1732070791/Group_7519_fwq39j.png"
      alt="page not found"
      className="w-auto h-[300px] sm:h-[200px]"
    />
    <h1 className="text-white text-3xl font-normal text-center mt-4">
      PAGE NOT FOUND
    </h1>
    <p className="text-slate-400 text-center mt-2 max-w-[500px] sm:max-w-[300px] sm:text-sm mb-4">
      We are sorry, the page you requested could not be found. Please go back to the homepage.
    </p>
    <Link to="/" className="flex justify-center items-center no-underline">
      <button
        type="button"
        className="h-[30px] w-[120px] bg-blue-500 rounded text-white text-sm hover:bg-blue-600 transition"
      >
        Go to Home
      </button>
    </Link>
  </div>
)

export default NotFound
