import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isTech = theme === "tech";

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <span
        className={`text-[11px] transition-all duration-200 ease-out hidden sm:inline hover:-translate-y-[2px] ${
          !isTech 
            ? "opacity-100 font-semibold text-foreground" 
            : "opacity-50 text-muted-foreground hover:opacity-100"
        }`}
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Luxury
      </span>

      <div
        className="rounded-[50px] p-[3px]"
        style={{
          background: "rgba(255, 255, 255, 0.06)",
          backdropFilter: "blur(12px) saturate(1.4)",
          WebkitBackdropFilter: "blur(12px) saturate(1.4)",
          border: "1px solid rgba(129, 137, 152, 0.45)",
          boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 4px 16px rgba(0, 0, 0, 0.25)",
          animation: isHovered ? "none" : "liquid-morph 6s ease-in-out infinite",
          borderRadius: isHovered ? "50px" : undefined,
          transition: isHovered ? "border-radius 300ms ease-out" : undefined,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={toggleTheme}
          className={`relative w-[72px] h-[36px] rounded-full transition-all duration-[600ms] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] focus:outline-none focus:ring-2 focus:ring-ring/40 flex-shrink-0 animate-[${isTech ? 'glow-breathe-tech' : 'glow-breathe-luxury'}_3.5s_ease-in-out_infinite]`}
          style={{
            background: isTech
              ? "linear-gradient(135deg, #0F1117, #1a1f2e)"
              : "linear-gradient(135deg, #F5F0E8, #E8D5B7)",
          }}
          aria-label={isTech ? "Switch to Luxury" : "Switch to Tech"}
        >
          {/* Luxury icon - left side */}
          <span
            className={`absolute left-2 top-1/2 -translate-y-1/2 text-sm transition-opacity duration-300 ${
              !isTech ? "opacity-100" : "opacity-30"
            }`}
            style={{ color: "#C4A882" }}
          >
            ✦
          </span>

          {/* Tech icon - right side */}
          <span
            className={`absolute right-2 top-1/2 -translate-y-1/2 text-sm transition-opacity duration-300 ${
              isTech ? "opacity-100" : "opacity-30"
            }`}
            style={{ color: "#00D4FF" }}
          >
            ⚡
          </span>

          {/* Clouds (luxury mode) */}
          <span
            className={`absolute left-[18px] top-[6px] w-2 h-1.5 rounded-full transition-opacity duration-500 ${
              !isTech ? "opacity-60" : "opacity-0"
            }`}
            style={{ background: "rgba(255,255,255,0.7)" }}
          />
          <span
            className={`absolute left-[28px] top-[10px] w-1.5 h-1 rounded-full transition-opacity duration-500 ${
              !isTech ? "opacity-40" : "opacity-0"
            }`}
            style={{ background: "rgba(255,255,255,0.5)" }}
          />

          {/* Stars (tech mode) */}
          <span
            className={`absolute left-[20px] top-[8px] w-1 h-1 rounded-full transition-opacity duration-500 ${
              isTech ? "opacity-100 animate-[twinkle_2s_infinite]" : "opacity-0"
            }`}
            style={{ background: "white", animationDelay: "0s" }}
          />
          <span
            className={`absolute left-[32px] top-[22px] w-[3px] h-[3px] rounded-full transition-opacity duration-500 ${
              isTech ? "opacity-100 animate-[twinkle_2s_infinite_0.7s]" : "opacity-0"
            }`}
            style={{ background: "white", animationDelay: "0.7s" }}
          />

          {/* Knob */}
          <span
            className="absolute top-[3px] w-[30px] h-[30px] rounded-full transition-all duration-[600ms] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"
            style={{
              left: isTech ? "calc(100% - 33px)" : "3px",
              background: isTech ? "#1a1f2e" : "#FDFBF8",
              boxShadow: isTech
                ? "0 0 8px rgba(0,212,255,0.4), inset 0 0 4px rgba(0,212,255,0.15)"
                : "0 0 8px rgba(196,168,130,0.3), inset 0 0 4px rgba(139,115,85,0.1)",
              border: isTech ? "1.5px solid rgba(0,212,255,0.3)" : "1.5px solid rgba(196,168,130,0.4)",
            }}
          />
        </button>
      </div>

      <span
        className={`text-[11px] transition-all duration-200 ease-out hidden sm:inline hover:-translate-y-[2px] ${
          isTech 
            ? "opacity-100 font-semibold text-foreground" 
            : "opacity-50 text-muted-foreground hover:opacity-100"
        }`}
      >
        Tech
      </span>
    </div>
  );
}
