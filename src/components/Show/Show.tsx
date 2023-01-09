export interface ShowProps {
  children: React.ReactNode;
  when: any;
}

export const Show: React.FC<ShowProps> = ({ when, children }) => {
  if (!when) return null;
  return <>{children}</>;
};
