import { AnimatePresence, m } from "framer-motion";
import { CheckIcon } from "./Icons";

/** Small toast. The live region is always mounted so screen readers announce it. */
export function Toast({ message }: { message: string | null }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4"
    >
      <AnimatePresence>
        {message && (
          <m.div
            key={message}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-sm shadow-lg shadow-black/20"
          >
            <span className="grid size-5 place-items-center rounded-full bg-accent text-accent-ink">
              <CheckIcon width={12} height={12} strokeWidth={3} />
            </span>
            {message}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
