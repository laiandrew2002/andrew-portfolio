import { CloseAll, NewFile, SaveAll } from "@/icons";
import SubCollapsableMenu from "./SubCollapsableMenu";
import useExplorerStore, { SubMenu } from "@/lib/store/useExplorerStore";

const Editors = () => {
  const { editor } = useExplorerStore();

  return (
    <SubCollapsableMenu
      subMenuTitle="OPEN EDITORS"
      subMenuButtons={[
        { id: 0, button: <NewFile /> },
        { id: 1, button: <SaveAll /> },
        { id: 2, button: <CloseAll /> },
      ]}
      subMenu={SubMenu.EDITOR}
      open={editor.open}
      maxHeight={editor.maxHeight}
    >
      <></>
    </SubCollapsableMenu>
  );
};

export default Editors;
