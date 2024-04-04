
    import { Menu } from "lucide-react";

    import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
    import { Sidebar } from "@/components/sidebar";
    
    export const Mobilesidebar = ({
      isPro
    }: {
      isPro: boolean;
    }) => {
      return (
        <Sheet>
          <SheetTrigger className="md:hidden pr-4">
            <Menu />
          </SheetTrigger>
          <SheetContent side="left" className="p-0 text-white pt-10 w-32">
            <Sidebar isPro={isPro} />
          </SheetContent>
        </Sheet>
      );
    };
 
export default Mobilesidebar