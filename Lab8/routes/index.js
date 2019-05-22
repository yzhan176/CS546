const home = require('./home');
const search = require('./search');
const details = require('./details');

const constructorMethod = app => {
    app.use("/", home);
    app.use('/search',search);
    app.use('/details',details);
    app.use("*", (req, res) => {
        // res.status(404).json({ error: "Not found" });
        res.status(404).render("error", {
            errortype: '404',
            errormessage: 'Not Found'
        });
    });
}
module.exports = constructorMethod;