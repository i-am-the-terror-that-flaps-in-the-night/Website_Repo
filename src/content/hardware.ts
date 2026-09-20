export type Machine = {
  id: string;
  name: string;
  status: "daily driver" | "incoming";
  specs: { label: string; value: string }[];
};

export const machines: Machine[] = [
  {
    id: "imac",
    name: "iMac M4",
    status: "daily driver",
    specs: [
      { label: "cpu", value: "8-core CPU" },
      { label: "gpu", value: "8-core GPU" },
      { label: "memory", value: "16 GB" },
      { label: "storage", value: "512 GB" },
    ],
  },
  {
    id: "g18",
    name: "ROG Strix G18",
    status: "incoming",
    specs: [
      { label: "gpu", value: "RTX 5080" },
      { label: "memory", value: "64 GB" },
      { label: "storage", value: "2 TB" },
    ],
  },
];
