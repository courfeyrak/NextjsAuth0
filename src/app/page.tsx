import { auth0 } from "@/lib/auth0";
import './globals.css';


export default async function Home() {
  // Fetch the user session
  const session = await auth0.getSession();
  
  // Get the APP_BASE_URL environment variable
  const appBaseUrl = process.env.APP_BASE_URL;
  
  // If no session, show sign-up and login buttons
  if (!session) {
    return (
      <main>
        <p>APP_BASE_URL: {appBaseUrl || 'No está definida'}</p>
        <a href="/auth/login?screen_hint=signup">
          <button>Sign up</button>
        </a>
        <br/>
        <a href="/auth/login">
          <button>Log in sin</button>
        </a><br/>
        {/* <a href="/auth/login?audience=https://51lyy4n8z0.execute-api.us-east-2.amazonaws.com/dev">
          <button>Log in con</button>
        </a> */}
      </main>
    );
  }
  //const token = await auth0.getAccessToken();

 //console.log("------TOKEN:", token);
  // If session exists, show a welcome message and logout button
  return (
    <main>
      <p>APP_BASE_URL: {appBaseUrl || 'No está definida'}</p>
      <h1>Welcome, {session.user.name}!</h1>
      <p>
        <a href="/auth/logout?returnTo=http://localhost:3000/">
          <button>Log out</button>
        </a>
      </p>
    </main>
  );
}