/* eslint-disable no-unused-vars */
import {TOKEN_SECRET} from '../conf.js'
import jwt from 'jsonwebtoken'

export const createAccessToken = (user) => {
    return new Promise((resolve, reject) => {
        jwt.sign(user, "secreto", { expiresIn: "1h" }, (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    });
};

