import { Section } from "@/components/Elements";

import { Categories, CategoriesSidebar, Products, SortingBar } from "./parts";

const ShopContainer: React.FC = () => {
  return (
    <Section className="shop">
      <div className="shop__container">
        <aside className="shop__categories">
          <Categories />
          <CategoriesSidebar />
        </aside>
        <div className="shop__products">
          <SortingBar />
          <Products />
        </div>
      </div>
    </Section>
  );
};

export default ShopContainer;
