import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { User, CreditCard, Keyboard, Settings } from "lucide-react";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="">DropDown</AccordionTrigger>
        <AccordionContent className=" ps-2">
          <div className="flex flex-col gap-3">
            <div className="flex">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </div>
            <div className="flex">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </div>
            <div className="flex">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </div>
            <div className="flex">
              <Keyboard className="mr-2 h-4 w-4" />
              <span>Keyboard shortcuts</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
