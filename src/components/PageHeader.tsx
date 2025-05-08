import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  description, 
  icon,
  color = 'bg-blue-100 text-blue-600'
}) => {
  return (
    <div className="max-w-7xl mx-auto mb-12">
      <div className="flex items-center gap-6 mb-6">
        {icon && (
          <div className={`flex-shrink-0 h-16 w-16 ${color} rounded-lg flex items-center justify-center`}>
            <div className="w-8 h-8">
              {icon}
            </div>
          </div>
        )}
        <h1 className="text-4xl font-bold text-gray-900">
          {title}
        </h1>
      </div>
      <p className="text-xl text-gray-600 max-w-3xl">
        {description}
      </p>
    </div>
  );
};

export default PageHeader; 