import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "next-i18next";

import {
  Dropdown,
  DropdownMenu,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownTrigger,
} from "@/components/Elements";

import { useShopStore } from "../store";

export const SortingBar: React.FC = () => {
  const { t } = useTranslation();

  const setShopCategoriesSidebarOpen = useShopStore((store) => store.setShopCategoriesSidebarOpen);

  return (
    <div
      className="shop__sorting-bar"
      role="button"
      onClick={() => setShopCategoriesSidebarOpen(true)}
    >
      <div className="sorting-bar__item navigation-sidebar-trigger">
        <span>{t("filters")}</span>
        <span>
          <ChevronDownIcon className="h-5 w-5" />
        </span>
      </div>

      <Dropdown>
        <DropdownTrigger asChild>
          <div className="sorting-bar__item" role="button">
            <span>{t("sort.by")}</span>
            <span>
              <ChevronDownIcon className="h-5 w-5" />
            </span>
          </div>
        </DropdownTrigger>
        <DropdownMenu side="bottom" align="end">
          <DropdownMenuRadioGroup value="price_asc">
            <DropdownMenuRadioItem value="newest">{t("sort.newest")}</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="price_asc">{t("sort.price_asc")}</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="price_desc">{t("sort.price_desc")}</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
