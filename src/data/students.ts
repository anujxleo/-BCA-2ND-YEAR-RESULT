import { PlaceHolderImages } from "@/lib/placeholder-images";

export interface Student {
  name: string;
  rollNo: string;
  dob: string;
  avatar: string; // URL to image
  results: {
    semester: number;
    url: string;
  }[];
}

const studentImages = PlaceHolderImages.filter(
  (img) => img.imageHint === "student portrait"
);

export const students: Student[] = [
  {
    name: "GAURAV YADAV",
    rollNo: "23001311033",
    dob: "03/04/2005",
    avatar:
      studentImages.find((img) => img.id === "student-6")?.imageUrl ||
      "https://picsum.photos/seed/6/200/200",
    results: [
      {
        semester: 1,
        url: "https://vbspuresult.org.in/Home/ViewStudentResult?Year=I&ENROL_NO=PU23/100331&ID=995517",
      },
      {
        semester: 2,
        url: "https://vbspuresult.org.in/Home/ViewStudentResult?Year=II&ENROL_NO=PU23/100331&ID=7597370",
      },
      {
        semester: 3,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=III&ENROL_NO=23001311033&ID=1940",
      },
      {
        semester: 4,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=IV&ENROL_NO=23001311033&ID=176076",
      },
    ],
  },
  {
    name: "KUNAL YADAV",
    rollNo: "23001311045",
    dob: "27/03/2004",
    avatar:
      studentImages.find((img) => img.id === "student-9")?.imageUrl ||
      "https://picsum.photos/seed/9/200/200",
    results: [
      {
        semester: 1,
        url: "https://vbspuresult.org.in/Home/ViewStudentResult?Year=I&ENROL_NO=PU23/100343&ID=995529",
      },
      {
        semester: 2,
        url: "https://vbspuresult.org.in/Home/ViewStudentResult?Year=II&ENROL_NO=PU23/100343&ID=7597382",
      },
      {
        semester: 3,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=III&ENROL_NO=23001311045&ID=1937",
      },
      {
        semester: 4,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=IV&ENROL_NO=23001311045&ID=176129",
      },
    ],
  },
  {
    name: "KRISHNA YADAV ",
    rollNo: "23001311043",
    dob: "24/04/2005",
    avatar:
      studentImages.find((img) => img.id === "student-1")?.imageUrl ||
      "data:image/jpeg;base64,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",
    results: [
      {
        semester: 1,
        url: "https://vbspuresult.org.in/Home/ViewStudentResult?Year=I&ENROL_NO=PU23/100341&ID=995527",
      },
      {
        semester: 2,
        url: "https://vbspuresult.org.in/Home/ViewStudentResult?Year=II&ENROL_NO=PU23/100341&ID=7597380",
      },
      {
        semester: 3,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=III&ENROL_NO=23001311043&ID=1892",
      },
      {
        semester: 4,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=IV&ENROL_NO=23001311043&ID=176087",
      },
    ],
  },
  {
    name: "KISHAN YADAV",
    rollNo: "23001311042",
    dob: "05/09/2006",
    avatar:
      studentImages.find((img) => img.id === "student-2")?.imageUrl ||
      "https://picsum.photos/seed/2/200/200",
    results: [
      {
        semester: 1,
        url: "https://vbspuresult.org.in/Home/ViewStudentResult?Year=I&ENROL_NO=PU23/100340&ID=995526",
      },
      {
        semester: 2,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=II&ENROL_NO=23001311042&ID=177974",
      },
      {
        semester: 3,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=III&ENROL_NO=23001311042&ID=1953",
      },
      {
        semester: 4,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=IV&ENROL_NO=23001311042&ID=176032",
      },
    ],
  },
  {
    name: "ANKIT CHAUHAN",
    rollNo: "23001311022",
    dob: "06/04/2006",
    avatar:
      studentImages.find((img) => img.id === "student-3")?.imageUrl ||
      "https://picsum.photos/seed/3/200/200",
    results: [
      {
        semester: 1,
        url: "https://vbspuresult.org.in/Home/ViewStudentResult?Year=I&ENROL_NO=PU23/100320&ID=995503",
      },
      {
        semester: 2,
        url: "https://vbspuresult.org.in/Home/ViewStudentResult?Year=II&ENROL_NO=PU23/100320&ID=7597359",
      },
      {
        semester: 3,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=III&ENROL_NO=23001311022&ID=1876",
      },
      {
        semester: 4,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=IV&ENROL_NO=23001311022&ID=176058",
      },
    ],
  },
  {
    name: "ANSHUMAN ASTHANA",
    rollNo: "23001311026",
    dob: "12/09/2005",
    avatar:
      studentImages.find((img) => img.id === "student-4")?.imageUrl ||
      "https://picsum.photos/seed/4/200/200",
    results: [
      {
        semester: 1,
        url: "https://vbspuresult.org.in/Home/ViewStudentResult?Year=I&ENROL_NO=PU23/100324&ID=995510",
      },
      {
        semester: 2,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=II&ENROL_NO=23001311026&ID=177981",
      },
      {
        semester: 3,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=III&ENROL_NO=23001311026&ID=1924",
      },
      {
        semester: 4,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=IV&ENROL_NO=23001311026&ID=176602",
      },
    ],
  },
  {
    name: "ANURAG YADAV",
    rollNo: "23001311029",
    dob: "01/01/2006",
    avatar:
      studentImages.find((img) => img.id === "student-5")?.imageUrl ||
      "https://picsum.photos/seed/5/200/200",
    results: [
      {
        semester: 1,
        url: "https://vbspuresult.org.in/Home/ViewStudentResult?Year=I&ENROL_NO=PU23/100327&ID=995513",
      },
      {
        semester: 2,
        url: "https://vbspuresult.org.in/Home/ViewStudentResult?Year=II&ENROL_NO=PU23/100327&ID=7597366",
      },
      {
        semester: 3,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=III&ENROL_NO=23001311029&ID=1926",
      },
      {
        semester: 4,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=IV&ENROL_NO=23001311029&ID=175824",
      },
    ],
  },

  {
    name: "HARSH SONI",
    rollNo: "23001311035",
    dob: "20/10/2003",
    avatar:
      studentImages.find((img) => img.id === "student-7")?.imageUrl ||
      "https://picsum.photos/seed/7/200/200",
    results: [
      {
        semester: 1,
        url: "https://vbspuresult.org.in/Home/ViewStudentResult?Year=I&ENROL_NO=PU23/100333&ID=995519",
      },
      {
        semester: 2,
        url: "https://vbspuresult.org.in/Home/ViewStudentResult?Year=II&ENROL_NO=PU23/100333&ID=7597372",
      },
      {
        semester: 3,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=III&ENROL_NO=23001311035&ID=1920",
      },
      {
        semester: 4,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=IV&ENROL_NO=23001311035&ID=175822",
      },
    ],
  },
  {
    name: "JOHNSON YADAV",
    rollNo: "23001311040",
    dob: "17/07/2007",
    avatar:
      studentImages.find((img) => img.id === "student-8")?.imageUrl ||
      "https://picsum.photos/seed/8/200/200",
    results: [
      {
        semester: 1,
        url: "https://vbspuresult.org.in/Home/ViewStudentResult?Year=I&ENROL_NO=PU23/100338&ID=995524",
      },
      {
        semester: 2,
        url: "https://vbspuresult.org.in/Home/ViewStudentResult?Year=II&ENROL_NO=PU23/100338&ID=7597377",
      },
      {
        semester: 3,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=III&ENROL_NO=23001311040&ID=1930",
      },
      {
        semester: 4,
        url: "https://vbspuresult.org.in/Home/ViewStudentResultNew?Year=IV&ENROL_NO=23001311040&ID=176188",
      },
    ],
  },
];
