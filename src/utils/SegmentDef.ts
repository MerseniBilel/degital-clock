interface SingleSegment {
  top: string[];
  bottom: string[];
}

export const SegmentDefinition: {
  [key: string]: SingleSegment;
} = {
  "0": {
    top: ["white", "white", "black", "white"],
    bottom: ["black", "white", "white", "white"],
  },
  "1": {
    top: ["black", "white", "black", "black"],
    bottom: ["black", "white", "black", "black"],
  },
  "2": {
    top: ["white", "white", "white", "black"],
    bottom: ["white", "black", "white", "white"],
  },
  "3": {
    top: ["white", "white", "white", "black"],
    bottom: ["white", "white", "white", "black"],
  },
  "4": {
    top: ["black", "white", "white", "white"],
    bottom: ["black", "white", "black", "black"],
  },
  "5": {
    top: ["white", "black", "white", "white"],
    bottom: ["black", "white", "white", "black"],
  },
  "6": {
    top: ["white", "black", "white", "white"],
    bottom: ["black", "white", "white", "white"],
  },
  "7": {
    top: ["white", "White", "black", "black"],
    bottom: ["black", "white", "black", "black"],
  },
  "8": {
    top: ["white", "white", "white", "white"],
    bottom: ["black", "white", "white", "white"],
  },
  "9": {
    top: ["white", "white", "white", "white"],
    bottom: ["black", "white", "white", "black"],
  },
};
