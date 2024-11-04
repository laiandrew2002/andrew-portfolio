interface HeaderProps {
  menuTitle: string;
  children: React.ReactNode;
}

const Header = ({ menuTitle, children }: HeaderProps) => {
  return (
    <div className="flex uppercase text-xs ml-5 mr-3 my-2 select-none items-center justify-between">
      <h1>{menuTitle}</h1>
      <div className="flex">{children}</div>
    </div>
  );
}

export default Header;
