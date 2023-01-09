import { DesktopBar } from "./DesktopBar";
import { DesktopMenu } from "./DesktopMenu";
import { MobileBar } from "./MobileBar";
import { MobileMenu } from "./MobileMenu";
import { Search } from "./Search";

export interface HeaderProps {
  transparent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ transparent }) => {
  return (
    <>
      <DesktopBar transparent={transparent} />
      <DesktopMenu />
      <MobileBar transparent={transparent} />
      <MobileMenu />
      <Search />
    </>
  );
};
