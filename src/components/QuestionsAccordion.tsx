import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RxQuestionMarkCircled } from "react-icons/rx";

export function QuestionsAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex flex-col gap-3 md:gap-5 my-10"
    >
      <AccordionItem value="item-1" className=" bg-white p-1 md:p-3">
        <AccordionTrigger className="text-xs sm:text-sm md:text-base font-medium md:font-semibold text-blue-800 px-2 text-start hover:text-sky-500">
          <RxQuestionMarkCircled className="w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 text-sky-400 mx-2" />
          Non consectetur a erat nam at lectus urna duis?
        </AccordionTrigger>
        <AccordionContent className="px-10 text-xs sm:text-sm md:text-base">
          Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat
          lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla
          urna porttitor rhoncus dolor purus non.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className=" bg-white p-1 md:p-3">
        <AccordionTrigger className="text-xs sm:text-sm md:text-base font-medium md:font-semibold text-blue-800 px-2 text-start hover:text-sky-500">
          <RxQuestionMarkCircled className=" w-3 h-3 sm:w-5 sm:h-5  md:w-7 md:h-7 text-sky-400 mx-2" />
          Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
        </AccordionTrigger>
        <AccordionContent className="px-10 text-xs sm:text-sm md:text-base">
          Dolor sit amet consectetur adipiscing elit pellentesque habitant
          morbi. Id interdum velit laoreet id donec ultrices. Fringilla
          phasellus faucibus scelerisque eleifend donec pretium. Est
          pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
          cursus turpis massa tincidunt dui.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className=" bg-white p-1 md:p-3">
        <AccordionTrigger className="text-xs sm:text-sm md:text-base font-medium md:font-semibold text-blue-800 px-2 text-start hover:text-sky-500">
          <RxQuestionMarkCircled className=" w-3 h-3 sm:w-5 sm:h-5  md:w-7 md:h-7 text-sky-400 mx-2" />
          Dolor sit amet consectetur adipiscing elit pellentesque?
        </AccordionTrigger>
        <AccordionContent className="px-10 text-xs sm:text-sm md:text-base">
          Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis
          orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra
          diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt.
          Lectus urna duis convallis convallis tellus. Urna molestie at
          elementum eu facilisis sed odio morbi quis
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className=" bg-white p-1 md:p-3">
        <AccordionTrigger className="text-xs sm:text-sm md:text-base font-medium md:font-semibold text-blue-800 px-2 text-start hover:text-sky-500">
          <RxQuestionMarkCircled className=" w-3 h-3 sm:w-5 sm:h-5  md:w-7 md:h-7 text-sky-400 mx-2" />
          Dolor sit amet consectetur adipiscing elit pellentesque?
        </AccordionTrigger>
        <AccordionContent className="px-10 text-xs sm:text-sm md:text-base">
          Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis
          orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra
          diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt.
          Lectus urna duis convallis convallis tellus. Urna molestie at
          elementum eu facilisis sed odio morbi quis
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className=" bg-white p-1 md:p-3">
        <AccordionTrigger className="text-xs sm:text-sm md:text-base font-medium md:font-semibold text-blue-800 px-2 text-start hover:text-sky-500">
          <RxQuestionMarkCircled className="w-3 h-3 sm:w-5 sm:h-5  md:w-7 md:h-7 text-sky-400 mx-2" />
          Dolor sit amet consectetur adipiscing elit pellentesque?
        </AccordionTrigger>
        <AccordionContent className="px-10 text-xs sm:text-sm md:text-base">
          Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis
          orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra
          diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt.
          Lectus urna duis convallis convallis tellus. Urna molestie at
          elementum eu facilisis sed odio morbi quis
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
