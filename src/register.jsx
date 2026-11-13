function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        window.alert('Thank you for registering!'); className="alert alert-light";
    };

    return (
        <div>
            <h1>Register</h1>
            <p>Please fill out the form below to register to get the best deals.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <label htmlFor="marketing">
                    <input type="checkbox" id="marketing" name="marketing" />
                    I want to receive marketing emails
                </label>
                <input type="submit" value="Register" className="btn btn-light" />
        
            </form>
        </div>
    );
}


export default Register