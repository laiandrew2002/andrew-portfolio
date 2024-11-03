import useExplorerStore, { SubMenu } from '@/lib/store/useExplorerStore';
import SubCollapsableMenu from './SubCollapsableMenu';

export default function Outline() {
  const { outline } = useExplorerStore();

  return (
    <SubCollapsableMenu
      subMenuTitle="OUTLINE"
      subMenuButtons={[]}
      subMenu={SubMenu.OUTLINE}
      open={outline.open}
      maxHeight={outline.maxHeight}
    >
      <></>
    </SubCollapsableMenu>
  );
}