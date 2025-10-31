import Image from 'next/image';
import type { Student } from '@/data/students';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronsRight, FileText, GraduationCap } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";

interface StudentCardProps {
  student: Student;
}

export function StudentCard({ student }: StudentCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/50">
      <CardHeader className="flex flex-col sm:flex-row gap-4 items-center">
        <Image
          src={student.avatar}
          alt={`Portrait of ${student.name}`}
          width={80}
          height={80}
          className="rounded-full border-4 border-primary/20 object-cover flex-shrink-0"
          data-ai-hint="student portrait"
        />
        <div className="text-center sm:text-left">
          <CardTitle className="font-headline text-xl">{student.name}</CardTitle>
          <div className="text-muted-foreground text-sm mt-2 space-y-1">
            <p className="flex items-center gap-2 justify-center sm:justify-start">
              <GraduationCap className="h-4 w-4" />
              <span>Roll No: {student.rollNo}</span>
            </p>
            <p className="flex items-center gap-2 justify-center sm:justify-start">
              <Calendar className="h-4 w-4" />
              <span>DOB: {student.dob}</span>
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow"></CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-shadow">
              View All Semesters
              <ChevronsRight className="ml-2 h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl">{student.name}'s Results</DialogTitle>
              <DialogDescription>Click on a semester to view the official result in a new tab.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {student.results.map((result) => (
                <Button key={result.semester} variant="outline" asChild className="transition-all hover:border-accent hover:text-accent">
                  <a href={result.url} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center w-full">
                    <span className="flex items-center">
                      <FileText className="inline-block mr-2 h-4 w-4" />
                      Semester {result.semester} Result
                    </span>
                    <ChevronsRight className="h-4 w-4 text-muted-foreground" />
                  </a>
                </Button>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
