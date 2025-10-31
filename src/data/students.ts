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
    name: "KRISHNA YADAV ",
    rollNo: "23001311043",
    dob: "24/04/2005",
    avatar:
      studentImages.find((img) => img.id === "student-1")?.imageUrl ||
      "https://photos.app.goo.gl/ZKxzyDiHDkiuwQK16/1/200/200",
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
];
