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
    onChange({ hour12: h, minute: value?.minute ?? 0, period });
    setView("minutes");
  };

  const selectMinute = (m: number) => {
    const h = hour12 ?? 12;
    onChange({ hour12: h, minute: m, period });
    setOpen(false);
    setView("hours");
  };

  const numbers = view === "hours" ? HOURS : MINUTES;
  const activeNumber = view === "hours" ? hour12 : value?.minute ?? null;

  // hand angle (0deg points up, increases clockwise)
  const handAngle =
    view === "hours"
      ? hour12 != null
        ? HOURS.indexOf(hour12) * 30
        : null
      : value?.minute != null
        ? (value.minute / 5) * 30
        : null;

  const SIZE = 224; // clock diameter in px
  const C = SIZE / 2; // center
  const NUM_R = 92; // radius for numbers
  const HAND_LEN = NUM_R; // needle reaches the active number

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

        <p className="mb-2 text-center text-xs font-semibold text-muted-foreground">
          {view === "hours" ? "Select hour" : "Select minutes"}
        </p>

        {/* clock face */}
        <div
          className="relative mx-auto rounded-full border-2 border-secondary/20 bg-secondary/5"
          style={{ height: SIZE, width: SIZE }}
        >
          {/* needle (SVG so it lines up exactly with the active number) */}
          <svg
            className="pointer-events-none absolute inset-0 z-0"
            width={SIZE}
            height={SIZE}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
          >
            {handAngle != null && (
              <line
                x1={C}
                y1={C}
                x2={C + HAND_LEN * Math.sin((handAngle * Math.PI) / 180)}
                y2={C - HAND_LEN * Math.cos((handAngle * Math.PI) / 180)}
                stroke="var(--secondary)"
                strokeWidth={3}
                strokeLinecap="round"
              />
            )}
            <circle cx={C} cy={C} r={5} fill="var(--secondary)" />
          </svg>

          {numbers.map((n, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const x = C + NUM_R * Math.cos(angle);
            const y = C + NUM_R * Math.sin(angle);
            const isActive = activeNumber === n;
            return (
              <button
                key={n}
                type="button"
                onClick={() => (view === "hours" ? selectHour(n) : selectMinute(n))}
                style={{ left: x, top: y }}
                className={cn(
                  "absolute z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-sm font-bold transition-all",
                  isActive
                    ? "scale-110 bg-secondary text-secondary-foreground shadow-blue"
                    : "text-foreground hover:bg-secondary/20 active:bg-secondary active:text-secondary-foreground"
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
