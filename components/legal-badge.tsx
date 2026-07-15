import { ShieldCheck } from "lucide-react"

export function LegalBadge() {
  return (
    <div className="bg-background border border-border rounded-2xl p-6 shadow-sm flex flex-col justify-between h-full">

      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center shrink-0">
          <ShieldCheck className="h-6 w-6 text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-base font-bold text-foreground leading-tight">Fully Licensed &amp; Registered</p>
          <p className="text-sm text-muted-foreground mt-0.5">Australian Company — ASIC Registered</p>
        </div>
        <div className="shrink-0 bg-accent/10 border border-accent/25 rounded-lg px-3 py-1.5">
          <p className="text-xs font-bold text-accent whitespace-nowrap">ACN 692 851 700</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border my-4" />

      {/* Details grid — 2×2 */}
      <div className="grid grid-cols-2 gap-3 flex-1">
        <div className="bg-secondary rounded-xl p-3.5">
          <p className="text-xs text-muted-foreground mb-1">Registered Legal Name</p>
          <p className="text-sm font-semibold text-foreground">AUSINDO PTY LTD</p>
        </div>
        <div className="bg-secondary rounded-xl p-3.5">
          <p className="text-xs text-muted-foreground mb-1">Company Type</p>
          <p className="text-sm font-semibold text-foreground">Proprietary Limited</p>
        </div>
        <div className="bg-secondary rounded-xl p-3.5">
          <p className="text-xs text-muted-foreground mb-1">Registered State</p>
          <p className="text-sm font-semibold text-foreground">Western Australia</p>
        </div>
        <div className="bg-secondary rounded-xl p-3.5">
          <p className="text-xs text-muted-foreground mb-1">Registered Since</p>
          <p className="text-sm font-semibold text-foreground">14 November 2025</p>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-[11px] text-muted-foreground mt-4 leading-relaxed">
        Certificate issued by the Australian Securities &amp; Investments Commission (ASIC) · Corporations Act 2001
      </p>

    </div>
  )
}
