import { useState, useEffect } from 'react';
import ExperimentLayout from '@/components/ExperimentLayout';

export default function RoiCalculator() {
    // State Inputs
    const [currentTraffic, setCurrentTraffic] = useState(5000);
    const [projectedGrowth, setProjectedGrowth] = useState(50); // %
    const [conversionRate, setConversionRate] = useState(1.5); // %
    const [customerValue, setCustomerValue] = useState(250); // $ (LTV or AOV)
    const [closeRate, setCloseRate] = useState(20); // % (For leads to sale, if applicable - simplified model: user -> conv -> money)

    // State Outputs
    const [currentRevenue, setCurrentRevenue] = useState(0);
    const [projectedRevenue, setProjectedRevenue] = useState(0);
    const [uplift, setUplift] = useState(0);

    // Calculation Effect
    useEffect(() => {
        // Model: Traffic * (Conv Rate / 100) * Customer Value
        // Note: For leads businesses, often it's Traffic * Lead Conv * Sales Close * Deal Value. 
        // We will keep it simple: "Conversion" = Final Sale or Lead Value. 

        const cRev = currentTraffic * (conversionRate / 100) * customerValue;

        const projectedTraf = currentTraffic * (1 + (projectedGrowth / 100));
        const pRev = projectedTraf * (conversionRate / 100) * customerValue;

        setCurrentRevenue(Math.round(cRev));
        setProjectedRevenue(Math.round(pRev));
        setUplift(Math.round(pRev - cRev));
    }, [currentTraffic, projectedGrowth, conversionRate, customerValue]);

    return (
        <ExperimentLayout
            title="Calculadora ROI SEO | The Playground"
            description="Estima el retorno de inversión de tu estrategia SEO."
            keyword="SEO ROI"
            trackNumber="04-01"
            trackTitle="ROI Calculator"
            themeColor="acid-green"
            mode="dark"
            width="wide"
        >
            <div className="grid lg:grid-cols-12 gap-12">

                {/* --- LEFT: CONTROL PANEL --- */}
                <div className="lg:col-span-5 space-y-8 bg-[#1a1a1a] p-8 rounded-2xl border border-white/10 h-fit sticky top-24">
                    <div className="border-b border-white/10 pb-4 mb-4">
                        <h1 className="text-2xl font-bold text-white uppercase flex items-center gap-2">
                            <span className="text-3xl">🧮</span> Parámetros
                        </h1>
                        <p className="text-xs text-gray-400 mt-1 font-mono">ADJUST_VARIABLES.EXE</p>
                    </div>

                    {/* Input: Current Traffic */}
                    <div className="space-y-4">
                        <label className="flex justify-between text-sm font-bold text-gray-300">
                            <span>Tráfico Mensual Actual</span>
                            <span className="text-acid-green font-mono">{currentTraffic.toLocaleString()}</span>
                        </label>
                        <input
                            type="range" min="100" max="100000" step="100"
                            value={currentTraffic}
                            onChange={(e) => setCurrentTraffic(Number(e.target.value))}
                            className="w-full accent-acid-green bg-gray-700 h-2 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    {/* Input: Conversion Rate */}
                    <div className="space-y-4">
                        <label className="flex justify-between text-sm font-bold text-gray-300">
                            <span>Tasa de Conversión (%)</span>
                            <span className="text-acid-green font-mono">{conversionRate}%</span>
                        </label>
                        <input
                            type="range" min="0.1" max="10" step="0.1"
                            value={conversionRate}
                            onChange={(e) => setConversionRate(Number(e.target.value))}
                            className="w-full accent-acid-green bg-gray-700 h-2 rounded-lg appearance-none cursor-pointer"
                        />
                        <p className="text-[10px] text-gray-500">Promedio e-commerce: 1% - 3%. Leads B2B: 2% - 5%.</p>
                    </div>

                    {/* Input: Customer Value */}
                    <div className="space-y-4">
                        <label className="flex justify-between text-sm font-bold text-gray-300">
                            <span>Valor por Cliente (LTV/AOV)</span>
                            <span className="text-acid-green font-mono">${customerValue}</span>
                        </label>
                        <input
                            type="range" min="10" max="5000" step="10"
                            value={customerValue}
                            onChange={(e) => setCustomerValue(Number(e.target.value))}
                            className="w-full accent-acid-green bg-gray-700 h-2 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    {/* Input: Projected Growth */}
                    <div className="space-y-4 pt-8 border-t border-dashed border-white/10">
                        <label className="flex justify-between text-sm font-bold text-acid-green">
                            <span>Crecimiento SEO Estimado (%)</span>
                            <span className="font-mono">+{projectedGrowth}%</span>
                        </label>
                        <input
                            type="range" min="5" max="500" step="5"
                            value={projectedGrowth}
                            onChange={(e) => setProjectedGrowth(Number(e.target.value))}
                            className="w-full accent-acid-green bg-gray-700 h-2 rounded-lg appearance-none cursor-pointer"
                        />
                        <p className="text-[10px] text-gray-500">Un buen SEO técnico + contenidos suele traer +50%-200% anual.</p>
                    </div>

                </div>

                {/* --- RIGHT: VISUALIZATION --- */}
                <div className="lg:col-span-7 space-y-12">

                    {/* Header Results */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#120810] border border-white/10 p-6 rounded-xl">
                            <div className="text-gray-500 text-xs font-mono uppercase mb-2">Ingresos Actuales / mes</div>
                            <div className="text-3xl font-bold text-white font-mono">
                                ${currentRevenue.toLocaleString()}
                            </div>
                        </div>
                        <div className="bg-[#120810] border-2 border-acid-green p-6 rounded-xl shadow-[0_0_20px_rgba(74,222,128,0.1)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-acid-green text-black px-2 py-1 text-[10px] font-bold uppercase">Meta</div>
                            <div className="text-acid-green text-xs font-mono uppercase mb-2">Proyección SEO / mes</div>
                            <div className="text-3xl font-bold text-white font-mono">
                                ${projectedRevenue.toLocaleString()}
                            </div>
                            <div className="text-sm font-bold text-acid-green mt-1">
                                (+${uplift.toLocaleString()})
                            </div>
                        </div>
                    </div>

                    {/* Chart Visualization */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-white uppercase text-lg border-l-4 border-acid-green pl-4">Impacto Anualizado</h3>

                        <div className="relative pt-8">
                            {/* Bar Chart Container */}
                            <div className="flex flex-col gap-6">

                                {/* Current Scenario */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-gray-400 font-mono">
                                        <span>ESCENARIO ACTUAL (12 Meses)</span>
                                        <span>${(currentRevenue * 12).toLocaleString()}</span>
                                    </div>
                                    <div className="h-12 w-full bg-[#1a1a1a] rounded flex items-center px-4 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 h-full bg-gray-700 w-full opacity-20 stripes"></div>
                                        <span className="relative z-10 font-bold text-white/50 text-sm">Sin SEO</span>
                                    </div>
                                </div>

                                {/* SEO Scenario */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-acid-green font-mono font-bold">
                                        <span>ESCENARIO POTENCIADO (12 Meses)</span>
                                        <span>${(projectedRevenue * 12).toLocaleString()}</span>
                                    </div>
                                    <div className="relative">
                                        <div className="h-14 w-full bg-gradient-to-r from-gray-700 to-acid-green rounded flex items-center px-4 relative overflow-hidden shadow-lg transition-all duration-500"
                                            style={{ width: '100%' }} // Usually dynamic relative to max, but here assuming max potential
                                        >
                                            {/* Dynamic Width implementation would enable comparison if we scaled properly relative to a Max value. 
                                                Since we don't know the Max, we can just show the bar as "full potential" vs "current".
                                                Let's approximate: Projected is 100% width. Current is Current/Projected % width.
                                            */}
                                        </div>
                                        <div className="absolute top-0 left-0 h-14 bg-gray-600 rounded flex items-center px-4 border-r-2 border-white/20 transition-all duration-300"
                                            style={{ width: `${(currentRevenue / projectedRevenue) * 100}%` }}>
                                            <span className="text-white text-sm font-bold whitespace-nowrap">Base Actual</span>
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-end px-4 pointer-events-none">
                                            <span className="text-black font-black text-lg tracking-wider">+${(uplift * 12).toLocaleString()} EXTRA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg flex items-start gap-4">
                            <span className="text-2xl">⚠️</span>
                            <div>
                                <h4 className="text-red-400 font-bold text-sm uppercase">Costo de Inacción</h4>
                                <p className="text-gray-400 text-xs mt-1">
                                    Cada mes que no ejecutas esta estrategia, estás dejando de ganar <strong>${uplift.toLocaleString()}</strong>. En un año, eso son <strong>${(uplift * 12).toLocaleString()}</strong> perdidos.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Methodology Note */}
                    <div className="text-[10px] text-gray-600 font-mono pt-12 border-t border-gray-800">
                        METODOLOGÍA: Proyección lineal basada en incremento de tráfico orgánico no de marca. No incluye efectos compuestos de mejora en conversión ni retención.
                        <br /> MODELO: `Traffic * (Conversion / 100) * CustomerValue`.
                    </div>

                </div>
            </div>
        </ExperimentLayout>
    );
}
