import React from 'react';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", company: "", email: "", message: "" };
    }

    /* Posting the form submission */

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Your message has been submitted. I will get back with you ASAP!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, company, email, message } = this.state;
        return (

            <form className="text-light fw-bold w-75" name="contact" method="POST" data-netlify="true" onSubmit={this.handleSubmit} action="/success">
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group">
                    <label className="form-label mb-1" htmlFor="name">Name</label>
                    <input className="form-control shadow-none d-block mb-3" type="text" value={name} name="name" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label mb-1" htmlFor="company">Company</label>
                    <input className="form-control shadow-none d-block mb-3" type="text" value={company} name="company" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label mb-1" htmlFor="email">Email</label>
                    <input className="form-control shadow-none d-block mb-3" type="email" value={email} name="email" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label mb-1" htmlFor="message">Message</label><textarea className="form-control shadow-none d-block mb-3" value={message} name="message" onChange={this.handleChange}></textarea>
                </div>
                <div className="center-btn"><button type="submit" class="btn btn-green mx-auto">Submit</button></div>
            </form>

        );
    }
}

export default Form;