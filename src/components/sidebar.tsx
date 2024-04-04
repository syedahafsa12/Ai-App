"use client";
// 
// import { Home, Plus, Settings, Armchair, PersonStanding, Cake,Shirt, Cloud, Cat, Code, Trophy, Apple,  } from "lucide-react";
// import { usePathname, useRouter } from "next/navigation";

// import { cn } from "@/lib/utils";
// import { useProModal } from "@/hooks/use-pro-modal";

// interface SidebarProps {
//   isPro: boolean;
// }

// export const Sidebarr = ({
//   isPro
// }: SidebarProps) => {
//   const proModal = useProModal();
//   const router = useRouter();
//   const pathname = usePathname();

//   const onNavigate = (url: string, pro: boolean) => {
//     if (pro && !isPro) {
//       return proModal.onOpen();
//     }

//     return router.push(url);
//   }

//   const routes = [
//     {
//       icon: Home,
//       href: '/app',
//       label: "Home",
//       pro: false,
//     },
//     {
//       icon: Armchair,
//       href: '/co',
//       label: "Furniture",
//       pro: false,
//     },
//     {
//       icon: PersonStanding,
//       href: '/settings',
//       label: "Characters",
//       pro: false,
//     },
//     {
//       icon: Apple,
//       href: '/settings',
//       label: "Food",
//       pro: false,
//     },
//     {
//       icon: Shirt,
//       href: '/settings',
//       label: "Dress",
//       pro: false,
//     },
//     {
//       icon: Cloud,
//       href: '/settings',
//       label: "Nature",
//       pro: false,
//     },
//     {
//       icon: Cat,
//       href: '/settings',
//       label: "Animals",
//       pro: false,
//     },
//     {
//       icon: Code,
//       href: '/settings',
//       label: "Technology",
//       pro: false,
//     },
//     {
//       icon: Trophy,
//       href: '/settings',
//       label: "Sports",
//       pro: false,
//     },
    
//   ];

//   return (
//     <div className="overflow-x-auto space-y-4 flex flex-col h-full text-primary bg-secondary scrollbar-thin scrollbar-thumb-black scrollbar-track-white">
//       <div className="p-3 flex-1 flex justify-center">
//         <div className="space-y-2">
//           {routes.map((route) => (
//             <div
//               onClick={() => onNavigate(route.href, route.pro)}
//               key={route.href}
//               className={cn(
//                 "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
//                 pathname === route.href && "bg-primary/10 text-primary",
//               )}
//             >
//               <div className="flex flex-col gap-y-2 items-center flex-1">
//                 <route.icon className="h-5 w-5" />
//                 {route.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";
import Link from "next/link";
import { Home, Plus, Settings, Armchair, PersonStanding, Cake, Shirt, Cloud, Cat, Code, Trophy, Apple } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useProModal } from "@/hooks/use-pro-modal";

interface SidebarProps {
  isPro: boolean;
}

export const Sidebar = ({
  isPro
}: SidebarProps) => {
  const proModal = useProModal();
  const router = useRouter();
  const pathname = usePathname();

  const onNavigate = (url: string, pro: boolean) => {
    if (pro && !isPro) {
      return proModal.onOpen();
    }

    return router.push(url);
  }

  const routes = [
    {
      icon: Home,
      href: '/app',
      label: "Home",
      pro: false,
    },
    {
      icon: Armchair,
      href: '/Furniture',
      label: "Furniture",
      pro: false,
    },
    {
      icon: PersonStanding,
      href: '/Characters',
      label: "Characters",
      pro: false,
    },
    {
      icon: Apple,
      href: '/Food',
      label: "Food",
      pro: false,
    },
    {
      icon: Shirt,
      href: '/Dress',
      label: "Dress",
      pro: false,
    },
    {
      icon: Cloud,
      href: '/Nature',
      label: "Nature",
      pro: false,
    },
    {
      icon: Cat,
      href: '/Animals',
      label: "Animals",
      pro: false,
    },
    {
      icon: Code,
      href: '/Technology',
      label: "Technology",
      pro: false,
    },
    {
      icon: Trophy,
      href: '/Sports',
      label: "Sports",
      pro: false,
    },
  ];

  return (
    <div className="overflow-x-auto space-y-4 flex flex-col h-full text-primary bg-secondary scrollbar-thin scrollbar-thumb-black scrollbar-track-white">
      <div className="p-3 flex-1 flex justify-center">
        <div className="space-y-2">
          {routes.map((route) => (
            <div
              onClick={() => onNavigate(route.href, route.pro)}
              key={route.href}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href && "bg-primary/10 text-primary",
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <route.icon className="h-5 w-5" />
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
