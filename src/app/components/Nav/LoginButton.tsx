"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function LoginButton() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(true);
  }

  return (
    <>
      {isClicked ? (
        <Card className="p-2 px-4 cursor-pointer select-none">
          {"User: " + "0xwkd0qkf0wjdfaıjfqqf".slice(0, 8).concat("...")}
        </Card>
      ) : (
        <Button
          onClick={handleClick}
          className="select-none bg-zinc-700 text-white hover:bg-zinc-300 hover:text-black"
        >
          Login Using Wallet
        </Button>
      )}
    </>
  );
}

export { LoginButton };
