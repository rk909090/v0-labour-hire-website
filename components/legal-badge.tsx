import { ShieldCheck } from "lucide-react"

export function LegalBadge() {
  return (
    <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5">
      {/* Header row */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 bg-accent/15 rounded-xl flex items-center justify-center shrink-0">
          <ShieldCheck className="h-5 w-5 text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground">Fully Licensed &amp; Registered</p>
          <p className="text-xs text-muted-foreground">Australian Company — ASIC Registered</p>
        </div>
        <div className="shrink-0 bg-accent/10 border border-accent/20 rounded-lg px-3 py-1">
          <p className="text-xs font-semibold text-accent">ACN 692 851 700</p>
        </div>
      </div>

      {/* Details row */}
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-background rounded-lg p-2.5 text-center">
          <p className="text-[10px] text-muted-foreground mb-0.5">Legal Name</p>
          <p className="text-[11px] font-semibold text-foreground leading-tight">AUSINDO<br />PTY LTD</p>
        </div>
        <div className="bg-background rounded-lg p-2.5 text-center">
          <p className="text-[10px] text-muted-foreground mb-0.5">Type</p>
          <p className="text-[11px] font-semibold text-foreground leading-tight">Proprietary<br />Limited</p>
        </div>
        <div className="bg-background rounded-lg p-2.5 text-center">
          <p className="text-[10px] text-muted-foreground mb-0.5">State</p>
          <p className="text-[11px] font-semibold text-foreground leading-tight">Western<br />Australia</p>
        </div>
        <div className="bg-background rounded-lg p-2.5 text-center">
          <p className="text-[10px] text-muted-foreground mb-0.5">Registered</p>
          <p className="text-[11px] font-semibold text-foreground leading-tight">14 Nov<br />2025</p>
        </div>
      </div>

      <p className="text-[10px] text-muted-foreground mt-3 leading-relaxed">
        Certificate issued by the Australian Securities &amp; Investments Commission (ASIC) · Corporations Act 2001
      </p>
    </div>
  )
}
