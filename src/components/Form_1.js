const Form1 = () => {
    return (
        <div
            className="d-flex align-items-center justify-content-center min-vw-100 min-vh-100 px-2"
            style={{ backgroundColor: "#323639" }}>
            <div className="container p-4 shadow bg-light rounded">
                <form>
                    <h1 className="text-center mb-4">Log In</h1>
                    <div className="form-floating mb-4">
                        <input
                            type="email"
                            id="floatingInput"
                            className="form-control"
                            placeholder="Your Email"
                        />
                        <label htmlFor="floatingInput">Your Email</label>
                    </div>

                </form>
            </div>
        </div >
    )
}
export default Form1
