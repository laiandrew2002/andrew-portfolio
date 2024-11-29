import { create } from "zustand";

export interface Section {
  index: number;
  id: string;
  title: string;
}

interface ObjectLiteral {
  [key: string]: boolean;
}

interface SectionState {
  sections: Section[];
  sectionsOrder: Section[];
  visible: ObjectLiteral;
  setSections: (sections: Section[]) => void;
  resetVisible: () => void;
  setVisible: (key: string) => void;
  setHidden: (key: string) => void;
}

const useSectionStore = create<SectionState>((set, get) => ({
  sections: [],
  sectionsOrder: [],
  visible: {},

  setSections: (sections) =>
    set((state) => ({
      sections,
      sectionsOrder: state.sectionsOrder,
      visible: state.visible,
    })),

  resetVisible: () =>
    set((state) => ({
      sections: state.sections,
      sectionsOrder: [],
      visible: {},
    })),

  setVisible: (key) => {
    const { sections, sectionsOrder } = get();
    const item = sections.find((val) => val.id === key);

    if (!item) return; // Avoid setting if item does not exist

    const newArr = [...sectionsOrder];
    if (newArr.length === 0) {
      newArr.push(item);
    } else if (newArr[0].index > item.index) {
      newArr.splice(0, 0, item);
    } else {
      let i = 1;
      while (i < newArr.length && newArr[i].index < item.index) {
        i++;
      }
      newArr.splice(i, 0, item);
    }

    set((state) => ({
      sections: state.sections,
      sectionsOrder: newArr,
      visible: {
        ...state.visible,
        [key]: true,
      },
    }));
  },

  setHidden: (key) => {
    const { sectionsOrder } = get();
    const newArr = [...sectionsOrder];
    const itemIndex = newArr.findIndex((val) => val.id === key);

    if (itemIndex !== -1) {
      newArr.splice(itemIndex, 1);
    }

    set((state) => ({
      sections: state.sections,
      sectionsOrder: newArr,
      visible: {
        ...state.visible,
        [key]: false,
      },
    }));
  },
}));

export default useSectionStore;
