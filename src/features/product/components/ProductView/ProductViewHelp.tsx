import { useTranslation } from "next-i18next";

import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemHeader,
} from "@/components/Elements";

const ProductViewHelp: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="1">
        <AccordionItemHeader>{t("size_guide")}</AccordionItemHeader>
        <AccordionItemContent>
          <div className="product-view__help-accordion-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum venenatis dolor, ut
            fringilla nisi cursus quis. Nulla aliquam porta urna, a porta ipsum tincidunt a.
          </div>
        </AccordionItemContent>
      </AccordionItem>
      <AccordionItem value="2">
        <AccordionItemHeader>{t("product_care")}</AccordionItemHeader>
        <AccordionItemContent>
          <div className="product-view__help-accordion-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum venenatis dolor, ut
            fringilla nisi cursus quis. Nulla aliquam porta urna, a porta ipsum tincidunt a.
          </div>
        </AccordionItemContent>
      </AccordionItem>
      <AccordionItem value="3">
        <AccordionItemHeader>{t("delivery_information")}</AccordionItemHeader>
        <AccordionItemContent>
          <div className="product-view__help-accordion-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum venenatis dolor, ut
            fringilla nisi cursus quis. Nulla aliquam porta urna, a porta ipsum tincidunt a.
          </div>
        </AccordionItemContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductViewHelp;
