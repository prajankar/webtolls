import { useState } from "react";
import { tools } from "@/data/tools";
import ToolLayout from "@/components/tools/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Cake } from "lucide-react";

const tool = tools.find(t => t.slug === "age-calculator")!;

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;
    const totalHours = totalDays * 24;

    // Next birthday
    const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const daysUntilBirthday = Math.floor((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    setResult({
      years, months, days,
      totalDays, totalWeeks, totalMonths, totalHours,
      daysUntilBirthday,
      nextBirthdayAge: years + 1
    });
  };

  return (
    <ToolLayout tool={tool}>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 space-y-2">
            <Label htmlFor="birthdate">Date of Birth</Label>
            <Input
              id="birthdate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="h-12"
            />
          </div>
          <Button onClick={calculate} className="h-12 sm:self-end gap-2">
            <Calendar className="w-4 h-4" />
            Calculate Age
          </Button>
        </div>

        {result && (
          <div className="space-y-6 animate-fade-in">
            <div className="p-6 bg-primary/10 rounded-xl text-center">
              <p className="text-sm text-muted-foreground mb-2">Your Age</p>
              <p className="text-3xl font-bold text-foreground">
                {result.years} Years, {result.months} Months, {result.days} Days
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Total Years", value: result.years },
                { label: "Total Months", value: result.totalMonths.toLocaleString() },
                { label: "Total Weeks", value: result.totalWeeks.toLocaleString() },
                { label: "Total Days", value: result.totalDays.toLocaleString() },
              ].map((stat) => (
                <div key={stat.label} className="p-4 bg-muted/50 rounded-xl text-center">
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-accent/10 rounded-xl flex items-center gap-4">
              <Cake className="w-8 h-8 text-accent" />
              <div>
                <p className="font-semibold text-foreground">
                  {result.daysUntilBirthday === 0 ? "🎉 Happy Birthday!" : 
                   `${result.daysUntilBirthday} days until your birthday!`}
                </p>
                <p className="text-sm text-muted-foreground">
                  You will turn {result.nextBirthdayAge} years old
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default AgeCalculator;
