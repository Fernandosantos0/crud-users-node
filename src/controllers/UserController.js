class UserController {
    static async home(req, res, next) {
        res.status(200).render('home');
    }
}

module.exports = UserController;