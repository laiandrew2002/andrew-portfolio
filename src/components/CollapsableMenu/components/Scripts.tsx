import useExplorerStore, { SubMenu } from '@/lib/store/useExplorerStore';
import SubCollapsableMenu from './SubCollapsableMenu';

const Scripts = () => {
  const { scripts } = useExplorerStore();
  return (
    <SubCollapsableMenu
      subMenuTitle="SCRIPTS"
      subMenuButtons={[]}
      subMenu={SubMenu.SCRIPTS}
      open={scripts.open}
      maxHeight={scripts.maxHeight}
    >
      <></>
    </SubCollapsableMenu>
  );
};

export default Scripts;
