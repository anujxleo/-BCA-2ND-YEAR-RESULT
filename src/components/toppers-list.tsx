import Image from 'next/image';
import type { Student } from '@/data/students';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Star } from 'lucide-react';

interface ToppersListProps {
  toppers: Student[];
}

export default function ToppersList({ toppers }: ToppersListProps) {
  const getStar = (index: number) => {
    if (index === 0) return <Star className="h-6 w-6 text-amber-300 fill-amber-300" aria-label="First place" />;
    if (index === 1) return <Star className="h-6 w-6 text-slate-300 fill-slate-300" aria-label="Second place" />;
    if (index === 2) return <Star className="h-6 w-6 text-yellow-600 fill-yellow-600" aria-label="Third place" />;
    return null;
  };

  return (
    <Card className="shadow-lg bg-gradient-to-br from-primary to-blue-900 text-primary-foreground sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl font-headline text-amber-300">
          <Crown className="h-8 w-8" />
          Class Toppers
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {toppers.map((topper, index) => (
            <li key={topper.rollNo} className="flex items-center gap-4 p-3 rounded-lg bg-primary/40 transition-all hover:bg-primary/60 cursor-pointer">
              <Image
                src={topper.avatar}
                alt={`Portrait of ${topper.name}`}
                width={40}
                height={40}
                className="rounded-full border-2 border-amber-300 object-cover"
                data-ai-hint="student portrait"
              />
              <div className="flex-grow overflow-hidden">
                <p className="font-semibold truncate">{topper.name}</p>
                <p className="text-sm text-primary-foreground/80">Roll: {topper.rollNo}</p>
              </div>
              <div className="flex-shrink-0">
                {getStar(index)}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
