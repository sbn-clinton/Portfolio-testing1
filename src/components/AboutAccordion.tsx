import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AboutAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex flex-col gap-1 sm:gap-2 md:gap-5"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className=" text-xs sm:text-sm md:text-base font-semibold text-blue-500 px-2 text-start">
          01 Non consectetur a erat nam at lectus urna duis?
        </AccordionTrigger>
        <AccordionContent className="px-2 text-xs sm:text-sm md:text-base">
          Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat
          lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla
          urna porttitor rhoncus dolor purus non.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className=" text-xs sm:text-smmd:text-base  font-semibold text-blue-500 px-2 text-start">
          02 Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
        </AccordionTrigger>
        <AccordionContent className="px-2 text-xs sm:text-sm md:text-base">
          Dolor sit amet consectetur adipiscing elit pellentesque habitant
          morbi. Id interdum velit laoreet id donec ultrices. Fringilla
          phasellus faucibus scelerisque eleifend donec pretium. Est
          pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
          cursus turpis massa tincidunt dui.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className=" text-xs sm:text-sm md:text-base  font-semibold text-blue-500 px-2 text-start">
          03 Dolor sit amet consectetur adipiscing elit pellentesque?
        </AccordionTrigger>
        <AccordionContent className="px-2 text-xs sm:text-sm md:text-base">
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
