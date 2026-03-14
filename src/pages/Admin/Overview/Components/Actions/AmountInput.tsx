import { useState } from "react";
import { X } from "lucide-react";

interface AmountInputProps {
  title: string;
  onClose: () => void;
}

export default function AmountInput({ title, onClose }: AmountInputProps) {
  const [amount, setAmount] = useState("");

  const quickAmounts =
    title === "Photocopy" || title === "Printing"
      ? ["5", "10", "15", "20", "30", "50", "100"]
      : title === "Customer Service"
      ? ["50", "100", "150", "200"]
      : ["+500", "+1000", "+5000", "MAX"];

  return (
    <div className="w-full animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="bg-white p-8 rounded-md border border-slate-200 shadow-sm relative w-full lg:w-1/2">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-all cursor-pointer"
        >
          <X className="size-5" />
        </button>
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-2 pb-4 border-b border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">{title} Checkout</h3>
          </div>
          
          <label className="block text-xs font-bold tracking-widest text-slate-500 uppercase">
            Payment Amount
          </label>

          <div className="relative group">
            <div className="flex items-center bg-slate-50 border border-slate-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 rounded p-4 transition-all">
              <span className="text-2xl font-bold text-slate-400 mr-3">৳</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full text-3xl font-bold text-slate-800 placeholder:text-slate-300 focus:outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {quickAmounts.map((item) => (
              <button
                key={item}
                className="px-4 py-2 rounded bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer active:scale-95"
                onClick={() => {
                  if (item === "MAX") {
                    setAmount("50000"); // Example max
                  } else if (item.startsWith("+")) {
                    const val = parseInt(item.replace("+", ""));
                    setAmount((prev) => (parseInt(prev || "0") + val).toString());
                  } else {
                    setAmount(item);
                  }
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <button className="w-full mt-6 py-3.5 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition-all active:scale-[0.99] shadow-sm">
            Confirm Transaction
          </button>
        </div>
      </div>
    </div>
  );
}
