"use server";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoginButton } from "./LoginButton";

interface NavItem {
  text?: string;
  href?: string;
  description?: string;
  callback?: () => void;
}

interface NavProps {
  children?: React.ReactNode;
  items?: NavItem[];
}

async function Nav({ items, children }: NavProps) {
  return (
    <>
      <Card className="m-2 flex flex-row justify-between items-center px-2">
        <div className="flex justify-center items-center ">
          <h1 className="text-2xl font-bold p-2">Batıkan Kutluer</h1>

          <NavigationMenu className="ml-2 border-l-[1px] border-zinc-800">
            <NavigationMenuList className="ml-4">
              <NavItems items={items} />
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="p-2 flex items-center">
          <LoginButton />
        </div>
      </Card>
    </>
  );
}

async function NavItems({ items }: NavProps) {
  return (
    <>
      {items?.map((item, index) => {
        const { text, href, description } = item;
        return (
          <div key={`nav-${index}`} className="px-[1px]">
            <NavigationMenuItem>
              <NavigationMenuLink
                className="p-2 px-4 rounded-sm hover:bg-zinc-600 cursor-pointer select-none"
                href={href}
              >
                {text}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </div>
        );
      })}
    </>
  );
}

export { Nav };
export type { NavItem };
