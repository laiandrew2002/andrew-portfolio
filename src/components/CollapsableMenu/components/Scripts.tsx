import useExplorerStore, { SubMenu } from '@/lib/store/useExplorerStore';
import SubCollapsableMenu from './SubCollapsableMenu';

export default function Scripts() {
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
}
