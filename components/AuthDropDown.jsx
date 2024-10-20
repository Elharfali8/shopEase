import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

function AuthDropDown() {
  return (
    <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1">Click</div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
              <SignedOut>
                <SignInButton />
            </SignedOut>
            </li>
              <li>
              <SignedIn>
            <UserButton />
          </SignedIn>  
              </li>
        </ul>
        </div>
  )
}


          

export default AuthDropDown