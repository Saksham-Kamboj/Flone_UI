import Link from "next/link";
import { Button } from "../ui/button";
import { HeaderNavigationMenu } from "./navigation-menu";
import { ModeToggle } from "../Custom/theme-toggle";

function Header() {
  return (
    <>
      <nav
        className={`w-full flex items-center justify-between h-20 px-2 backdrop-blur-xl bg-white/30 sticky top-0 drop-shadow-md z-50`}
      >
        <h2 className={`md:text-5xl text-3xl font-bold`}>Flone.</h2>
        <div className="md:flex items-center justify-center font-bold hidden">
          <HeaderNavigationMenu />
        </div>
        <div className="flex items-center justify-center gap-2">
          <ModeToggle />
          <Link href="/auth/signin">
            <Button
              variant={"secondary"}
              className="shadow-sm shadow-slate-400"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
