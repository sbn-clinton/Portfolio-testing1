"use client";

import { QuestionsAccordion } from "./QuestionsAccordion";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";

const Questions = () => {
  return (
    <section id="questions" className=" bg-sky-100 py-5">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center mt-10"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-blue-500 text-center">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <Separator className="mt-6 w-20 md:w-28 bg-sky-500 rounded-full" />
        <Separator className="w-20 md:w-28 bg-sky-500 rounded-full" />
        <Separator className="w-40 md:w-60 bg-slate-400" />
        <Separator className="w-20 md:w-28 bg-sky-500 rounded-full" />
        <p className="text-slate-500 text-center px-4 mt-6">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className=" max-w-4xl md:mx-auto mx-4 "
      >
        <QuestionsAccordion />
      </motion.div>
    </section>
  );
};

export default Questions;
