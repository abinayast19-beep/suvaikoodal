import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "Are your products homemade?",
      answer:
        "Yes. All our products are freshly prepared at home using premium quality ingredients.",
    },
    {
      question: "Do you use preservatives?",
      answer:
        "No. We never use artificial preservatives, colours or flavours.",
    },
    {
      question: "Do you accept bulk orders?",
      answer:
        "Yes. We accept bulk orders, return gifts and customized gift packs.",
    },
    {
      question: "How can I order?",
      answer:
        "You can order directly through WhatsApp by clicking the Order Now button.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#FAF6F0] py-20">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-[#6B1E3B] font-semibold uppercase tracking-widest">
            FAQ
          </p>

          <h2 className="text-5xl font-bold text-[#6B1E3B] mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="w-full flex justify-between items-center p-6 text-left font-semibold"
              >
                {faq.question}

                <span className="text-2xl">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;