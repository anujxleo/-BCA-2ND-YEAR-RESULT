"use client";

import { useState, useMemo } from 'react';
import type { Student } from '@/data/students';
import { Input } from '@/components/ui/input';
import { StudentCard } from '@/components/student-card';
import { Search, UserX } from 'lucide-react';

interface StudentSearchProps {
  students: Student[];
}

export default function StudentSearch({ students }: StudentSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudents = useMemo(() => {
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) {
      return students;
    }
    return students.filter(student =>
      student.name.toLowerCase().includes(trimmedQuery.toLowerCase())
    );
  }, [searchQuery, students]);

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          aria-label="Search student by name"
          placeholder="Search student by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 w-full text-base"
        />
      </div>
      
      {filteredStudents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
          {filteredStudents.map(student => (
            <StudentCard key={student.rollNo} student={student} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 px-4 bg-card rounded-lg shadow-sm border border-dashed flex flex-col items-center justify-center min-h-[200px] animate-in fade-in duration-300">
          <UserX className="h-12 w-12 text-muted-foreground/50 mb-4" />
          <p className="text-lg font-medium text-muted-foreground">No Students Found</p>
          <p className="text-sm text-muted-foreground/80">Try adjusting your search query.</p>
        </div>
      )}
    </div>
  );
}
