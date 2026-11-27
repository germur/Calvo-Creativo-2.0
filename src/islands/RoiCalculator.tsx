import { useState } from 'react';

const currency = (n: number) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
const percent = (n: number) => n.toLocaleString('es-CO', {maximumFractionDigits: 1}) + '%';

export default function RoiCalculator() {
    const [traffic, setTraffic] = useState(5000);
    const [growth, setGrowth] = useState(50);
    const [conversion, setConversion] = useState(1.5);
    const [value, setValue] = useState(250);
    const [margin, setMargin] = useState(40);
    const [cost, setCost] = useState(1000);

    const baseline = traffic * conversion / 100 * value;
    const additional = baseline * growth / 100;
    const contribution = additional * margin / 100;
    const net = contribution - cost;
    const roi = cost > 0 ? net / cost * 100 : null;
    const breakEven = conversion > 0 && value > 0 && margin > 0 ? Math.ceil(cost / (conversion / 100 * value * margin / 100)) : null;
    const inputs = [
        {id:'traffic', label:'Sesiones orgánicas mensuales actuales', amount:traffic, set:setTraffic, max:100000000, step:1},
        {id:'growth', label:'Crecimiento de tráfico supuesto (%)', amount:growth, set:setGrowth, max:10000, step:0.1},
        {id:'conversion', label:'Tasa de conversión de sesión a cliente (%)', amount:conversion, set:setConversion, max:100, step:0.1},
        {id:'value', label:'Ingreso medio por cliente (USD)', amount:value, set:setValue, max:100000000, step:0.01},
        {id:'margin', label:'Margen de contribución antes de costes SEO (%)', amount:margin, set:setMargin, max:100, step:0.1},
        {id:'cost', label:'Inversión mensual en SEO (USD)', amount:cost, set:setCost, max:100000000, step:0.01}
    ];
    return (
        <div className="grid lg:grid-cols-12 gap-8 font-body">
            <section className="lg:col-span-5 space-y-6 bg-[#1a1a1a] p-6 md:p-8 rounded-2xl border border-white/10">
                <h2 className="text-2xl font-bold text-white">Tus datos y supuestos</h2>
                <p className="text-sm text-gray-300">Valores de ejemplo editables. Usa ingresos, costes y margen del mismo periodo. Todos los importes están en USD.</p>
                {inputs.map(input => <div key={input.id} className="space-y-2">
                    <label htmlFor={'roi-'+input.id} className="block text-sm font-semibold text-gray-200">{input.label}</label>
                    <input id={'roi-'+input.id} type="number" min={0} max={input.max} step={input.step} value={input.amount}
                        onChange={e=>input.set(Math.max(0,Math.min(input.max,Number(e.target.value)||0)))}
                        className="w-full p-3 rounded border border-gray-500 bg-[#120810] text-white font-mono focus:outline-acid-green"/>
                </div>)}
                <p className="text-xs text-gray-300">Si trabajas con leads, multiplica la tasa sesión a lead por tu tasa de cierre. Usa esa conversión a cliente, no la tasa de formularios por sí sola.</p>
            </section>
            <section className="lg:col-span-7 space-y-6" aria-live="polite">
                <div className="border border-acid-green bg-[#1a1a1a] p-6 rounded-xl">
                    <h2 className="text-sm text-gray-300 uppercase">ROI mensual estimado</h2>
                    <p className={'text-4xl md:text-5xl font-bold font-mono break-words '+(roi===null?'text-white':roi>=0?'text-acid-green':'text-red-400')}>{roi===null?'No calculable':percent(roi)}</p>
                    <p className="mt-2 text-sm text-gray-300">{roi===null?'Introduce una inversión positiva para calcular el porcentaje.':'Sobre la contribución incremental después de descontar la inversión SEO.'}</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        ['Ingresos orgánicos actuales',currency(baseline)],
                        ['Ingresos orgánicos proyectados',currency(baseline+additional)],
                        ['Ingresos adicionales',currency(additional)],
                        ['Contribución adicional',currency(contribution)],
                        ['Inversión SEO',currency(cost)],
                        ['Retorno neto incremental',currency(net)]
                    ].map(([label,amount])=><div key={label} className="border border-white/15 rounded-xl p-4 bg-[#1a1a1a]"><h3 className="text-sm text-gray-300">{label} / mes</h3><p className="text-2xl font-bold font-mono text-white break-words mt-2">{amount}</p></div>)}
                </div>
                <div className="p-5 border border-white/15 rounded-xl bg-[#1a1a1a]">
                    <h3 className="font-bold text-white">Punto de equilibrio</h3>
                    <p className="text-2xl text-acid-green font-mono mt-2">{breakEven===null?'No calculable':breakEven.toLocaleString('es-CO')+' sesiones adicionales / mes'}</p>
                    <p className="mt-2 text-sm text-gray-300">Tráfico adicional necesario para cubrir la inversión con los supuestos actuales.</p>
                </div>
                <div className="p-5 border border-white/15 rounded-xl bg-[#1a1a1a]">
                    <h3 className="font-bold text-white">Escenario anualizado, no pronóstico del primer año</h3>
                    <p className="mt-2 text-gray-200">Retorno neto: <strong>{currency(net*12)}</strong> · Inversión: {currency(cost*12)}.</p>
                    <p className="mt-2 text-sm text-gray-300">Multiplica el escenario mensual estable por 12. No modela el tiempo que tarda el SEO en alcanzar ese nivel, estacionalidad ni cambios de conversión.</p>
                </div>
            </section>
        </div>
    );
}
