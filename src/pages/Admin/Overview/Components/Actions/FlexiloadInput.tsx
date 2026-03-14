import { useState } from "react";
import { X } from "lucide-react";

interface FlexiloadInputProps {
  title: string;
  onClose: () => void;
}

const operators = [
  {
    name: "Grameenphone",
    color: "text-blue-600 bg-blue-50 border-blue-200 ring-blue-500",
  },
  { name: "Robi", color: "text-red-600 bg-red-50 border-red-200 ring-red-500" },
  {
    name: "Airtel",
    color: "text-rose-600 bg-rose-50 border-rose-200 ring-rose-500",
  },
  {
    name: "Banglalink",
    color: "text-orange-600 bg-orange-50 border-orange-200 ring-orange-500",
  },
  {
    name: "Teletalk",
    color: "text-green-600 bg-green-50 border-green-200 ring-green-500",
  },
];

export default function FlexiloadInput({
  title,
  onClose,
}: FlexiloadInputProps) {
  const [selectedOperator, setSelectedOperator] = useState<string | null>(null);
  const [amount, setAmount] = useState("");

  const quickAmounts = ["20", "30", "50", "100"];

  return (
    <div className="w-full animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="bg-white p-8 rounded-md border border-slate-200 shadow-sm relative lg:w-3/4">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-all"
        >
          <X className="size-5" />
        </button>

        <div className="space-y-6">
          <div className="border-b border-slate-100 pb-4 mb-2">
            <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">
              {title} Service
            </h3>
          </div>

          <div>
            <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-3">
              Network Operator
            </label>
            <div className="flex flex-wrap gap-2">
              {operators.map((op) => {
                const isSelected = selectedOperator === op.name;
                return (
                  <button
                    key={op.name}
                    onClick={() => setSelectedOperator(op.name)}
                    className={`px-4 py-2 rounded border font-semibold text-sm transition-all cursor-pointer ${
                      isSelected
                        ? `${op.color} ring-1 ring-offset-1`
                        : "text-slate-600 bg-white border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {op.name}
                  </button>
                );
              })}
            </div>
          </div>

          {selectedOperator && (
            <div className="space-y-6 pt-4 animate-in fade-in slide-in-from-top-4">
              <div>
                <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase mb-3">
                  Recharge Amount
                </label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {quickAmounts.map((val) => (
                    <button
                      key={val}
                      onClick={() => setAmount(val)}
                      className={`px-4 py-2 rounded border font-semibold text-sm transition-all cursor-pointer ${
                        amount === val
                          ? "bg-blue-600 text-white border-blue-600"
                          : "text-slate-700 bg-white border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      ৳ {val}
                    </button>
                  ))}
                </div>

                <div className="flex items-center bg-slate-50 border border-slate-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 rounded p-4 transition-all mt-4">
                  <span className="text-xl font-bold text-slate-400 mr-3">
                    ৳
                  </span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Custom amount"
                    className="w-full text-2xl font-bold text-slate-800 placeholder:text-slate-300 focus:outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
              </div>

              <button className="w-full mt-6 py-3.5 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition-all active:scale-[0.99] shadow-sm">
                Confirm Transaction
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
