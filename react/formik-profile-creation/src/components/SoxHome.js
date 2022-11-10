const SoxHome = () => {
    return (
        <div className="container">

            <div className="py-3 text-center bg-light">
                <h1>SOX Validator</h1>
                <p className="lead">Create and View <b>Profiles</b> and <b>Test jobs</b> using the options below
                </p>
            </div>

            <div className="row justify-content-center pt-2">
                <div className="col-sm-3 text-center">
                    <h2>SOX Profile</h2>
                </div>
                <div className="col-sm-3 text-center">
                    <h2>Test Job</h2>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-sm-3">
                    <div className="card mb-2">
                        <div className="card-body">
                            <h5 className="card-title">Create SOX Profile</h5>
                            {/* <p className="card-text">Create a SOX Profile here.</p> */}
                            <a href="#" className="btn btn-primary">Create SOX Profile</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card mb-2">
                        <div className="card-body">
                            <h5 className="card-title">Create Test Job</h5>
                            {/* <p className="card-text">Create a Test Job here.</p> */}
                            <a href="#" className="btn btn-primary">Create Test Job</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-sm-3">
                    <div className="card mb-2">
                        <div className="card-body">
                            <h5 className="card-title">View SOX Profiles</h5>
                            {/* <p className="card-text">View the list of SOX Profiles.</p> */}
                            <a href="#" className="btn btn-primary">View SOX Profiles</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card mb-2">
                        <div className="card-body">
                            <h5 className="card-title">View Test Job</h5>
                            {/* <p className="card-text">View the list of Test Jobs.</p> */}
                            <a href="#" className="btn btn-primary">View Test Jobs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SoxHome;