import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="page">
      <main className="page__main">
        <form className="form page__form" action="">
          <div className="form__header">
            <h1 className="text-center form_title">Signup</h1>
          </div>
          {/* <div className="text-center">
            Already registered?
            <Link className="link" to="/">
              {" "}
              <strong>Log In</strong>
            </Link>
          </div> */}
          <div className="form__body">
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Username"
            />
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
            <input
              type="submit"
              className="btn btn-primary btn-block mb-4"
              value="Submit"
            />
          </div>
        </form>
      </main>
    </div>
  );
}
export default SignUp;
