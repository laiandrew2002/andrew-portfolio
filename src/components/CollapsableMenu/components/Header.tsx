interface HeaderProps {
  menuTitle: string;
  children: React.ReactNode;
}

const Header = ({ menuTitle, children }: HeaderProps) => {
  return (
    <div className="my-2 ml-5 mr-3 flex select-none items-center justify-between text-xs uppercase">
      <h1>{menuTitle}</h1>
      <div className="flex">{children}</div>
    </div>
  );
};

export default Header;
