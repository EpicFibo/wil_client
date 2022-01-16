import * as React from "react";
import { useEffect } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../theme";
import createEmotionCache from "../createEmotionCache";
// import { LIFFErrorObject } from "liff-type";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
import { useRouter } from "next/router";
import AuthContext from "../context/AuthContext";
import { CognitoUser } from "@aws-amplify/auth";
import { useUser } from "../context/AuthContext";

Amplify.configure({ ...awsconfig, ssr: true });

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

interface IFormInput {
  username: string;
  password: string;
}

export default function MyApp(props: MyAppProps) {
  const { user, setUser } = useUser();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [signUpError, setSignUpError] = React.useState<string>("");
  const [showCode, setShowCode] = React.useState<boolean>(false);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  useEffect(() => {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      // signUpwithEmailandOpenID("tsuna4@hotmail.com", "11501150", "tsuna4@hotmail.com");
      signInwithEmailandOpenID("tsuna4@hotmail.com", "11501150");
    } else {
      // initializeLiff("1656665806-ay2w0RYE");
      try {
        // signInwithEmailandOpenID("tsuna4@hotmail.com", "11501150");
        // signUpwithEmailandOpenID("tsuna4@hotmail.com", "11501150", "tsuna4@hotmail.com");
      } catch (error) {
        // signInwithEmailandOpenID("tsuna4@hotmail.com", "11501150");
      }
    }
  });
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <script charSet="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
      </Head>
      <AuthContext>
        <ThemeProvider theme={theme}>
          <style jsx global>{`
            body {
              background-color: #1f1f1f;
            }
          `}</style>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthContext>
    </CacheProvider>
  );
}

// function initializeLiff(myLiffId) {
//   liff
//     .init({
//       liffId: myLiffId, // Use own liffId
//     })
//     .then(() => {
//       if (!liff.isLoggedIn()) {
//         liff.login();
//         console.log("Login");
//         liff
//           .getProfile()
//           .then(async (profile) => {
//             const userProfile = profile.userId;
//             console.log(userProfile);
//             const displayName = profile.displayName;
//             console.log(displayName);
//             const statusMessage = profile.statusMessage;
//             const pictureUrl = profile.pictureUrl;
//             const email = (await liff.getDecodedIDToken()).email;
//             console.log(userProfile);
//             console.log(email);
//             // signUpwithEmailandOpenID(email, userProfile, email);
//           })
//           .catch((err) => console.error(err));
//       }
//     })
//     .catch((err: LIFFErrorObject) => {
//       console.log(err.message);
//     });
// }

async function signUpwithEmailandOpenID(
  username: string,
  password: string,
  email: string
): Promise<CognitoUser> {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
      },
    });
    console.log("Signed up a user:", user);
    return user;
  } catch (error) {
    console.log("error signing up:", error);
  }
}

async function signInwithEmailandOpenID(username: string, password: string) {
  try {
    const user = await Auth.signIn(username, password);
  } catch (error) {
    console.log("error signing in", error);
  }
}
