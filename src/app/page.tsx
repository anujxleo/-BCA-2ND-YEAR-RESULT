import { students } from '@/data/students';
import StudentSearch from '@/components/student-search';
import ToppersList from '@/components/toppers-list';
import { BookOpenCheck } from 'lucide-react';

export default function Home() {
  // Assume the first three students are toppers for demonstration.
  const toppers = students.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary/90 backdrop-blur-sm sticky top-0 z-50 text-primary-foreground p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpenCheck className="h-8 w-8" />
            <h1 className="text-xl sm:text-2xl font-bold font-headline">BCA Result Portal</h1>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-primary font-headline tracking-tight">Find Your Result</h2>
              <StudentSearch students={students} />
            </section>
          </div>
          <div className="lg:col-span-1">
             <ToppersList toppers={toppers} />
          </div>
        </div>
      </main>

      <footer className="bg-primary/90 text-primary-foreground py-4 mt-8">
        <div className="container mx-auto text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} BCA Result Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
