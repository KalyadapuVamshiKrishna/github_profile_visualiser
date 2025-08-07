import {Link} from 'react-router-dom'

const NoDataFound = () => {
  return (
     <div className="w-full h-[100vh] bg-slate-900 flex flex-col justify-center items-center">
      <img
        src="https://res.cloudinary.com/diqwk5cdp/image/upload/v1732070791/Empty_Box_Illustration_1_dfkrvg.png"
        alt="no data found"
        className="w-72"
      />
      <h1 className="text-white text-center font-normal mt-4">No Data Found</h1>
      <p className="text-white text-center w-72 text-sm mt-2">
        Github Username is empty, please provide a valid username for Repositories
      </p>
      <Link to="/">
        <button className="mt-4 bg-white text-neutral-700 w-32 h-8 rounded-md">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default NoDataFound;
