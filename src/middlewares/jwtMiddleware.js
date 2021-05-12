const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_KEY;

exports.verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];
    if (token !== undefined) {
        jwt.verify(token, jwtKey, (error, payload) => {
            console.log(payload)
            if (error) {
                res.status(403);
                res.json({
                    message: 'Accès interdit : token invalide.'
                });
            } else {
                next();
            }
        })

    } else {
        res.status(403);
        res.json({
            message: 'Accès interdit : token manquant.'
        });
    }
}


exports.isAdmin = (req, res, next) => {
    let token = req.headers['authorization'];
    if (token !== undefined) {
        jwt.verify(token, jwtKey, (error, payload) => {
            console.log(payload)
            if (error) {
                res.status(403);
                res.json({
                    message: 'Accès interdit : token invalide.'
                });
            } else {
                if (payload.user.role == 'admin') {
                    next();
                } else {
                    res.status(403);
                    res.json({
                        message: 'Accès interdit : vous devez être admin pour créer un article .'
                    });
                }
            }
        })

    } else {
        res.status(403);
        res.json({
            message: 'Accès interdit : token manquant.'
        });
    }
}
