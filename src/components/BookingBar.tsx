import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { MapPin, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ---------- TIME DATA ---------- */
const hours = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0")
);
const minutes = Array.from({ length: 60 }, (_, i) =>
  String(i).padStart(2, "0")
);
const meridiem = ["AM", "PM"];

/* ---------- CALENDAR ---------- */
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getMonthDays = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  return { firstDay, totalDays };
};

export default function BookingBar() {
  const [tripType, setTripType] = useState<"oneway" | "hourly">("oneway");

  const [openCalendar, setOpenCalendar] = useState(false);
  const [openTime, setOpenTime] = useState(false);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const [hour, setHour] = useState("05");
  const [minute, setMinute] = useState("35");
  const [ampm, setAmpm] = useState("AM");

  const calendarRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);

  /* ---------- OUTSIDE CLICK ---------- */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!calendarRef.current?.contains(e.target as Node)) {
        setOpenCalendar(false);
      }
      if (!timeRef.current?.contains(e.target as Node)) {
        setOpenTime(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const { firstDay, totalDays } = getMonthDays(year, month);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-6"
    >
      <div className="bg-white rounded-full p-4 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">

          {/* ONE WAY / HOURLY */}
          <div className="flex gap-2 bg-muted p-2 rounded-full justify-center">
            <button
              onClick={() => setTripType("oneway")}
              className={`px-6 py-2 rounded-full text-sm transition ${
                tripType === "oneway"
                  ? "bg-primary text-white"
                  : "hover:bg-muted"
              }`}
            >
              One Way
            </button>
            <button
              onClick={() => setTripType("hourly")}
              className={`px-6 py-2 rounded-full text-sm transition ${
                tripType === "hourly"
                  ? "bg-primary text-white"
                  : "hover:bg-muted"
              }`}
            >
              Hourly
            </button>
          </div>

          {/* PICKUP */}
          <div className="flex-1 flex items-center gap-3 px-4 py-3 border rounded-xl">
            <MapPin className="w-5 h-5 text-primary" />
            <input
              placeholder="Pickup Location"
              className="w-full outline-none"
            />
          </div>

          {/* DROPOFF */}
          <div className="flex-1 flex items-center gap-3 px-4 py-3 border rounded-xl">
            <MapPin className="w-5 h-5 text-primary" />
            <input
              placeholder="Dropoff Location"
              className="w-full outline-none"
            />
          </div>

          {/* CALENDAR */}
          <div ref={calendarRef} className="relative flex-1">
            <button
              onClick={() => setOpenCalendar(!openCalendar)}
              className="flex items-center gap-3 w-full px-4 py-3 border rounded-xl"
            >
              <Calendar className="w-5 h-5 text-primary" />
              <span>
                {selectedDate
                  ? selectedDate.toDateString()
                  : "Select Date"}
              </span>
            </button>

            <AnimatePresence>
              {openCalendar && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-full mb-3 w-64 bg-white rounded-xl shadow-xl p-4 z-50"
                >
                  <div className="flex justify-between items-center mb-3">
                    <button
                      onClick={() =>
                        setCurrentMonth(new Date(year, month - 1, 1))
                      }
                    >
                      <ChevronLeft />
                    </button>
                    <p className="font-semibold">
                      {currentMonth.toLocaleString("default", {
                        month: "long",
                      })}{" "}
                      {year}
                    </p>
                    <button
                      onClick={() =>
                        setCurrentMonth(new Date(year, month + 1, 1))
                      }
                    >
                      <ChevronRight />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 text-center text-xs text-muted-foreground mb-2">
                    {days.map((d) => (
                      <div key={d}>{d}</div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center">
                    {[...Array(firstDay)].map((_, i) => (
                      <div key={i} />
                    ))}
                    {[...Array(totalDays)].map((_, i) => {
                      const date = new Date(year, month, i + 1);
                      const isSelected =
                        selectedDate?.toDateString() ===
                        date.toDateString();

                      return (
                        <button
                          key={i}
                          onClick={() => {
                            setSelectedDate(date);
                            setOpenCalendar(false);
                          }}
                          className={`py-2 rounded-lg text-sm ${
                            isSelected
                              ? "bg-primary text-white"
                              : "hover:bg-muted"
                          }`}
                        >
                          {i + 1}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* TIME */}
          <div ref={timeRef} className="relative flex-1">
            <button
              onClick={() => setOpenTime(!openTime)}
              className="flex items-center gap-3 w-full px-4 py-3 border rounded-xl"
            >
              <Clock className="w-5 h-5 text-primary" />
              <span>{hour}:{minute} {ampm}</span>
            </button>

            <AnimatePresence>
              {openTime && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-full mb-3 flex bg-white rounded-xl shadow-xl z-50"
                >
                  {[hours, minutes].map((list, idx) => (
                    <div
                      key={idx}
                      onWheel={(e) => e.stopPropagation()}
                      className="w-20 max-h-56 overflow-y-auto hide-scrollbar border-r"
                    >
                      {list.map((val) => (
                        <button
                          key={val}
                          onClick={() =>
                            idx === 0 ? setHour(val) : setMinute(val)
                          }
                          className="w-full py-2 hover:bg-muted"
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  ))}

                  <div className="w-20">
                    {meridiem.map((m) => (
                      <button
                        key={m}
                        onClick={() => setAmpm(m)}
                        className="w-full py-4 hover:bg-muted"
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* BOOK */}
          <Link to="/booking">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-primary text-white px-8 py-4 rounded-full"
            >
              Book Now
            </motion.button>
          </Link>
        </div>
      </div>

      {/* SCROLLBAR HIDE */}
      <style>{`
        .hide-scrollbar {
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.div>
  );
}
