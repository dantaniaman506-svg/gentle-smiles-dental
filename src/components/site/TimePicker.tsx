import { useState } from "react";
import { Clock } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export type TimeValue = { hour12: number; minute: number; period: "AM" | "PM" };

export function timeToMinutes(t: TimeValue): number {
  let h = t.hour12 % 12;
  if (t.period === "PM") h += 12;
  return h * 60 + t.minute;
}

export function formatTime(t: TimeValue): string {
  return `${t.hour12}:${t.minute.toString().padStart(2, "0")} ${t.period}`;
}

const HOURS = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const MINUTES = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

type View = "hours" | "minutes";

interface Props {
  value: TimeValue | null;
  onChange: (v: TimeValue) => void;
  placeholder?: string;
  triggerClassName?: string;
}

export function TimePicker({ value, onChange, placeholder = "Pick a time", triggerClassName }: Props) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("hours");
  const [period, setPeriod] = useState<"AM" | "PM">(value?.period ?? "AM");
  const [hour12, setHour12] = useState<number | null>(value?.hour12 ?? null);

  const selectHour = (h: number) => {
    setHour12(h);
    setView("minutes");
    onChange({ hour12: h, minute: value?.minute ?? 0, period });
  };

  const selectMinute = (m: number) => {
    const h = hour12 ?? 12;
    onChange({ hour12: h, minute: m, period });
    setOpen(false);
    setView("hours");
  };

  const numbers = view === "hours" ? HOURS : MINUTES;
  const activeNumber = view === "hours" ? hour12 : value?.minute ?? null;
  // hand angle
  const handAngle =
    view === "hours"
      ? hour12 != null
        ? (HOURS.indexOf(hour12) * 30)
        : null
      : value?.minute != null
        ? (value.minute / 5) * 30
        : null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn("flex items-center gap-2 text-left", !value && "text-muted-foreground", triggerClassName)}
        >
          <Clock className="h-4 w-4 text-secondary" />
          {value ? formatTime(value) : placeholder}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto rounded-2xl border-secondary/20 bg-card p-4" align="start">
        {/* digital header */}
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1 font-display text-2xl font-extrabold">
            <button
              type="button"
              onClick={() => setView("hours")}
              className={cn(
                "rounded-lg px-2 py-1 transition-colors",
                view === "hours" ? "bg-secondary text-secondary-foreground" : "text-foreground hover:bg-accent"
              )}
            >
              {hour12 != null ? hour12 : "--"}
            </button>
            <span className="text-foreground">:</span>
            <button
              type="button"
              onClick={() => setView("minutes")}
              className={cn(
                "rounded-lg px-2 py-1 transition-colors",
                view === "minutes" ? "bg-secondary text-secondary-foreground" : "text-foreground hover:bg-accent"
              )}
            >
              {value?.minute != null ? value.minute.toString().padStart(2, "0") : "--"}
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {(["AM", "PM"] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => {
                  setPeriod(p);
                  if (hour12 != null) onChange({ hour12, minute: value?.minute ?? 0, period: p });
                }}
                className={cn(
                  "rounded-md px-2 py-0.5 text-xs font-bold transition-colors",
                  period === p ? "bg-secondary text-secondary-foreground" : "bg-accent text-foreground hover:bg-secondary/20"
                )}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* clock face */}
        <div className="relative mx-auto h-56 w-56 rounded-full bg-secondary/10">
          {/* center dot */}
          <div className="absolute left-1/2 top-1/2 z-10 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary" />
          {/* hand */}
          {handAngle != null && (
            <div
              className="absolute left-1/2 top-1/2 z-0 h-[78px] w-0.5 origin-bottom -translate-x-1/2 -translate-y-full bg-secondary"
              style={{ transform: `translate(-50%, -100%) rotate(${handAngle}deg)` }}
            />
          )}
          {numbers.map((n, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const radius = 96;
            const x = 112 + radius * Math.cos(angle);
            const y = 112 + radius * Math.sin(angle);
            const isActive = activeNumber === n;
            return (
              <button
                key={n}
                type="button"
                onClick={() => (view === "hours" ? selectHour(n) : selectMinute(n))}
                style={{ left: x, top: y }}
                className={cn(
                  "absolute z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-sm font-bold transition-colors",
                  isActive
                    ? "bg-secondary text-secondary-foreground"
                    : "text-foreground hover:bg-secondary/20"
                )}
              >
                {view === "minutes" ? n.toString().padStart(2, "0") : n}
              </button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
