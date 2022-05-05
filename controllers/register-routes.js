let getPageRegister = (req, res) => {
    return res.render("signup.handlebars", {
        errors: req.flash("errors")
    });
};