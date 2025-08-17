import useExplorerStore, { SubMenu } from '@/lib/store/useExplorerStore';
import SubCollapsableMenu from './SubCollapsableMenu';

const Timeline = () => {
  const { timeline } = useExplorerStore();
  return (
    <SubCollapsableMenu
      subMenuTitle="TIMELINE"
      subMenuButtons={[]}
      subMenu={SubMenu.TIMELINE}
      open={false}
      maxHeight={timeline.maxHeight}
    >
      <></>
    </SubCollapsableMenu>
  );
};

export default Timeline;
