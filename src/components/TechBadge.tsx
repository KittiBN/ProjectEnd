interface TechBadgeProps {
  name: string;
  icon?: string;
  variant?: 'react' | 'next' | 'material' | 'typescript' | 'javascript' | 'figma' | 'default';
}

export default function TechBadge({ name, variant = 'default' }: TechBadgeProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'react':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'next':
        return 'bg-gray-50 text-gray-700 border-gray-200';
      case 'material':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'typescript':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'javascript':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'figma':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm border ${getVariantStyles()}`}>
      {name}
    </span>
  );
}