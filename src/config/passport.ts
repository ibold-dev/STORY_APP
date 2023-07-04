const GoogleStrategy = require ('passport-google-oauth20').Strategy;
import User from '../models/User';


abstract class Passport {
    abstract googleStrategy(passport:any) :void;
}

class PassportConfig extends Passport{
    googleStrategy(passport: any): void {

        passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            callbackURL: '/auth/google/callback'
        },   async (accessToken:any, refreshToken:any, profile:any, done:any) => {
            // console.log(profile);
            const newUser = {
                googleID: profile.id,
                displayName: profile.displayName,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                image: profile.photos[0].value,
            }

            try {
                let user = await User.findOne({
                    googleID: profile.id
                });
                if (user) {
                    done(null, user)
                } else {
                    user = await User.create(newUser);
                    done(null, user)
                }

            } catch (error) {
                console.error(error);
            }

        }
        ));


passport.serializeUser(function(user:any, done:any) {
process.nextTick(function() {
    done(null, user);
});
});

passport.deserializeUser(function(user:any, done:any) {
    process.nextTick(function () {
        User.findById(user.id);
    return done(null, user);
});
});
    }
}

const passportConfig = new PassportConfig();


export default passportConfig;
