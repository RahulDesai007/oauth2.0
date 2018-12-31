const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
});

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// auth with linkedin
router.get('/linkedin', passport.authenticate('linkedin'));

// auth with linkedin
router.get('/facebook', passport.authenticate('facebook'));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('you reached the redirect URI');
});

router.get('/linkedin/redirect', passport.authenticate('linkedin'), (req, res) => {
    res.send('you reached the redirect URI');
});


router.get('/facebook/redirect', passport.authenticate('facebook'), (req, res) => {
    res.send('you reached the redirect URI');
});

module.exports = router;