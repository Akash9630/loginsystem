function SignUp() {
  return (
    <div className="page">
      <main className="page__main">
        <form className="form page__form" action="">
          <div className="form__header">
            <h1 className="form__title">Signup</h1>
          </div>
          <div className="form__body">
            <div className="form__linput">
              <label className="form__label" htmlFor="uname">
                <i className="fa fa-user" aria-hidden="true"></i>
              </label>
              <input
                className="form__input"
                type="text"
                id="uname"
                name="uname"
                placeholder="Username"
                required="required"
              />
            </div>
            <div className="form__linput">
              <label className="form__label" htmlFor="email">
                <i className="fa fa-envelope form__icon"></i>
              </label>
              <input
                className="form__input"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                required="required"
              />
            </div>
            <div className="form__linput">
              <label className="form__label" htmlFor="psw">
                <i className="fa fa-key" aria-hidden="true"></i>
              </label>
              <input
                className="form__input"
                type="password"
                id="psw"
                name="psw"
                placeholder="Password"
                required="required"
              />
            </div>
            <input className="primary-button" type="submit" value="Signup" />
          </div>
        </form>
      </main>
    </div>
  );
}
export default SignUp;
