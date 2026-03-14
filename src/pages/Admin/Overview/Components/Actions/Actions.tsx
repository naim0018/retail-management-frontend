import { useState } from "react";
import { actions } from "./Action";
import AmountInput from "./AmountInput";
import FlexiloadInput from "./FlexiloadInput";

export default function QuickActions() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  return (
    <div className="w-full space-y-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {actions.map((item, index) => {
          const isSelected = selectedAction === item.name;
          return (
            <div
              key={index}
              onClick={() => setSelectedAction(item.name)}
              className={`flex flex-col items-center justify-center gap-6 p-8 rounded-lg cursor-pointer transition-all duration-300 w-full ${
                item.color
              } ${
                isSelected 
                ? "ring-2 ring-blue-500 ring-offset-2 scale-[1.02] shadow-sm" 
                : "hover:shadow-sm hover:-translate-y-1"
              }`}
            >
              <div className="flex items-center justify-center">
                {typeof item.icon === "string" ? (
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="object-contain h-12 w-12"
                  />
                ) : (
                  <item.icon className="h-10 w-10 opacity-90" />
                )}
              </div>

              <span className={`text-center font-bold tracking-wide ${item.text}`}>
                {item.name}
              </span>
            </div>
          );
        })}
      </div>

      {selectedAction && (
        <div className="pt-6 border-t border-gray-100">
          {selectedAction === "Flexiload" ? (
            <FlexiloadInput 
              title={selectedAction} 
              onClose={() => setSelectedAction(null)} 
            />
          ) : (
            <AmountInput
              title={selectedAction}
              onClose={() => setSelectedAction(null)}
            />
          )}
        </div>
      )}
    </div>
  );
}
