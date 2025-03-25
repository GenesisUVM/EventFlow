/* eslint-disable no-unused-vars */
import {TOKEN_SECRET} from '../conf.js'
import jwt from 'jsonwebtoken'

export function createAccessToken(payload){
    return new Promise((resolve, reject)=>{
        jwt.sign(
            payload, TOKEN_SECRET,{expiresIn: '1d'},
            (err, token) => {
               if (err) console.log(err);
               resolve(token)
            }
         );
    })
};