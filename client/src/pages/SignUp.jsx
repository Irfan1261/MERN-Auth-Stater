import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <div className="text-center ">
            <Link to="/" className="text-4xl  font-bold dark:text-white">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Irfan's
              </span>
              Blog
            </Link>
            <p className="text-sm mt-5 font-medium">
              This is a practice project. Please sign up with your email and
              password or with Google.
            </p>
          </div>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Username" />
              <TextInput type="text" placeholder="John Doe" id="username" />
            </div>
            <div>
              <Label value="Email" />
              <TextInput type="text" placeholder="john@doe.com" id="email" />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="************"
                id="password"
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              // disabled={loading}
            >
              {/* {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )} */}
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5 font-medium items-center justify-center">
            <span>Have an account?</span>
            <Link
              to="/sign-in"
              className="text-blue-500 font-bold hover:text-blue-700"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
