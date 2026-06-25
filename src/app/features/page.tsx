import PageLayout from '@/components/ui/page-layout';
import {
  Bitcoin,
  Vote,
  Eye,
  Store,
  Globe,
  Plug,
  Check,
  type LucideIcon,
} from 'lucide-react';

export default function FeaturesPage() {
  return (
    <PageLayout
      title="Platform Features"
      description="Complete feature breakdown of Solon's Bitcoin-native governance platform"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          title="Bitcoin Treasury"
          description="Multi-signature Bitcoin wallet with complete transaction transparency"
          icon={Bitcoin}
          features={['Multi-sig security', 'Real-time balances', 'Transaction history', 'Budget tracking']}
        />
        <FeatureCard
          title="Cryptographic Voting"
          description="Tamper-proof voting system with cryptographic signatures"
          icon={Vote}
          features={['Digital signatures', 'Vote verification', 'Anonymous voting', 'Audit trail']}
        />
        <FeatureCard
          title="Transparency Engine"
          description="Complete organizational transparency with blockchain verification"
          icon={Eye}
          features={['Public records', 'Decision tracking', 'Financial reports', 'Audit logs']}
        />
        <FeatureCard
          title="Service Marketplace"
          description="Transparent procurement with vendor management"
          icon={Store}
          features={['Vendor directory', 'Procurement process', 'Contract tracking', 'Payment automation']}
        />
        <FeatureCard
          title="Global Operations"
          description="Bitcoin-native operations without traditional banking"
          icon={Globe}
          features={['No bank accounts', 'Global payments', 'Currency agnostic', 'Instant settlement']}
        />
        <FeatureCard
          title="API Integration"
          description="Complete API suite for custom integrations"
          icon={Plug}
          features={['REST APIs', 'Webhooks', 'SDKs', 'Documentation']}
        />
      </div>
    </PageLayout>
  );
}

function FeatureCard({ title, description, icon: Icon, features }: {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-card border border-slate-200 hover:shadow-lg transition-shadow">
      <span className="flex h-12 w-12 items-center justify-center rounded-md bg-navy mb-4">
        <Icon className="h-6 w-6 text-solon-bitcoin" />
      </span>
      <h3 className="text-xl font-bold font-display text-navy mb-3">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-sm text-slate-700">
            <Check className="h-4 w-4 text-solon-orange mr-2.5 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
