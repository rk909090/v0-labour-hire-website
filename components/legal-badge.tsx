import { ShieldCheck, BadgeCheck, Building2 } from "lucide-react"

export function LegalBadge() {
  return (
    <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-accent/15 rounded-xl flex items-center justify-center shrink-0">
          <ShieldCheck className="h-5 w-5 text-accent" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Fully Licensed &amp; Registered</p>
          <p className="text-xs text-muted-foreground">Australian Company — ASIC Registered</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <Building2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-medium text-foreground uppercase tracking-wide">Registered Legal Name</p>
            <p className="text-sm text-foreground font-semibold">AUSINDO PTY LTD</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <BadgeCheck className="h-4 w-4 text-accent mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-medium text-foreground uppercase tracking-wide">ACN</p>
            <p className="text-sm text-foreground font-semibold">692 851 700</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="bg-background rounded-lg p-3 text-center">
            <p className="text-xs text-muted-foreground mb-0.5">Company Type</p>
            <p className="text-xs font-semibold text-foreground">Proprietary Limited</p>
          </div>
          <div className="bg-background rounded-lg p-3 text-center">
            <p className="text-xs text-muted-foreground mb-0.5">Registered State</p>
            <p className="text-xs font-semibold text-foreground">Western Australia</p>
          </div>
          <div className="bg-background rounded-lg p-3 text-center">
            <p className="text-xs text-muted-foreground mb-0.5">Registered Since</p>
            <p className="text-xs font-semibold text-foreground">14 Nov 2025</p>
          </div>
          <div className="bg-background rounded-lg p-3 text-center">
            <p className="text-xs text-muted-foreground mb-0.5">Governing Act</p>
            <p className="text-xs font-semibold text-foreground">Corporations Act 2001</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground pt-1 leading-relaxed">
          Certificate issued by the Australian Securities &amp; Investments Commission (ASIC).
        </p>
      </div>
    </div>
  )
}
