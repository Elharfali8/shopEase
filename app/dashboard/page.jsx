import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <>
      <SignedIn>
        <h1>Welcome to your dashboard!</h1>
        {/* Your protected content here */}
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
